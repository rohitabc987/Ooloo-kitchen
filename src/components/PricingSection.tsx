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

        {/* ===================== OUTSIDE: SECTION HEADER ===================== */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.78rem',
            fontWeight: 800,
            letterSpacing: '0.06em',
            color: 'var(--primary)',
            background: 'var(--primary-light)',
            padding: '4px 12px',
            borderRadius: '99px',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            FLEXIBLE HOURLY BOOKING & ESTIMATOR
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
            color: '#121417',
            fontWeight: 850,
            lineHeight: 1.15,
            marginBottom: '12px',
            letterSpacing: '-0.02em'
          }}>
            Pay only for <span className="italic-serif" style={{ color: 'var(--primary)' }}>what you cook.</span>
          </h1>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: 'clamp(0.98rem, 1.2vw, 1.12rem)',
            lineHeight: 1.6,
            maxWidth: '680px'
          }}>
            Transparent pricing with no hidden charges. Select a quick plan or customize your meal for an instant quote in {selectedArea.name}.
          </p>
        </div>

        {/* ===================== OUTSIDE: QUICK PRESET CARDS ===================== */}
        <div className="pricing-presets-grid">
          {/* 1 Hour Preset */}
          <div
            onClick={() => handleSelectPreset(1)}
            className="pricing-preset-card"
            style={{
              background: '#FFFFFF',
              border: !isPartyMode && calcHours === 1 ? '2px solid var(--primary)' : '1.5px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: '16px 14px',
              cursor: 'pointer',
              textAlign: 'center',
              boxShadow: !isPartyMode && calcHours === 1 ? '0 8px 24px rgba(230,74,25,0.14)' : '0 2px 8px rgba(0,0,0,0.04)',
              transform: !isPartyMode && calcHours === 1 ? 'translateY(-2px)' : 'none',
              transition: 'all 0.2s ease',
              position: 'relative'
            }}>
            <div className="pricing-preset-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: !isPartyMode && calcHours === 1 ? 'var(--primary)' : 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              1 HOUR
            </div>
            <div className="pricing-preset-price" style={{ fontSize: '1.9rem', fontWeight: 800, color: '#121417', margin: '4px 0', fontFamily: 'var(--font-heading)' }}>
              ₹299
            </div>
            <div className="pricing-preset-sub" style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Up to 3 people
            </div>
          </div>

          {/* 2 Hours Preset (Popular) */}
          <div
            onClick={() => handleSelectPreset(2)}
            className="pricing-preset-card"
            style={{
              background: '#FFFFFF',
              border: !isPartyMode && calcHours === 2 ? '2px solid var(--primary)' : '1.5px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: '16px 14px',
              cursor: 'pointer',
              textAlign: 'center',
              boxShadow: !isPartyMode && calcHours === 2 ? '0 8px 24px rgba(230,74,25,0.16)' : '0 2px 8px rgba(0,0,0,0.04)',
              transform: !isPartyMode && calcHours === 2 ? 'translateY(-2px)' : 'none',
              position: 'relative',
              transition: 'all 0.2s ease'
            }}>
            <div style={{
              position: 'absolute',
              top: '-11px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'var(--primary)',
              color: '#FFF',
              fontSize: '0.62rem',
              fontWeight: 800,
              padding: '2px 9px',
              borderRadius: '99px',
              whiteSpace: 'nowrap',
              letterSpacing: '0.04em'
            }}>POPULAR</div>
            <div className="pricing-preset-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: !isPartyMode && calcHours === 2 ? 'var(--primary)' : 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              2 HOURS
            </div>
            <div className="pricing-preset-price" style={{ fontSize: '1.9rem', fontWeight: 800, color: '#121417', margin: '4px 0', fontFamily: 'var(--font-heading)' }}>
              ₹399
            </div>
            <div className="pricing-preset-sub" style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Up to 6 people
            </div>
          </div>

          {/* Extra 30 Min Info */}
          <div
            className="pricing-preset-card"
            style={{
              background: '#FFFFFF',
              border: '1.5px dashed var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: '16px 14px',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
            <div className="pricing-preset-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              EXTRA 30 MIN
            </div>
            <div className="pricing-preset-price" style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--primary)', margin: '4px 0', fontFamily: 'var(--font-heading)' }}>
              +₹99
            </div>
            <div className="pricing-preset-sub" style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Add anytime
            </div>
          </div>
        </div>

        {/* ===================== INSIDE BOX: PRICE CALCULATOR ===================== */}
        <div className="pricing-calculator-box">
          {/* Ambient Background Glow */}
          <div style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(230,74,25,0.18) 0%, rgba(0,0,0,0) 70%)',
            pointerEvents: 'none'
          }}></div>

          {/* Calculator Header Inside Box */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '10px',
            marginBottom: '14px',
            position: 'relative',
            zIndex: 2
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'clamp(0.96rem, 2vw, 1.08rem)', fontWeight: 800, color: '#FFFFFF' }}>
                <Sparkles size={16} color="#FF7B54" />
                <span>Live Meal Quote Estimator</span>
              </div>
              <div style={{ fontSize: '0.74rem', color: '#A0A5AB', marginTop: '2px' }}>
                Adjust guests and dishes below for instant recommended cook time and quote
              </div>
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.08)',
              padding: '3px 10px',
              borderRadius: '99px',
              fontSize: '0.72rem',
              color: '#E2E8F0',
              fontWeight: 600,
              whiteSpace: 'nowrap'
            }}>
              <span>📍 {selectedArea.name}</span>
              <span style={{ color: 'var(--green)' }}>• ~{selectedArea.avgEta}</span>
            </div>
          </div>

          {/* Body Grid: Sliders & Instant Output */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '20px',
            alignItems: 'stretch',
            position: 'relative',
            zIndex: 2
          }} className="estimator-grid">

            {/* Left Controls Column */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              
              <div>
                {/* Party Mode Switch */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  marginBottom: '14px',
                  gap: '8px'
                }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Sparkles size={14} color="#FF7B54" />
                      <span>Hosting a party or gathering?</span>
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#A0A5AB', marginTop: '2px' }}>
                      Up to 20 guests with 2 dedicated cooks
                    </div>
                  </div>
                  <button
                    onClick={() => setIsPartyMode(!isPartyMode)}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '99px',
                      border: 'none',
                      background: isPartyMode ? 'var(--primary)' : 'rgba(255, 255, 255, 0.12)',
                      color: '#FFF',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontSize: '0.74rem',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      transition: 'all 0.2s ease'
                    }}>
                    {isPartyMode ? '✓ Party Enabled' : 'Standard Meal'}
                  </button>
                </div>

                {!isPartyMode && (
                  <>
                    {/* People Slider */}
                    <div style={{ marginBottom: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.84rem', color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Users size={14} color="var(--primary)" />
                          Number of People:
                        </span>
                        <span style={{ fontWeight: 800, color: '#FF7B54', fontSize: '0.96rem' }}>{peopleCount} People</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={peopleCount}
                        onChange={(e) => setPeopleCount(parseInt(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--primary)', cursor: 'pointer', height: '5px' }}
                      />
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#A0A5AB', marginTop: '3px' }}>
                        <span>1 Person</span>
                        <span>5 People</span>
                        <span>10 People</span>
                      </div>
                    </div>

                    {/* Dishes Slider */}
                    <div style={{ marginBottom: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.84rem', color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <UtensilsCrossed size={14} color="var(--primary)" />
                          Main Dishes + Breads:
                        </span>
                        <span style={{ fontWeight: 800, color: '#FF7B54', fontSize: '0.96rem' }}>{dishesCount} Dishes</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="6"
                        value={dishesCount}
                        onChange={(e) => setDishesCount(parseInt(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--primary)', cursor: 'pointer', height: '5px' }}
                      />
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#A0A5AB', marginTop: '3px' }}>
                        <span>1 Dish</span>
                        <span>3 Dishes</span>
                        <span>6+ Dishes</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Location indicator footer (Desktop only, mobile has it in header) */}
              <div
                className="pricing-calc-area-footer"
                style={{
                  fontSize: '0.76rem',
                  color: '#A0A5AB',
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '2px'
                }}>
                📍 Active Area: <strong style={{ color: '#FFFFFF' }}>{selectedArea.name}</strong> • ETA: <strong style={{ color: 'var(--green)' }}>~{selectedArea.avgEta}</strong>
              </div>

            </div>

            {/* Right Side: Live Price Output Summary Card */}
            <div className="pricing-estimate-card">
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--border-light)',
                  paddingBottom: '8px',
                  marginBottom: '8px'
                }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                    YOUR MEAL ESTIMATE
                  </span>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    background: 'var(--green-light)',
                    color: 'var(--green)',
                    padding: '2px 8px',
                    borderRadius: '99px'
                  }}>
                    Instant Booking
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', margin: '4px 0 6px 0' }}>
                  <span style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                    ₹{calcPrice}
                  </span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    for {calcHours} Hour{calcHours > 1 ? 's' : ''}
                  </span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 12px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#1E293B', lineHeight: 1.35 }}>
                    <Check size={15} color="var(--green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>{isPartyMode ? '2 Dedicated Uniformed Party Cooks' : '1 Verified Background-Checked Cook'}</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#1E293B', lineHeight: 1.35 }}>
                    <Check size={15} color="var(--green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Cook arrives at <strong>{selectedArea.name}</strong> in ~{selectedArea.avgEta}</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#1E293B', lineHeight: 1.35 }}>
                    <Check size={15} color="var(--green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Customized spice, oil & salt to your exact taste</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleOpenBooking()}
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '11px 16px', fontSize: '0.9rem', borderRadius: '99px', marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span>Book This Slot ({selectedArea.name})</span>
                <ArrowRight size={16} />
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
