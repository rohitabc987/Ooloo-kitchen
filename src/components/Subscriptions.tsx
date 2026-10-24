'use client';

import React from 'react';
import { Check, Calendar, MessageSquare, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SUBSCRIPTION_PLANS } from '../data/lucknowData';
import { SubscriptionPlan } from '../types';

export default function Subscriptions() {
  const { selectedArea } = useApp();

  return (
    <section id="subscriptions" className="py-10 sm:py-16 bg-stone-50/50">
      <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 text-xs sm:text-sm font-bold tracking-wide uppercase mb-2">
            <Sparkles size={14} />
            <span>SAVE UP TO 30% ON SUBSCRIPTION PLANS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight mb-3">
            Smart Kitchen <span className="text-orange-600">Subscriptions.</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            Never worry about daily kitchen help again. Enjoy guaranteed same trained cooks, flexible service hold days, priority booking, and zero hidden charges in Lucknow.
          </p>
        </div>

        {/* Subscription Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 items-stretch">
          {SUBSCRIPTION_PLANS.map((plan: SubscriptionPlan, idx: number) => (
            <div 
              key={idx}
              className={`bg-white rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-lg relative ${
                plan.popular ? 'border-2 border-orange-600 shadow-md ring-1 ring-orange-600/20' : 'border-stone-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider px-3.5 py-0.5 rounded-full whitespace-nowrap shadow-sm">
                  POPULAR CHOICE
                </div>
              )}

              <div>
                <div className="text-[11px] sm:text-xs font-bold text-orange-600 uppercase tracking-wide mb-1">
                  {plan.badge}
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-stone-900 mb-1.5">
                  {plan.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-500 mb-4 leading-relaxed">
                  {plan.desc}
                </p>

                <div className="flex items-baseline gap-1.5 mb-5">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 font-heading">
                    {plan.price}
                  </span>
                  <span className="text-xs sm:text-sm text-stone-500 font-semibold">{plan.period}</span>
                </div>

                <div className="border-t border-stone-100 pt-3.5 mb-6">
                  <div className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                    Plan Highlights:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    {plan.features.map((feat: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a 
                href={`https://wa.me/917318086600?text=Hi%20ooloo!%20I%20am%20interested%20in%20the%20${encodeURIComponent(plan.title)}%20(${plan.price}%2Fmonth)%20in%20${encodeURIComponent(selectedArea.name)}.`}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                  plan.popular
                    ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-md shadow-orange-600/20'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                }`}
              >
                <MessageSquare size={15} />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
