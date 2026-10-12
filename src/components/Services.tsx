'use client';

import React from 'react';
import { UtensilsCrossed, ChefHat, Zap, PartyPopper, AlertCircle, ArrowUpRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SERVICES } from '../data/lucknowData';
import { ServiceItem } from '../types';

export default function Services() {
  const { handleOpenBooking } = useApp();

  const getIcon = (name: string) => {
    switch (name) {
      case 'UtensilsCrossed': return <UtensilsCrossed size={28} color="var(--primary)" />;
      case 'ChefHat': return <ChefHat size={28} color="var(--primary)" />;
      case 'Zap': return <Zap size={28} color="var(--primary)" />;
      case 'PartyPopper': return <PartyPopper size={28} color="var(--primary)" />;
      default: return <ChefHat size={28} color="var(--primary)" />;
    }
  };

  return (
    <section id="services" style={{ padding: '50px 0 70px 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '28px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div style={{
              fontSize: '0.8rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              WHAT WE DO
            </div>
            <h2 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#121417'
            }}>
              Everything except <span className="italic-serif">the eating.</span>
            </h2>
          </div>

          <a
            href="#pricing"
            className="btn btn-dark"
            style={{ padding: '14px 28px' }}>
            <span>All services & rates</span>
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* 4 Core Service Cards */}
        <div className="grid-4" style={{ marginBottom: '32px' }}>
          {SERVICES.map((svc: ServiceItem) => (
            <div
              key={svc.id}
              onClick={() => handleOpenBooking(svc)}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '32px 26px',
                border: svc.popular ? '2px solid var(--primary)' : '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}>

              {svc.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '20px',
                  background: 'var(--primary)',
                  color: '#FFFFFF',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  padding: '4px 10px',
                  borderRadius: '99px',
                  letterSpacing: '0.05em'
                }}>
                  POPULAR
                </div>
              )}

              <div>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'var(--primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {getIcon(svc.icon)}
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', color: '#121417' }}>
                  {svc.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '20px' }}>
                  {svc.subtitle}
                </p>
              </div>

              <div style={{ borderTop: '1px dashed var(--border-light)', paddingTop: '16px', marginTop: '16px' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  ⏱️ Duration: <strong>{svc.duration}</strong>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700, marginTop: '4px' }}>
                  Click to custom book →
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Disclaimer Note Card */}
        <div style={{
          background: '#FFF8F4',
          border: '1.5px dashed #FFD4C2',
          borderRadius: 'var(--radius-sm)',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px'
        }}>
          <AlertCircle size={22} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#121417', marginBottom: '2px' }}>
              Please note our kitchen service scope
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              We do <strong>not</strong> provide kitchen cleaning, utensil washing, or table serving. Our cooks focus 100% of their time on cooking your meal — beautifully, hygienically, and to your exact taste.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
