export type AppScreen = 'home' | 'vocabulary' | 'speaking' | 'reading' | 'writing';

export type HSKLevel = 'HSK1' | 'HSK2' | 'HSK3' | 'HSK4' | 'HSK5' | 'HSK6';

export interface HSKWord {
  order: number;
  level: HSKLevel;
  hanzi: string;
  acceptedInputs: string[];
  lookupTerms: string[];
  pinyin: string;
  meaningVi: string;
  meaningViFull: string[];
  meaningEn: string;
  meaningEnFull: string[];
  traditional: string;
  radical: string;
  frequency: number | null;
  partOfSpeech: string[];
  classifiers: string[];
  sourceFlags: {
    vi: string;
    meta: string;
  };
}

export interface HSKLevelData {
  level: HSKLevel;
  count: number;
  words: HSKWord[];
}

export interface HSKSummaryItem {
  level: HSKLevel;
  count: number;
}

export interface HSKSummaryData {
  levels: HSKSummaryItem[];
  generatedBy: string;
}

export interface SpeakingLesson {
  id: string;
  level: HSKLevel;
  vietnamese: string;
  hanzi: string;
  pinyin: string;
}

export interface ReadingLesson {
  id: string;
  level: HSKLevel;
  title: string;
  meta: string;
  hanzi: string;
  pinyin: string;
  meaning: string;
}

export interface WritingCharLesson {
  id: string;
  level: HSKLevel;
  hanzi: string;
  pinyin: string;
  meaning: string;
  radical: string;
  strokeCount: number;
  explain: string;
  steps: string[];
}

export interface StrokeBasic {
  id: string;
  name: string;
  symbol: string;
  hint: string;
}
