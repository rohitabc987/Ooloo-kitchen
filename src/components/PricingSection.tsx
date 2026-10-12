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
    <section id="pricing" style={{ padding: '50px 0 70px 0', backgroundColor: '#FFFFFF', width: '100%' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', width: '100%' }}>

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
            <div style={{ maxWidth: '620px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', color: '#A0A5AB', textTransform: 'uppercase', marginBottom: '10px' }}>
                FLEXIBLE HOURLY BOOKING & ESTIMATOR
              </div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: 'white', fontWeight: 800, lineHeight: 1.1, marginBottom: '14px' }}>
                Pay only for <span className="italic-serif" style={{ color: '#FF7B54' }}>what you cook.</span>
              </h2>
              <p style={{ color: '#A0A5AB', fontSize: '1.02rem', lineHeight: 1.6 }}>
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

      </div>
    </section>
  );
}
