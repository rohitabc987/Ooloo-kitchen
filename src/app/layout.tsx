import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '../context/AppContext';

export const metadata: Metadata = {
  title: 'ooloo Kitchen | 30-Min On-Demand Cook Dispatch Lucknow',
  description: 'Book verified, background-checked cooks at your doorstep in 30 minutes across Lucknow. Kitchen prep, daily meal cooking, and express party catering.',
  keywords: 'cook service Lucknow, hire cook Lucknow, Gomti Nagar cook, 30 min cook dispatch, ooloo kitchen',
  openGraph: {
    title: 'ooloo Kitchen | 30-Min On-Demand Cook Dispatch Lucknow',
    description: 'Book verified cooks at your doorstep in 30 minutes across Lucknow.',
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
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
