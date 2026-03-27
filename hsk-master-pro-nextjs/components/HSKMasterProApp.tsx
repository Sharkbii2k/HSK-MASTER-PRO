'use client';

import Image from 'next/image';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { HSK_LEVELS, readingLessons, speakingLessons, strokeBasics, writingLessons } from '@/lib/content';
import { AppScreen, HSKLevel, HSKLevelData, HSKSummaryData, HSKWord, ReadingLesson, SpeakingLesson, WritingCharLesson } from '@/lib/types';

const LEVEL_NUMBER: Record<HSKLevel, number> = {
  HSK1: 1,
  HSK2: 2,
  HSK3: 3,
  HSK4: 4,
  HSK5: 5,
  HSK6: 6
};

const PAGE_SIZES = [25, 50, 100] as const;

type VocabStatus = {
  text: string;
  tone: 'yellow' | 'green' | 'red' | 'soft';
};

type VoiceWithLang = SpeechSynthesisVoice & { lang: string };

function normalizeText(value: string): string {
  return value.replace(/\s+/g, '').trim();
}

function getVocabStatus(entry: HSKWord, answer: string, composing: boolean): VocabStatus {
  const cleaned = normalizeText(answer);
  if (!cleaned) {
    return { text: 'Đoán xem', tone: 'yellow' };
  }
  if (composing) {
    return { text: 'Đang gõ...', tone: 'soft' };
  }
  const isCorrect = entry.acceptedInputs.some((accepted) => normalizeText(accepted) === cleaned);
  return isCorrect ? { text: 'Đúng', tone: 'green' } : { text: 'Sai rồi', tone: 'red' };
}

async function loadJson<T>(path: string): Promise<T> {
  const response = await fetch(path, { cache: 'force-cache' });
  if (!response.ok) {
    throw new Error(`Cannot load ${path}`);
  }
  return response.json() as Promise<T>;
}

function preferChineseVoice(voices: SpeechSynthesisVoice[]): VoiceWithLang | null {
  const preferred = voices.find((voice) => /zh-CN/i.test(voice.lang) && /(Siri|Tingting|Xiaoxiao|Chinese)/i.test(voice.name));
  if (preferred) return preferred as VoiceWithLang;
  const anyMandarin = voices.find((voice) => /zh-(CN|TW|HK)/i.test(voice.lang));
  if (anyMandarin) return anyMandarin as VoiceWithLang;
  return null;
}

const VocabRow = memo(function VocabRow({
  entry,
  answer,
  composing,
  showHanzi,
  showPinyin,
  onAnswerChange,
  onCompositionChange
}: {
  entry: HSKWord;
  answer: string;
  composing: boolean;
  showHanzi: boolean;
  showPinyin: boolean;
  onAnswerChange: (value: string) => void;
  onCompositionChange: (value: boolean) => void;
}) {
  const status = getVocabStatus(entry, answer, composing);
  return (
    <tr>
      <td className="col-stt">{entry.order}</td>
      <td className="col-hanzi">{showHanzi ? entry.hanzi : '••••'}</td>
      <td className="col-pinyin muted">{showPinyin ? entry.pinyin : '••••••'}</td>
      <td className="col-meaning">{entry.meaningVi}</td>
      <td className="col-input">
        <input
          className={`vocab-input ${status.tone}`}
          value={answer}
          inputMode="text"
          placeholder="Nhập Hán tự"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          onChange={(event) => onAnswerChange(event.target.value)}
          onCompositionStart={() => onCompositionChange(true)}
          onCompositionEnd={(event) => {
            onCompositionChange(false);
            onAnswerChange(event.currentTarget.value);
          }}
        />
      </td>
      <td className="col-result">
        <span className={`status-chip ${status.tone}`}>{status.text}</span>
      </td>
    </tr>
  );
});

export default function HSKMasterProApp() {
  const [introVisible, setIntroVisible] = useState(true);
  const [introProgress, setIntroProgress] = useState(0);
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('home');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [summary, setSummary] = useState<HSKSummaryData | null>(null);

  const [vocabLevel, setVocabLevel] = useState<HSKLevel>('HSK1');
  const [vocabData, setVocabData] = useState<HSKLevelData | null>(null);
  const [vocabLoading, setVocabLoading] = useState(false);
  const [vocabSearch, setVocabSearch] = useState('');
  const [vocabPage, setVocabPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(50);
  const [showHanzi, setShowHanzi] = useState(true);
  const [showPinyin, setShowPinyin] = useState(true);
  const [vocabAnswers, setVocabAnswers] = useState<Record<string, string>>({});
  const [vocabComposing, setVocabComposing] = useState<Record<string, boolean>>({});

  const [speakingLevel, setSpeakingLevel] = useState<HSKLevel>('HSK1');
  const [speakingIndex, setSpeakingIndex] = useState(0);
  const [shadowCountdown, setShadowCountdown] = useState(3);
  const [shadowReveal, setShadowReveal] = useState(false);
  const [speechReady, setSpeechReady] = useState(false);

  const [readingLevel, setReadingLevel] = useState<HSKLevel>('HSK1');
  const [readingLessonId, setReadingLessonId] = useState<string>('');

  const [writingLevel, setWritingLevel] = useState<HSKLevel>('HSK1');
  const [writingLessonId, setWritingLessonId] = useState<string>('');

  const [viewedReadingIds, setViewedReadingIds] = useState<string[]>([]);
  const [viewedWritingIds, setViewedWritingIds] = useState<string[]>([]);
  const [spokenLessonCount, setSpokenLessonCount] = useState(0);

  const countdownTimer = useRef<number | null>(null);

  useEffect(() => {
    let progress = 0;
    const timer = window.setInterval(() => {
      progress = Math.min(100, progress + 4);
      setIntroProgress(progress);
      if (progress >= 100) {
        window.clearInterval(timer);
        window.setTimeout(() => setIntroVisible(false), 260);
      }
    }, 110);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    loadJson<HSKSummaryData>('/data/hsk/summary.json')
      .then(setSummary)
      .catch(() => setSummary(null));
  }, []);

  useEffect(() => {
    setVocabLoading(true);
    loadJson<HSKLevelData>(`/data/hsk/hsk${LEVEL_NUMBER[vocabLevel]}.json`)
      .then((data) => {
        setVocabData(data);
        setVocabPage(1);
      })
      .finally(() => setVocabLoading(false));
  }, [vocabLevel]);

  const speakingItems = useMemo(
    () => speakingLessons.filter((lesson) => lesson.level === speakingLevel),
    [speakingLevel]
  );
  const currentSpeaking: SpeakingLesson | null = speakingItems[speakingIndex] ?? null;

  const readingItems = useMemo(
    () => readingLessons.filter((lesson) => lesson.level === readingLevel),
    [readingLevel]
  );
  const currentReading: ReadingLesson | null = readingItems.find((lesson) => lesson.id === readingLessonId) ?? readingItems[0] ?? null;

  const writingItems = useMemo(
    () => writingLessons.filter((lesson) => lesson.level === writingLevel),
    [writingLevel]
  );
  const currentWriting: WritingCharLesson | null = writingItems.find((lesson) => lesson.id === writingLessonId) ?? writingItems[0] ?? null;

  useEffect(() => {
    if (!readingLessonId && readingItems[0]) {
      setReadingLessonId(readingItems[0].id);
    }
  }, [readingItems, readingLessonId]);

  useEffect(() => {
    if (!writingLessonId && writingItems[0]) {
      setWritingLessonId(writingItems[0].id);
    }
  }, [writingItems, writingLessonId]);

  useEffect(() => {
    const onVoices = () => setSpeechReady(window.speechSynthesis.getVoices().length > 0);
    onVoices();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = onVoices;
    }
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = null;
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speakChinese = useCallback((text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !text) {
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.92;
    const voice = preferChineseVoice(window.speechSynthesis.getVoices());
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    }
    window.speechSynthesis.speak(utterance);
  }, []);

  useEffect(() => {
    if (currentScreen !== 'speaking' || !currentSpeaking) {
      return;
    }
    if (countdownTimer.current) {
      window.clearInterval(countdownTimer.current);
    }
    setShadowReveal(false);
    setShadowCountdown(3);
    let remaining = 3;
    countdownTimer.current = window.setInterval(() => {
      remaining -= 1;
      if (remaining > 0) {
        setShadowCountdown(remaining);
      } else {
        if (countdownTimer.current) {
          window.clearInterval(countdownTimer.current);
          countdownTimer.current = null;
        }
        setShadowCountdown(0);
        setShadowReveal(true);
        setSpokenLessonCount((value) => value + 1);
        speakChinese(currentSpeaking.hanzi);
      }
    }, 1000);
    return () => {
      if (countdownTimer.current) {
        window.clearInterval(countdownTimer.current);
        countdownTimer.current = null;
      }
    };
  }, [currentScreen, currentSpeaking, speakChinese]);

  useEffect(() => {
    if (currentReading?.id) {
      setViewedReadingIds((value) => (value.includes(currentReading.id) ? value : [...value, currentReading.id]));
    }
  }, [currentReading?.id]);

  useEffect(() => {
    if (currentWriting?.id) {
      setViewedWritingIds((value) => (value.includes(currentWriting.id) ? value : [...value, currentWriting.id]));
    }
  }, [currentWriting?.id]);

  const openScreen = (screen: AppScreen) => {
    setCurrentScreen(screen);
    setDrawerOpen(false);
  };

  const filteredWords = useMemo(() => {
    if (!vocabData) return [];
    const query = vocabSearch.trim().toLowerCase();
    if (!query) return vocabData.words;
    return vocabData.words.filter((entry) => {
      const haystack = [entry.hanzi, entry.pinyin, entry.meaningVi, entry.meaningEn, entry.lookupTerms.join(' ')].join(' ').toLowerCase();
      return haystack.includes(query);
    });
  }, [vocabData, vocabSearch]);

  const totalPages = Math.max(1, Math.ceil(filteredWords.length / pageSize));
  const visibleWords = useMemo(() => {
    const start = (vocabPage - 1) * pageSize;
    return filteredWords.slice(start, start + pageSize);
  }, [filteredWords, pageSize, vocabPage]);

  useEffect(() => {
    if (vocabPage > totalPages) {
      setVocabPage(totalPages);
    }
  }, [totalPages, vocabPage]);

  const setAnswerForRow = (key: string, value: string) => {
    setVocabAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const setComposingForRow = (key: string, value: boolean) => {
    setVocabComposing((prev) => ({ ...prev, [key]: value }));
  };

  const typedWordCount = useMemo(
    () => Object.values(vocabAnswers).filter((value) => normalizeText(value)).length,
    [vocabAnswers]
  );

  const moduleCounts = summary?.levels ?? HSK_LEVELS.map((level) => ({ level, count: 0 }));

  return (
    <div className="page-shell">
      {introVisible && (
        <div className="intro-overlay">
          <div className="intro-panel">
            <Image src="/assets/mascot-head.png" alt="Mascot" width={168} height={168} className="intro-mascot" priority />
            <h1>HSK Master Pro</h1>
            <p>Gwang Ji 광 지 Learning Chinese</p>
            <div className="intro-progress-track">
              <div className="intro-progress-bar" style={{ width: `${introProgress}%` }} />
            </div>
            <div className="intro-progress-text">{introProgress}%</div>
          </div>
        </div>
      )}

      <div className={`drawer-backdrop ${drawerOpen ? 'show' : ''}`} onClick={() => setDrawerOpen(false)} />
      <aside className={`side-drawer ${drawerOpen ? 'show' : ''}`}>
        <div className="drawer-top">
          <Image src="/assets/app-icon.png" alt="Icon app" width={64} height={64} className="drawer-icon" />
          <div>
            <div className="drawer-title">HSK Master Pro</div>
            <div className="drawer-subtitle">Gwang Ji 광 지 Learning Chinese</div>
          </div>
        </div>
        <nav className="drawer-nav">
          {[
            { key: 'home', label: 'Trang chủ' },
            { key: 'vocabulary', label: 'Từ vựng' },
            { key: 'speaking', label: 'Nói' },
            { key: 'reading', label: 'Đọc' },
            { key: 'writing', label: 'Viết' }
          ].map((item) => (
            <button
              key={item.key}
              className={`drawer-link ${currentScreen === item.key ? 'active' : ''}`}
              onClick={() => openScreen(item.key as AppScreen)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="drawer-footer">Dữ liệu HSK đầy đủ 150 · 300 · 600 · 1200 · 2500 · 5000</div>
      </aside>

      <div className="phone-frame">
        <header className="app-topbar">
          <button className="icon-button" aria-label="Mở menu" onClick={() => setDrawerOpen(true)}>
            <span />
            <span />
            <span />
          </button>
          <div className="topbar-brand">
            <Image src="/assets/app-icon.png" alt="App icon" width={56} height={56} className="topbar-icon" />
            <div>
              <div className="topbar-title">HSK Master Pro</div>
              <div className="topbar-subtitle">Gwang Ji 광 지 Learning Chinese</div>
            </div>
          </div>
          <div className="icon-button ghost-placeholder" />
        </header>

        <main className="app-content">
          {currentScreen === 'home' && (
            <section className="screen-block home-screen">
              <div className="brand-hero">
                <div className="brand-cloud" />
                <div className="brand-avatar-wrap">
                  <Image src="/assets/mascot-head.png" alt="Mascot" width={148} height={148} className="brand-avatar" />
                </div>
                <div className="brand-copy">
                  <h1>HSK Master Pro</h1>
                  <p>Gwang Ji 광 지 Learning Chinese</p>
                </div>
              </div>

              <div className="module-grid">
                <button className="module-card module-vocab" onClick={() => openScreen('vocabulary')}>
                  <div className="module-icon">📚</div>
                  <div className="module-name">Từ vựng</div>
                  <div className="module-desc">Luyện gõ Hán tự theo HSK</div>
                </button>
                <button className="module-card module-speak" onClick={() => openScreen('speaking')}>
                  <div className="module-icon">🎤</div>
                  <div className="module-name">Nói</div>
                  <div className="module-desc">Shadowing + audio iPhone</div>
                </button>
                <button className="module-card module-read" onClick={() => openScreen('reading')}>
                  <div className="module-icon">📖</div>
                  <div className="module-name">Đọc</div>
                  <div className="module-desc">Bài đọc dài theo cấp độ</div>
                </button>
                <button className="module-card module-write" onClick={() => openScreen('writing')}>
                  <div className="module-icon">✍️</div>
                  <div className="module-name">Viết</div>
                  <div className="module-desc">Bộ thủ · nét · thứ tự viết</div>
                </button>
              </div>

              <div className="glass-card summary-panel">
                <div className="section-kicker">Dữ liệu HSK đầy đủ</div>
                <div className="summary-count-grid">
                  {moduleCounts.map((item) => (
                    <div key={item.level} className="summary-count-item">
                      <strong>{item.count}</strong>
                      <span>{item.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card session-panel">
                <div>
                  <div className="section-kicker">Phiên học hiện tại</div>
                  <h3>Chào mừng bạn quay lại</h3>
                  <p>Học tiếng Trung theo 4 kỹ năng: Từ vựng, Nói, Đọc, Viết.</p>
                </div>
                <div className="session-stats">
                  <span><strong>{typedWordCount}</strong> từ đã gõ</span>
                  <span><strong>{spokenLessonCount}</strong> câu đã shadowing</span>
                  <span><strong>{viewedReadingIds.length}</strong> bài đã mở</span>
                  <span><strong>{viewedWritingIds.length}</strong> chữ đã xem</span>
                </div>
              </div>
            </section>
          )}

          {currentScreen === 'vocabulary' && (
            <section className="screen-block">
              <div className="screen-header">
                <h2>Luyện Gõ Từ Vựng</h2>
                <p>Data full HSK chuẩn số lượng lớn, ổn định IME, có ẩn/hiện Hán tự và Pinyin.</p>
              </div>

              <div className="glass-card control-panel">
                <label>
                  <span>Cấp độ</span>
                  <select value={vocabLevel} onChange={(event) => setVocabLevel(event.target.value as HSKLevel)}>
                    {HSK_LEVELS.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>Tìm nhanh</span>
                  <input
                    value={vocabSearch}
                    onChange={(event) => {
                      setVocabSearch(event.target.value);
                      setVocabPage(1);
                    }}
                    placeholder="Hán tự, pinyin hoặc nghĩa Việt"
                  />
                </label>
                <div className="toggle-row">
                  <label className="pill-toggle">
                    <span>Hiện Hán tự</span>
                    <input type="checkbox" checked={showHanzi} onChange={(event) => setShowHanzi(event.target.checked)} />
                  </label>
                  <label className="pill-toggle">
                    <span>Hiện Pinyin</span>
                    <input type="checkbox" checked={showPinyin} onChange={(event) => setShowPinyin(event.target.checked)} />
                  </label>
                </div>
              </div>

              <div className="glass-card toolbar-row">
                <div><strong>{vocabData?.count ?? 0}</strong> từ ở {vocabLevel}</div>
                <div><strong>{filteredWords.length}</strong> kết quả sau lọc</div>
                <label>
                  <span>Mỗi trang</span>
                  <select value={pageSize} onChange={(event) => setPageSize(Number(event.target.value))}>
                    {PAGE_SIZES.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="glass-card vocab-table-card">
                {vocabLoading ? (
                  <div className="empty-state">Đang tải dữ liệu từ vựng...</div>
                ) : (
                  <>
                    <div className="table-scroll">
                      <table className="vocab-table">
                        <thead>
                          <tr>
                            <th>STT</th>
                            <th>Hán Tự</th>
                            <th>Pinyin</th>
                            <th>Nghĩa tiếng Việt</th>
                            <th>Luyện gõ chữ</th>
                            <th>Kết quả</th>
                          </tr>
                        </thead>
                        <tbody>
                          {visibleWords.map((entry) => {
                            const key = `${entry.level}-${entry.order}`;
                            return (
                              <VocabRow
                                key={key}
                                entry={entry}
                                answer={vocabAnswers[key] ?? ''}
                                composing={Boolean(vocabComposing[key])}
                                showHanzi={showHanzi}
                                showPinyin={showPinyin}
                                onAnswerChange={(value) => setAnswerForRow(key, value)}
                                onCompositionChange={(value) => setComposingForRow(key, value)}
                              />
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="pagination-row">
                      <button className="secondary-btn" disabled={vocabPage <= 1} onClick={() => setVocabPage((page) => Math.max(1, page - 1))}>Trang trước</button>
                      <span>Trang {vocabPage} / {totalPages}</span>
                      <button className="primary-btn" disabled={vocabPage >= totalPages} onClick={() => setVocabPage((page) => Math.min(totalPages, page + 1))}>Trang tiếp</button>
                    </div>
                  </>
                )}
              </div>
            </section>
          )}

          {currentScreen === 'speaking' && currentSpeaking && (
            <section className="screen-block">
              <div className="screen-header">
                <h2>Luyện Nói Shadowing</h2>
                <p>Hiện tiếng Việt trước, đếm 3 giây, rồi hiện Hán tự + Pinyin và audio dùng giọng hệ thống iPhone khi có sẵn.</p>
              </div>

              <div className="glass-card control-panel single-control">
                <label>
                  <span>Cấp độ</span>
                  <select
                    value={speakingLevel}
                    onChange={(event) => {
                      setSpeakingLevel(event.target.value as HSKLevel);
                      setSpeakingIndex(0);
                    }}
                  >
                    {HSK_LEVELS.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="glass-card shadow-panel">
                <div className="section-kicker">Tiếng Việt</div>
                <div className="shadow-vietnamese">{currentSpeaking.vietnamese}</div>
                {!shadowReveal ? <div className="shadow-countdown">{shadowCountdown}</div> : <div className="shadow-check">✓</div>}
                <div className={`shadow-reveal ${shadowReveal ? 'show' : ''}`}>
                  <div className="shadow-hanzi">{currentSpeaking.hanzi}</div>
                  <div className="shadow-pinyin">{currentSpeaking.pinyin}</div>
                </div>
                <div className="voice-hint">{speechReady ? 'Audio sẽ phát bằng giọng Trung gần nhất trên máy.' : 'Nếu iPhone chặn audio tự phát, hãy bấm “Nghe lại”.'}</div>
              </div>

              <div className="button-row">
                <button className="secondary-btn" onClick={() => setSpeakingIndex((index) => (index - 1 + speakingItems.length) % speakingItems.length)}>Câu trước</button>
                <button className="soft-btn" onClick={() => speakChinese(currentSpeaking.hanzi)}>Nghe lại</button>
                <button className="primary-btn" onClick={() => setSpeakingIndex((index) => (index + 1) % speakingItems.length)}>Câu tiếp theo</button>
              </div>
            </section>
          )}

          {currentScreen === 'reading' && currentReading && (
            <section className="screen-block">
              <div className="screen-header">
                <h2>Luyện Đọc Văn Bản</h2>
                <p>Văn bản càng cấp cao càng dài, có đủ Hán tự, Pinyin và nghĩa tiếng Việt.</p>
              </div>

              <div className="glass-card control-panel reading-grid">
                <label>
                  <span>Cấp độ</span>
                  <select
                    value={readingLevel}
                    onChange={(event) => {
                      const nextLevel = event.target.value as HSKLevel;
                      setReadingLevel(nextLevel);
                      const firstLesson = readingLessons.find((lesson) => lesson.level === nextLevel);
                      if (firstLesson) setReadingLessonId(firstLesson.id);
                    }}
                  >
                    {HSK_LEVELS.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>Bài đọc</span>
                  <select value={readingLessonId} onChange={(event) => setReadingLessonId(event.target.value)}>
                    {readingItems.map((lesson) => (
                      <option key={lesson.id} value={lesson.id}>{lesson.title}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="glass-card reading-panel">
                <h3>{currentReading.title}</h3>
                <div className="reading-meta">{currentReading.meta}</div>
                <div className="reading-section">
                  <div className="section-kicker">Hán tự</div>
                  <div className="reading-hanzi">{currentReading.hanzi}</div>
                </div>
                <div className="reading-section">
                  <div className="section-kicker">Pinyin</div>
                  <div className="reading-pinyin">{currentReading.pinyin}</div>
                </div>
                <div className="reading-section">
                  <div className="section-kicker">Nghĩa tiếng Việt</div>
                  <div className="reading-meaning">{currentReading.meaning}</div>
                </div>
              </div>
            </section>
          )}

          {currentScreen === 'writing' && currentWriting && (
            <section className="screen-block">
              <div className="screen-header">
                <h2>Luyện Viết Cho Người Mới</h2>
                <p>Đi từ nét cơ bản → bộ thủ → cấu tạo chữ → thứ tự nét để người mới hoàn toàn vẫn hiểu được.</p>
              </div>

              <div className="glass-card control-panel reading-grid">
                <label>
                  <span>Cấp độ</span>
                  <select
                    value={writingLevel}
                    onChange={(event) => {
                      const nextLevel = event.target.value as HSKLevel;
                      setWritingLevel(nextLevel);
                      const firstLesson = writingLessons.find((lesson) => lesson.level === nextLevel);
                      if (firstLesson) setWritingLessonId(firstLesson.id);
                    }}
                  >
                    {HSK_LEVELS.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>Chữ cần học</span>
                  <select value={writingLessonId} onChange={(event) => setWritingLessonId(event.target.value)}>
                    {writingItems.map((lesson) => (
                      <option key={lesson.id} value={lesson.id}>{lesson.hanzi} · {lesson.meaning}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="writing-grid">
                <div className="glass-card writing-main">
                  <div className="writing-char">{currentWriting.hanzi}</div>
                  <div className="writing-pinyin">{currentWriting.pinyin}</div>
                  <div className="writing-meaning">{currentWriting.meaning}</div>
                  <div className="tag-row">
                    <span className="pill-tag">Bộ thủ: {currentWriting.radical}</span>
                    <span className="pill-tag">Số nét: {currentWriting.strokeCount}</span>
                  </div>
                  <p>{currentWriting.explain}</p>
                </div>
                <div className="glass-card writing-side">
                  <div className="section-kicker">Thứ tự nét</div>
                  <ol>
                    {currentWriting.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="glass-card stroke-panel">
                <div className="section-kicker">Nét cơ bản</div>
                <div className="stroke-grid">
                  {strokeBasics.map((stroke) => (
                    <div key={stroke.id} className="stroke-item">
                      <div className="stroke-symbol">{stroke.symbol}</div>
                      <strong>{stroke.name}</strong>
                      <span>{stroke.hint}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
