import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';

import './globals.css';

const font = Roboto_Flex({ subsets: ['latin'] });

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
            <body className={font.className}>{children}</body>
        </html>
    );
}
