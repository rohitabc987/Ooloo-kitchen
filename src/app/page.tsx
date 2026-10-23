'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import HomePage from '../components/HomePage';
import BookingsPage from '../components/BookingsPage';
import { useApp } from '../context/AppContext';
import { ServiceItem } from '../types';

// Footer component
import Footer from '../components/Footer';

function HomeInner() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState<'home' | 'bookings'>('home');
  const [serviceMode, setServiceMode] = useState<'instant' | 'schedule' | 'autorepeat'>('instant');
  const { handleOpenBooking } = useApp();

  useEffect(() => {
    if (tabParam === 'bookings') setActiveTab('bookings');
    else setActiveTab('home');
  }, [tabParam]);

  const onOpenBooking = (service?: ServiceItem, mode?: string) => {
    const finalMode = mode || serviceMode;
    if (mode) setServiceMode(mode as 'instant' | 'schedule' | 'autorepeat');
    handleOpenBooking(service, finalMode);
  };

  return (
    <div className="app-shell">
      {/* Top Navbar with active tab tracking and direct individual page links */}
      <Navbar />

      {/* Mobile Header (hidden on desktop) */}
      {activeTab === 'home' && (
        <AppHeader />
      )}

      {/* Main Home Content */}
      <div className="main-scroll">
        {activeTab === 'home' && (
          <HomePage
            onBook={onOpenBooking}
            serviceMode={serviceMode}
            setServiceMode={setServiceMode}
          />
        )}
        {activeTab === 'bookings' && <BookingsPage />}
      </div>

      {/* Footer */}
      {activeTab === 'home' && (
        <Footer />
      )}

      {/* Mobile Bottom Nav (hidden on desktop) */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--bg-light)' }} />}>
      <HomeInner />
    </Suspense>
  );
}
