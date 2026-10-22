'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ArrowUpRight, Check, Star, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ServiceItem } from '../types';

export const VISUAL_SERVICES = [
  {
    id: 'prep',
    title: 'Kitchen Prep',
    price: 149,
    originalPrice: 299,
    rating: 4.9,
    reviewCount: '25.4k',
    image: '/images/kitchen_prep.png',
    badge: 'PRE-COOKING HELPER',
    badgeColor: '#05B865',
    bullets: [
      'Fresh chopping, slicing & peeling',
      'Ginger-garlic pastes & marinades ready',
      '1 Hour dedicated kitchen assistance'
    ],
    duration: '1 Hour',
    idealFor: 'Busy home chefs & meal prep'
  },
  {
    id: 'cooking',
    title: 'Full Meal Cooking',
    price: 299,
    originalPrice: 599,
    rating: 4.9,
    reviewCount: '30.7k',
    image: '/images/full_meal.png',
    badge: 'MOST POPULAR',
    badgeColor: '#E64A19',
    bullets: [
      'Fresh hot rotis/phulkas, 2 curries, dal & rice',
      'Prepared to your exact spice & salt preference',
      'North Indian, Awadhi & multi-cuisine expertise'
    ],
    duration: '1 to 2 Hours',
    idealFor: 'Daily lunches & healthy family dinners'
  },
  {
    id: 'ondemand',
    title: 'Express Cook (30 Min)',
    price: 199,
    originalPrice: 399,
    rating: 4.8,
    reviewCount: '18.5k',
    image: '/images/express_cook.png',
    badge: '30 MIN ARRIVAL',
    badgeColor: '#E64A19',
    bullets: [
      'Cook dispatched immediately to your doorstep',
      'Perfect for unexpected guests & urgent dinners',
      'Available across all Lucknow neighborhoods'
    ],
    duration: '30 min arrival',
    idealFor: 'Instant hunger & emergency plans'
  },
  {
    id: 'party',
    title: 'Party & Gathering Cook',
    price: 999,
    originalPrice: 1999,
    rating: 4.9,
    reviewCount: '12.1k',
    image: '/images/party_cook.png',
    badge: 'UP TO 20 GUESTS',
    badgeColor: '#7C3AED',
    bullets: [
      '2 dedicated trained cooks handle end-to-end cooking',
      'Multi-course party menu, starters & feast dishes',
      'You entertain guests while we handle the kitchen'
    ],
    duration: '3 Hours Min',
    idealFor: 'House parties, Birthdays & Celebrations'
  },
  {
    id: 'hourly',
    title: 'Flexible Hourly Service',
    price: 60,
    originalPrice: 125,
    rating: 4.9,
    reviewCount: '239k',
    image: '/images/hero_cook_lucknow.png',
    badge: 'PAY AS YOU GO',
    badgeColor: '#0284C7',
    bullets: [
      'Hire a verified cook for any duration from 1 hour',
      'Ideal for partial meal prep, snacking or custom dishes',
      'Complete flexibility with transparent hourly billing'
    ],
    duration: 'Hourly flexible',
    idealFor: 'Custom needs & quick kitchen support'
  },
  {
    id: 'subscription',
    title: 'Daily Cook Subscription',
    price: 2799,
    originalPrice: 5970,
    rating: 4.9,
    reviewCount: '23.4k',
    image: '/images/hero_cook_ooloo.png',
    badge: 'BEST VALUE · SAVE 55%',
    badgeColor: '#05B865',
    bullets: [
      'Same trusted, verified cook visits your home daily',
      'Guaranteed replacement if your cook is ever on leave',
      'Save big over individual bookings every single month'
    ],
    duration: 'Daily visits',
    idealFor: 'Working professionals & busy families'
  }
];

export default function Services() {
  const { handleOpenBooking } = useApp();

  const handleServiceSelect = (svc: typeof VISUAL_SERVICES[0]) => {
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
    <section id="services" style={{ padding: '36px 0 70px 0', backgroundColor: 'transparent' }}>
      <div className="container">

        {/* Section Header (Centered) */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 40px auto' }}>
          <div className="page-badge" style={{ justifyContent: 'center' }}>
            <span className="page-badge-dot" />
            <span>WHAT WE DO</span>
          </div>
          <h1 className="page-title" style={{ textAlign: 'center' }}>
            Everything except <span className="italic-serif" style={{ color: 'var(--primary)' }}>the eating.</span>
          </h1>
          <p className="page-subtitle" style={{ margin: '0 auto 22px auto', textAlign: 'center' }}>
            Verified cooks at your door in <strong style={{ color: '#E64A19' }}>30 mins</strong> across Lucknow. Fresh, hygienic meals cooked right in your kitchen.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              href="/pricing"
              className="btn btn-dark"
              style={{
                padding: '12px 28px',
                borderRadius: '99px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '0.98rem',
                whiteSpace: 'nowrap'
              }}
            >
              <span>Pricing & Calculator</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* Visual Cards Grid — Rich Photos, Clear Text, Big Buttons */}
        <div className="grid-3" style={{ marginBottom: '48px', marginTop: '12px' }}>
          {VISUAL_SERVICES.map((svc) => (
            <div
              key={svc.id}
              onClick={() => handleServiceSelect(svc)}
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1.5px solid var(--border-light)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'rgba(230, 74, 25, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
            >
              {/* Card Image with Badges */}
              <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden', background: '#F5F2ED' }}>
                <img
                  src={svc.image}
                  alt={svc.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                />

                {/* Top Badge */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  background: 'rgba(18, 20, 23, 0.88)',
                  backdropFilter: 'blur(8px)',
                  color: '#FFFFFF',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  padding: '5px 12px',
                  borderRadius: '99px'
                }}>
                  {svc.badge}
                </div>

                {/* Rating Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '14px',
                  background: '#FFFFFF',
                  color: '#121417',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  padding: '4px 10px',
                  borderRadius: '99px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Star size={13} fill="#FFA114" color="#FFA114" />
                  <span>{svc.rating}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>({svc.reviewCount})</span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px 24px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Title & Price */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                  <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#121417', lineHeight: 1.25, margin: 0 }}>
                    {svc.title}
                  </h2>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>
                      ₹{svc.price}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'line-through', marginTop: '3px' }}>
                      ₹{svc.originalPrice}
                    </div>
                  </div>
                </div>

                {/* Punchy Visual Bullet Points (Less text, higher legibility) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '22px', flex: 1 }}>
                  {svc.bullets.map((bullet, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.96rem', color: '#3A3F45' }}>
                      <div style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: 'var(--primary-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Check size={11} color="var(--primary)" strokeWidth={3} />
                      </div>
                      <span style={{ lineHeight: 1.4 }}>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Duration Metadata */}
                <div style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Clock size={14} color="var(--primary)" />
                  <span>{svc.duration} · {svc.idealFor}</span>
                </div>

                {/* Primary Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceSelect(svc);
                  }}
                  style={{
                    width: '100%',
                    padding: '13px 20px',
                    borderRadius: '14px',
                    background: 'var(--primary)',
                    color: '#FFFFFF',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 14px rgba(230, 74, 25, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--primary-dark)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--primary)';
                  }}
                >
                  <span>Book This Cook</span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Service Guarantee Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #121417 0%, #2D1810 100%)',
          borderRadius: '24px',
          padding: '36px 40px',
          color: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#FF9E7D', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
              OOLOO VERIFIED PROMISE
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '6px' }}>
              Police-verified cooks · 15+ hygiene SOPs · Taste guarantee
            </div>
            <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)' }}>
              Our cooks focus 100% on meal preparation and leave your kitchen counter clean and tidy.
            </div>
          </div>

          <button
            onClick={() => handleServiceSelect(VISUAL_SERVICES[1])}
            style={{
              padding: '14px 28px',
              borderRadius: '99px',
              background: 'var(--primary)',
              color: '#FFFFFF',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 800,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 16px rgba(230,74,25,0.4)'
            }}
          >
            Book Full Meal Cook →
          </button>
        </div>

      </div>
    </section>
  );
}
