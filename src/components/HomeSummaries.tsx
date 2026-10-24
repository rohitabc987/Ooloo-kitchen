'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Star, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ServiceItem } from '../types';
import { VISUAL_SERVICES } from './Services';

export default function HomeSummaries() {
  const { handleOpenBooking } = useApp();

  const featuredServices = VISUAL_SERVICES.slice(0, 3); // Prep, Full meal, Express

  const handleBookService = (svc: typeof VISUAL_SERVICES[0]) => {
    const item: ServiceItem = {
      id: svc.id,
      title: svc.title,
      subtitle: svc.bullets[0],
      desc: svc.bullets.join('. '),
      icon: 'ChefHat',
      duration: svc.duration,
      idealFor: svc.idealFor,
      popular: svc.badge.includes('POPULAR')
    };
    handleOpenBooking(item);
  };

  return (
    <div style={{ marginTop: '50px', paddingBottom: '40px' }}>
      {/* ===================== 1. POPULAR SERVICES SUMMARY ===================== */}
      <section style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '28px' }}>
          <div>
            <div className="page-badge">
              <span className="page-badge-dot" />
              <span>POPULAR SERVICES</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)', fontWeight: 850, color: '#121417', lineHeight: 1.15, margin: 0 }}>
              Cooks at your door in <span className="italic-serif" style={{ color: 'var(--primary)' }}>30 minutes.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#4A4F55', marginTop: '8px', maxWidth: '650px' }}>
              Choose from emergency express cooks, daily lunches, or kitchen preparation helpers across Lucknow.
            </p>
          </div>

          <Link
            href="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '99px',
              background: '#FFFFFF',
              border: '1.5px solid var(--border)',
              color: '#121417',
              textDecoration: 'none',
              fontWeight: 800,
              fontSize: '0.95rem',
              transition: 'all 0.2s ease',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <span>View All 6 Services</span>
            <ArrowRight size={17} color="var(--primary)" />
          </Link>
        </div>

        {/* 3 Featured Visual Cards */}
        <div className="grid-3">
          {featuredServices.map((svc) => (
            <div
              key={svc.id}
              onClick={() => handleBookService(svc)}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1.5px solid var(--border-light)',
                boxShadow: '0 4px 18px rgba(0,0,0,0.04)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.04)';
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden', background: '#F5F2ED' }}>
                <img
                  src={svc.image}
                  alt={svc.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(18, 20, 23, 0.85)',
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '4px 10px',
                  borderRadius: '99px',
                  letterSpacing: '0.04em'
                }}>
                  {svc.badge}
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '12px',
                  background: '#FFFFFF',
                  color: '#121417',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  padding: '3px 8px',
                  borderRadius: '99px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <Star size={12} fill="#FFA114" color="#FFA114" />
                  <span>{svc.rating}</span>
                </div>
              </div>

              <div style={{ padding: '20px 20px 18px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#121417', margin: 0 }}>
                    {svc.title}
                  </h3>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--primary)' }}>
                    ₹{svc.price}
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: '#5A6068', lineHeight: 1.5, marginBottom: '16px', flex: 1 }}>
                  {svc.bullets[0]}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookService(svc);
                  }}
                  style={{
                    width: '100%',
                    padding: '11px',
                    borderRadius: '12px',
                    background: 'var(--primary)',
                    color: '#FFFFFF',
                    border: 'none',
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <span>Book Now</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== 2. PRICING & SAVINGS SUMMARY BANNER ===================== */}
      <section style={{ marginBottom: '60px' }}>
        <div style={{
          background: 'linear-gradient(145deg, #121417 0%, #2A160F 100%)',
          borderRadius: '24px',
          padding: '40px 44px',
          color: '#FFFFFF',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '36px',
          alignItems: 'center',
          boxShadow: '0 16px 40px rgba(0,0,0,0.14)'
        }} className="desktop-pricing-banner">
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#FF9E7D', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
              TRANSPARENT RATES · NO HIDDEN FEES
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 850, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '12px' }}>
              Pay only for <span style={{ color: '#FF9E7D' }}>what you cook.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '24px' }}>
              Starting at ₹149 for prep and ₹299 for complete home cooking. Calculate your exact price by dish & group size.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link
                href="/pricing"
                style={{
                  padding: '13px 26px',
                  borderRadius: '99px',
                  background: 'var(--primary)',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 16px rgba(230,74,25,0.4)'
                }}
              >
                <span>Open Price Calculator</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Quick Rate Breakdown Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', border: '1px solid rgba(255,255,255,0.12)' }}>
              <div style={{ fontSize: '0.74rem', color: '#FF9E7D', fontWeight: 800, textTransform: 'uppercase' }}>1 HOUR MEAL</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFF', margin: '4px 0' }}>₹299</div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)' }}>Up to 3 people</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', border: '1px solid rgba(255,255,255,0.12)' }}>
              <div style={{ fontSize: '0.74rem', color: '#05B865', fontWeight: 800, textTransform: 'uppercase' }}>2 HOURS MEAL</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFF', margin: '4px 0' }}>₹399</div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)' }}>Up to 5 people</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', border: '1px solid rgba(255,255,255,0.12)', gridColumn: 'span 2' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.74rem', color: '#FF9E7D', fontWeight: 800, textTransform: 'uppercase' }}>SMART SUBSCRIPTIONS</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFF' }}>Dedicated Daily Cooks from ₹5,999/mo</div>
                </div>
                <span style={{ background: '#05B865', color: '#FFF', fontSize: '0.75rem', fontWeight: 800, padding: '4px 10px', borderRadius: '99px' }}>
                  SAVE UP TO 30%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 3. HOW IT WORKS 3-STEP SUMMARY ===================== */}
      <section style={{ marginBottom: '60px' }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 32px auto' }}>
          <div className="page-badge" style={{ justifyContent: 'center' }}>
            <span className="page-badge-dot" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 850, color: '#121417', lineHeight: 1.15 }}>
            Fresh meals in <span className="italic-serif" style={{ color: 'var(--primary)' }}>3 simple steps.</span>
          </h2>
        </div>

        <div className="grid-3" style={{ marginBottom: '28px' }}>
          <div style={{ background: '#FFFFFF', padding: '26px 22px', borderRadius: '18px', border: '1.5px solid var(--border-light)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--primary)', opacity: 0.3, lineHeight: 1, marginBottom: '10px' }}>01</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#121417', marginBottom: '8px' }}>Book in 30 Seconds</h3>
            <p style={{ fontSize: '0.92rem', color: '#5A6068', lineHeight: 1.5 }}>
              Choose your dishes and service mode (Instant, Later, or Auto-repeat) in-app or call.
            </p>
          </div>

          <div style={{ background: '#FFFFFF', padding: '26px 22px', borderRadius: '18px', border: '1.5px solid var(--border-light)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--primary)', opacity: 0.3, lineHeight: 1, marginBottom: '10px' }}>02</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#121417', marginBottom: '8px' }}>Cook Arrives in ~30 Mins</h3>
            <p style={{ fontSize: '0.92rem', color: '#5A6068', lineHeight: 1.5 }}>
              Uniformed, police-verified cook arrives with signature dark apron and hygiene kit.
            </p>
          </div>

          <div style={{ background: '#FFFFFF', padding: '26px 22px', borderRadius: '18px', border: '1.5px solid var(--border-light)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--primary)', opacity: 0.3, lineHeight: 1, marginBottom: '10px' }}>03</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#121417', marginBottom: '8px' }}>Enjoy Hot, Fresh Food</h3>
            <p style={{ fontSize: '0.92rem', color: '#5A6068', lineHeight: 1.5 }}>
              Meals made to your exact salt, oil & spice preference. Counter left clean & sparkling.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            href="/how-it-works"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.95rem',
              fontWeight: 800,
              color: 'var(--primary)',
              textDecoration: 'none'
            }}
          >
            <span>Learn more about background verification & SOPs</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ===================== 4. FAQS TEASER ===================== */}
      <section style={{
        background: '#FFFFFF',
        borderRadius: '24px',
        padding: '36px 36px',
        border: '1.5px solid var(--border-light)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '24px'
      }}>
        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
            HAVE QUESTIONS?
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#121417', margin: 0 }}>
            Who provides vegetables? Can I request specific spices?
          </h3>
          <p style={{ fontSize: '0.95rem', color: '#5A6068', marginTop: '6px', margin: 0 }}>
            Read answers to top questions about groceries, hygiene, cancellations, and cook dispatch.
          </p>
        </div>

        <Link
          href="/faqs"
          style={{
            padding: '12px 24px',
            borderRadius: '99px',
            background: 'var(--primary)',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: '0.95rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            whiteSpace: 'nowrap'
          }}
        >
          <span>Explore All FAQs</span>
          <ArrowRight size={16} />
        </Link>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-pricing-banner {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
