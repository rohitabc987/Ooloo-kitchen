'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { FAQS } from '../data/lucknowData';
import HowItWorks from './HowItWorks';

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
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const handleCardClick = (svcId: string) => {
    const found = SERVICE_ITEMS.find(s => s.id === svcId);
    onBook(found || SERVICE_ITEMS[0], serviceMode);
  };

  const REVIEWS_ROW_1 = [
    {
      author: "Neha",
      location: "Gomti Nagar",
      tag: "Full Meal",
      quote: "The service was simple and effective. It met my expectations without any hassle. Cook arrived in 22 mins, food was hot and delicious. Good overall experience.",
      rating: 5,
    },
    {
      author: "Pradnyesh",
      location: "Sushant Golf City",
      tag: "Kitchen Prep",
      quote: "Great work, our kitchen was left spotless and fresh. The Dal Tadka & Kadhai Paneer were top notch. I appreciated the attention to detail. Will recommend it! 👍",
      rating: 5,
    },
    {
      author: "Ridhi Saluja",
      location: "Hazratganj",
      tag: "Daily Pass",
      quote: "The services have definitely improved home life from the first time. Preferences are kept as top priority. Thank you for making our lives easier with ooloo!",
      rating: 5,
    },
    {
      author: "Kirti",
      location: "Aliganj",
      tag: "Express Cook",
      quote: "I'd say it was great value for money. The sudden urgency was handled well, without compromising quality. Really satisfied with the experience.",
      rating: 5,
    },
    {
      author: "Alok Verma",
      location: "Indira Nagar",
      tag: "Full Meal",
      quote: "Seamless experience from booking to completion. The cook was courteous, punctual, and did a fantastic job with our daily dinner.",
      rating: 5,
    },
    {
      author: "Sameer",
      location: "Mahanagar",
      tag: "Dinner Cook",
      quote: "Really liked your service, it was smooth, efficient, and just what I needed. Authentic taste and spotless kitchen counter! ⭐",
      rating: 5,
    },
  ];

  const REVIEWS_ROW_2 = [
    {
      author: "Ritika",
      location: "Gomti Nagar Ext.",
      tag: "Family Dinner",
      quote: "Seamless experience from booking to completion. The staff was courteous, punctual, and did a fantastic job with our family dinner.",
      rating: 5,
    },
    {
      author: "Karishma",
      location: "Ashiyana",
      tag: "Full Meal",
      quote: "Absolutely excellent service! The team was prompt and professional throughout. Loved the fresh Phulkas and Paneer Butter Masala. Would love to use it again.",
      rating: 5,
    },
    {
      author: "Rabia",
      location: "Vrindavan Yojna",
      tag: "Hygiene Kit",
      quote: "Really impressive compared to other platforms. The service was reliable and fast — very pleased with our cook's hygiene and apron kit!",
      rating: 5,
    },
    {
      author: "Amit Trivedi",
      location: "Gomti Nagar",
      tag: "Party Cook",
      quote: "Booked in 30 mins for emergency guests. He prepared Awadhi Dum Biryani in under an hour! Lifesaver service in Lucknow.",
      rating: 5,
    },
    {
      author: "Pooja Mishra",
      location: "Jankipuram",
      tag: "Verified Cook",
      quote: "Zero cancellation hassle. Cook came in proper apron & chef cap with full verification. Very clean cooking practices.",
      rating: 5,
    },
    {
      author: "Rajesh & Vandana",
      location: "Hazratganj",
      tag: "Daily Pass",
      quote: "Our family loves the daily pass. Great value, taste customized to our exact low-oil and mild spice preference.",
      rating: 5,
    },
  ];

  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-4 sm:pt-6 pb-6">
        <div className="relative overflow-hidden w-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-neutral-950 via-stone-900 to-stone-950 border border-white/10 shadow-2xl shadow-orange-950/20 grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Subtle Ambient Decorative Glows */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-orange-600/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl" />

          {/* Left: text + buttons */}
          <div className="relative z-10 flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12 lg:col-span-7">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide w-fit mb-4 sm:mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Lucknow&apos;s #1 On-Demand Cook Service</span>
            </div>

            {/* Header: restored to its original clean size */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-3">
              Need help in the<br />kitchen today? 🍳
            </h1>

            {/* Subtitle */}
            <p className="text-stone-300 text-sm sm:text-base font-normal leading-relaxed mb-6 max-w-xl">
              Verified cooks at your door in{' '}
              <strong className="text-orange-400 font-bold">30 mins</strong> across Lucknow
            </p>

            {/* Stats row — desktop/tablet */}
            <div className="hidden sm:flex items-center gap-0 w-fit mb-6 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 shadow-lg">
              <div className="text-center px-4 sm:px-5 first:pl-2">
                <div className="text-lg sm:text-xl font-extrabold text-white leading-none mb-1">30 min</div>
                <div className="text-xs text-stone-300 font-medium tracking-wide uppercase">Avg. Dispatch</div>
              </div>
              <div className="w-px h-7 bg-white/20 shrink-0" />
              <div className="text-center px-4 sm:px-5">
                <div className="text-lg sm:text-xl font-extrabold text-amber-400 leading-none mb-1 flex items-center justify-center gap-1">
                  4.9<span className="text-sm">★</span>
                </div>
                <div className="text-xs text-stone-300 font-medium tracking-wide uppercase">Avg. Rating</div>
              </div>
              <div className="w-px h-7 bg-white/20 shrink-0" />
              <div className="text-center px-4 sm:px-5 last:pr-2">
                <div className="text-lg sm:text-xl font-extrabold text-white leading-none mb-1">500+</div>
                <div className="text-xs text-stone-300 font-medium tracking-wide uppercase">Happy Families</div>
              </div>
            </div>

            {/* Service Mode Buttons */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-lg w-full">
              <button
                type="button"
                className={`group relative flex flex-col items-center justify-center text-center p-3 rounded-xl transition-all duration-200 backdrop-blur-md border cursor-pointer ${
                  serviceMode === 'instant'
                    ? 'bg-white/25 border-white/60 shadow-lg scale-105 ring-2 ring-white/20'
                    : 'bg-white/10 border-white/15 hover:bg-white/20 hover:border-white/30 text-white/90'
                }`}
                onClick={() => setServiceMode('instant')}
              >
                <span className="text-lg mb-1 transition-transform group-hover:scale-110">⚡</span>
                <span className="text-xs font-bold text-white leading-tight">Get Instant Service</span>
              </button>
              <button
                type="button"
                className={`group relative flex flex-col items-center justify-center text-center p-3 rounded-xl transition-all duration-200 backdrop-blur-md border cursor-pointer ${
                  serviceMode === 'schedule'
                    ? 'bg-white/25 border-white/60 shadow-lg scale-105 ring-2 ring-white/20'
                    : 'bg-white/10 border-white/15 hover:bg-white/20 hover:border-white/30 text-white/90'
                }`}
                onClick={() => setServiceMode('schedule')}
              >
                <span className="text-lg mb-1 transition-transform group-hover:scale-110">📅</span>
                <span className="text-xs font-bold text-white leading-tight">Schedule for Later</span>
              </button>
              <button
                type="button"
                className={`group relative flex flex-col items-center justify-center text-center p-3 rounded-xl transition-all duration-200 backdrop-blur-md border cursor-pointer ${
                  serviceMode === 'autorepeat'
                    ? 'bg-white/25 border-white/60 shadow-lg scale-105 ring-2 ring-white/20'
                    : 'bg-white/10 border-white/15 hover:bg-white/20 hover:border-white/30 text-white/90'
                }`}
                onClick={() => setServiceMode('autorepeat')}
              >
                <span className="text-lg mb-1 transition-transform group-hover:scale-110">🔁</span>
                <span className="text-xs font-bold text-white leading-tight">Service on Auto-repeat</span>
              </button>
            </div>
          </div>

          {/* Right: Hero Image with seamless blend & live floating badge */}
          <div className="relative hidden lg:block overflow-hidden w-full h-full min-h-80 lg:col-span-5">
            {/* Edge gradient fade so the image melts seamlessly into the dark background */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/30 to-transparent z-10 pointer-events-none w-1/3" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent z-10 pointer-events-none" />

            <img
              src="/images/hero_cook.png"
              alt="Verified cook cooking in a kitchen"
              className="w-full h-full object-cover object-top select-none"
            />

            {/* Floating Live Dispatch Card */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-4 py-3 rounded-2xl bg-stone-950/90 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black whitespace-nowrap">
              <span className="text-2xl">👩‍🍳</span>
              <div>
                <div className="text-xs font-bold text-white">Cook Dispatched!</div>
                <div className="text-xs text-stone-300">Arriving in ~28 mins</div>
              </div>
              <div className="relative flex h-3 w-3 shrink-0 ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ALL KITCHEN SERVICES (NATURAL 100% FULL SCREEN WIDTH WITH BIGGER IMAGES) ===== */}
      <div style={{ width: '100%', padding: '8px 0 32px 0' }}>
        <div className="section-header" style={{ padding: '28px clamp(20px, 4vw, 56px) 14px' }}>
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

              {/* Add / Book Button */}
              <button
                className="service-card-add-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(svc.id);
                }}
                aria-label={`Book ${svc.name}`}
                title={`Book ${svc.name}`}
              >
                +
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
      </div>

      {/* ---- DESKTOP & MOBILE PASSES (ALIGNED WITH HEADER VIA CONTAINER) ---- */}
      <div className="container">
        {/* Desktop: Monthly Pass + Subscription Cards */}
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

        {/* Mobile: original card layout */}
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

        <div className="divider" style={{ margin: '16px 0 0' }} />
      </div>

      {/* ===== CUSTOMER REVIEWS (FULL SCREEN WIDTH WITH BIGGER CARDS) ===== */}
      <div style={{ width: '100%', padding: '16px 0 24px 0' }}>
        <div className="section-header" style={{ padding: '28px clamp(20px, 4vw, 56px) 14px' }}>
          <div>
            <div className="section-title">What our customers say</div>
            <div className="section-subtitle">Real experiences from verified Lucknow households</div>
          </div>
        </div>

        <div className="reviews-marquee-wrapper">
          {/* Row 1 Track (Seamless infinite loop) */}
          <div className="reviews-marquee-track track-forward">
            {[...REVIEWS_ROW_1, ...REVIEWS_ROW_1].map((t, idx) => (
              <div key={`r1-${idx}`} className="marquee-review-card">
                <div>
                  <div className="marquee-review-stars">{'★'.repeat(t.rating)}</div>
                  <div className="marquee-review-quote">&ldquo;{t.quote}&rdquo;</div>
                </div>
                <div className="marquee-review-footer">
                  <span className="marquee-review-author">{t.author}</span>
                  <span className="marquee-review-tag">📍 {t.location} • {t.tag}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 Track (Seamless infinite loop) */}
          <div className="reviews-marquee-track track-reverse">
            {[...REVIEWS_ROW_2, ...REVIEWS_ROW_2].map((t, idx) => (
              <div key={`r2-${idx}`} className="marquee-review-card">
                <div>
                  <div className="marquee-review-stars">{'★'.repeat(t.rating)}</div>
                  <div className="marquee-review-quote">&ldquo;{t.quote}&rdquo;</div>
                </div>
                <div className="marquee-review-footer">
                  <span className="marquee-review-author">{t.author}</span>
                  <span className="marquee-review-tag">📍 {t.location} • {t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="divider" style={{ margin: '0' }} />
      </div>

      {/* ===== HOW IT WORKS: THE OOLOO EXPERIENCE (BEFORE FAQ) ===== */}
      <HowItWorks onBook={() => onBook(SERVICE_ITEMS[0], serviceMode)} />

      <div className="container">
        <div className="divider" style={{ margin: '0 0 16px' }} />
      </div>

      {/* ===== MAIN FAQS (Centered, Borderless, Well-Padded for Mobile) ===== */}
      <div style={{ maxWidth: '850px', margin: '0 auto', padding: '28px 18px 50px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)', fontWeight: 850, color: '#121417', lineHeight: 1.2, margin: '6px 0 8px 0' }}>
            Frequently Asked Questions
          </h2>
          <p className="page-subtitle" style={{ margin: '0 auto', textAlign: 'center', maxWidth: '520px', fontSize: '0.92rem' }}>
            Quick answers about grocery supplies, timing, background checks, and cook hygiene.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                    padding: '16px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 'clamp(1rem, 1.3vw, 1.2rem)',
                    fontWeight: 800,
                    color: isOpen ? 'var(--primary)' : '#121417',
                    gap: '14px'
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
                    padding: '0 0 16px 0',
                    fontSize: '0.94rem',
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
      </div>
    </>
  );
}
