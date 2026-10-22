import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import HowItWorks from '../../components/HowItWorks';
import TrustSection from '../../components/TrustSection';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'How It Works | ooloo Kitchen Lucknow',
  description: 'Book verified cooks at your door in 30 mins across Lucknow in 3 simple steps. Learn about background checks, kitchen training, and hygiene standards.',
};

export default function HowItWorksPage() {
  return (
    <div className="app-shell" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, paddingBottom: '60px' }}>
        <HowItWorks />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}
