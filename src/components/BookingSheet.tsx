'use client';

import React, { useState, useEffect } from 'react';
import { ServiceItem } from '../types';
import { LUCKNOW_AREAS } from '../data/lucknowData';
import { SERVICE_ITEMS } from './HomePage';
import confetti from 'canvas-confetti';

const POPULAR_DISHES = [
  'Paneer Butter Masala', 'Dal Tadka', 'Kadhai Paneer', 'Butter Chicken',
  'Chole Masala', 'Aloo Gobi', 'Mix Veg Gravy', 'Dal Makhani',
  'Phulka / Roti', 'Jeera Rice', 'Biryani (Veg)', 'Biryani (Non-Veg)',
  'Poha / Upma', 'Aloo Paratha', 'Lachha Paratha',
  'Raita', 'Kheer', 'Fruit Custard',
];

interface BookingSheetProps {
  service: ServiceItem | null;
  mode: string;
  onClose: () => void;
}

interface BookingState {
  step: number;
  service: ServiceItem;
  area: string;
  selectedDishes: string[];
  customDish: string;
  people: number;
  timeSlot: string;
  date: string;
  name: string;
  phone: string;
  address: string;
  notes: string;
  isConfirmed: boolean;
}

const TIME_SLOTS = [
  '⚡ Express (Within 30 Mins)',
  '☀️ Breakfast (7:00 AM - 9:00 AM)',
  '🍱 Lunch (12:00 PM - 2:00 PM)',
  '🌙 Dinner (7:00 PM - 9:00 PM)',
  '📅 Custom Schedule',
];

export default function BookingSheet({ service, mode, onClose }: BookingSheetProps) {
  const defaultService = service || SERVICE_ITEMS[1];
  const today = new Date().toISOString().split('T')[0];

  const [state, setState] = useState<BookingState>({
    step: 1,
    service: defaultService,
    area: LUCKNOW_AREAS[0].name,
    selectedDishes: ['Paneer Butter Masala', 'Dal Tadka'],
    customDish: '',
    people: 4,
    timeSlot: mode === 'instant' ? '⚡ Express (Within 30 Mins)' : '🍱 Lunch (12:00 PM - 2:00 PM)',
    date: today,
    name: '',
    phone: '',
    address: '',
    notes: '',
    isConfirmed: false,
  });

  const update = (patch: Partial<BookingState>) => setState(prev => ({ ...prev, ...patch }));

  const toggleDish = (dish: string) => {
    if (state.selectedDishes.includes(dish)) {
      update({ selectedDishes: state.selectedDishes.filter(d => d !== dish) });
    } else {
      update({ selectedDishes: [...state.selectedDishes, dish] });
    }
  };

  const addCustomDish = () => {
    const d = state.customDish.trim();
    if (d && !state.selectedDishes.includes(d)) {
      update({ selectedDishes: [...state.selectedDishes, d], customDish: '' });
    }
  };

  const getPrice = () => {
    const priceMap: Record<string, number> = {
      prep: 149, cooking: 299, ondemand: 199, party: 999, hourly: 60, subscription: 2799
    };
    return priceMap[state.service.id] || 299;
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    update({ isConfirmed: true });
    try {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } catch {}
  };

  // Step labels
  const totalSteps = 3;
  const stepLabels = ['Service & Area', 'Dishes & Guests', 'Contact & Time'];

  return (
    <div className="booking-overlay" onClick={onClose}>
      <div className="booking-sheet" onClick={e => e.stopPropagation()}>
        <div className="booking-sheet-handle" />

        {/* Header */}
        <div className="booking-sheet-header">
          <div>
            <div className="booking-sheet-title">
              {state.isConfirmed ? '🎉 Booking Confirmed!' : (state.step === 1 ? 'Book a Cook' : state.step === 2 ? 'Dishes & Guests' : 'Contact Details')}
            </div>
            {!state.isConfirmed && (
              <div className="booking-sheet-subtitle">
                {mode === 'instant' ? '⚡ Instant dispatch • 30 min ETA' : mode === 'schedule' ? '📅 Schedule for later' : '🔁 Auto-repeat service'}
              </div>
            )}
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* Step Progress */}
        {!state.isConfirmed && (
          <div className="step-progress">
            {[1, 2, 3].map(s => (
              <div key={s} className={`step-bar ${state.step >= s ? 'active' : ''}`} />
            ))}
          </div>
        )}

        {/* Body */}
        {state.isConfirmed ? (
          /* ======= SUCCESS SCREEN ======= */
          <div className="success-screen">
            <div className="success-icon" style={{ color: '#E64A19' }}>✓</div>
            <div className="success-title">Cook Assigned!</div>
            <div className="success-subtitle">
              Your verified cook is on the way to <strong>{state.area}</strong>.<br />
              Expected arrival in <strong>~{LUCKNOW_AREAS.find(a => a.name === state.area)?.avgEta || '25 mins'}</strong>.
            </div>

            <div className="order-summary-box">
              <div style={{ fontWeight: 800, fontSize: '0.82rem', marginBottom: 8, color: '#1A1A1A' }}>📋 Booking Summary</div>
              <div className="order-summary-row">
                <span>Service</span>
                <strong>{state.service.title}</strong>
              </div>
              <div className="order-summary-row">
                <span>Area</span>
                <strong>{state.area}</strong>
              </div>
              <div className="order-summary-row">
                <span>Guests</span>
                <strong>{state.people} People</strong>
              </div>
              <div className="order-summary-row">
                <span>Time Slot</span>
                <strong>{state.timeSlot.replace(/[⚡☀️🍱🌙📅]/g, '').trim()}</strong>
              </div>
              <div className="order-summary-row">
                <span>Date</span>
                <strong>{state.date}</strong>
              </div>
              {state.selectedDishes.length > 0 && (
                <div className="order-summary-row" style={{ flexDirection: 'column', gap: 4 }}>
                  <span>Dishes</span>
                  <strong style={{ fontSize: '0.78rem', lineHeight: 1.4 }}>{state.selectedDishes.join(', ')}</strong>
                </div>
              )}
              <div className="order-summary-divider" />
              <div className="order-summary-row">
                <strong>Total Amount</strong>
                <strong style={{ color: '#E64A19', fontSize: '1.05rem' }}>₹{getPrice()}</strong>
              </div>
            </div>

            {/* Call button */}
            <a
              href="tel:+917318086600"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                width: '100%',
                padding: '14px',
                background: '#1A1A1A',
                color: '#fff',
                borderRadius: 99,
                fontSize: '0.92rem',
                fontWeight: 800,
                textDecoration: 'none',
                marginBottom: 10,
              }}
            >
              📞 Call Dispatch (+91 73180 86600)
            </a>

            <button
              onClick={onClose}
              style={{
                width: '100%',
                padding: '12px',
                background: 'transparent',
                border: '1.5px solid #E5E5E5',
                borderRadius: 99,
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#888',
                cursor: 'pointer',
                fontFamily: 'var(--font)',
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleConfirm}>
            <div className="booking-body">

              {/* ======= STEP 1: SERVICE + AREA ======= */}
              {state.step === 1 && (
                <div>
                  <label className="form-label">1. Select Service</label>
                  {SERVICE_ITEMS.map(svc => (
                    <div
                      key={svc.id}
                      className={`service-select-card ${state.service.id === svc.id ? 'selected' : ''}`}
                      onClick={() => update({ service: svc })}
                    >
                      <div className="service-select-card-icon">{svc.icon}</div>
                      <div>
                        <div className="service-select-card-name">{svc.title}</div>
                        <div className="service-select-card-desc">{svc.subtitle}</div>
                      </div>
                      {state.service.id === svc.id && (
                        <div style={{ marginLeft: 'auto', color: '#E64A19', fontSize: '1.1rem', flexShrink: 0 }}>✓</div>
                      )}
                    </div>
                  ))}

                  <label className="form-label" style={{ marginTop: 20 }}>2. Select Lucknow Area</label>
                  <select
                    className="form-select"
                    value={state.area}
                    onChange={e => update({ area: e.target.value })}
                    style={{ marginBottom: 4 }}
                  >
                    {LUCKNOW_AREAS.map(a => (
                      <option key={a.name} value={a.name}>
                        {a.name} — ETA ~{a.avgEta} ({a.cooksAvailable} cooks ready)
                      </option>
                    ))}
                  </select>
                  <div style={{ fontSize: '0.72rem', color: '#E64A19', fontWeight: 700, marginBottom: 8 }}>
                    <span className="pulse-dot" style={{ display: 'inline-block', marginRight: 6 }} />
                    {LUCKNOW_AREAS.find(a => a.name === state.area)?.cooksAvailable || 0} verified cooks available near you
                  </div>
                </div>
              )}

              {/* ======= STEP 2: DISHES + GUESTS ======= */}
              {state.step === 2 && (
                <div>
                  <label className="form-label">3. Select Dishes / Meal Preferences</label>
                  <div className="chips">
                    {POPULAR_DISHES.map(dish => (
                      <button
                        key={dish}
                        type="button"
                        className={`chip ${state.selectedDishes.includes(dish) ? 'selected' : ''}`}
                        onClick={() => toggleDish(dish)}
                      >
                        {state.selectedDishes.includes(dish) ? '✓ ' : '+ '}{dish}
                      </button>
                    ))}
                  </div>

                  {/* Custom dish */}
                  <div style={{ display: 'flex', gap: 8, marginTop: 14, marginBottom: 20 }}>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Add custom dish (e.g. Baingan Bharta...)"
                      value={state.customDish}
                      onChange={e => update({ customDish: e.target.value })}
                      onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addCustomDish())}
                    />
                    <button
                      type="button"
                      onClick={addCustomDish}
                      style={{
                        padding: '10px 16px',
                        border: '1.5px solid #E5E5E5',
                        borderRadius: 8,
                        background: 'transparent',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#E64A19',
                        cursor: 'pointer',
                        fontFamily: 'var(--font)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      + Add
                    </button>
                  </div>

                  <label className="form-label">4. How many people?</label>
                  <div className="people-buttons">
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20].map(n => (
                      <button
                        key={n}
                        type="button"
                        className={`people-btn ${state.people === n ? 'selected' : ''}`}
                        onClick={() => update({ people: n })}
                      >
                        {n === 20 ? '20+' : n}
                      </button>
                    ))}
                  </div>

                  {/* Selected dishes preview */}
                  {state.selectedDishes.length > 0 && (
                    <div style={{
                      marginTop: 16,
                      background: '#FFF8F4',
                      borderRadius: 10,
                      padding: '10px 14px',
                      border: '1px solid #FFD4C2',
                    }}>
                      <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#E64A19', marginBottom: 6 }}>
                        Selected ({state.selectedDishes.length}):
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#BF3A10', lineHeight: 1.5 }}>
                        {state.selectedDishes.join(' • ')}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ======= STEP 3: CONTACT + TIME ======= */}
              {state.step === 3 && (
                <div>
                  <label className="form-label">5. Select Time Slot</label>
                  <div className="time-slots" style={{ marginBottom: 20 }}>
                    {TIME_SLOTS.map(slot => (
                      <button
                        key={slot}
                        type="button"
                        className={`time-slot ${state.timeSlot === slot ? 'selected' : ''}`}
                        onClick={() => update({ timeSlot: slot })}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  <label className="form-label">6. Select Date</label>
                  <input
                    type="date"
                    className="form-input"
                    value={state.date}
                    min={today}
                    onChange={e => update({ date: e.target.value })}
                    style={{ marginBottom: 20 }}
                  />

                  <label className="form-label">7. Your Contact & Address</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Full Name *"
                      required
                      value={state.name}
                      onChange={e => update({ name: e.target.value })}
                    />
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="Phone Number *"
                      required
                      value={state.phone}
                      onChange={e => update({ phone: e.target.value })}
                      pattern="[0-9]{10}"
                    />
                  </div>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="House / Flat / Apartment & Landmark *"
                    required
                    value={state.address}
                    onChange={e => update({ address: e.target.value })}
                    style={{ marginBottom: 10 }}
                  />
                  <textarea
                    className="form-input"
                    placeholder="Special instructions (less oil, extra spicy, etc.)..."
                    rows={2}
                    value={state.notes}
                    onChange={e => update({ notes: e.target.value })}
                    style={{ resize: 'none' }}
                  />

                  {/* Price summary */}
                  <div style={{
                    marginTop: 16,
                    background: '#FFF8F4',
                    borderRadius: 10,
                    padding: '12px 14px',
                    border: '1px solid #FFD4C2',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#E64A19' }}>Total Amount</div>
                      <div style={{ fontSize: '0.72rem', color: '#888' }}>{state.service.title} • {state.people} guests</div>
                    </div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#BF3A10' }}>₹{getPrice()}</div>
                  </div>
                </div>
              )}

            </div>

            {/* Navigation Buttons */}
            <div className="btn-row">
              {state.step > 1 ? (
                <button
                  type="button"
                  className="btn-back"
                  onClick={() => update({ step: state.step - 1 })}
                >
                  ← Back
                </button>
              ) : (
                <button
                  type="button"
                  className="btn-back"
                  onClick={onClose}
                >
                  Cancel
                </button>
              )}

              {state.step < totalSteps ? (
                <button
                  type="button"
                  className="btn-next"
                  onClick={() => update({ step: state.step + 1 })}
                >
                  Next →
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn-next"
                >
                  ✓ Confirm Booking
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
