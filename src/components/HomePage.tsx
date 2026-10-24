'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight, Check, Users, Clock, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';
import { FAQS, PARTY_PLANS, PARTY_ADDONS, OTHER_SERVICES, SUBSCRIPTION_PLANS, TERMS_AND_CONDITIONS } from '../data/lucknowData';
import HowItWorks from './HowItWorks';

// All kitchen services as card data
export const KITCHEN_SERVICES = [
  { id: 'prep', name: 'Vegetable Preparation', price: 199, originalPrice: 299, unit: '/hr', rating: 4.9, reviewCount: '25.4k', image: '/images/kitchen_prep.png', isNew: false, popular: false, desc: 'Chopping, cutting, peeling & pre-preparation' },
  { id: 'cooking', name: 'Cooking Assistant', price: 299, originalPrice: 499, unit: 'from', rating: 4.9, reviewCount: '30.7k', image: '/images/full_meal.png', isNew: false, popular: true, desc: '1 Hr (₹299 for up to 3) / 2 Hrs (₹399 for up to 5)' },
  { id: 'ondemand', name: 'On-Demand Cook (30 Min)', price: 299, originalPrice: 449, unit: '', rating: 4.8, reviewCount: '18.5k', image: '/images/express_cook.png', isNew: true, popular: false, desc: 'Express cook at your doorstep in 30 minutes' },
  { id: 'party', name: 'Party & Family Gathering', price: 1999, originalPrice: 2999, unit: 'from', rating: 4.9, reviewCount: '12.1k', image: '/images/party_cook.png', isNew: false, popular: true, desc: 'Full event cooking for 10 to 50 guests' },
  { id: 'kitchen_cleaning', name: 'Kitchen Organising', price: 199, originalPrice: 299, unit: '/hr', rating: 4.9, reviewCount: '14.2k', image: '/images/kitchen_prep.png', isNew: false, popular: false, desc: 'Platform, stovetop & counter deep cleaning' },
  { id: 'utensils', name: 'Utensils Cleaning', price: 199, originalPrice: 299, unit: '/hr', rating: 4.9, reviewCount: '16.8k', image: '/images/full_meal.png', isNew: false, popular: false, desc: 'Hygienic dishwashing and utensils cleaning' },
  { id: 'serving', name: 'Food & Table Serving', price: 199, originalPrice: 299, unit: '/hr', rating: 4.9, reviewCount: '9.3k', image: '/images/hero_cook_lucknow.png', isNew: false, popular: false, desc: 'Courteous table serving for meals & parties' },
  { id: 'subscription', name: 'Smart Subscriptions', price: 5999, originalPrice: 8500, unit: '/mo', rating: 4.9, reviewCount: '23.4k', image: '/images/hero_cook_ooloo.png', isNew: true, popular: false, desc: 'Save up to 30% with monthly cook partners' },
];

// ServiceItem for BookingSheet and Modal compatibility
export const SERVICE_ITEMS: ServiceItem[] = [
  { id: 'prep', title: 'Vegetable Preparation', subtitle: 'Chopping, cutting, peeling & pre-preparation.', desc: 'Fresh vegetable chopping, peeling, ginger-garlic pastes, and marinades ready before cooking at ₹199/hr.', icon: '🥕', duration: '1 Hour', idealFor: 'Busy home chefs & meal prep', popular: false },
  { id: 'cooking', title: 'Cooking Assistant', subtitle: 'North Indian, Awadhi, Multi-cuisine home cooking.', desc: '1 Hour (₹299 for up to 3 people) or 2 Hours (₹399 for up to 5 people). Fresh rotis, curries, and dal.', icon: '🍳', duration: '1 to 2 Hours', idealFor: 'Daily lunches, family dinners & healthy meals', popular: true },
  { id: 'ondemand', title: 'On-Demand Cook (30 Min)', subtitle: 'Verified cook at your door in 30 minutes across Lucknow.', desc: 'Emergency dinner or sudden guests? Verified cook dispatched immediately.', icon: '⚡', duration: '30 min arrival', idealFor: 'Instant urgent hunger & unexpected guests', popular: true },
  { id: 'party', title: 'Party & Family Gatherings', subtitle: 'Plans for 10 to 50 guests starting ₹1,999.', desc: 'Dedicated cooks handle end-to-end multi-course meal preparation. Servers & cleaners available at ₹1,000.', icon: '🎉', duration: '3 to 5 Hours', idealFor: 'House parties, Birthdays & Family gatherings', popular: true },
  { id: 'kitchen_cleaning', title: 'Kitchen Organising', subtitle: 'Clean surfaces, tidy shelves & kitchen organizing.', desc: 'Platform, stovetop & counter hygienic turnover at ₹199/hr.', icon: '🧽', duration: 'Hourly flexible', idealFor: 'Pantry reset & deep kitchen hygiene', popular: false },
  { id: 'utensils', title: 'Utensils Cleaning', subtitle: 'Hygiene washing & arranging of cookware & plates.', desc: 'Thorough dishwashing and scrub cleaning of all utensils at ₹199/hr.', icon: '🍽️', duration: 'Hourly flexible', idealFor: 'Post-cooking cleanup & large meal days', popular: false },
  { id: 'serving', title: 'Food Serving', subtitle: 'Table and dining serving by courteous helpers.', desc: 'Dining table hosting & hot roti serving assistance at ₹199/hr (or ₹1,000 per party event).', icon: '🛎️', duration: 'Hourly flexible', idealFor: 'Guest gatherings & special family dinners', popular: false },
  { id: 'subscription', title: 'Smart Subscriptions', subtitle: 'Save up to 30% with monthly subscription plans.', desc: 'Dedicated same trained cook, hold days, priority booking & festive off from ₹5,999/month.', icon: '📅', duration: 'Daily visits', idealFor: 'Working professionals & busy households', popular: false },
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide w-fit mb-5 sm:mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Lucknow&apos;s #1 On-Demand Cook Service</span>
            </div>

            {/* Header: reduced vertically with balanced line spacing */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.65rem] font-extrabold text-white leading-[1.22] tracking-tight mb-5 sm:mb-6">
              Need help in the<br />kitchen today? 🍳
            </h1>

            {/* Subtitle with more vertical space */}
            <p className="text-stone-300 text-sm sm:text-base font-normal leading-relaxed mb-6 sm:mb-7 max-w-xl">
              Verified cooks at your door in{' '}
              <strong className="text-orange-400 font-bold">30 mins</strong> across Lucknow
            </p>

            {/* Stats row — desktop/tablet with increased vertical space */}
            <div className="hidden sm:flex items-center gap-0 w-fit mb-6 sm:mb-7 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 shadow-lg">
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
                className={`group relative flex flex-col items-center justify-center text-center p-3 rounded-xl transition-all duration-200 backdrop-blur-md border cursor-pointer ${serviceMode === 'instant'
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
                className={`group relative flex flex-col items-center justify-center text-center p-3 rounded-xl transition-all duration-200 backdrop-blur-md border cursor-pointer ${serviceMode === 'schedule'
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
                className={`group relative flex flex-col items-center justify-center text-center p-3 rounded-xl transition-all duration-200 backdrop-blur-md border cursor-pointer ${serviceMode === 'autorepeat'
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
                  <span className="service-card-price-current">₹{svc.price.toLocaleString('en-IN')}{svc.unit ? ` ${svc.unit}` : ''}</span>
                  <span className="service-card-price-original">₹{svc.originalPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---- FAMILY GATHERING & PARTY PLANS (BROCHURE 1) ---- */}
      <div className="container" style={{ margin: '20px auto 44px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #1C1917 0%, #29150B 100%)',
          borderRadius: '28px',
          padding: 'clamp(24px, 4vw, 44px)',
          border: '1px solid rgba(255,255,255,0.12)',
          color: '#FFFFFF',
          boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle glow */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full bg-orange-600/20 blur-3xl" />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FB923C', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              <Sparkles size={16} />
              <span>Good Food. Happy Moments.</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 850, color: '#FFFFFF', lineHeight: 1.15, margin: '0 0 10px 0' }}>
              Family Gathering & Party Plans
            </h2>
            <p style={{ color: '#D6D3D1', fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)', maxWidth: '650px', margin: '0 0 28px 0', lineHeight: 1.5 }}>
              Make your special occasions stress-free with our trusted kitchen support services. Professional cooks manage your kitchen so you enjoy your guests.
            </p>

            {/* Plans Table / Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '12px',
              marginBottom: '28px'
            }}>
              {PARTY_PLANS.map((plan, idx) => (
                <div
                  key={idx}
                  onClick={() => onBook(SERVICE_ITEMS[3], 'schedule')}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    borderRadius: '18px',
                    padding: '18px 16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#FB923C', fontWeight: 800, marginBottom: '6px' }}>
                    <Users size={14} />
                    <span>{plan.people} People</span>
                  </div>
                  <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#FFFFFF', margin: '2px 0 4px', fontFamily: 'var(--font-heading)' }}>
                    {plan.amountFormatted}
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: '#A8A29E', fontWeight: 600 }}>
                    <Clock size={12} />
                    <span>{plan.hours} dedicated</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Party Add-ons & Terms Bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '18px',
              background: 'rgba(0,0,0,0.3)',
              borderRadius: '20px',
              padding: '20px 22px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              {/* Other Services */}
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#FB923C', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                  Party Add-on Services
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {PARTY_ADDONS.map((addon) => (
                    <div key={addon.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem', color: '#E7E5E4' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>{addon.icon}</span>
                        <span style={{ fontWeight: 600 }}>{addon.title} ({addon.unit}):</span>
                      </div>
                      <span style={{ fontWeight: 800, color: '#FB923C' }}>{addon.rate}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms & Conditions */}
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#A8A29E', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                  Party Terms & Conditions
                </div>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#D6D3D1', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {TERMS_AND_CONDITIONS.party.map((term, tIdx) => (
                    <li key={tIdx}>{term}</li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch' }}>
                <button
                  onClick={() => onBook(SERVICE_ITEMS[3], 'schedule')}
                  style={{
                    padding: '14px 20px',
                    borderRadius: '14px',
                    background: '#EA580C',
                    color: '#FFFFFF',
                    border: 'none',
                    fontSize: '0.98rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 8px 20px rgba(234,88,12,0.35)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>Book Party Cook Now</span>
                  <ArrowRight size={16} />
                </button>
                <div style={{ textAlign: 'center', fontSize: '0.75rem', color: '#A8A29E', marginTop: '8px' }}>
                  Or call / WhatsApp: <strong style={{ color: '#FFF' }}>+91 73180 86600</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---- SMART SUBSCRIPTIONS (BROCHURE 2) ---- */}
      <div className="container" style={{ margin: '0 auto 48px' }}>
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 30px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 800, color: '#EA580C', background: 'rgba(234,88,12,0.1)', padding: '4px 14px', borderRadius: '99px', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
            SAVE UP TO 30% ON SUBSCRIPTION PLANS
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 850, color: '#121417', lineHeight: 1.15, margin: '0 0 10px 0' }}>
            Smart Kitchen Subscriptions
          </h2>
          <p style={{ color: '#57534E', fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)', margin: 0 }}>
            Same trained cook, priority booking, festive off, and up to 6 service hold days. Transparent monthly plans for Lucknow homes.
          </p>
        </div>

        {/* 5 Subscription Cards */}
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
                padding: '24px 20px',
                border: sub.popular ? '2px solid #EA580C' : '1.5px solid #E7E5E4',
                boxShadow: sub.popular ? '0 12px 30px rgba(234,88,12,0.12)' : '0 2px 10px rgba(0,0,0,0.04)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 14px 30px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = sub.popular ? '0 12px 30px rgba(234,88,12,0.12)' : '0 2px 10px rgba(0,0,0,0.04)';
              }}
            >
              {sub.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-11px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#EA580C',
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
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: sub.color || '#EA580C', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                  {sub.badge}
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 850, color: '#1C1917', margin: '0 0 10px 0' }}>
                  {sub.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#1C1917', fontFamily: 'var(--font-heading)' }}>
                    {sub.price}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#78716C', fontWeight: 600 }}>{sub.period}</span>
                </div>

                <div style={{ borderTop: '1px solid #F5F5F4', paddingTop: '14px', marginBottom: '18px' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {sub.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: '#44403C' }}>
                        <Check size={15} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
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
                  background: sub.popular ? '#EA580C' : '#F5F5F4',
                  color: sub.popular ? '#FFFFFF' : '#1C1917',
                  border: sub.popular ? 'none' : '1px solid #E7E5E4',
                  fontSize: '0.86rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
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
          background: '#FAFAF9',
          borderRadius: '18px',
          padding: '16px 20px',
          border: '1px solid #E7E5E4',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
          gap: '14px',
          fontSize: '0.82rem',
          color: '#44403C',
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

      {/* ---- OTHER SERVICES & HOURLY FLEXIBILITY (BROCHURE 4) ---- */}
      <div className="container" style={{ margin: '0 auto 40px' }}>
        <div style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: 'clamp(20px, 3.5vw, 32px)',
          border: '1.5px solid #E7E5E4',
          boxShadow: '0 4px 18px rgba(0,0,0,0.03)'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '20px' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#EA580C', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                ON-DEMAND HOURLY & SPECIALIZED KITCHEN SERVICES
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 850, color: '#1C1917', margin: 0 }}>
                Transparent ₹199/Hr Add-On Support
              </h3>
            </div>
            <div style={{ fontSize: '0.82rem', color: '#78716C', background: '#F5F5F4', padding: '6px 14px', borderRadius: '99px', fontWeight: 600 }}>
              ⚡ Available in 30 Minutes across Lucknow
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '14px',
            marginBottom: '20px'
          }}>
            {OTHER_SERVICES.map((item) => (
              <div
                key={item.id}
                onClick={() => onBook(SERVICE_ITEMS[0], 'instant')}
                style={{
                  background: '#FAFAF9',
                  border: '1px solid #E7E5E4',
                  borderRadius: '16px',
                  padding: '16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#EA580C';
                  e.currentTarget.style.background = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E7E5E4';
                  e.currentTarget.style.background = '#FAFAF9';
                }}
              >
                <div>
                  <div style={{ fontSize: '1.3rem', marginBottom: '4px' }}>{item.icon}</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#1C1917' }}>{item.title}</div>
                  <div style={{ fontSize: '0.75rem', color: '#78716C', marginTop: '2px' }}>{item.desc}</div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#EA580C', fontFamily: 'var(--font-heading)' }}>
                    {item.rate}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#78716C', fontWeight: 600 }}>{item.unit}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Terms note */}
          <div style={{ borderTop: '1px solid #F5F5F4', paddingTop: '14px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px', fontSize: '0.78rem', color: '#78716C' }}>
            <span>*Cancellation charges ₹100 applicable if cancelled upon cook arrival. Subject to availability.</span>
            <div style={{ display: 'flex', gap: '14px', fontWeight: 600, color: '#44403C' }}>
              <span>Serving Gomti Nagar</span>
              <span>•</span>
              <span>Indira Nagar</span>
              <span>•</span>
              <span>Alambagh</span>
              <span>•</span>
              <span>All Lucknow</span>
            </div>
          </div>
        </div>

        <div className="divider" style={{ margin: '30px 0 0' }} />
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
          <p className="page-subtitle" style={{ margin: '0 auto', textAlign: 'center', maxWidth: '720px', fontSize: '0.92rem' }}>
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
