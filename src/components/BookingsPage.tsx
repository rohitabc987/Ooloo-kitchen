'use client';

import React, { useState } from 'react';

const SAMPLE_BOOKINGS = [
  {
    id: 'B001',
    service: 'Full Meal Cooking',
    date: '2026-10-25',
    time: 'Lunch (12:00 PM)',
    area: 'Gomti Nagar',
    people: 4,
    price: 399,
    status: 'confirmed' as const,
  },
  {
    id: 'B002',
    service: 'Kitchen Prep',
    date: '2026-10-26',
    time: 'Express (Within 30 Mins)',
    area: 'Sushant Golf City',
    people: 2,
    price: 149,
    status: 'pending' as const,
  },
];

const PREVIOUS_BOOKINGS = [
  {
    id: 'B099',
    service: 'Express Cook (30 Min)',
    date: '2026-10-12',
    time: 'Instant',
    area: 'Hazratganj',
    people: 3,
    price: 199,
    status: 'completed' as const,
  },
  {
    id: 'B098',
    service: 'Full Meal Cooking',
    date: '2026-10-05',
    time: 'Dinner (7:00 PM)',
    area: 'Gomti Nagar',
    people: 5,
    price: 399,
    status: 'completed' as const,
  },
];

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'previous'>('upcoming');
  const bookings = activeTab === 'upcoming' ? SAMPLE_BOOKINGS : PREVIOUS_BOOKINGS;

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">My Bookings</h1>
        <button
          id="bookings-help-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '8px 14px',
            border: '1.5px solid #E5E5E5',
            borderRadius: 99,
            background: 'transparent',
            fontSize: '0.82rem',
            fontWeight: 700,
            color: '#4A4A4A',
            cursor: 'pointer',
            fontFamily: 'var(--font)',
          }}
        >
          👤 Help
        </button>
      </div>

      {/* Tabs */}
      <div className="bookings-tabs">
        <button
          id="tab-upcoming"
          className={`booking-tab ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </button>
        <button
          id="tab-previous"
          className={`booking-tab ${activeTab === 'previous' ? 'active' : ''}`}
          onClick={() => setActiveTab('previous')}
        >
          Previous
        </button>
      </div>

      {/* Booking Cards or Empty State */}
      {bookings.length === 0 ? (
        <div className="empty-bookings">
          <div className="empty-bookings-icon">📅</div>
          <div className="empty-bookings-text">No bookings found</div>
          <div style={{ fontSize: '0.8rem', color: '#BBB', marginTop: 8 }}>
            Book your first cook from the Home tab
          </div>
        </div>
      ) : (
        <div style={{ paddingTop: 8 }}>
          {bookings.map((b) => (
            <div key={b.id} className="booking-card">
              <div className="booking-card-header">
                <div className="booking-service-name">{b.service}</div>
                <div className={`booking-status ${b.status}`}>
                  {b.status === 'confirmed' ? '✓ Confirmed' : b.status === 'pending' ? '⏳ Pending' : 'Completed'}
                </div>
              </div>

              <div className="booking-card-detail">
                📅 <span>{b.date}</span>
              </div>
              <div className="booking-card-detail">
                🕐 <span>{b.time}</span>
              </div>
              <div className="booking-card-detail">
                📍 <span>{b.area}</span>
              </div>
              <div className="booking-card-detail">
                👥 <span>{b.people} Guests</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12, paddingTop: 12, borderTop: '1px solid #F0F0F0' }}>
                <div className="booking-card-price">₹{b.price}</div>
                {b.status !== 'completed' && (
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button style={{
                      padding: '7px 14px',
                      borderRadius: 99,
                      border: '1.5px solid #E5E5E5',
                      background: 'transparent',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#E53935',
                      cursor: 'pointer',
                      fontFamily: 'var(--font)',
                    }}>
                      Cancel
                    </button>
                    <button style={{
                      padding: '7px 14px',
                      borderRadius: 99,
                      border: 'none',
                      background: '#E64A19',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      cursor: 'pointer',
                      fontFamily: 'var(--font)',
                    }}>
                      Track Cook
                    </button>
                  </div>
                )}
                {b.status === 'completed' && (
                  <button style={{
                    padding: '7px 14px',
                    borderRadius: 99,
                    border: '1.5px solid #E64A19',
                    background: '#FFF2ED',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#E64A19',
                    cursor: 'pointer',
                    fontFamily: 'var(--font)',
                  }}>
                    Book Again
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
