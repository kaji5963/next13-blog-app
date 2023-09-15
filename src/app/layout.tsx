import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next13-Blog',
  description: 'Create Next13-Blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
