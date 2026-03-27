import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HSK Master Pro',
  description: 'HSK Master Pro - học tiếng Trung theo 4 kỹ năng với giao diện kiểu iPhone',
  manifest: '/manifest.webmanifest',
  applicationName: 'HSK Master Pro',
  appleWebApp: {
    capable: true,
    title: 'HSK Master Pro',
    statusBarStyle: 'default'
  },
  icons: {
    icon: '/assets/app-icon.png',
    apple: '/assets/apple-touch-icon.png'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#f3f6ff'
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
