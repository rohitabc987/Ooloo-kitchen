'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { FAQS } from '../data/lucknowData';

// All kitchen services as Pronto-style card data
export const KITCHEN_SERVICES = [
  { id: 'prep', name: 'Kitchen Prep', price: 149, originalPrice: 299, rating: 4.9, reviewCount: '25.4k', image: '/images/kitchen_prep.png', isNew: false, popular: false },
  { id: 'cooking', name: 'Full Meal Cooking', price: 299, originalPrice: 599, rating: 4.9, reviewCount: '30.7k', image: '/images/full_meal.png', isNew: false, popular: true },
  { id: 'ondemand', name: 'Express Cook (30 Min)', price: 199, originalPrice: 399, rating: 4.8, reviewCount: '18.5k', image: '/images/express_cook.png', isNew: true, popular: false },
  { id: 'party', name: 'Party & Gathering Cook', price: 999, originalPrice: 1999, rating: 4.9, reviewCount: '12.1k', image: '/images/party_cook.png', isNew: false, popular: false },
  { id: 'hourly', name: 'Hourly Service', price: 60, originalPrice: 125, rating: 4.9, reviewCount: '239.4k', image: '/images/kitchen_prep.png', isNew: false, popular: false },
  { id: 'biweekly', name: 'Daily Cook Subscription', price: 2799, originalPrice: 5970, rating: 4.9, reviewCount: '23.4k', image: '/images/full_meal.png', isNew: true, popular: false },
];

// Legacy ServiceItem for BookingSheet compatibility
export const SERVICE_ITEMS: ServiceItem[] = [
  { id: 'prep', title: 'Kitchen Prep', subtitle: 'Chopping, cutting, peeling & pre-preparation.', desc: 'Get your onions, garlic, veggies chopped, ginger-garlic pastes freshly prepared, and marinades ready.', icon: '🔪', duration: '1 Hour', idealFor: 'Busy home chefs & meal prep', popular: false },
  { id: 'cooking', title: 'Full Meal Cooking', subtitle: 'North Indian, Awadhi, South Indian & multi-cuisine.', desc: 'From fresh phulkas/rotis to rich gravies, dal, rice & snacks made to your exact spice and salt preference.', icon: '🍳', duration: '1 to 2 Hours', idealFor: 'Daily lunches, family dinners & healthy meals', popular: true },
  { id: 'ondemand', title: 'Express Cook (30 Min)', subtitle: 'Express cook at your doorstep in 30 minutes.', desc: 'Unexpected guests? Our nearest verified cook reaches your home within 30 minutes flat across Lucknow.', icon: '⚡', duration: '30 min arrival', idealFor: 'Instant emergency hunger & last-minute plans', popular: true },
  { id: 'party', title: 'Party & Gathering', subtitle: 'Up to 20 people with 2 trained cooks.', desc: 'Hosting a dinner party, birthday, or puja? 2 dedicated cooks handle end-to-end cooking so you enjoy.', icon: '🎉', duration: '3 Hours Min', idealFor: 'House parties, Kitty parties & Festive gatherings', popular: false },
  { id: 'hourly', title: 'Hourly Service', subtitle: 'Pay per hour, flexible and on-demand.', desc: 'Book a cook for any duration starting 1 hour. Perfect for partial meal prep or helping out when needed.', icon: '⏰', duration: 'Flexible', idealFor: 'Any cooking need', popular: false },
  { id: 'subscription', title: 'Daily Cook Subscription', subtitle: 'Save big with monthly subscription plan.', desc: 'Dedicated cook visits daily. Best value for working professionals and families who need daily meal support.', icon: '📅', duration: 'Daily visits', idealFor: 'Working professionals & families', popular: false },
];

interface HomePageProps {
  onBook: (service?: ServiceItem, mode?: string) => void;
  serviceMode: string;
  setServiceMode: (mode: 'instant' | 'schedule' | 'autorepeat') => void;
}

export default function HomePage({ onBook, serviceMode, setServiceMode }: HomePageProps) {
  const [cart, setCart] = useState<string[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleCart = (id: string) => {
    setCart(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const handleCardClick = (svcId: string) => {
    const found = SERVICE_ITEMS.find(s => s.id === svcId);
    onBook(found || SERVICE_ITEMS[0], serviceMode);
  };

  const TESTIMONIALS = [
    { quote: "Cook arrived in 22 mins in Gomti Nagar! Made delicious Kadhai Paneer. Pure magic!", author: "Anjali T.", location: "Gomti Nagar", rating: 5, tag: "Full Meal" },
    { quote: "The express cook service saved our dinner party. 2 cooks, 18 guests, all loved the food!", author: "Sandeep K.", location: "Sushant Golf City", rating: 5, tag: "Party Cook" },
    { quote: "Best subscription in Lucknow. Fresh meals every day, fixed cook, zero worries!", author: "Ritika G.", location: "Hazratganj", rating: 5, tag: "Daily Subscription" },
    { quote: "Kitchen prep service is a lifesaver! Onions, garlic, masala — all ready before I return home.", author: "Meena S.", location: "Indira Nagar", rating: 5, tag: "Kitchen Prep" },
  ];

  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <div className="hero-banner">
        {/* Left: text + buttons */}
        <div className="hero-content">
          {/* Trust badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>Lucknow&apos;s #1 On-Demand Cook Service</span>
          </div>

          <div className="hero-title">Need help in the<br />kitchen today? 🍳</div>
          <div className="hero-subtitle">Verified cooks at your door in <strong style={{ color: '#FF9E7D' }}>30 mins</strong> across Lucknow</div>

          {/* Stats row — desktop only */}
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">30 min</div>
              <div className="hero-stat-label">Avg. Dispatch</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <div className="hero-stat-value">4.9★</div>
              <div className="hero-stat-label">Avg. Rating</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <div className="hero-stat-value">500+</div>
              <div className="hero-stat-label">Happy Families</div>
            </div>
          </div>

          {/* Service Mode Buttons */}
          <div className="mode-buttons">
            <button
              className={`mode-btn ${serviceMode === 'instant' ? 'active' : ''}`}
              onClick={() => setServiceMode('instant')}
            >
              <span className="mode-btn-icon">⚡</span>
              <span className="mode-btn-label">Get Instant Service</span>
            </button>
            <button
              className={`mode-btn ${serviceMode === 'schedule' ? 'active' : ''}`}
              onClick={() => setServiceMode('schedule')}
            >
              <span className="mode-btn-icon">📅</span>
              <span className="mode-btn-label">Schedule for Later</span>
            </button>
            <button
              className={`mode-btn ${serviceMode === 'autorepeat' ? 'active' : ''}`}
              onClick={() => setServiceMode('autorepeat')}
            >
              <span className="mode-btn-icon">🔁</span>
              <span className="mode-btn-label">Service on Auto-repeat</span>
            </button>
          </div>
        </div>

        {/* Right: Hero Image — desktop only */}
        <div className="hero-image-wrap">
          <img
            src="/images/hero_cook.png"
            alt="Verified cook cooking in a kitchen"
            className="hero-image"
          />
          {/* Floating card */}
          <div className="hero-float-card">
            <span style={{ fontSize: '1.2rem' }}>👩‍🍳</span>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#fff' }}>Cook Dispatched!</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)' }}>Arriving in ~28 mins</div>
            </div>
            <div className="hero-float-pulse" />
          </div>
        </div>
      </div>

      {/* ===== ALL KITCHEN SERVICES ===== */}
      <div className="section-header">
        <div>
          <div className="section-title">All kitchen services</div>
          <div className="section-subtitle">Schedule & book for later</div>
        </div>
      </div>


      <div className="services-grid">
        {KITCHEN_SERVICES.map((svc) => (
          <div
            key={svc.id}
            className="service-card"
            onClick={() => handleCardClick(svc.id)}
          >
            {/* Rating or NEW badge */}
            {svc.isNew ? (
              <div className="service-card-badge">NEW</div>
            ) : (
              <div className="service-card-rating">
                <span className="rating-star">★</span>
                {svc.rating} ({svc.reviewCount})
              </div>
            )}

            <img
              src={svc.image}
              alt={svc.name}
              className="service-card-image"
            />

            {/* Add to Cart Button */}
            <button
              className={`service-card-add-btn ${cart.includes(svc.id) ? 'added' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleCart(svc.id);
              }}
              aria-label={cart.includes(svc.id) ? 'Remove from cart' : 'Add to cart'}
            >
              {cart.includes(svc.id) ? '✓' : '+'}
            </button>

            <div className="service-card-info">
              <div className="service-card-name">{svc.name}</div>
              <div className="service-card-price">
                <span className="service-card-price-current">₹{svc.price}</span>
                <span className="service-card-price-original">₹{svc.originalPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---- DESKTOP: Monthly Pass + Subscription Cards ---- */}
      <div className="pass-plans-row">
        {/* ooloo Monthly PASS card */}
        <div className="pass-plan-card pass-plan-featured" onClick={() => onBook(SERVICE_ITEMS[1], 'schedule')}>
          <div className="pass-plan-badge">MOST POPULAR</div>
          <div className="pass-plan-icon">🎟️</div>
          <div className="pass-plan-eyebrow">ooloo kitchen</div>
          <div className="pass-plan-name">ooloo <strong>PASS</strong></div>
          <div className="pass-plan-subtitle">Daily Meal Service Pass</div>
          <div className="pass-plan-price">
            <span className="pass-plan-price-main">₹297</span>
            <span className="pass-plan-price-original">₹750</span>
          </div>
          <div className="pass-plan-detail">3 Visits · 30 days validity</div>
          <button
            className="pass-plan-cta"
            onClick={(e) => { e.stopPropagation(); onBook(SERVICE_ITEMS[1], 'schedule'); }}
          >
            Book Pass Now
          </button>
        </div>

        {/* Subscription Coming Soon card */}
        <div className="pass-plan-card pass-plan-soon">
          <div className="pass-plan-soon-badge">COMING SOON</div>
          <div className="pass-plan-icon">📅</div>
          <div className="pass-plan-eyebrow">ooloo kitchen</div>
          <div className="pass-plan-name">Monthly <strong>Subscription</strong></div>
          <div className="pass-plan-subtitle">Dedicated Daily Cook Plan</div>
          <div className="pass-plan-price">
            <span className="pass-plan-price-main" style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>₹ TBA</span>
          </div>
          <div className="pass-plan-detail">Daily cook visits · Monthly billing</div>
          <div className="pass-plan-soon-text">
            Monthly cook plans with dedicated chefs — launching soon in Lucknow.
          </div>
          <button className="pass-plan-cta pass-plan-cta-outline" disabled>
            Notify Me When Live
          </button>
        </div>
      </div>

      {/* ---- MOBILE: original card layout ---- */}
      <div className="pass-mobile-only">
        <div className="pass-card" onClick={() => onBook(SERVICE_ITEMS[1], 'schedule')}>
          <img src="/images/ooloo_pass.png" alt="ooloo PASS" className="pass-card-image" />
          <div className="pass-card-content">
            <div className="pass-card-badge-text">ooloo kitchen</div>
            <div className="pass-card-title">
              ooloo <strong>PASS</strong>
              <br /><span>Daily Meal Service Pass</span>
            </div>
            <div className="pass-card-savings">
              3 Visits for <s>₹750</s> <strong>₹297</strong>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>30 days validity</div>
          </div>
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.6)" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <button
          className="pass-cta-btn"
          onClick={() => onBook(SERVICE_ITEMS[1], 'schedule')}
        >
          Book Pass Now
        </button>
      </div>

      <div className="divider" />

      {/* ===== TESTIMONIALS ===== */}
      <div className="section-header">
        <div>
          <div className="section-title">What our customers say</div>
        </div>
      </div>

      <div className="testimonials-scroll">
        {TESTIMONIALS.map((t, idx) => (
          <div key={idx} className="testimonial-card">
            <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
            <div className="testimonial-quote">"{t.quote}"</div>
            <div className="testimonial-author">{t.author}</div>
            <div className="testimonial-location">📍 {t.location} • {t.tag}</div>
          </div>
        ))}
      </div>

      {/* ===== MAIN FAQS (Centered, Borderless, No Background Box) ===== */}
      <div style={{ textAlign: 'center', maxWidth: '850px', margin: '44px auto 20px auto' }}>

        <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 850, color: '#121417', lineHeight: 1.15, margin: '8px 0' }}>
          Frequently Asked Questions
        </h2>
        <p className="page-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
          Quick answers about grocery supplies, timing, background checks, and cook hygiene.
        </p>
      </div>

      <div style={{ maxWidth: '850px', margin: '0 auto 40px auto', display: 'flex', flexDirection: 'column' }}>
        {FAQS.map((faq, idx) => {
          const isOpen = openFaq === idx;
          return (
            <div
              key={idx}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid var(--border-light)',
                padding: '4px 0',
                transition: 'all 0.2s ease'
              }}
            >
              <button
                onClick={() => setOpenFaq(isOpen ? null : idx)}
                style={{
                  width: '100%',
                  padding: '18px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)',
                  fontWeight: 800,
                  color: isOpen ? 'var(--primary)' : '#121417',
                  gap: '16px'
                }}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={20}
                  color={isOpen ? 'var(--primary)' : 'var(--text-muted)'}
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                    flexShrink: 0
                  }}
                />
              </button>

              {isOpen && (
                <div style={{
                  padding: '0 0 18px 0',
                  fontSize: 'clamp(0.98rem, 1.1vw, 1.1rem)',
                  color: '#4A4F55',
                  lineHeight: 1.65
                }}>
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ===== DISCLAIMER ===== */}
      <div style={{
        margin: '0 0 24px',
        padding: '16px 0',
        borderTop: '1px solid var(--border-light)',
        fontSize: '0.88rem',
        color: '#62676D',
        lineHeight: 1.6,
      }}>
        ⚠️ <strong style={{ color: '#1A1A1A' }}>Service Scope:</strong> Our cooks do <strong style={{ color: '#E53935' }}>not</strong> provide kitchen cleaning, utensil washing, or table serving. They focus 100% on chopping, cooking, and leaving your kitchen counter clean.
      </div>
    </>
  );
}
