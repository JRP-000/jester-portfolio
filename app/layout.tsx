import type { Metadata } from 'next';
import 'lenis/dist/lenis.css';
import './globals.css';

const siteUrl = 'https://jester-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Jester Pedrosa | Web Developer, QA Engineer & IT Support',
  description: 'Explore web development projects and experience by Jester Pedrosa, a web developer, QA engineer, and IT support specialist building thoughtful digital experiences.',
  applicationName: 'Jester Pedrosa Portfolio',
  authors: [{ name: 'Jester Pedrosa' }],
  creator: 'Jester Pedrosa',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Jester Pedrosa Portfolio',
    title: 'Jester Pedrosa | Web Development & Digital Projects',
    description: 'Selected websites, software projects, and professional experience by Jester Pedrosa.',
    locale: 'en_PH',
  },
  twitter: {
    card: 'summary',
    title: 'Jester Pedrosa | Web Developer, QA Engineer & IT Support',
    description: 'Explore selected websites, software projects, and professional experience.',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
