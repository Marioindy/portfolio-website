import type { Metadata } from 'next';
import './globals.css';
import { ClientNavBar } from '@/components/ClientNavBar';
import { Footer } from '@/components/Footer';
import { ConvexClientProvider } from '@/components/ConvexClientProvider';

export const metadata: Metadata = {
  title: 'Portfolio | Full Stack Developer',
  description: 'A modern portfolio showcasing my work as a Full Stack Developer',
  keywords: ['portfolio', 'web development', 'full stack', 'react', 'next.js'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Portfolio | Full Stack Developer',
    description: 'A modern portfolio showcasing my work as a Full Stack Developer',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Full Stack Developer',
    description: 'A modern portfolio showcasing my work as a Full Stack Developer',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <ConvexClientProvider>
          <div className="flex flex-col min-h-screen">
            <ClientNavBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
