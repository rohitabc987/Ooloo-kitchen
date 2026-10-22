import type { Metadata } from 'next';
import './globals.css';
import ClientProviders from '../components/ClientProviders';

export const metadata: Metadata = {
  title: 'ooloo Kitchen | Book Verified Cooks in Lucknow',
  description: 'Book verified, background-checked cooks at your doorstep in 30 minutes across Lucknow. Kitchen prep, daily meal cooking, express cook, and party catering — all in-app.',
  keywords: 'cook service Lucknow, hire cook Lucknow, Gomti Nagar cook, 30 min cook dispatch, ooloo kitchen, on demand cook',
  openGraph: {
    title: 'ooloo Kitchen | Book Verified Cooks in Lucknow',
    description: 'Book verified cooks at your doorstep in 30 minutes across Lucknow. All in-app booking.',
    url: 'https://oolookitchen.com',
    siteName: 'ooloo Kitchen',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
