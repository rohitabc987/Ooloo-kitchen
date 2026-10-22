'use client';

import React, { useState } from 'react';
import { Check, Clock, ArrowRight, Users, UtensilsCrossed, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function PricingSection() {
  const { selectedArea, handleOpenBooking } = useApp();
  const [peopleCount, setPeopleCount] = useState(4);
  const [dishesCount, setDishesCount] = useState(3);
  const [isPartyMode, setIsPartyMode] = useState(false);

  // Price Calculation Logic
  const calcHours = isPartyMode ? 3 : (peopleCount <= 3 && dishesCount <= 2 ? 1 : 2);
  const calcPrice = isPartyMode ? 999 * 3 : (calcHours === 1 ? 299 : 399);

  // Preset Handlers
  const handleSelectPreset = (hours: number) => {
    setIsPartyMode(false);
    if (hours === 1) {
      setPeopleCount(3);
      setDishesCount(2);
    } else if (hours === 2) {
      setPeopleCount(5);
      setDishesCount(3);
    }
  };

  return (
    <section id="pricing" style={{ padding: '36px 0 60px 0', backgroundColor: 'transparent', width: '100%' }}>
      <div className="container">

        {/* Unified Full-Width Dark Pricing & Estimator Card */}
        <div style={{
          background: 'var(--bg-dark)',
          borderRadius: 'var(--radius-lg)',
          padding: '48px 40px',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)'
        }}>
          {/* Ambient Background Glow */}
          <div style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(230,74,25,0.18) 0%, rgba(0,0,0,0) 70%)',
            pointerEvents: 'none'
          }}></div>

          {/* Section Header inside Unified Card */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '40px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '32px'
          }}>
            <div style={{ maxWidth: '680px' }}>
              <div style={{ fontSize: 'clamp(0.82rem, 1vw, 0.95rem)', fontWeight: 800, letterSpacing: '0.08em', color: '#A0A5AB', textTransform: 'uppercase', marginBottom: '12px' }}>
                FLEXIBLE HOURLY BOOKING & ESTIMATOR
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)', color: 'white', fontWeight: 850, lineHeight: 1.12, marginBottom: '16px' }}>
                Pay only for <span className="italic-serif" style={{ color: '#FF7B54' }}>what you cook.</span>
              </h1>
              <p style={{ color: '#D0D4D8', fontSize: 'clamp(1rem, 1.4vw, 1.25rem)', lineHeight: 1.65 }}>
                Transparent pricing with no hidden charges. Select a quick plan or customize your meal for an instant quote in {selectedArea.name}.
              </p>
            </div>

            {/* Quick Preset Selector Cards inside Header */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {/* 1 Hour Preset */}
              <div
                onClick={() => handleSelectPreset(1)}
                style={{
                  background: !isPartyMode && calcHours === 1 ? 'var(--primary)' : 'rgba(255, 255, 255, 0.06)',
                  border: !isPartyMode && calcHours === 1 ? '2px solid var(--primary)' : '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  minWidth: '130px',
                  transition: 'all 0.2s ease'
                }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: !isPartyMode && calcHours === 1 ? '#FFF' : '#A0A5AB', textTransform: 'uppercase' }}>1 HOUR</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', margin: '4px 0', fontFamily: 'var(--font-heading)' }}>₹299</div>
                <div style={{ fontSize: '0.75rem', color: !isPartyMode && calcHours === 1 ? '#FFE4DC' : '#A0A5AB' }}>Up to 3 people</div>
              </div>

              {/* 2 Hours Preset (Popular) */}
              <div
                onClick={() => handleSelectPreset(2)}
                style={{
                  background: !isPartyMode && calcHours === 2 ? 'var(--primary)' : 'rgba(255, 255, 255, 0.06)',
                  border: !isPartyMode && calcHours === 2 ? '2px solid #FF7B54' : '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  minWidth: '140px',
                  position: 'relative',
                  transition: 'all 0.2s ease'
                }}>
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#FF7B54',
                  color: '#FFF',
                  fontSize: '0.62rem',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '99px',
                  whiteSpace: 'nowrap'
                }}>POPULAR</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: !isPartyMode && calcHours === 2 ? '#FFF' : '#A0A5AB', textTransform: 'uppercase' }}>2 HOURS</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', margin: '4px 0', fontFamily: 'var(--font-heading)' }}>₹399</div>
                <div style={{ fontSize: '0.75rem', color: !isPartyMode && calcHours === 2 ? '#FFE4DC' : '#A0A5AB' }}>Up to 6 people</div>
              </div>

              {/* Extra 30 Min Info */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px dashed rgba(255, 255, 255, 0.15)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  textAlign: 'center',
                  minWidth: '120px'
                }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#A0A5AB', textTransform: 'uppercase' }}>EXTRA 30 MIN</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FF7B54', margin: '4px 0', fontFamily: 'var(--font-heading)' }}>+₹99</div>
                <div style={{ fontSize: '0.75rem', color: '#A0A5AB' }}>Add anytime</div>
              </div>
            </div>
          </div>

          {/* Unified Body Grid: Controls & Instant Output */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '40px',
            alignItems: 'stretch'
          }} className="estimator-grid">

            {/* Left Controls Column */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              
              <div>
                {/* Party Mode Switch */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  marginBottom: '28px'
                }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Sparkles size={16} color="#FF7B54" />
                      Hosting a party or gathering?
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#A0A5AB', marginTop: '2px' }}>
                      Up to 20 guests with 2 trained dedicated cooks
                    </div>
                  </div>
                  <button
                    onClick={() => setIsPartyMode(!isPartyMode)}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '99px',
                      border: 'none',
                      background: isPartyMode ? 'var(--primary)' : 'rgba(255, 255, 255, 0.12)',
                      color: '#FFF',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontSize: '0.82rem',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s ease'
                    }}>
                    {isPartyMode ? '✓ Party Enabled (2 Cooks)' : 'Standard Meal'}
                  </button>
                </div>

                {!isPartyMode && (
                  <>
                    {/* People Slider */}
                    <div style={{ marginBottom: '28px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Users size={16} color="var(--primary)" />
                          Number of People:
                        </span>
                        <span style={{ fontWeight: 800, color: '#FF7B54', fontSize: '1.15rem' }}>{peopleCount} People</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={peopleCount}
                        onChange={(e) => setPeopleCount(parseInt(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--primary)', cursor: 'pointer', height: '6px' }}
                      />
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#A0A5AB', marginTop: '6px' }}>
                        <span>1 Person</span>
                        <span>5 People</span>
                        <span>10 People</span>
                      </div>
                    </div>

                    {/* Dishes Slider */}
                    <div style={{ marginBottom: '28px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <UtensilsCrossed size={16} color="var(--primary)" />
                          Main Dishes + Breads:
                        </span>
                        <span style={{ fontWeight: 800, color: '#FF7B54', fontSize: '1.15rem' }}>{dishesCount} Dishes</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="6"
                        value={dishesCount}
                        onChange={(e) => setDishesCount(parseInt(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--primary)', cursor: 'pointer', height: '6px' }}
                      />
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#A0A5AB', marginTop: '6px' }}>
                        <span>1 Dish</span>
                        <span>3 Dishes</span>
                        <span>6+ Dishes</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Location indicator footer */}
              <div style={{
                fontSize: '0.88rem',
                color: '#A0A5AB',
                background: 'rgba(255, 255, 255, 0.04)',
                padding: '14px 18px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                📍 Active Service Area: <strong style={{ color: '#FFFFFF' }}>{selectedArea.name}</strong> • Arrival ETA: <strong style={{ color: 'var(--green)' }}>{selectedArea.avgEta}</strong>
              </div>

            </div>

            {/* Right Side: Live Price Output Summary Card */}
            <div style={{
              background: '#FFFFFF',
              color: 'var(--text-primary)',
              borderRadius: 'var(--radius-md)',
              padding: '32px 28px',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--border-light)',
                  paddingBottom: '14px',
                  marginBottom: '16px'
                }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                    YOUR MEAL ESTIMATE
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    background: 'var(--green-light)',
                    color: 'var(--green)',
                    padding: '3px 10px',
                    borderRadius: '99px'
                  }}>
                    Instant Booking
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', margin: '16px 0 12px 0' }}>
                  <span style={{ fontSize: '3.4rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                    ₹{calcPrice}
                  </span>
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    for {calcHours} Hour{calcHours > 1 ? 's' : ''}
                  </span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '22px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                    <Check size={18} color="var(--green)" />
                    <strong>{isPartyMode ? '2 Dedicated Uniformed Party Cooks' : '1 Verified Background-Checked Cook'}</strong>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                    <Check size={18} color="var(--green)" />
                    Cook arrives at <strong>{selectedArea.name}</strong> in ~{selectedArea.avgEta}
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                    <Check size={18} color="var(--green)" />
                    Customized spice, oil & salt to your exact taste
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleOpenBooking()}
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '16px 24px', fontSize: '1.02rem' }}>
                <span>Book This Slot ({selectedArea.name})</span>
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>

        {/* ===================== PASS & SUBSCRIPTION SAVINGS CARDS ===================== */}
        <div style={{ marginTop: '50px' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 32px auto' }}>
            <div className="page-badge" style={{ justifyContent: 'center' }}>
              <span className="page-badge-dot" />
              <span>SUBSCRIPTIONS & PASSES</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 850, color: '#121417', lineHeight: 1.15 }}>
              Save more with <span className="italic-serif" style={{ color: 'var(--primary)' }}>flexible meal passes.</span>
            </h2>
          </div>

          <div className="grid-2">
            {/* ooloo PASS Card */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '36px',
              border: '2px solid var(--primary)',
              boxShadow: '0 8px 30px rgba(230,74,25,0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-14px',
                right: '28px',
                background: 'var(--primary)',
                color: '#FFF',
                fontSize: '0.75rem',
                fontWeight: 900,
                padding: '4px 14px',
                borderRadius: '99px',
                letterSpacing: '0.05em'
              }}>
                MOST POPULAR PASS
              </div>

              <div>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🎟️</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  OOLOO KITCHEN PASS
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 850, color: '#121417', margin: '6px 0 10px 0' }}>
                  Daily Meal Service Pass
                </h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--primary)' }}>₹297</span>
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>₹750</span>
                  <span style={{ background: 'var(--green-light)', color: 'var(--green)', fontSize: '0.78rem', fontWeight: 800, padding: '3px 8px', borderRadius: '99px' }}>
                    SAVE 60%
                  </span>
                </div>
                <p style={{ fontSize: '1rem', color: '#4A4F55', lineHeight: 1.6, marginBottom: '20px' }}>
                  Get 3 cook visits with 30 days validity. Valid for Gomti Nagar, Hazratganj, and all active Lucknow areas.
                </p>
              </div>

              <button
                onClick={() => handleOpenBooking()}
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  borderRadius: '14px',
                  background: 'var(--primary)',
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                Book Pass Now →
              </button>
            </div>

            {/* Monthly Subscription Card */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '36px',
              border: '1.5px solid var(--border-light)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📅</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  MONTHLY DEDICATED CHEF
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 850, color: '#121417', margin: '6px 0 10px 0' }}>
                  Dedicated Daily Cook Plan
                </h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '2.4rem', fontWeight: 900, color: '#121417' }}>₹2,799</span>
                  <span style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>/ month</span>
                </div>
                <p style={{ fontSize: '1rem', color: '#4A4F55', lineHeight: 1.6, marginBottom: '20px' }}>
                  Dedicated verified cook visits your home daily for lunch or dinner. Free replacement cook guarantee if your cook is ever sick.
                </p>
              </div>

              <button
                onClick={() => handleOpenBooking()}
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  borderRadius: '14px',
                  background: 'transparent',
                  color: '#121417',
                  border: '2px solid var(--border)',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                Request Monthly Cook Plan →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
