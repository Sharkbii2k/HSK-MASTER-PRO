# Data sources and attribution

## Vocabulary counts and level targets

This project targets the classic HSK 2.0 cumulative counts:
- HSK1: 150
- HSK2: 300
- HSK3: 600
- HSK4: 1200
- HSK5: 2500
- HSK6: 5000

## Sources used in this package

1. **HSK CSV lists by level**
   - Repository: sawcordwell/HSK-Vocab
   - Used as the primary source for the exact cumulative per-level lists.
   - License: CC0-1.0

2. **Chinese-Vietnamese meanings**
   - Repository: ph0ngp/CVDICT
   - Used to map Chinese entries to Vietnamese meanings whenever a matching entry exists.
   - License: CC BY-SA 4.0

3. **Extra metadata**
   - Repository: drkameleon/complete-hsk-vocabulary
   - Used for radical, frequency, parts of speech, traditional form, and English gloss fallback.
   - License: MIT

## Notes

- The upstream `hsk_5.csv` file had 2499 rows while the numbered list reached 2500.
- This package patches missing row **331 = 大夫 / dàifu** using corroborating public HSK5 lists.
- A small number of special cases are patched manually, including grouped entries such as:
  - 哪（哪儿）
  - 那（那儿）
  - 这（这儿）
  - 对（形） / 对（介）
  - 过（动） / 过（助）
  - 花（动）
  - …分之…

## Generated files

- `public/data/hsk/hsk1.json`
- `public/data/hsk/hsk2.json`
- `public/data/hsk/hsk3.json`
- `public/data/hsk/hsk4.json`
- `public/data/hsk/hsk5.json`
- `public/data/hsk/hsk6.json`
- `public/data/hsk/summary.json`
