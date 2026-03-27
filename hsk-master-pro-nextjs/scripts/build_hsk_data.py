from __future__ import annotations

import csv
import json
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INPUT_DIR = ROOT / 'scripts' / 'input'
OUTPUT_DIR = ROOT / 'public' / 'data' / 'hsk'
REPORT_PATH = ROOT / 'docs' / 'hsk-data-match-report.json'

CSV_PATHS = {level: INPUT_DIR / f'hsk_{level}.csv' for level in range(1, 7)}
CVDICT_PATH = INPUT_DIR / 'CVDICT.u8'
COMPLETE_PATH = INPUT_DIR / 'complete.min.json'

TONE_MARKS = {
    'a': 'āáǎàa', 'e': 'ēéěèe', 'i': 'īíǐìi', 'o': 'ōóǒòo', 'u': 'ūúǔùu', 'ü': 'ǖǘǚǜü', 'v': 'ǖǘǚǜü',
    'A': 'ĀÁǍÀA', 'E': 'ĒÉĚÈE', 'I': 'ĪÍǏÌI', 'O': 'ŌÓǑÒO', 'U': 'ŪÚǓÙU', 'Ü': 'ǕǗǙǛÜ', 'V': 'ǕǗǙǛÜ'
}
ACCENT_TO_BASE = str.maketrans({
    'ā': 'a', 'á': 'a', 'ǎ': 'a', 'à': 'a', 'ē': 'e', 'é': 'e', 'ě': 'e', 'è': 'e', 'ī': 'i', 'í': 'i', 'ǐ': 'i', 'ì': 'i',
    'ō': 'o', 'ó': 'o', 'ǒ': 'o', 'ò': 'o', 'ū': 'u', 'ú': 'u', 'ǔ': 'u', 'ù': 'u', 'ǖ': 'ü', 'ǘ': 'ü', 'ǚ': 'ü', 'ǜ': 'ü',
    'Ā': 'A', 'Á': 'A', 'Ǎ': 'A', 'À': 'A', 'Ē': 'E', 'É': 'E', 'Ě': 'E', 'È': 'E', 'Ī': 'I', 'Í': 'I', 'Ǐ': 'I', 'Ì': 'I',
    'Ō': 'O', 'Ó': 'O', 'Ǒ': 'O', 'Ò': 'O', 'Ū': 'U', 'Ú': 'U', 'Ǔ': 'U', 'Ù': 'U', 'Ǖ': 'Ü', 'Ǘ': 'Ü', 'Ǚ': 'Ü', 'Ǜ': 'Ü'
})
PATTERN = re.compile(r'^(\S+)\s+(\S+)\s+\[(.*?)\]\s+/(.*)/$')
SPECIAL_LOOKUP = {
    '哪（哪儿）': ['哪儿', '哪'],
    '那（那儿）': ['那儿', '那'],
    '这（这儿）': ['这儿', '这'],
    '牛奶Ō': ['牛奶'],
    '…分之…': ['分之'],
    '花（动）': ['花'],
    '等（动）': ['等'],
    '等（助）': ['等'],
    '对（形）': ['对'],
    '对（介）': ['对'],
    '过（动）': ['过'],
    '过（助）': ['过'],
}
CUSTOM_MEANINGS_VI = {
    '打篮球': ['chơi bóng rổ'],
    '踢足球': ['đá bóng', 'chơi bóng đá'],
    '弹钢琴': ['chơi đàn piano'],
    '系领带': ['thắt cà vạt'],
    '…分之…': ['... phần ...', 'kết cấu chỉ phân số'],
    '花（动）': ['tiêu', 'tiêu xài'],
    '等（动）': ['đợi', 'chờ'],
    '等（助）': ['vân vân', 'v.v.'],
    '对（形）': ['đúng', 'đối'],
    '对（介）': ['đối với', 'với'],
    '过（动）': ['đi qua', 'vượt qua'],
    '过（助）': ['trợ từ chỉ trải nghiệm trong quá khứ'],
    '牛奶Ō': ['sữa', 'sữa bò'],
    '纽扣儿': ['cúc áo'],
    '不客气': ['không có gì', 'đừng khách sáo'],
}
CUSTOM_MEANINGS_EN = {
    '打篮球': ['play basketball'],
    '踢足球': ['play football', 'play soccer'],
    '弹钢琴': ['play the piano'],
    '系领带': ['tie a necktie'],
    '…分之…': ['fraction pattern'],
}
CUSTOM_PINYIN_DISPLAY = {
    '牛奶Ō': 'niúnǎi',
}
TARGET_COUNTS = {1: 150, 2: 300, 3: 600, 4: 1200, 5: 2500, 6: 5000}


def numeric_syllable_to_tone(syllable: str) -> str:
    if not syllable:
        return syllable
    tone = 5
    if syllable[-1].isdigit():
        tone = int(syllable[-1])
        syllable = syllable[:-1]
    syllable = syllable.replace('u:', 'ü').replace('v', 'ü').replace('V', 'Ü')
    if tone in (0, 5):
        return syllable
    lowered = syllable.lower()
    index = -1
    for vowel in ('a', 'e'):
        found = lowered.find(vowel)
        if found != -1:
            index = found
            break
    if index == -1 and 'ou' in lowered:
        index = lowered.index('o')
    if index == -1:
        for i, ch in enumerate(lowered):
            if ch in 'aeiouü':
                index = i
    if index == -1:
        return syllable
    ch = syllable[index]
    return syllable[:index] + TONE_MARKS[ch][tone - 1] + syllable[index + 1:]


def numeric_to_tone(value: str) -> str:
    return ' '.join(numeric_syllable_to_tone(token) for token in value.split())


def normalize_pinyin_tone(value: str) -> str:
    return (value or '').replace(' ', '').replace("'", '').replace('-', '').replace('（', '(').replace('）', ')').replace('Ō', 'O').lower()


def normalize_pinyin_letters(value: str) -> str:
    return normalize_pinyin_tone(value).translate(ACCENT_TO_BASE).replace('ü', 'u').replace('Ü', 'U')


def clean_meanings(values: list[str] | None) -> list[str]:
    out: list[str] = []
    seen: set[str] = set()
    for value in values or []:
        cleaned = value.strip().strip(';').replace('  ', ' ')
        if not cleaned or cleaned.startswith('LT:'):
            continue
        lowered = cleaned.lower()
        if lowered in seen:
            continue
        seen.add(lowered)
        out.append(cleaned)
    return out


def short_meaning(values: list[str], fallback: str = '') -> str:
    cleaned = clean_meanings(values)
    if not cleaned:
        return fallback
    return '; '.join(cleaned[:2])[:220]


def lookup_terms(display: str) -> list[str]:
    terms = [display]
    terms.extend(SPECIAL_LOOKUP.get(display, []))
    base = display.split('（')[0] if '（' in display and '）' in display else display
    base = base.replace('Ō', '').strip()
    if base and base not in terms:
        terms.append(base)
    out: list[str] = []
    seen: set[str] = set()
    for term in terms:
        if term and term not in seen:
            out.append(term)
            seen.add(term)
    return out


def accepted_inputs(display: str) -> list[str]:
    if display in ('哪（哪儿）', '那（那儿）', '这（这儿）'):
        base = display.split('（')[0]
        alt = display[display.find('（') + 1: display.find('）')]
        return [base, alt]
    if '（' in display and '）' in display:
        return [display.split('（')[0]]
    if display == '牛奶Ō':
        return ['牛奶']
    if display == '…分之…':
        return ['分之']
    return [display]


def read_cedict() -> dict[str, list[dict[str, object]]]:
    by_simplified: dict[str, list[dict[str, object]]] = defaultdict(list)
    with CVDICT_PATH.open('r', encoding='utf-8') as handle:
        for line in handle:
            line = line.strip()
            if not line or line.startswith('#'):
                continue
            match = PATTERN.match(line)
            if not match:
                continue
            traditional, simplified, pinyin_num, gloss = match.groups()
            meanings = [item.strip() for item in gloss.split('/') if item.strip()]
            by_simplified[simplified].append(
                {
                    'traditional': traditional,
                    'pinyin_tone': numeric_to_tone(pinyin_num),
                    'meanings_vi': clean_meanings(meanings),
                }
            )
    return by_simplified


def read_complete() -> dict[str, list[dict[str, object]]]:
    by_simplified: dict[str, list[dict[str, object]]] = defaultdict(list)
    complete = json.loads(COMPLETE_PATH.read_text(encoding='utf-8'))
    for item in complete:
        for form in item.get('f', []):
            by_simplified[item['s']].append(
                {
                    'traditional': form.get('t'),
                    'pinyin_tone': form.get('i', {}).get('y'),
                    'meanings_en': clean_meanings(form.get('m', [])),
                    'classifiers': clean_meanings(form.get('c', [])),
                    'radical': item.get('r'),
                    'frequency': item.get('q'),
                    'pos': item.get('p', []),
                }
            )
    return by_simplified


def best_match(candidates: list[dict[str, object]], pinyin: str) -> dict[str, object] | None:
    if not candidates:
        return None
    target_tone = normalize_pinyin_tone(pinyin)
    target_letters = normalize_pinyin_letters(pinyin)
    for candidate in candidates:
        if normalize_pinyin_tone(str(candidate.get('pinyin_tone', ''))) == target_tone:
            return candidate
    for candidate in candidates:
        if normalize_pinyin_letters(str(candidate.get('pinyin_tone', ''))) == target_letters:
            return candidate
    return candidates[0]


def build() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    cvdict = read_cedict()
    complete = read_complete()
    report = []

    for level in range(1, 7):
        with CSV_PATHS[level].open('r', encoding='utf-8') as handle:
            rows = list(csv.DictReader(handle))
        if level == 5 and len(rows) == 2499:
            rows.insert(330, {'n': '331', 'character': '大夫', 'pinyin': 'dàifu'})

        words = []
        matched_vi = 0
        matched_meta = 0

        for order, row in enumerate(rows, start=1):
            display = row['character']
            pinyin = CUSTOM_PINYIN_DISPLAY.get(display, row['pinyin'])
            if display == '牛奶Ō':
                pinyin = 'niúnǎi'

            cv_match = None
            complete_match = None
            for term in lookup_terms(display):
                cv_match = cv_match or best_match(cvdict.get(term, []), pinyin)
                complete_match = complete_match or best_match(complete.get(term, []), pinyin)
            if cv_match:
                matched_vi += 1
            if complete_match:
                matched_meta += 1

            meanings_vi = CUSTOM_MEANINGS_VI.get(display) or list(cv_match.get('meanings_vi', [])) if cv_match else []
            meanings_en = CUSTOM_MEANINGS_EN.get(display) or list(complete_match.get('meanings_en', [])) if complete_match else []

            meaning_vi_short = short_meaning(meanings_vi)
            if not meaning_vi_short and meanings_en:
                meaning_vi_short = short_meaning(meanings_en)
                meanings_vi = meanings_en
            if not meaning_vi_short:
                meaning_vi_short = '(chưa có nghĩa)'

            words.append(
                {
                    'order': order,
                    'level': f'HSK{level}',
                    'hanzi': display,
                    'acceptedInputs': accepted_inputs(display),
                    'lookupTerms': lookup_terms(display),
                    'pinyin': pinyin,
                    'meaningVi': meaning_vi_short,
                    'meaningViFull': clean_meanings(meanings_vi),
                    'meaningEn': short_meaning(meanings_en),
                    'meaningEnFull': clean_meanings(meanings_en),
                    'traditional': (cv_match or {}).get('traditional') or (complete_match or {}).get('traditional') or display,
                    'radical': (complete_match or {}).get('radical') or '',
                    'frequency': (complete_match or {}).get('frequency'),
                    'partOfSpeech': (complete_match or {}).get('pos') or [],
                    'classifiers': (complete_match or {}).get('classifiers') or [],
                    'sourceFlags': {
                        'vi': 'custom' if display in CUSTOM_MEANINGS_VI else ('cvdict' if cv_match else 'fallback-en'),
                        'meta': 'complete-hsk' if complete_match else 'none',
                    },
                }
            )

        if len(words) != TARGET_COUNTS[level]:
            raise RuntimeError(f'HSK{level} count mismatch: {len(words)} vs {TARGET_COUNTS[level]}')

        with (OUTPUT_DIR / f'hsk{level}.json').open('w', encoding='utf-8') as handle:
            json.dump({'level': f'HSK{level}', 'count': len(words), 'words': words}, handle, ensure_ascii=False, indent=2)

        report.append({'level': f'HSK{level}', 'count': len(words), 'matchedVi': matched_vi, 'matchedMeta': matched_meta})

    with (OUTPUT_DIR / 'summary.json').open('w', encoding='utf-8') as handle:
        json.dump(
            {
                'levels': [{'level': f'HSK{level}', 'count': TARGET_COUNTS[level]} for level in range(1, 7)],
                'generatedBy': 'scripts/build_hsk_data.py',
            },
            handle,
            ensure_ascii=False,
            indent=2,
        )

    REPORT_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
    print('Done. Files written to', OUTPUT_DIR)


if __name__ == '__main__':
    build()
