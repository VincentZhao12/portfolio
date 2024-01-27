import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Vincent Zhao',
    description:
        "Hi, I'm Vincent Zhao! I'm a Computer Science Student at Purdue University. I am interested in full-stack development, robotics, computer vision, and data science. This is my portfolio with my work experience as well as my past projects.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
