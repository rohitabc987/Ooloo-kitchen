import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import FaqSection from '../../components/FaqSection';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'FAQs & Popular Dishes | ooloo Kitchen Lucknow',
  description: 'Got questions about ooloo kitchen services in Lucknow? Read answers on cook background checks, dish preparation, hygiene, pricing, and timing.',
};

export default function FaqsPage() {
  return (
    <div className="app-shell" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, paddingBottom: '60px' }}>
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
