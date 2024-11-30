import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import Sidebar from '@/components/Sidebar';

import './globals.css';

const globalFont = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Control Panel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={globalFont.className}>
        <div className="flex h-full flex-col">
          <Sidebar />

          <div className="no-scrollbar mx-7 overflow-y-auto rounded-2xl p-7 md:mx-14">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
