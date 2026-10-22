'use client';

import React from 'react';

export default function AppHeader() {
  return (
    <header className="app-header" style={{ position: 'relative', borderBottom: 'none' }}>
      <div className="header-row">
        {/* Left: Location — Coming Soon */}
        <div className="header-location" style={{ cursor: 'default' }}>
          <div>
            <div className="header-location-label">📍 Delivering to</div>
            <div className="header-location-name">
              Gomti Nagar
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                marginLeft: 6,
                fontSize: '0.62rem',
                fontWeight: 800,
                color: '#E64A19',
                background: '#FFF2ED',
                padding: '2px 8px',
                borderRadius: 99,
                letterSpacing: '0.02em',
              }}>
                Coming Soon
              </span>
            </div>
          </div>
        </div>

        {/* Right: Profile */}
        <div className="header-actions">
          <button id="profile-btn" className="icon-btn">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
