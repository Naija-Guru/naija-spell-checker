import type { Metadata } from 'next';

import '@/styles/global.scss';
import { Header } from './header';
import { Footer } from './footer';

export const metadata: Metadata = {
  title: 'Naija Spell Checker',
  description: 'Nigerian Pidgin spell checker web app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}