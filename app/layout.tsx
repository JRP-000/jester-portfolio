import type { Metadata } from 'next';
import Script from 'next/script';
import { site, socialImage } from '@/lib/site';
import 'lenis/dist/lenis.css';
import './globals.css';

const siteUrl = site.url;
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-LL3DE84B4G';
const validMeasurementId =
  measurementId && /^G-[A-Z0-9]+$/.test(measurementId) ? measurementId : null;
const verificationCode = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  applicationName: 'Jester Pedrosa Portfolio',
  authors: [{ name: 'Jester Pedrosa' }],
  creator: 'Jester Pedrosa',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Jester Pedrosa Portfolio',
    title: site.title,
    description: site.description,
    images: [socialImage],
    locale: 'en_PH',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [socialImage.url],
  },
  verification: verificationCode ? { google: verificationCode } : undefined,
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        {validMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${validMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${validMeasurementId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
