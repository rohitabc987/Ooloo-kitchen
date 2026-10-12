'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import PricingSection from '../components/PricingSection';
import LucknowCoverage from '../components/LucknowCoverage';
import TrustSection from '../components/TrustSection';
import Subscriptions from '../components/Subscriptions';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';

export default function Home() {
  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero />
        <Ticker />
        <Services />
        <HowItWorks />
        <PricingSection />
        <LucknowCoverage />
        <TrustSection />
        <Subscriptions />
        <Testimonials />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Centralized Interactive Booking Modal */}
      <BookingModal />
    </div>
  );
}
