'use client';

import React, { useState } from 'react';
import { X, Check, MessageSquare, Phone, ChevronDown, ChevronUp, Plus, Minus, Clock, Calendar, Users, Utensils, Sparkles, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { SERVICES } from '../data/lucknowData';
import { ServiceItem } from '../types';

const POPULAR_DISHES = [
  'Paneer Butter Masala',
  'Butter Phulka / Plain Roti',
  'Dal Tadka',
  'Awadhi Dum Biryani',
  'Kadhai Paneer',
  'Jeera Rice',
  'Mix Veg Gravy',
  'Dal Makhani',
  'Chole Masala',
  'Lachha Paratha',
  'Aloo Paratha',
  'Poha / Upma',
  'Fresh Salad & Raita',
];

const TIME_SLOTS = [
  { id: 'express', label: '⚡ Express (Within 30 Mins)', desc: 'Nearest cook dispatched immediately' },
  { id: 'breakfast', label: '☀️ Breakfast (7:00 AM - 9:00 AM)', desc: 'Fresh breakfast before work' },
  { id: 'lunch', label: '🍱 Lunch (12:00 PM - 2:00 PM)', desc: 'Hot, freshly cooked lunch' },
  { id: 'dinner', label: '🌙 Dinner (7:00 PM - 9:00 PM)', desc: 'Warm family dinner' },
  { id: 'custom', label: '📅 Custom Schedule', desc: 'Pick your preferred time' },
];

const SERVICE_PRICES: Record<string, number> = {
  prep: 199,
  cooking: 299,
  ondemand: 299,
  party: 1999,
  kitchen_cleaning: 199,
  utensils: 199,
  serving: 199,
  subscription: 5999,
};

export default function BookingModal() {
  const {
    selectedArea,
    isBookingModalOpen,
    handleCloseBooking,
    bookingData,
    updateBookingData,
  } = useApp();

  const [isChangingService, setIsChangingService] = useState(false);

  if (!isBookingModalOpen) return null;

  const {
    step = 1,
    service = SERVICES[1],
    selectedDishes = ['Paneer Butter Masala', 'Butter Phulka / Plain Roti'],
    customDish = '',
    peopleCount = 4,
    timeSlot = '⚡ Express (Within 30 Mins)',
    bookingDate = new Date().toISOString().split('T')[0],
    name = '',
    phone = '',
    address = '',
    notes = '',
    isSubmitted = false,
  } = bookingData;

  const currentPrice = (() => {
    if (service?.id === 'party') {
      if (peopleCount <= 10) return 1999;
      if (peopleCount <= 20) return 2999;
      if (peopleCount <= 30) return 3999;
      if (peopleCount <= 40) return 4999;
      return 5999;
    }
    if (service?.id === 'cooking' && peopleCount > 3) return 399;
    return SERVICE_PRICES[service?.id || 'cooking'] || 299;
  })();

  const toggleDish = (dish: string) => {
    if (selectedDishes.includes(dish)) {
      updateBookingData({ selectedDishes: selectedDishes.filter(d => d !== dish) });
    } else {
      updateBookingData({ selectedDishes: [...selectedDishes, dish] });
    }
  };

  const handleAddCustomDish = () => {
    const trimmed = customDish.trim();
    if (trimmed && !selectedDishes.includes(trimmed)) {
      updateBookingData({
        selectedDishes: [...selectedDishes, trimmed],
        customDish: '',
      });
    }
  };

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    updateBookingData({ isSubmitted: true });
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getWhatsAppMessage = () => {
    const dishList = selectedDishes.length > 0 ? selectedDishes.join(', ') : 'Custom Menu';
    const text =
      `*New Cook Booking on ooloo!* 🍳\n\n` +
      `*Name:* ${name || 'Customer'}\n` +
      `*Phone:* ${phone || 'Not provided'}\n` +
      `*Area:* ${selectedArea.name} (${selectedArea.code})\n` +
      `*Address:* ${address || 'Lucknow'}\n` +
      `*Service:* ${service.title} (₹${currentPrice})\n` +
      `*People:* ${peopleCount} Persons\n` +
      `*Preferred Slot:* ${timeSlot} (${bookingDate})\n` +
      `*Selected Dishes:* ${dishList}\n` +
      `*Special Notes:* ${notes || 'None'}\n\n` +
      `Please confirm cook assignment for ${selectedArea.name}!`;
    return encodeURIComponent(text);
  };

  return (
    <div
      className="booking-overlay"
      onClick={handleCloseBooking}
    >
      <div
        className="booking-sheet"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile handle indicator */}
        <div className="booking-sheet-handle" />

        {/* Header */}
        <div
          style={{
            padding: '16px 18px',
            borderBottom: '1px solid #F1F5F9',
            position: 'sticky',
            top: 0,
            background: '#FFFFFF',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
            {/* Area & Reassurance Badge (No area selector dropdown) */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '0.72rem',
                fontWeight: 800,
                color: '#E64A19',
                background: '#FFF2ED',
                padding: '3px 10px',
                borderRadius: '99px',
                whiteSpace: 'nowrap',
              }}
            >
              <MapPin size={12} />
              <span>Delivering to {selectedArea.name} • ETA ~{selectedArea.avgEta}</span>
            </div>

            <button
              onClick={handleCloseBooking}
              aria-label="Close"
              style={{
                background: '#F8FAFC',
                border: 'none',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748B',
                transition: 'background 0.2s',
                flexShrink: 0,
              }}
            >
              <X size={17} />
            </button>
          </div>

          <h3
            style={{
              fontSize: '1.22rem',
              fontWeight: 800,
              color: '#121417',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
            }}
          >
            {isSubmitted
              ? 'Cook Dispatched!'
              : step === 1
              ? 'Choose Dishes & Guests'
              : step === 2
              ? 'Select Time & Date'
              : 'Contact & Delivery Address'}
          </h3>
        </div>

        {/* Selected Service Bar (Direct Pre-selected Service with quick change toggle) */}
        {!isSubmitted && (
          <div
            style={{
              background: '#F8FAFC',
              padding: '10px 18px',
              borderBottom: '1px solid #F1F5F9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
              <span style={{ fontSize: '1.15rem', flexShrink: 0 }}>🍳</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0, overflow: 'hidden' }}>
                <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#1E293B', whiteSpace: 'nowrap' }}>
                  {service?.title || 'Full Meal Cooking'}
                </span>
                <span
                  style={{
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    color: '#E64A19',
                    whiteSpace: 'nowrap',
                  }}
                >
                  ₹{currentPrice}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsChangingService(!isChangingService)}
              style={{
                background: '#FFFFFF',
                border: '1px solid #CBD5E1',
                borderRadius: '99px',
                padding: '4px 10px',
                fontSize: '0.74rem',
                fontWeight: 700,
                color: '#475569',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                flexShrink: 0,
                whiteSpace: 'nowrap',
              }}
            >
              <span>{isChangingService ? 'Hide' : 'Change'}</span>
              {isChangingService ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>
          </div>
        )}

        {/* Quick Service Switcher Dropdown (only if user taps Change) */}
        {isChangingService && !isSubmitted && (
          <div
            style={{
              background: '#FFFFFF',
              borderBottom: '1px solid #E2E8F0',
              padding: '12px 18px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '8px',
            }}
          >
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                onClick={() => {
                  updateBookingData({ service: svc });
                  setIsChangingService(false);
                }}
                style={{
                  padding: '9px 11px',
                  borderRadius: '10px',
                  border: service.id === svc.id ? '2px solid #E64A19' : '1px solid #E2E8F0',
                  background: service.id === svc.id ? '#FFF5F0' : '#FFFFFF',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#1E293B' }}>
                  {svc.title}
                </div>
                <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#E64A19', marginTop: '2px' }}>
                  ₹{SERVICE_PRICES[svc.id] || 299}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step Progress Bar */}
        {!isSubmitted && (
          <div style={{ display: 'flex', gap: '6px', padding: '14px 18px 0 18px' }}>
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                style={{
                  flex: 1,
                  height: '4px',
                  borderRadius: '99px',
                  background: step >= s ? '#E64A19' : '#E2E8F0',
                  transition: 'background 0.3s ease',
                }}
              />
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div style={{ padding: '16px 18px 24px', flex: 1 }}>
          {isSubmitted ? (
            /* ======= SUCCESS CONFIRMATION ======= */
            <div style={{ textAlign: 'center', padding: '10px 0' }}>
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  background: '#ECFDF5',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto',
                  border: '3px solid #A7F3D0',
                }}
              >
                <Check size={36} strokeWidth={2.5} />
              </div>

              <h2
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: '#121417',
                  marginBottom: '6px',
                }}
              >
                Cook Assigned to {selectedArea.name}!
              </h2>
              <p
                style={{
                  color: '#64748B',
                  fontSize: '0.92rem',
                  maxWidth: '420px',
                  margin: '0 auto 20px auto',
                  lineHeight: 1.5,
                }}
              >
                Our verified cook is ready to dispatch. Send your booking on WhatsApp for instant confirmation.
              </p>

              {/* Order Summary Card */}
              <div
                style={{
                  background: '#F8FAFC',
                  borderRadius: '16px',
                  padding: '18px',
                  textAlign: 'left',
                  marginBottom: '24px',
                  border: '1px solid #E2E8F0',
                  fontSize: '0.88rem',
                }}
              >
                <div
                  style={{
                    fontWeight: 800,
                    marginBottom: '10px',
                    color: '#0F172A',
                    fontSize: '0.82rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  📋 Booking Summary
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    color: '#475569',
                    fontSize: '0.86rem',
                  }}
                >
                  <div>
                    <span style={{ color: '#94A3B8' }}>Service: </span>
                    <strong style={{ color: '#1E293B' }}>{service.title}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#94A3B8' }}>Total: </span>
                    <strong style={{ color: '#E64A19' }}>₹{currentPrice}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#94A3B8' }}>Area: </span>
                    <strong style={{ color: '#1E293B' }}>{selectedArea.name}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#94A3B8' }}>ETA: </span>
                    <strong style={{ color: '#10B981' }}>~{selectedArea.avgEta}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#94A3B8' }}>Guests: </span>
                    <strong style={{ color: '#1E293B' }}>{peopleCount} People</strong>
                  </div>
                  <div>
                    <span style={{ color: '#94A3B8' }}>Slot: </span>
                    <strong style={{ color: '#1E293B' }}>{timeSlot.replace(/[⚡☀️🍱🌙📅]/g, '').trim()}</strong>
                  </div>
                </div>

                {selectedDishes.length > 0 && (
                  <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #E2E8F0' }}>
                    <div style={{ color: '#94A3B8', fontSize: '0.78rem', marginBottom: '4px' }}>
                      Selected Dishes:
                    </div>
                    <div style={{ color: '#1E293B', fontWeight: 600, fontSize: '0.82rem', lineHeight: 1.4 }}>
                      {selectedDishes.join(', ')}
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href={`https://wa.me/917318086600?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '14px',
                    borderRadius: '99px',
                    background: '#25D366',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '0.98rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
                  }}
                >
                  <MessageSquare size={19} />
                  <span>Send Confirmation via WhatsApp</span>
                </a>

                <a
                  href="tel:+917318086600"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%',
                    padding: '12px',
                    borderRadius: '99px',
                    background: '#121417',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                  }}
                >
                  <Phone size={17} />
                  <span>Call Dispatch (+91 73180 86600)</span>
                </a>

                <button
                  type="button"
                  onClick={handleCloseBooking}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#64748B',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    padding: '8px',
                    cursor: 'pointer',
                  }}
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleCompleteBooking}>
              {/* ======= STEP 1: DISHES & GUESTS ======= */}
              {step === 1 && (
                <div>
                  {/* People Count Selector */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: '#F8FAFC',
                      padding: '12px 14px',
                      borderRadius: '14px',
                      border: '1px solid #E2E8F0',
                      marginBottom: '18px',
                      gap: '8px',
                    }}
                  >
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontWeight: 800, fontSize: '0.88rem', color: '#1E293B', whiteSpace: 'nowrap' }}>
                        Number of Guests
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#64748B', marginTop: '1px' }}>
                        Cook portions adjusted accordingly
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                      <button
                        type="button"
                        onClick={() => updateBookingData({ peopleCount: Math.max(1, peopleCount - 1) })}
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          border: '1px solid #CBD5E1',
                          background: '#FFFFFF',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#475569',
                          fontWeight: 800,
                          flexShrink: 0,
                        }}
                      >
                        <Minus size={14} />
                      </button>
                      <span style={{ fontWeight: 800, fontSize: '1.05rem', minWidth: '22px', textAlign: 'center', color: '#1E293B' }}>
                        {peopleCount}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateBookingData({ peopleCount: peopleCount + 1 })}
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          border: '1px solid #CBD5E1',
                          background: '#FFFFFF',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#475569',
                          fontWeight: 800,
                          flexShrink: 0,
                        }}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Dishes Selection */}
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <label style={{ fontSize: '0.88rem', fontWeight: 800, color: '#1E293B' }}>
                        Select Dishes / Meal Items
                      </label>
                      <span style={{ fontSize: '0.74rem', color: '#64748B' }}>
                        {selectedDishes.length} selected
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxHeight: '180px', overflowY: 'auto', padding: '2px' }}>
                      {POPULAR_DISHES.map((dish) => {
                        const isSelected = selectedDishes.includes(dish);
                        return (
                          <button
                            key={dish}
                            type="button"
                            onClick={() => toggleDish(dish)}
                            style={{
                              padding: '7px 12px',
                              borderRadius: '99px',
                              border: isSelected ? '1.5px solid #E64A19' : '1px solid #E2E8F0',
                              background: isSelected ? '#FFF5F0' : '#FFFFFF',
                              color: isSelected ? '#E64A19' : '#334155',
                              fontSize: '0.78rem',
                              fontWeight: isSelected ? 700 : 500,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '5px',
                              transition: 'all 0.15s ease',
                            }}
                          >
                            <span>{isSelected ? '✓' : '+'}</span>
                            <span>{dish}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Add Custom Dish Input */}
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                    <input
                      type="text"
                      placeholder="e.g. Baingan Bharta, Dal Fry..."
                      value={customDish}
                      onChange={(e) => updateBookingData({ customDish: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddCustomDish();
                        }
                      }}
                      style={{
                        flex: 1,
                        minWidth: 0,
                        boxSizing: 'border-box',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        border: '1.5px solid #E2E8F0',
                        fontSize: '0.84rem',
                        outline: 'none',
                        color: '#1E293B',
                      }}
                    />
                    <button
                      type="button"
                      onClick={handleAddCustomDish}
                      style={{
                        padding: '10px 14px',
                        borderRadius: '10px',
                        background: '#F1F5F9',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#334155',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                    >
                      + Add
                    </button>
                  </div>

                  {/* Bottom Navigation */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '14px',
                      borderTop: '1px solid #F1F5F9',
                      gap: '12px',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 700, whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Total Charge
                      </div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#E64A19', lineHeight: 1.15, marginTop: '2px' }}>
                        ₹{currentPrice}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => updateBookingData({ step: 2 })}
                      style={{
                        background: '#E64A19',
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '12px 20px',
                        borderRadius: '99px',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 12px rgba(230, 74, 25, 0.3)',
                      }}
                    >
                      Next: Choose Slot →
                    </button>
                  </div>
                </div>
              )}

              {/* ======= STEP 2: TIME & DATE ======= */}
              {step === 2 && (
                <div>
                  <label style={{ fontSize: '0.88rem', fontWeight: 800, color: '#1E293B', display: 'block', marginBottom: '12px' }}>
                    Select Preferred Time Slot
                  </label>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = timeSlot === slot.label;
                      return (
                        <div
                          key={slot.id}
                          onClick={() => updateBookingData({ timeSlot: slot.label })}
                          style={{
                            padding: '12px 14px',
                            borderRadius: '12px',
                            border: isSelected ? '2px solid #E64A19' : '1px solid #E2E8F0',
                            background: isSelected ? '#FFF5F0' : '#FFFFFF',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          <div>
                            <div style={{ fontWeight: 800, fontSize: '0.88rem', color: '#1E293B' }}>
                              {slot.label}
                            </div>
                            <div style={{ fontSize: '0.74rem', color: '#64748B', marginTop: '2px' }}>
                              {slot.desc}
                            </div>
                          </div>
                          {isSelected && (
                            <div style={{ color: '#E64A19', fontWeight: 800, fontSize: '1.1rem' }}>✓</div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Booking Date */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1E293B', display: 'block', marginBottom: '6px' }}>
                      Cooking Date
                    </label>
                    <input
                      type="date"
                      value={bookingDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => updateBookingData({ bookingDate: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #E2E8F0',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#1E293B',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Bottom Navigation */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '14px',
                      borderTop: '1px solid #F1F5F9',
                      gap: '12px',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => updateBookingData({ step: 1 })}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#64748B',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        cursor: 'pointer',
                        padding: '8px 4px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      ← Back
                    </button>

                    <button
                      type="button"
                      onClick={() => updateBookingData({ step: 3 })}
                      style={{
                        background: '#E64A19',
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '12px 20px',
                        borderRadius: '99px',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 12px rgba(230, 74, 25, 0.3)',
                      }}
                    >
                      Next: Address →
                    </button>
                  </div>
                </div>
              )}

              {/* ======= STEP 3: CONTACT & ADDRESS ======= */}
              {step === 3 && (
                <div>
                  <div className="booking-form-two-col">
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#1E293B', display: 'block', marginBottom: '6px' }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priyanshu Sharma"
                        value={name}
                        onChange={(e) => updateBookingData({ name: e.target.value })}
                        style={{
                          width: '100%',
                          boxSizing: 'border-box',
                          padding: '10px 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #E2E8F0',
                          fontSize: '0.88rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#1E293B', display: 'block', marginBottom: '6px' }}>
                        WhatsApp / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => updateBookingData({ phone: e.target.value })}
                        style={{
                          width: '100%',
                          boxSizing: 'border-box',
                          padding: '10px 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #E2E8F0',
                          fontSize: '0.88rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '14px' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#1E293B', display: 'block', marginBottom: '6px' }}>
                      House / Flat No., Society & Street ({selectedArea.name}) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Flat 402, Tower B, Eldeco Greens"
                      value={address}
                      onChange={(e) => updateBookingData({ address: e.target.value })}
                      style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #E2E8F0',
                        fontSize: '0.88rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '18px' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#1E293B', display: 'block', marginBottom: '6px' }}>
                      Cooking Notes & Spice Preference (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Less oil & mild spice for kids"
                      value={notes}
                      onChange={(e) => updateBookingData({ notes: e.target.value })}
                      style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #E2E8F0',
                        fontSize: '0.85rem',
                        outline: 'none',
                        resize: 'none',
                      }}
                    />
                  </div>

                  {/* Trust Pill */}
                  <div
                    style={{
                      background: '#F0FDF4',
                      border: '1px solid #BBF7D0',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontSize: '0.78rem',
                      color: '#15803D',
                      fontWeight: 600,
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      lineHeight: 1.45,
                    }}
                  >
                    <span style={{ flexShrink: 0 }}>🛡️</span>
                    <span>Verified Cook • Zero advance payment • Pay after meal</span>
                  </div>

                  {/* Submit Actions */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '14px',
                      borderTop: '1px solid #F1F5F9',
                      gap: '12px',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => updateBookingData({ step: 2 })}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#64748B',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        cursor: 'pointer',
                        padding: '8px 4px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      ← Back
                    </button>

                    <button
                      type="submit"
                      style={{
                        background: '#E64A19',
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '12px 22px',
                        borderRadius: '99px',
                        fontWeight: 800,
                        fontSize: '0.92rem',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 14px rgba(230, 74, 25, 0.35)',
                      }}
                    >
                      Confirm Booking (₹{currentPrice})
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
