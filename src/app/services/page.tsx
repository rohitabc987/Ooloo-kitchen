import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Services from '../../components/Services';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Kitchen Services & Rates | ooloo Kitchen Lucknow',
  description: 'Explore all on-demand cook services in Lucknow: Kitchen prep, daily meal cooking, 30-min express cook, and party catering. Background-checked cooks at your doorstep.',
};

export default function ServicesPage() {
  return (
    <div className="app-shell" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, paddingBottom: '60px' }}>
        <Services />
      </main>
      <Footer />
    </div>
  );
}
