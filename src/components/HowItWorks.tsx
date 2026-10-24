'use client';

import React from 'react';
import Link from 'next/link';
import { XCircle, CheckCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
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
      title: 'Book & Relax',
      tag: 'CALL OR WHATSAPP',
      image: '/images/hero_cook_lucknow_3.png',
      desc: 'Book your kitchen partner on call or WhatsApp (+91 73180 86600). Nearest cook is dispatched.'
    },
    {
      num: '02',
      title: 'Verified Cook Arrives On Time',
      tag: 'TRAINED & VERIFIED',
      image: '/images/express_cook.png',
      desc: 'Trained & verified cook arrives at your doorstep on time with full uniform and hygiene kit.'
    },
    {
      num: '03',
      title: 'We Handle The Kitchen',
      tag: 'REST & ENTERTAIN',
      image: '/images/full_meal.png',
      desc: 'Focus on your guests or rest while we cook fresh, delicious food to your exact taste.'
    }
  ];

  return (
    <section id="how-it-works" className="py-8 sm:py-14" style={{ backgroundColor: 'transparent', ...style }}>
      <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 text-xs sm:text-sm font-bold tracking-wide uppercase mb-2">
            <Sparkles size={14} />
            <span>THE OOLOO EXPERIENCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight mb-3">
            3 Easy Steps to <span className="text-orange-600">Fresh Home Food.</span>
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
            Available in 30 minutes* across Lucknow. Trained cooks, trusted support, hassle-free experience.
          </p>
        </div>

        {/* 3 Visual Step Cards with Real Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-14">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-stone-100">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-orange-600 text-white text-xs font-black px-3 py-1 rounded-full tracking-wider shadow-sm">
                  STEP {step.num}
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-orange-600 tracking-wider uppercase mb-1.5">
                    {step.tag}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-stone-900 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Kitchen Scope Banner */}
        <div className="bg-gradient-to-br from-stone-950 via-neutral-900 to-stone-950 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-white mb-8 sm:mb-12 border border-white/10 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="text-xs font-bold text-orange-400 tracking-wider uppercase mb-1.5">
              OUR COOKING SPECIALIZATION
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
              100% Focused on Making Great Meals
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 sm:p-4 flex items-center gap-3 text-xs sm:text-sm font-bold text-white">
              <span className="text-orange-400 font-black text-base sm:text-lg">✕</span>
              <span>NO KITCHEN CLEANING*</span>
            </div>

            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 sm:p-4 flex items-center gap-3 text-xs sm:text-sm font-bold text-white">
              <span className="text-orange-400 font-black text-base sm:text-lg">✕</span>
              <span>NO UTENSIL CLEANING*</span>
            </div>

            <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 sm:p-4 flex items-center gap-3 text-xs sm:text-sm font-bold text-white">
              <span className="text-orange-400 font-black text-base sm:text-lg">✕</span>
              <span>NO SERVING*</span>
            </div>
          </div>
          
          <div className="text-center text-[11px] sm:text-xs text-stone-300 max-w-2xl mx-auto">
            *Standard cook visits focus 100% on food preparation. Kitchen cleaning, utensil washing & serving are available as separate add-ons at ₹199/hr (or ₹1,000 for party events).
          </div>
        </div>

        {/* CTA Bar */}
        <div className="text-center">
          <button
            onClick={handleBookingClick}
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm sm:text-base inline-flex items-center gap-2.5 shadow-lg shadow-orange-600/30 transition-all cursor-pointer"
          >
            <span>Book Your Lucknow Cook in 30 Mins</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
