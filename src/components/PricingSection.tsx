'use client';

import React, { useState } from 'react';
import { Check, Clock, ArrowRight, Users, UtensilsCrossed, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SUBSCRIPTION_PLANS, PARTY_PLANS, PARTY_ADDONS, OTHER_SERVICES, TERMS_AND_CONDITIONS } from '../data/lucknowData';

export default function PricingSection() {
  const { selectedArea, handleOpenBooking } = useApp();
  const [peopleCount, setPeopleCount] = useState(4);
  const [dishesCount, setDishesCount] = useState(3);
  const [isPartyMode, setIsPartyMode] = useState(false);
  const [partyPeopleCount, setPartyPeopleCount] = useState(15);

  // Party calculation matching Brochure 1
  const getPartyTier = (guests: number) => {
    if (guests <= 10) return { people: '1 to 10 People', hours: 3, price: 1999 };
    if (guests <= 20) return { people: '11 to 20 People', hours: 4, price: 2999 };
    if (guests <= 30) return { people: '21 to 30 People', hours: 4, price: 3999 };
    if (guests <= 40) return { people: '31 to 40 People', hours: 5, price: 4999 };
    return { people: '41 to 50 People', hours: 5, price: 5999 };
  };

  const partyTier = getPartyTier(partyPeopleCount);
  const calcHours = isPartyMode ? partyTier.hours : (peopleCount <= 3 && dishesCount <= 2 ? 1 : 2);
  const calcPrice = isPartyMode ? partyTier.price : (calcHours === 1 ? 299 : 399);

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
                      <span>Hosting a party or family gathering?</span>
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#A0A5AB', marginTop: '2px' }}>
                      10 to 50 guests with dedicated party cooks (Brochure Plan)
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

                {isPartyMode ? (
                  /* Party Guests Slider */
                  <div style={{ marginBottom: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.84rem', color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Users size={14} color="var(--primary)" />
                        Number of Party Guests:
                      </span>
                      <span style={{ fontWeight: 800, color: '#FF7B54', fontSize: '0.96rem' }}>{partyPeopleCount} Guests ({partyTier.people})</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="50"
                      step="5"
                      value={partyPeopleCount}
                      onChange={(e) => setPartyPeopleCount(parseInt(e.target.value))}
                      style={{ width: '100%', accentColor: 'var(--primary)', cursor: 'pointer', height: '5px' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#A0A5AB', marginTop: '3px' }}>
                      <span>1-10 (₹1,999)</span>
                      <span>11-20 (₹2,999)</span>
                      <span>21-30 (₹3,999)</span>
                      <span>31-40 (₹4,999)</span>
                      <span>41-50 (₹5,999)</span>
                    </div>
                  </div>
                ) : (
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

              {/* Location indicator footer */}
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
                    {isPartyMode ? 'Party Plan' : 'Instant Booking'}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', margin: '4px 0 6px 0' }}>
                  <span style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                    ₹{calcPrice.toLocaleString('en-IN')}
                  </span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    for {calcHours} Hour{calcHours > 1 ? 's' : ''} ({isPartyMode ? partyTier.people : `up to ${peopleCount} people`})
                  </span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 12px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#1E293B', lineHeight: 1.35 }}>
                    <Check size={15} color="var(--green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>{isPartyMode ? `Dedicated Cooks for ${partyTier.people} (${partyTier.hours} hrs)` : `${calcHours} Hour Cook Service for up to ${peopleCount} People`}</strong></span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#1E293B', lineHeight: 1.35 }}>
                    <Check size={15} color="var(--green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Cook arrives at <strong>{selectedArea.name}</strong> in ~{selectedArea.avgEta}</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#1E293B', lineHeight: 1.35 }}>
                    <Check size={15} color="var(--green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Customized spice, oil & salt to your exact taste</span>
                  </li>
                  {isPartyMode && (
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.78rem', color: '#78716C', lineHeight: 1.35 }}>
                      <span>• Server & Cleaner add-ons available at ₹1,000 each</span>
                    </li>
                  )}
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

        {/* ===================== FAMILY GATHERING & PARTY PLANS (BROCHURE 1) ===================== */}
        <div style={{ marginTop: '50px' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 28px auto' }}>
            <div className="page-badge" style={{ justifyContent: 'center' }}>
              <span className="page-badge-dot" />
              <span>SPECIAL OCCASIONS</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 850, color: '#121417', lineHeight: 1.15 }}>
              Family Gathering & <span className="italic-serif" style={{ color: 'var(--primary)' }}>Party Plans.</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '6px' }}>
              Good Food. Happy Moments. Make your special occasions stress-free with our trusted kitchen support services.
            </p>
          </div>

          {/* Party Tiers Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '14px',
            marginBottom: '24px'
          }}>
            {PARTY_PLANS.map((plan, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '20px 16px',
                  border: '1.5px solid var(--border)',
                  textAlign: 'center',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>
                  <Users size={14} />
                  <span>{plan.people} People</span>
                </div>
                <div style={{ fontSize: '2.1rem', fontWeight: 900, color: '#121417', margin: '6px 0 4px 0', fontFamily: 'var(--font-heading)' }}>
                  {plan.amountFormatted}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  <Clock size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                  {plan.hours} dedicated
                </div>
              </div>
            ))}
          </div>

          {/* Party Add-on Services & Terms */}
          <div style={{
            background: '#FDFBF7',
            borderRadius: '20px',
            padding: '22px 24px',
            border: '1.5px solid #F0ECE4',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                Other Party Services
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.88rem', color: '#1C1917' }}>
                {PARTY_ADDONS.map(addon => (
                  <div key={addon.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{addon.icon} {addon.title} ({addon.unit}):</span>
                    <strong style={{ color: 'var(--primary)' }}>{addon.rate}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                Terms & Conditions
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {TERMS_AND_CONDITIONS.party.map((term, tIdx) => (
                  <li key={tIdx}>{term}</li>
                ))}
              </ul>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => handleOpenBooking()}
                style={{
                  width: '100%',
                  padding: '13px 20px',
                  borderRadius: '12px',
                  background: 'var(--primary)',
                  color: '#FFF',
                  border: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                Book Party Cook →
              </button>
            </div>
          </div>
        </div>

        {/* ===================== OTHER SERVICES (₹199/HR) ===================== */}
        <div style={{ marginTop: '50px' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 28px auto' }}>
            <div className="page-badge" style={{ justifyContent: 'center' }}>
              <span className="page-badge-dot" />
              <span>HOURLY ADD-ONS</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 850, color: '#121417', lineHeight: 1.15 }}>
              On-Demand Support at <span className="italic-serif" style={{ color: 'var(--primary)' }}>₹199/Hour.</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '6px' }}>
              Add specialized kitchen help for prep, dishwashing, counter cleaning, or table serving.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '16px'
          }}>
            {OTHER_SERVICES.map(item => (
              <div
                key={item.id}
                onClick={() => handleOpenBooking()}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '20px',
                  border: '1.5px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: '6px' }}>{item.icon}</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#121417' }}>{item.title}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '4px 0 12px 0' }}>{item.desc}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
                    {item.rate}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>{item.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===================== SMART SUBSCRIPTIONS (BROCHURE 2) ===================== */}
        <div style={{ marginTop: '50px' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 32px auto' }}>
            <div className="page-badge" style={{ justifyContent: 'center' }}>
              <span className="page-badge-dot" />
              <span>SAVE UP TO 30%</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 850, color: '#121417', lineHeight: 1.15 }}>
              Smart Kitchen <span className="italic-serif" style={{ color: 'var(--primary)' }}>Subscriptions.</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '6px' }}>
              Same trained cook, priority booking, festive off, and up to 6 service hold days. Transparent monthly plans for Lucknow homes.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '16px',
            alignItems: 'stretch'
          }}>
            {SUBSCRIPTION_PLANS.map((sub) => (
              <div
                key={sub.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '22px',
                  padding: '26px 20px',
                  border: sub.popular ? '2px solid var(--primary)' : '1.5px solid var(--border)',
                  boxShadow: sub.popular ? '0 12px 30px rgba(230,74,25,0.12)' : '0 2px 10px rgba(0,0,0,0.04)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {sub.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-11px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--primary)',
                    color: '#FFFFFF',
                    fontSize: '0.66rem',
                    fontWeight: 900,
                    padding: '3px 12px',
                    borderRadius: '99px',
                    letterSpacing: '0.04em',
                    whiteSpace: 'nowrap'
                  }}>
                    POPULAR CHOICE
                  </div>
                )}

                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: sub.color || 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                    {sub.badge}
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 850, color: '#121417', margin: '0 0 10px 0' }}>
                    {sub.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '14px' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 900, color: '#121417', fontFamily: 'var(--font-heading)' }}>
                      {sub.price}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>{sub.period}</span>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '14px', marginBottom: '18px' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {sub.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: '#1E293B' }}>
                          <Check size={15} color="var(--green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={`https://wa.me/917318086600?text=Hi%20Ooloo!%20I%20would%20like%20to%20subscribe%20to%20the%20${encodeURIComponent(sub.title)}%20(${sub.price}%2Fmonth).`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '12px',
                    background: sub.popular ? 'var(--primary)' : '#F5F5F4',
                    color: sub.popular ? '#FFFFFF' : '#121417',
                    border: sub.popular ? 'none' : '1px solid var(--border)',
                    fontSize: '0.86rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    textDecoration: 'none'
                  }}
                >
                  <MessageSquare size={15} />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            ))}
          </div>

          {/* Subscription Benefits Strip */}
          <div style={{
            marginTop: '22px',
            background: '#FFFFFF',
            borderRadius: '18px',
            padding: '16px 20px',
            border: '1px solid var(--border-light)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-around',
            gap: '14px',
            fontSize: '0.82rem',
            color: '#1E293B',
            fontWeight: 700
          }}>
            <span>💰 Save up to 30%</span>
            <span>👨‍🍳 Same Trained Cook</span>
            <span>⭐ Priority Booking</span>
            <span>📅 Festive Off</span>
            <span>🔒 Background Checked</span>
            <span>✨ No Hidden Charges</span>
          </div>
        </div>

      </div>
    </section>
  );
}
