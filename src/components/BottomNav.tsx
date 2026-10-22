'use client';

import React from 'react';

interface BottomNavProps {
  activeTab: 'home' | 'bookings';
  setActiveTab: (tab: 'home' | 'bookings') => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  return (
    <nav className="bottom-nav">
      {/* Home */}
      <button
        id="nav-home"
        className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => setActiveTab('home')}
      >
        <div className="nav-item-icon">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" strokeWidth={activeTab === 'home' ? 2.5 : 2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 22V12h6v10" />
          </svg>
        </div>
        <span className="nav-item-label">Home</span>
      </button>

      {/* Bookings */}
      <button
        id="nav-bookings"
        className={`nav-item ${activeTab === 'bookings' ? 'active' : ''}`}
        onClick={() => setActiveTab('bookings')}
      >
        <div className="nav-item-icon">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" strokeWidth={activeTab === 'bookings' ? 2.5 : 2} stroke="currentColor">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" />
            <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
            <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
            <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" />
          </svg>
        </div>
        <span className="nav-item-label">Bookings</span>
      </button>
    </nav>
  );
}
