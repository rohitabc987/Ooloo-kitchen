'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight, Check, Users, Clock, Sparkles, MessageSquare, ShieldCheck, Calendar, Heart, Zap } from 'lucide-react';
import { ServiceItem } from '../types';
import { OTHER_SERVICES, FAMILY_PARTY_CARDS } from '../data/lucknowData';
import { useApp } from '../context/AppContext';
import HowItWorks from './HowItWorks';
import FaqSection from './FaqSection';
// All kitchen services as card data with starting/hourly rates
export const KITCHEN_SERVICES = [
  { id: 'prep', name: 'Vegetable Preparation', price: 199, originalPrice: 299, unit: '/hr', rating: 4.9, reviewCount: '25.4k', image: '/images/kitchen_prep.png', isNew: false, popular: false, desc: 'Chopping, peeling & recipe prep' },
  { id: 'cooking', name: 'Cooking Assistant', price: 299, originalPrice: 499, unit: 'from', rating: 4.9, reviewCount: '30.7k', image: '/images/full_meal.png', isNew: false, popular: true, desc: '1 to 2 hrs for 3 to 5 people' },
  { id: 'ondemand', name: 'On-Demand Cook (30 Min)', price: 299, originalPrice: 449, unit: 'from', rating: 4.8, reviewCount: '18.5k', image: '/images/express_cook.png', isNew: true, popular: false, desc: 'Dispatched to your door in 30 mins' },
  { id: 'party', name: 'Party & Family Gathering', price: 1999, originalPrice: 2999, unit: 'from', rating: 4.9, reviewCount: '12.1k', image: '/images/party_cook.png', isNew: false, popular: true, desc: 'Dedicated cooking for 10 to 50 guests' },
  { id: 'kitchen_cleaning', name: 'Kitchen Organising', price: 199, originalPrice: 299, unit: '/hr', rating: 4.9, reviewCount: '14.2k', image: '/images/kitchen_prep.png', isNew: false, popular: false, desc: 'Stovetop, slab & shelf hygiene reset' },
  { id: 'utensils', name: 'Utensils Cleaning', price: 199, originalPrice: 299, unit: '/hr', rating: 4.9, reviewCount: '16.8k', image: '/images/full_meal.png', isNew: false, popular: false, desc: 'Dishwashing and cookware scrub cleaning' },
  { id: 'serving', name: 'Food & Table Serving', price: 199, originalPrice: 299, unit: '/hr', rating: 4.9, reviewCount: '9.3k', image: '/images/hero_cook_lucknow.png', isNew: false, popular: false, desc: 'Dining hospitality and hot roti serving' },
  { id: 'subscription', name: 'Smart Subscriptions', price: 5999, originalPrice: 8500, unit: '/mo', rating: 4.9, reviewCount: '23.4k', image: '/images/hero_cook_ooloo.png', isNew: true, popular: false, desc: 'Save up to 30% with monthly cook' },
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
  const { selectedArea } = useApp();

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
      tag: "Smart Subscription",
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
      tag: "Smart Subscription",
      quote: "Our family loves the subscription. Great value, taste customized to our exact low-oil and mild spice preference.",
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide w-fit mb-4 sm:mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Lucknow&apos;s #1 On-Demand Cook Service</span>
            </div>

            {/* Header: responsive text sizes */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-[3.2rem] font-extrabold text-white leading-[1.2] tracking-tight mb-4 sm:mb-6">
              Need help in the<br />kitchen today? 🍳
            </h1>

            {/* Subtitle with responsive text size */}
            <p className="text-stone-300 text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed mb-6 sm:mb-7 max-w-xl">
              Verified cooks at your door in{' '}
              <strong className="text-orange-400 font-bold">30 mins</strong> across Lucknow. Starting at ₹199/hr.
            </p>

            {/* Stats row — responsive text */}
            <div className="hidden sm:flex items-center gap-0 w-fit mb-6 sm:mb-7 bg-white/10 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-white/15 shadow-lg">
              <div className="text-center px-3.5 sm:px-5 first:pl-2">
                <div className="text-base sm:text-lg md:text-xl font-extrabold text-white leading-none mb-1">30 min</div>
                <div className="text-[10px] sm:text-xs text-stone-300 font-medium tracking-wide uppercase">Avg. Dispatch</div>
              </div>
              <div className="w-px h-7 bg-white/20 shrink-0" />
              <div className="text-center px-3.5 sm:px-5">
                <div className="text-base sm:text-lg md:text-xl font-extrabold text-amber-400 leading-none mb-1 flex items-center justify-center gap-1">
                  4.9<span className="text-xs sm:text-sm">★</span>
                </div>
                <div className="text-[10px] sm:text-xs text-stone-300 font-medium tracking-wide uppercase">Avg. Rating</div>
              </div>
              <div className="w-px h-7 bg-white/20 shrink-0" />
              <div className="text-center px-3.5 sm:px-5 last:pr-2">
                <div className="text-base sm:text-lg md:text-xl font-extrabold text-white leading-none mb-1">500+</div>
                <div className="text-[10px] sm:text-xs text-stone-300 font-medium tracking-wide uppercase">Happy Families</div>
              </div>
            </div>

            {/* Service Mode Buttons */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-lg w-full">
              <button
                type="button"
                className={`group relative flex flex-col items-center justify-center text-center p-2.5 sm:p-3 rounded-xl transition-all duration-200 backdrop-blur-md border cursor-pointer ${serviceMode === 'instant'
                    ? 'bg-white/25 border-white/60 shadow-lg scale-105 ring-2 ring-white/20'
                    : 'bg-white/10 border-white/15 hover:bg-white/20 hover:border-white/30 text-white/90'
                  }`}
                onClick={() => setServiceMode('instant')}
              >
                <span className="text-base sm:text-lg mb-1 transition-transform group-hover:scale-110">⚡</span>
                <span className="text-[11px] sm:text-xs font-bold text-white leading-tight">Instant Service</span>
              </button>
              <button
                type="button"
                className={`group relative flex flex-col items-center justify-center text-center p-2.5 sm:p-3 rounded-xl transition-all duration-200 backdrop-blur-md border cursor-pointer ${serviceMode === 'schedule'
                    ? 'bg-white/25 border-white/60 shadow-lg scale-105 ring-2 ring-white/20'
                    : 'bg-white/10 border-white/15 hover:bg-white/20 hover:border-white/30 text-white/90'
                  }`}
                onClick={() => setServiceMode('schedule')}
              >
                <span className="text-base sm:text-lg mb-1 transition-transform group-hover:scale-110">📅</span>
                <span className="text-[11px] sm:text-xs font-bold text-white leading-tight">Schedule Later</span>
              </button>
              <button
                type="button"
                className={`group relative flex flex-col items-center justify-center text-center p-2.5 sm:p-3 rounded-xl transition-all duration-200 backdrop-blur-md border cursor-pointer ${serviceMode === 'autorepeat'
                    ? 'bg-white/25 border-white/60 shadow-lg scale-105 ring-2 ring-white/20'
                    : 'bg-white/10 border-white/15 hover:bg-white/20 hover:border-white/30 text-white/90'
                  }`}
                onClick={() => setServiceMode('autorepeat')}
              >
                <span className="text-base sm:text-lg mb-1 transition-transform group-hover:scale-110">🔁</span>
                <span className="text-[11px] sm:text-xs font-bold text-white leading-tight">Auto-Repeat</span>
              </button>
            </div>
          </div>

          {/* Right: Hero Image with seamless blend & live floating badge */}
          <div className="relative hidden lg:block overflow-hidden w-full h-full min-h-80 lg:col-span-5">
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

      {/* ===== ALL KITCHEN SERVICES (CONSTRAINED TO MATCH TOP SECTION) ===== */}
      <section className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 text-xs sm:text-sm font-bold tracking-wide uppercase mb-2">
              <Sparkles size={14} />
              <span>Available in 30 Mins Across Lucknow</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
              All Kitchen Services
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm md:text-base mt-1">
              Select a service below to book instantly or schedule for later
            </p>
          </div>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-xs sm:text-sm md:text-base font-bold text-orange-600 hover:text-orange-700 transition-colors w-fit"
          >
            <span>View Full Rate Card</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* 4-column desktop / 2-column mobile grid matching top section width */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {KITCHEN_SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between cursor-pointer group relative"
              onClick={() => handleCardClick(svc.id)}
            >
              {/* Badge or Rating */}
              <div className="absolute top-2.5 left-2.5 z-10">
                {svc.isNew ? (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] sm:text-xs font-bold tracking-wide shadow-sm">
                    NEW
                  </span>
                ) : svc.popular ? (
                  <span className="px-2 py-0.5 rounded-full bg-orange-600 text-white text-[10px] sm:text-xs font-bold tracking-wide shadow-sm">
                    POPULAR
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full bg-stone-900/80 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold flex items-center gap-1 shadow-sm">
                    <span className="text-amber-400">★</span> {svc.rating}
                  </span>
                )}
              </div>

              {/* Card Image */}
              <div className="relative w-full aspect-square bg-stone-100 overflow-hidden">
                <img
                  src={svc.image}
                  alt={svc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  className="absolute bottom-2.5 right-2.5 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/95 backdrop-blur-sm border border-stone-200 shadow-md flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all font-black text-base sm:text-lg z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(svc.id);
                  }}
                  aria-label={`Book ${svc.name}`}
                  title={`Book ${svc.name}`}
                >
                  +
                </button>
              </div>

              {/* Card Info with responsive typography */}
              <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xs sm:text-sm md:text-base font-extrabold text-stone-900 leading-snug line-clamp-1 group-hover:text-orange-600 transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-stone-500 line-clamp-2 mt-1 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
                
                <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-baseline justify-between gap-1.5">
                  <div className="flex items-baseline gap-1 sm:gap-1.5">
                    {svc.unit === 'from' && (
                      <span className="text-[10px] sm:text-xs font-semibold text-stone-500">From</span>
                    )}
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg font-black text-orange-600 font-heading">
                      ₹{svc.price.toLocaleString('en-IN')}
                    </span>
                    {svc.unit && svc.unit !== 'from' && (
                      <span className="text-[10px] sm:text-xs font-semibold text-stone-500">{svc.unit}</span>
                    )}
                  </div>
                  <span className="text-[10px] sm:text-xs text-stone-400 line-through">
                    ₹{svc.originalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PAY BY THE HOUR (HOURLY COOKING) ===== */}
      <section id="pay-by-hour" className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 text-xs sm:text-sm font-bold tracking-wide uppercase mb-2">
              <Zap size={14} className="fill-orange-600 text-orange-600" />
              <span>FLEXIBLE HOURLY BOOKING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Pay By The Hour
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm md:text-base mt-1">
              Dispatched within 30 mins in {selectedArea?.name || 'Lucknow'} · Pay only for what you cook with zero surge
            </p>
          </div>
          <Link
            href="/pricing#hourly-rates"
            className="inline-flex items-center gap-2 text-xs sm:text-sm md:text-base font-bold text-orange-600 hover:text-orange-700 transition-colors w-fit"
          >
            <span>View All Plans & Rates</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* 1 Hour Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all">
            <div>
              <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                1 HOUR SESSION
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl sm:text-4xl font-black text-stone-900 font-heading">₹299</span>
                <span className="text-xs sm:text-sm text-stone-500 font-semibold">/ session</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-orange-600 mb-5">
                Ideal for up to 3 people
              </div>

              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-2.5">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>1 Hour dedicated cooking support</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>2 Main Dishes (e.g. Dal & Sabzi)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fresh Phulkas / Rotis & Rice</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Customized spice, oil & salt level</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onBook(SERVICE_ITEMS[1], 'instant')}
              className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book 1-Hour Cook</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* 2 Hours Card (Popular) */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border-2 border-orange-600 shadow-md ring-1 ring-orange-600/20 relative flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-0.5 rounded-full whitespace-nowrap shadow-sm">
              MOST POPULAR
            </div>

            <div>
              <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                2 HOURS SESSION
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl sm:text-4xl font-black text-stone-900 font-heading">₹399</span>
                <span className="text-xs sm:text-sm text-stone-500 font-semibold">/ session</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-orange-600 mb-5">
                Ideal for up to 5 people
              </div>

              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-2.5">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>2 Hours dedicated cooking support</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>3-4 Main Dishes + Starter/Snack</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Phulkas, Parathas & Biryani/Rice</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Vegetable chopping & prep included</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onBook(SERVICE_ITEMS[1], 'instant')}
              className="w-full py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-600/25 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book 2-Hour Cook</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Extra 30 Min Extension Card */}
          <div className="bg-stone-50/90 rounded-2xl p-6 sm:p-7 border border-dashed border-stone-300 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                FLEXIBLE ADD-ON
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl sm:text-4xl font-black text-orange-600 font-heading">+₹99</span>
                <span className="text-xs sm:text-sm text-stone-500 font-semibold">/ 30 mins</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-stone-600 mb-5">
                Add mid-session anytime
              </div>

              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-2.5">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Need an extra dish or sweet prepared?</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>No hassle extending the cook duration</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Transparent flat ₹99 per half-hour</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onBook(SERVICE_ITEMS[1], 'instant')}
              className="w-full py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs sm:text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book Hourly Cook</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ===== OTHER SERVICES & HOURLY SUPPORT (SPECIALIZED SUPPORT · FLAT ₹199/HR) ===== */}
      <section className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 text-xs sm:text-sm lg:text-base font-bold tracking-wide uppercase mb-2">
              <Sparkles className="w-4 h-4 lg:w-5 lg:h-5" />
              <span>ON-DEMAND HOURLY HELP · FLAT ₹199/HR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Specialized Support · Flat ₹199/Hr
            </h2>
            <p className="text-stone-500 text-sm sm:text-base lg:text-lg 2xl:text-xl mt-1.5 max-w-3xl leading-relaxed">
              Chopping prep, utensils washing, kitchen organizing & serving in 30 mins
            </p>
          </div>
          <Link
            href="/pricing#other-services"
            className="inline-flex items-center gap-2 text-sm sm:text-base lg:text-lg font-bold text-orange-600 hover:text-orange-700 transition-colors w-fit shrink-0"
          >
            <span>View Full Rate Card</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* 4 cards in a responsive grid with larger desktop text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {OTHER_SERVICES.map((item) => (
            <div
              key={item.id}
              onClick={() => onBook(SERVICE_ITEMS[0], 'instant')}
              className="bg-white rounded-3xl p-6 sm:p-7 lg:p-8 border border-stone-200 shadow-sm hover:border-orange-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-3.5">{item.icon}</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-stone-600 leading-relaxed mb-6 font-medium">{item.desc}</p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex items-baseline justify-between">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-orange-600 font-heading">{item.rate}</span>
                <span className="text-xs sm:text-sm lg:text-base font-bold text-stone-500">{item.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FAMILY GATHERING & PARTY PLANS (SHOWN AFTER SPECIALIZED SUPPORT) ===== */}
      <section id="party-plans" className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 text-xs sm:text-sm lg:text-base font-bold tracking-wide uppercase mb-2">
              <Sparkles className="w-4 h-4 lg:w-5 lg:h-5" />
              <span>GOOD FOOD · HAPPY MOMENTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Family Gathering & Party Plans
            </h2>
            <p className="text-stone-500 text-sm sm:text-base lg:text-lg 2xl:text-xl mt-1.5 max-w-3xl leading-relaxed">
              Dedicated event cooks for 10 to 50+ guests across Lucknow · Multi-course feasts cooked fresh at your home
            </p>
          </div>
          <Link
            href="/pricing#party-plans"
            className="inline-flex items-center gap-2 text-sm sm:text-base lg:text-lg font-bold text-orange-600 hover:text-orange-700 transition-colors w-fit shrink-0"
          >
            <span>View Full Details & Add-ons</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Exactly 3 cards grid with larger font sizes on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-10">
          {FAMILY_PARTY_CARDS.map((plan) => (
            <div
              key={plan.id}
              onClick={() => onBook(SERVICE_ITEMS.find(s => s.id === 'party') || SERVICE_ITEMS[3], 'schedule')}
              className={`bg-white rounded-3xl p-6 sm:p-7 lg:p-8 xl:p-9 border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1.5 hover:shadow-2xl relative cursor-pointer ${
                plan.popular ? 'border-2 border-orange-600 shadow-lg ring-2 ring-orange-600/20' : 'border-stone-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-2 text-base sm:text-lg lg:text-xl font-extrabold text-stone-900">
                    <Users className="text-orange-600 w-5 h-5 lg:w-6 lg:h-6 shrink-0" />
                    <span>{plan.people}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm lg:text-base text-stone-600 font-semibold bg-stone-100 px-3 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                    <span>{plan.hours}</span>
                  </span>
                </div>

                <div className="my-3 lg:my-4">
                  {plan.pricePrefix ? (
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm lg:text-base font-bold text-stone-500 uppercase tracking-wide">
                        {plan.pricePrefix}
                      </span>
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-orange-600 font-heading">
                        {plan.amount}
                      </span>
                    </div>
                  ) : (
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-orange-600 font-heading">
                      {plan.amount}
                    </div>
                  )}
                  <p className="text-xs sm:text-sm lg:text-base text-stone-600 mt-1.5 font-medium leading-relaxed">
                    {plan.ideal}
                  </p>
                </div>

                <div className="border-t border-stone-100 pt-4 my-4">
                  <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm lg:text-base text-stone-700 font-medium">
                    {plan.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <Check className="text-emerald-600 shrink-0 mt-0.5 w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                type="button"
                className={`w-full py-3 sm:py-3.5 lg:py-4 px-4 rounded-xl font-extrabold text-sm sm:text-base lg:text-lg transition-all mt-3 ${
                  plan.popular
                    ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-md shadow-orange-600/25'
                    : 'bg-stone-900 hover:bg-stone-800 text-white'
                }`}
              >
                Book Party Cook →
              </button>
            </div>
          ))}
        </div>

        {/* Party Add-ons & helpers banner */}
        <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-stone-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="text-xs sm:text-sm lg:text-base font-bold text-orange-400 uppercase tracking-wider mb-2">
              PARTY ADD-ON HELPERS AVAILABLE
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm lg:text-base text-stone-200">
              <span className="bg-white/10 px-3.5 py-1.5 rounded-xl font-semibold">🤵 Server: ₹1,000 / Event</span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-xl font-semibold">🧹 Cleaner: ₹1,000 / Event</span>
              <span className="text-stone-400 self-center">3 to 5 hours full event celebration support</span>
            </div>
          </div>
          <button
            onClick={() => onBook(SERVICE_ITEMS.find(s => s.id === 'party') || SERVICE_ITEMS[3], 'schedule')}
            className="w-full md:w-auto py-3.5 sm:py-4 px-7 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm sm:text-base lg:text-lg shadow-lg shadow-orange-600/30 transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0"
          >
            <span>Book Party Cook Now</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ===== CUSTOMER REVIEWS (CONSTRAINED HEADER + RESPONSIVE MARQUEE) ===== */}
      <section className="w-full my-8 sm:my-12">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 text-xs sm:text-sm font-bold tracking-wide uppercase mb-2">
            <Heart size={14} className="fill-orange-600" />
            <span>REAL STORIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
            What Our Customers Say
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm md:text-base mt-1">
            Real experiences from verified Lucknow households across Gomti Nagar, Alambagh, and Indira Nagar
          </p>
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
      </section>

      {/* ===== HOW IT WORKS: THE OOLOO EXPERIENCE ===== */}
      <HowItWorks onBook={() => onBook(SERVICE_ITEMS[0], serviceMode)} />

      {/* ===== MAIN FAQS (MATCHES FAQ PAGE DESIGN) ===== */}
      <FaqSection isHomePage={true} />
    </>
  );
}
