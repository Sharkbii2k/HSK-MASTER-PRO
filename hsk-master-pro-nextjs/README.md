# HSK Master Pro - Next.js source package

Bản này là **source code Next.js + PWA + Capacitor-ready** cho app HSK Master Pro.

## Có gì trong gói này

- Giao diện kiểu iPhone với **menu 3 gạch**
- Intro loading screen dùng mascot của bạn
- 4 module: **Từ vựng / Nói / Đọc / Viết**
- Dữ liệu từ vựng **HSK 1-6 đầy đủ đúng số lượng**:
  - HSK1: 150
  - HSK2: 300
  - HSK3: 600
  - HSK4: 1200
  - HSK5: 2500
  - HSK6: 5000
- Nghĩa tiếng Việt lấy từ bộ từ điển CVDICT khi có thể, có fallback và bản vá cho một số mục đặc biệt
- Cấu hình `output: 'export'` để dễ deploy GitHub Pages / Netlify / Vercel static export
- Có `capacitor.config.ts` để bạn mở đường lên iPhone package trên Mac

## Cấu trúc chính

- `app/` - mã nguồn Next.js App Router
- `components/HSKMasterProApp.tsx` - UI chính của app
- `public/data/hsk/` - dữ liệu HSK đã sinh sẵn
- `public/assets/` - icon và mascot
- `scripts/build_hsk_data.py` - script build lại dữ liệu
- `docs/` - tài liệu nguồn dữ liệu và báo cáo match

## Chạy local

```bash
npm install
npm run dev
```

## Build static export

```bash
npm install
npm run build
```

Sau khi build, thư mục output là `out/`.

## Đưa lên iPhone theo kiểu PWA

1. Build app
2. Deploy `out/` lên web
3. Mở bằng Safari trên iPhone
4. Chọn **Share > Add to Home Screen**

## Nâng thành package iPhone bằng Capacitor

Cần máy Mac có Xcode.

```bash
npm install
npm run build
npx cap add ios
npx cap sync ios
npx cap open ios
```

Sau đó build/sign trong Xcode.

## Giới hạn hiện tại

- Module từ vựng đã có data full HSK.
- Module Nói / Đọc / Viết hiện là **starter content chất lượng cao**, chưa phải full kho bài khổng lồ.
- Mình không build sẵn file `.ipa` ở đây vì IPA cần Mac + Xcode + signing profile của Apple.

## Gợi ý bước tiếp theo

- thêm full bài đọc theo từng cấp HSK
- thêm bộ flashcards và spaced repetition
- thêm lưu tiến độ bằng Supabase
- thêm Capacitor native shell hoàn chỉnh trên Mac
