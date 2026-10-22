import React from 'react';
import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import PricingSection from '../../components/PricingSection';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Cook Service Pricing & Estimator | ooloo Kitchen Lucknow',
  description: 'Transparent hourly cooking rates with zero surge pricing across Lucknow. Calculate your meal cost and book instant verified cooks.',
};

export default function PricingPage() {
  return (
    <div className="app-shell" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, paddingBottom: '60px' }}>
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
