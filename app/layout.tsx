import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import './globals.css';

export const metadata: Metadata = {
  title: "SE 30' Class Profile",
  description: 'University of Waterloo Software Engineering 2030 Class Profile',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          scriptProps={{ 'data-cfasync': 'false' }}
          attribute="class"
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
