import Header from './Header';
import Footer from './Footer';
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
      <body className="container mx-auto bg-slate-700 text-slate-50">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
