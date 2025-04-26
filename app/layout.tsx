import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import './globals.css';

export const metadata: Metadata = {
  title: "SE '30 Class Profile",
  description: 'University of Waterloo Software Engineering 2030 Class Profile',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="mx-6 antialiased">
        <ThemeProvider
          scriptProps={{ 'data-cfasync': 'false' }}
          attribute="class"
        >
          <div className="flex min-h-screen flex-col justify-between">
            <Header />
            <main className="mx-auto max-w-7xl">{children}</main>
          </div>

          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
