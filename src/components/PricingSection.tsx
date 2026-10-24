'use client';

import React from 'react';
import Link from 'next/link';
import { Check, Clock, ArrowRight, Users, Sparkles, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SUBSCRIPTION_PLANS, PARTY_PLANS, FAMILY_PARTY_CARDS, PARTY_ADDONS, OTHER_SERVICES, TERMS_AND_CONDITIONS, SERVICES } from '../data/lucknowData';

export default function PricingSection() {
  const { selectedArea, handleOpenBooking } = useApp();

  return (
    <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-10">
      
      {/* ===================== SECTION HEADER ===================== */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span>TRANSPARENT PRICING · ZERO SURGE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight tracking-tight mb-4">
          Simple, Honest <span className="text-orange-600">Kitchen Rates.</span>
        </h1>
        <p className="text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed">
          Pay only for what you cook with verified cooks at your doorstep in ~{selectedArea.avgEta} across Lucknow. No hidden agency commissions.
        </p>
      </div>

      {/* ===================== 1. FLEXIBLE HOURLY BOOKING (BROCHURE 4) ===================== */}
      <section id="hourly-rates" className="mb-14 sm:mb-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="text-xs sm:text-sm font-bold text-orange-600 uppercase tracking-wider mb-1">
              FLEXIBLE HOURLY BOOKING
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
              Pay By The Hour
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-stone-500 bg-stone-100 px-3.5 py-1.5 rounded-full font-medium">
            ⚡ Dispatched within 30 mins in {selectedArea.name}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* 1 Hour Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                1 HOUR SESSION
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl sm:text-4xl font-black text-stone-900 font-heading">₹299</span>
                <span className="text-xs sm:text-sm text-stone-500 font-semibold">/ session</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-orange-600 mb-6">
                Ideal for up to 3 people
              </div>

              <ul className="space-y-3 mb-8 text-xs sm:text-sm text-stone-700">
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
              onClick={() => handleOpenBooking(SERVICES[1], 'instant')}
              className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Book 1-Hour Cook →
            </button>
          </div>

          {/* 2 Hours Card (Popular) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-orange-600 shadow-lg relative flex flex-col justify-between">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full whitespace-nowrap shadow-sm">
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
              <div className="text-xs sm:text-sm font-semibold text-orange-600 mb-6">
                Ideal for up to 5 people
              </div>

              <ul className="space-y-3 mb-8 text-xs sm:text-sm text-stone-700">
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
              onClick={() => handleOpenBooking(SERVICES[1], 'instant')}
              className="w-full py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-600/25 transition-all cursor-pointer"
            >
              Book 2-Hour Cook →
            </button>
          </div>

          {/* Extra 30 Min Extension Card */}
          <div className="bg-stone-50/80 rounded-2xl p-6 sm:p-8 border border-dashed border-stone-300 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                FLEXIBLE ADD-ON
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl sm:text-4xl font-black text-orange-600 font-heading">+₹99</span>
                <span className="text-xs sm:text-sm text-stone-500 font-semibold">/ 30 mins</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-stone-600 mb-6">
                Add mid-session anytime
              </div>

              <ul className="space-y-3 mb-8 text-xs sm:text-sm text-stone-700">
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

            <div className="p-3 rounded-xl bg-white border border-stone-200 text-center text-xs text-stone-500 font-medium">
              Applicable to all hourly cooking bookings
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 2. OTHER SERVICES (₹199/HR) ===================== */}
      <section id="other-services" className="mb-14 sm:mb-20">
        <div className="mb-6 sm:mb-8">
          <div className="text-xs sm:text-sm font-bold text-orange-600 uppercase tracking-wider mb-1">
            ON-DEMAND HOURLY HELP · FLAT ₹199/HR
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-stone-900 tracking-tight">
            Specialized Support · Flat ₹199/Hr
          </h2>
          <p className="text-stone-600 text-sm sm:text-base md:text-lg mt-1 max-w-3xl">
            Need prep before you cook yourself, or helper assistance for dishes and serving? Hire trained staff at transparent hourly rates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {OTHER_SERVICES.map((svc) => (
            <div
              key={svc.id}
              onClick={() => handleOpenBooking(SERVICES[0], 'instant')}
              className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border border-stone-200 hover:border-orange-500 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-3">{svc.icon}</div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-stone-900 mb-2">{svc.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-stone-600 leading-relaxed mb-5">{svc.desc}</p>
              </div>
              <div className="pt-3.5 border-t border-stone-100 flex items-baseline justify-between">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-orange-600 font-heading">{svc.rate}</span>
                <span className="text-xs sm:text-sm md:text-base font-semibold text-stone-500">{svc.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== 3. FAMILY GATHERING & PARTY PLANS (BROCHURE 1) ===================== */}
      <section id="party-plans" className="mb-14 sm:mb-20">
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
          <div className="text-xs sm:text-sm lg:text-base text-stone-600 bg-stone-100 px-4 py-2 rounded-full font-semibold w-fit shrink-0">
            🎉 Complete feast preparation
          </div>
        </div>

        {/* Exactly 3 responsive party cards with larger typography on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
          {FAMILY_PARTY_CARDS.map((plan) => (
            <div
              key={plan.id}
              onClick={() => handleOpenBooking(SERVICES.find(s => s.id === 'party') || SERVICES[3], 'schedule')}
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

        {/* Party Add-ons & Terms Banner */}
        <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-stone-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
            <div>
              <div className="text-xs sm:text-sm lg:text-base font-bold text-orange-400 uppercase tracking-wider mb-3">
                PARTY ADD-ON HELPERS
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm lg:text-base text-stone-200">
                {PARTY_ADDONS.map((addon) => (
                  <div key={addon.id} className="flex justify-between items-center bg-white/5 p-2.5 sm:p-3 rounded-xl">
                    <span className="font-medium">{addon.icon} {addon.title} ({addon.unit}):</span>
                    <strong className="text-orange-400 font-bold text-sm sm:text-base lg:text-lg">{addon.rate}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs sm:text-sm lg:text-base font-bold text-stone-400 uppercase tracking-wider mb-3">
                PARTY GUIDELINES
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm lg:text-base text-stone-300 list-disc list-inside">
                {TERMS_AND_CONDITIONS.party.map((term, tIdx) => (
                  <li key={tIdx} className="leading-snug">{term}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center gap-3">
              <button
                onClick={() => handleOpenBooking(SERVICES.find(s => s.id === 'party') || SERVICES[3], 'schedule')}
                className="w-full py-3.5 sm:py-4 px-5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm sm:text-base lg:text-lg shadow-lg shadow-orange-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book Event Cook Online</span>
                <ArrowRight size={18} />
              </button>
              <div className="text-center text-xs sm:text-sm lg:text-base text-stone-400">
                Call / WhatsApp: <a href="tel:+917318086600" className="text-white font-bold hover:underline">+91 73180 86600</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 4. SMART SUBSCRIPTIONS (BROCHURE 2) ===================== */}
      <section id="subscriptions" className="mb-14 sm:mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
            <Sparkles size={14} />
            <span>SAVE UP TO 30% ON MONTHLY PLANS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-stone-900 tracking-tight mb-2">
            Smart Kitchen Subscriptions
          </h2>
          <p className="text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Dedicated same trained cook, hold days, priority booking, and festive off. Transparent monthly plans for working professionals and families in Lucknow.
          </p>
        </div>

        {/* 3 cards in row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {SUBSCRIPTION_PLANS.slice(0, 3).map((sub) => (
            <div
              key={sub.id}
              className={`bg-white rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl relative ${
                sub.popular ? 'border-2 border-orange-600 shadow-lg ring-2 ring-orange-600/20' : 'border-stone-200 shadow-sm'
              }`}
            >
              {sub.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap shadow-md">
                  POPULAR CHOICE
                </div>
              )}

              <div>
                <div className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-1.5">
                  {sub.badge}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 mb-2">{sub.title}</h3>
                <p className="text-xs sm:text-sm text-stone-500 mb-4">{sub.desc}</p>
                <div className="flex items-baseline gap-1.5 mb-5 pb-4 border-b border-stone-100">
                  <span className="text-3xl sm:text-4xl font-black text-stone-900 font-heading">{sub.price}</span>
                  <span className="text-sm text-stone-500 font-semibold">{sub.period}</span>
                </div>

                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-stone-700">
                  {sub.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/917318086600?text=Hi%20Ooloo!%20I%20would%20like%20to%20subscribe%20to%20the%20${encodeURIComponent(sub.title)}%20(${sub.price}%2Fmonth)%20in%20${encodeURIComponent(selectedArea.name)}.`}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  sub.popular
                    ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-md shadow-orange-600/25'
                    : 'bg-stone-900 hover:bg-stone-800 text-white'
                }`}
              >
                <MessageSquare size={16} />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          ))}
        </div>

        {/* 2 cards in row 2 centered horizontally */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
          {SUBSCRIPTION_PLANS.slice(3, 5).map((sub) => (
            <div
              key={sub.id}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] lg:max-w-[calc(33.333%-16px)] flex"
            >
              <div
                className="w-full bg-white rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl relative border-stone-200 shadow-sm"
              >
                <div>
                  <div className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-1.5">
                    {sub.badge}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 mb-2">{sub.title}</h3>
                  <p className="text-xs sm:text-sm text-stone-500 mb-4">{sub.desc}</p>
                  <div className="flex items-baseline gap-1.5 mb-5 pb-4 border-b border-stone-100">
                    <span className="text-3xl sm:text-4xl font-black text-stone-900 font-heading">{sub.price}</span>
                    <span className="text-sm text-stone-500 font-semibold">{sub.period}</span>
                  </div>

                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-stone-700">
                    {sub.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/917318086600?text=Hi%20Ooloo!%20I%20would%20like%20to%20subscribe%20to%20the%20${encodeURIComponent(sub.title)}%20(${sub.price}%2Fmonth)%20in%20${encodeURIComponent(selectedArea.name)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer bg-stone-900 hover:bg-stone-800 text-white"
                >
                  <MessageSquare size={16} />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Strip */}
        <div className="mt-8 bg-white rounded-2xl p-4 sm:p-6 border border-stone-200 flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm font-bold text-stone-700 shadow-xs">
          <span>💰 Save up to 30%</span>
          <span>👨‍🍳 Same Trained Cook</span>
          <span>⭐ Priority Booking</span>
          <span>📅 Festive Off</span>
          <span>🔒 Background Checked</span>
          <span>✨ No Hidden Charges</span>
        </div>
      </section>

      {/* ===================== 5. TERMS & CONDITIONS SUMMARY ===================== */}
      <section className="bg-stone-100/90 rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-200 text-stone-700 shadow-sm">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3 w-fit">
          <ShieldCheck size={18} />
          <span>TRUST & HYGIENE POLICY</span>
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
          ooloo Service Terms & Hygiene Standards
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-stone-600 mb-8 max-w-3xl leading-relaxed">
          Transparent, family-friendly kitchen policies ensuring safety, consistency, and professional hygiene on every visit across Lucknow.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
            <h4 className="text-base sm:text-lg lg:text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              <span>Hourly & Instant Booking Guidelines</span>
            </h4>
            <ul className="space-y-3.5">
              {TERMS_AND_CONDITIONS.hourly.map((t, idx) => (
                <li key={`h-${idx}`} className="flex items-start gap-3 text-sm sm:text-base lg:text-lg text-stone-700 leading-relaxed">
                  <Check size={18} className="text-emerald-600 shrink-0 mt-1" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
            <h4 className="text-base sm:text-lg lg:text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span>Subscription & Hygiene Standards</span>
            </h4>
            <ul className="space-y-3.5">
              {TERMS_AND_CONDITIONS.subscription.map((t, idx) => (
                <li key={`s-${idx}`} className="flex items-start gap-3 text-sm sm:text-base lg:text-lg text-stone-700 leading-relaxed">
                  <Check size={18} className="text-emerald-600 shrink-0 mt-1" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
