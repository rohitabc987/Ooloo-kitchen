'use client';

import React from 'react';
import Link from 'next/link';
import { XCircle, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface HowItWorksProps {
  onBook?: () => void;
  style?: React.CSSProperties;
}

export default function HowItWorks({ onBook, style }: HowItWorksProps = {}) {
  const { handleOpenBooking } = useApp();

  const handleBookingClick = () => {
    if (onBook) {
      onBook();
    } else {
      handleOpenBooking();
    }
  };

  const steps = [
    {
      num: '01',
      title: 'Book in 30 Seconds',
      tag: 'INSTANT IN-APP & CALL',
      image: '/images/hero_cook_lucknow_3.png',
      desc: 'Pick your dishes, spice preference, and time slot. Our smart dispatch matches you with the nearest cook.'
    },
    {
      num: '02',
      title: 'Cook Arrives in ~30 Mins',
      tag: 'POLICE & HYGIENE VERIFIED',
      image: '/images/express_cook.png',
      desc: 'Your cook arrives wearing the signature dark apron with full ID verification and hygiene kit.'
    },
    {
      num: '03',
      title: 'Enjoy Fresh, Clean Food',
      tag: 'TASTE GUARANTEED',
      image: '/images/full_meal.png',
      desc: 'Hot rotis and fragrant curries cooked to your exact taste, leaving your counter clean and spotless.'
    }
  ];

  return (
    <section id="how-it-works" style={{ padding: '40px 0 70px 0', backgroundColor: 'transparent', ...style }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ maxWidth: '850px', margin: '0 auto 44px auto', textAlign: 'center' }}>
          <div className="page-badge" style={{ justifyContent: 'center' }}>
            <span className="page-badge-dot" />
            <span>THE OOLOO EXPERIENCE</span>
          </div>
          <h1 className="page-title" style={{ textAlign: 'center' }}>
            3 easy steps to <span className="italic-serif" style={{ color: 'var(--primary)' }}>fresh home food.</span>
          </h1>
          <p className="page-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            No agency lock-ins. No waiting days for interviews. Just verified cooks on demand in 30 minutes across Lucknow.
          </p>
        </div>

        {/* 3 Visual Step Cards with Real Photos */}
        <div className="grid-3" style={{ marginBottom: '48px' }}>
          {steps.map((step, idx) => (
            <div 
              key={idx}
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1.5px solid var(--border-light)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)';
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden', background: '#F5F2ED' }}>
                <img
                  src={step.image}
                  alt={step.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  background: 'var(--primary)',
                  color: '#FFFFFF',
                  fontSize: '0.82rem',
                  fontWeight: 900,
                  padding: '4px 12px',
                  borderRadius: '99px',
                  letterSpacing: '0.04em'
                }}>
                  STEP {step.num}
                </div>
              </div>

              <div style={{ padding: '24px 24px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  {step.tag}
                </div>
                <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#121417', marginBottom: '10px', lineHeight: 1.25 }}>
                  {step.title}
                </h2>
                <p style={{ fontSize: '0.98rem', color: '#4A4F55', lineHeight: 1.6, margin: 0, flex: 1 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Kitchen Scope Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #121417 0%, #2D1810 100%)',
          borderRadius: '24px',
          padding: 'clamp(24px, 4vw, 36px) clamp(16px, 4vw, 40px)',
          color: '#FFFFFF',
          marginBottom: '40px'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 24px auto' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#FF9E7D', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
              OUR COOKING SPECIALIZATION
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
              100% Focused on Making Great Meals
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px'
          }} className="exclusion-pills">
            
            <div style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: '16px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#FFFFFF',
              fontSize: '0.95rem',
              fontWeight: 700
            }}>
              <CheckCircle size={20} color="#05B865" />
              <span>Chopping & Full Cooking</span>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: '16px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#FFFFFF',
              fontSize: '0.95rem',
              fontWeight: 700
            }}>
              <CheckCircle size={20} color="#05B865" />
              <span>Clean Counter Turnover</span>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: '16px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.92rem',
              fontWeight: 600
            }}>
              <XCircle size={20} color="#FF7B54" />
              <span>No dishwashing / serving</span>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleBookingClick}
            style={{
              padding: '16px 36px',
              borderRadius: '99px',
              background: 'var(--primary)',
              color: '#FFFFFF',
              border: 'none',
              fontSize: '1.05rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 6px 20px rgba(230,74,25,0.35)'
            }}
          >
            <span>Book Your Lucknow Cook in 30 Mins</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .exclusion-pills { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
