'use client';

import React, { useState, useRef } from 'react';
import { X, Check, MessageSquare, Phone, ChevronDown, ChevronUp, Plus, Minus, Clock, Calendar, Users, Utensils, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { SERVICES } from '../data/lucknowData';
import { ServiceItem } from '../types';

const POPULAR_DISHES = [
  'Paneer Butter Masala',
  'Butter Phulka / Plain Roti',
  'Dal Tadka',
  'Awadhi Dum Biryani',
  'Kadhai Paneer',
  'Jeera Rice',
  'Mix Veg Gravy',
  'Dal Makhani',
  'Chole Masala',
  'Lachha Paratha',
  'Aloo Paratha',
  'Poha / Upma',
  'Fresh Salad & Raita',
];

const TIME_SLOTS = [
  { id: 'express', label: '⚡ Express (Within 30 Mins)', desc: 'Nearest cook dispatched immediately' },
  { id: 'breakfast', label: '☀️ Breakfast (7:00 AM - 9:00 AM)', desc: 'Fresh breakfast before work' },
  { id: 'lunch', label: '🍱 Lunch (12:00 PM - 2:00 PM)', desc: 'Hot, freshly cooked lunch' },
  { id: 'dinner', label: '🌙 Dinner (7:00 PM - 9:00 PM)', desc: 'Warm family dinner' },
  { id: 'custom', label: '📅 Custom Schedule', desc: 'Pick your preferred time' },
];

const SERVICE_PRICES: Record<string, number> = {
  prep: 199,
  cooking: 299,
  ondemand: 299,
  party: 1999,
  kitchen_cleaning: 199,
  utensils: 199,
  serving: 199,
  subscription: 5999,
};

export default function BookingModal() {
  const {
    selectedArea,
    isBookingModalOpen,
    handleCloseBooking,
    bookingData,
    updateBookingData,
  } = useApp();

  const [isChangingService, setIsChangingService] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);

  if (!isBookingModalOpen) return null;

  const {
    step = 1,
    service = SERVICES[1],
    selectedDishes = ['Paneer Butter Masala', 'Butter Phulka / Plain Roti'],
    customDish = '',
    peopleCount = 4,
    timeSlot = '⚡ Express (Within 30 Mins)',
    bookingDate = new Date().toISOString().split('T')[0],
    name = '',
    phone = '',
    address = '',
    notes = '',
    isSubmitted = false,
  } = bookingData;

  const currentPrice = (() => {
    if (service?.id === 'party') {
      if (peopleCount <= 10) return 1999;
      if (peopleCount <= 20) return 2999;
      if (peopleCount <= 30) return 3999;
      if (peopleCount <= 40) return 4999;
      return 5999;
    }
    if (service?.id === 'cooking' && peopleCount > 3) return 399;
    return SERVICE_PRICES[service?.id || 'cooking'] || 299;
  })();

  const toggleDish = (dish: string) => {
    if (selectedDishes.includes(dish)) {
      updateBookingData({ selectedDishes: selectedDishes.filter(d => d !== dish) });
    } else {
      updateBookingData({ selectedDishes: [...selectedDishes, dish] });
    }
  };

  const handleAddCustomDish = () => {
    const trimmed = customDish.trim();
    if (trimmed && !selectedDishes.includes(trimmed)) {
      updateBookingData({
        selectedDishes: [...selectedDishes, trimmed],
        customDish: '',
      });
    }
  };

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    updateBookingData({ isSubmitted: true });
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getWhatsAppMessage = () => {
    const dishList = selectedDishes.length > 0 ? selectedDishes.join(', ') : 'Custom Menu';
    const text =
      `*New Cook Booking on ooloo!* 🍳\n\n` +
      `*Name:* ${name || 'Customer'}\n` +
      `*Phone:* ${phone || 'Not provided'}\n` +
      `*Area:* ${selectedArea.name} (${selectedArea.code})\n` +
      `*Address:* ${address || 'Lucknow'}\n` +
      `*Service:* ${service.title} (₹${currentPrice})\n` +
      `*People:* ${peopleCount} Persons\n` +
      `*Preferred Slot:* ${timeSlot} (${bookingDate})\n` +
      `*Selected Dishes:* ${dishList}\n` +
      `*Special Notes:* ${notes || 'None'}\n\n` +
      `Please confirm cook assignment for ${selectedArea.name}!`;
    return encodeURIComponent(text);
  };

  return (
    <div
      className="booking-overlay"
      onClick={handleCloseBooking}
    >
      <div
        className="booking-sheet"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile handle indicator */}
        <div className="booking-sheet-handle" />

        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-100 sticky top-0 bg-white z-10">
          <div className="flex items-center justify-between mb-2">
            {/* Area Badge */}
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200/80 px-2.5 py-1 rounded-full whitespace-nowrap">
              <MapPin size={13} className="shrink-0" />
              <span>Delivering to {selectedArea.name} • ETA ~{selectedArea.avgEta}</span>
            </div>

            <button
              onClick={handleCloseBooking}
              aria-label="Close"
              className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer shrink-0"
            >
              <X size={18} />
            </button>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight leading-snug m-0">
            {isSubmitted
              ? 'Cook Dispatched!'
              : step === 1
              ? 'Choose Dishes & Guests'
              : step === 2
              ? 'Select Time & Date'
              : 'Contact & Delivery Address'}
          </h3>
        </div>

        {/* Selected Service Bar (Direct Pre-selected Service with quick change toggle) */}
        {!isSubmitted && (
          <div className="bg-stone-50/90 px-4 py-2.5 sm:px-5 sm:py-3 border-b border-stone-100 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xl shrink-0">🍳</span>
              <div className="flex items-baseline gap-2 min-w-0 overflow-hidden">
                <span className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                  {service?.title || 'Full Meal Cooking'}
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-orange-600 whitespace-nowrap">
                  ₹{currentPrice}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsChangingService(!isChangingService)}
              className="bg-white border border-stone-300 hover:border-orange-500 hover:text-orange-600 rounded-full px-2.5 py-1 text-xs font-bold text-stone-700 cursor-pointer flex items-center gap-1 shrink-0 whitespace-nowrap transition-colors"
            >
              <span>{isChangingService ? 'Hide' : 'Change'}</span>
              {isChangingService ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>
          </div>
        )}

        {/* Quick Service Switcher Dropdown (only if user taps Change) */}
        {isChangingService && !isSubmitted && (
          <div className="bg-white border-b border-stone-200 p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                onClick={() => {
                  updateBookingData({ service: svc });
                  setIsChangingService(false);
                }}
                className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                  service.id === svc.id
                    ? 'border-orange-600 bg-orange-50/70 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="text-xs font-bold text-stone-900 leading-snug">
                  {svc.title}
                </div>
                <div className="text-xs font-bold text-orange-600 mt-0.5">
                  ₹{SERVICE_PRICES[svc.id] || 299}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step Progress Bar */}
        {!isSubmitted && (
          <div className="flex gap-1.5 px-4 sm:px-5 pt-3">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex-1 h-1 rounded-full transition-colors duration-300 ${
                  step >= s ? 'bg-orange-600' : 'bg-stone-200'
                }`}
              />
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-4 sm:p-5 flex-1">
          {isSubmitted ? (
            /* ======= SUCCESS CONFIRMATION ======= */
            <div className="text-center py-3 sm:py-5">
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3.5 border-3 border-emerald-200 shadow-sm">
                <Check size={36} strokeWidth={2.5} />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-1.5">
                Cook Assigned to {selectedArea.name}!
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto mb-5 leading-relaxed font-medium">
                Our verified cook is ready to dispatch. Send your booking on WhatsApp for instant confirmation.
              </p>

              {/* Order Summary Card with Solid Border */}
              <div className="bg-stone-50 rounded-xl p-4 sm:p-5 text-left mb-5 border border-stone-200">
                <div className="font-bold mb-2.5 text-stone-900 text-xs uppercase tracking-wider">
                  📋 Booking Summary
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-700 text-xs sm:text-sm">
                  <div>
                    <span className="text-stone-500 font-medium">Service: </span>
                    <strong className="text-stone-900">{service.title}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 font-medium">Total: </span>
                    <strong className="text-orange-600 font-bold">₹{currentPrice}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 font-medium">Area: </span>
                    <strong className="text-stone-900">{selectedArea.name}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 font-medium">ETA: </span>
                    <strong className="text-emerald-600 font-bold">~{selectedArea.avgEta}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 font-medium">Guests: </span>
                    <strong className="text-stone-900">{peopleCount} People</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 font-medium">Slot: </span>
                    <strong className="text-stone-900">{timeSlot.replace(/[⚡☀️🍱🌙📅]/g, '').trim()}</strong>
                  </div>
                </div>

                {selectedDishes.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-stone-200">
                    <div className="text-stone-500 text-[11px] font-semibold mb-0.5">
                      Selected Dishes:
                    </div>
                    <div className="text-stone-900 font-semibold text-xs sm:text-sm leading-snug">
                      {selectedDishes.join(', ')}
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/917318086600?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base shadow-md shadow-emerald-600/25 transition-all cursor-pointer"
                >
                  <MessageSquare size={20} />
                  <span>Send Confirmation via WhatsApp</span>
                </a>

                <a
                  href="tel:+917318086600"
                  className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-full bg-stone-950 hover:bg-stone-900 text-white font-bold text-xs sm:text-sm transition-all"
                >
                  <Phone size={16} />
                  <span>Call Dispatch (+91 73180 86600)</span>
                </a>

                <button
                  type="button"
                  onClick={handleCloseBooking}
                  className="text-stone-500 hover:text-stone-800 text-xs font-bold p-1.5 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleCompleteBooking}>
              {/* ======= STEP 1: DISHES & GUESTS ======= */}
              {step === 1 && (
                <div>
                  {/* People Count Selector Card */}
                  <div className="flex items-center justify-between bg-stone-50/80 p-3.5 sm:p-4 rounded-xl border border-stone-200 mb-4 gap-3">
                    <div className="min-w-0">
                      <div className="font-bold text-sm sm:text-base text-stone-900 leading-tight">
                        Number of Guests
                      </div>
                      <div className="text-[11px] sm:text-xs text-stone-500 font-medium mt-0.5">
                        Cook portions adjusted accordingly
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => updateBookingData({ peopleCount: Math.max(1, peopleCount - 1) })}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-stone-300 bg-white hover:border-orange-500 text-stone-700 hover:text-orange-600 cursor-pointer flex items-center justify-center font-bold text-sm transition-colors shadow-xs"
                      >
                        <Minus size={15} />
                      </button>
                      <span className="font-black text-lg sm:text-xl min-w-7 text-center text-stone-900 font-heading">
                        {peopleCount}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateBookingData({ peopleCount: peopleCount + 1 })}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-stone-300 bg-white hover:border-orange-500 text-stone-700 hover:text-orange-600 cursor-pointer flex items-center justify-center font-bold text-sm transition-colors shadow-xs"
                      >
                        <Plus size={15} />
                      </button>
                    </div>
                  </div>

                  {/* Dishes Selection */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs sm:text-sm font-bold text-stone-800">
                        Select Dishes / Meal Items
                      </label>
                      <span className="text-[11px] font-bold text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full">
                        {selectedDishes.length} selected
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-2.5 border border-stone-200 rounded-xl bg-stone-50/40">
                      {POPULAR_DISHES.map((dish) => {
                        const isSelected = selectedDishes.includes(dish);
                        return (
                          <button
                            key={dish}
                            type="button"
                            onClick={() => toggleDish(dish)}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer flex items-center gap-1 transition-all ${
                              isSelected
                                ? 'border border-orange-600 bg-orange-50 text-orange-600 font-bold shadow-xs'
                                : 'border border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                            }`}
                          >
                            <span>{isSelected ? '✓' : '+'}</span>
                            <span>{dish}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Add Custom Dish Input with Solid Border */}
                  <div className="flex gap-2 mb-5">
                    <input
                      type="text"
                      placeholder="e.g. Baingan Bharta, Dal Fry..."
                      value={customDish}
                      onChange={(e) => updateBookingData({ customDish: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddCustomDish();
                        }
                      }}
                      className="booking-input flex-1"
                    />
                    <button
                      type="button"
                      onClick={handleAddCustomDish}
                      className="px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-bold cursor-pointer whitespace-nowrap shrink-0 transition-colors"
                    >
                      + Add
                    </button>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-stone-100 gap-3">
                    <div>
                      <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                        Total Charge
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-orange-600 font-heading leading-tight mt-0.5">
                        ₹{currentPrice}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => updateBookingData({ step: 2 })}
                      className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-full shadow-md shadow-orange-600/25 transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <span>Next: Choose Slot</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* ======= STEP 2: TIME & DATE ======= */}
              {step === 2 && (
                <div>
                  <label className="text-xs sm:text-sm font-bold text-stone-800 block mb-2.5">
                    Select Preferred Time Slot & Date
                  </label>

                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5 mb-5">
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = timeSlot === slot.label;
                      return (
                        <div
                          key={slot.id}
                          onClick={() => updateBookingData({ timeSlot: slot.label })}
                          className={`p-2.5 sm:p-3 rounded-xl border-2 cursor-pointer flex flex-col justify-between transition-all select-none min-h-[96px] ${
                            isSelected
                              ? 'border-orange-600 bg-orange-50/50 shadow-xs ring-1 ring-orange-600/20'
                              : 'border-stone-200 bg-white hover:border-stone-300'
                          }`}
                        >
                          <div>
                            <div className="flex items-start justify-between gap-1">
                              <div className="font-bold text-xs sm:text-sm text-stone-900 leading-snug">
                                {slot.label}
                              </div>
                              {isSelected ? (
                                <div className="w-5 h-5 rounded-full bg-orange-600 text-white flex items-center justify-center text-[10px] font-black shrink-0">
                                  ✓
                                </div>
                              ) : (
                                <div className="w-5 h-5 rounded-full border-2 border-stone-200 shrink-0" />
                              )}
                            </div>
                            <div className="text-[11px] text-stone-500 font-medium mt-1 leading-tight">
                              {slot.desc}
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* Card 6: Cooking Date */}
                    <div
                      onClick={() => {
                        try {
                          dateInputRef.current?.showPicker();
                        } catch {
                          dateInputRef.current?.focus();
                        }
                      }}
                      className="p-2.5 sm:p-3 rounded-xl border-2 border-stone-200 bg-white hover:border-stone-300 focus-within:border-orange-600 focus-within:bg-orange-50/20 flex flex-col justify-between transition-all cursor-pointer min-h-[96px]"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <div className="font-bold text-xs sm:text-sm text-stone-900 leading-snug flex items-center gap-1">
                            <span>📅</span>
                            <span>Cooking Date</span>
                          </div>
                          <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-[10px] font-black shrink-0">
                            ✓
                          </div>
                        </div>
                        <div className="text-[11px] text-stone-500 font-medium mt-1 leading-tight">
                          {bookingDate
                            ? new Date(bookingDate + 'T00:00:00').toLocaleDateString('en-IN', {
                                weekday: 'short',
                                day: 'numeric',
                                month: 'short',
                              })
                            : 'Select service date'}
                        </div>
                      </div>

                      <div className="mt-2" onClick={(e) => e.stopPropagation()}>
                        <input
                          ref={dateInputRef}
                          type="date"
                          value={bookingDate}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => updateBookingData({ bookingDate: e.target.value })}
                          className="booking-input w-full min-w-0 text-xs font-semibold py-1 px-2 rounded-lg cursor-pointer bg-stone-50 hover:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-stone-100 gap-3">
                    <button
                      type="button"
                      onClick={() => updateBookingData({ step: 1 })}
                      className="text-stone-500 hover:text-stone-900 font-bold text-xs sm:text-sm py-2 px-3 cursor-pointer"
                    >
                      ← Back
                    </button>

                    <button
                      type="button"
                      onClick={() => updateBookingData({ step: 3 })}
                      className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-full shadow-md shadow-orange-600/25 transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <span>Next: Address</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* ======= STEP 3: CONTACT & ADDRESS ======= */}
              {step === 3 && (
                <div>
                  <div className="booking-form-two-col">
                    <div>
                      <label className="text-xs sm:text-sm font-bold text-stone-800 block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priyanshu Sharma"
                        value={name}
                        onChange={(e) => updateBookingData({ name: e.target.value })}
                        className="booking-input"
                      />
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-bold text-stone-800 block mb-1">
                        WhatsApp / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => updateBookingData({ phone: e.target.value })}
                        className="booking-input"
                      />
                    </div>
                  </div>

                  <div className="mb-3.5">
                    <label className="text-xs sm:text-sm font-bold text-stone-800 block mb-1">
                      House / Flat No., Society & Street ({selectedArea.name}) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Flat 402, Tower B, Eldeco Greens"
                      value={address}
                      onChange={(e) => updateBookingData({ address: e.target.value })}
                      className="booking-input"
                    />
                  </div>

                  <div className="mb-3.5">
                    <label className="text-xs sm:text-sm font-bold text-stone-800 block mb-1">
                      Cooking Notes & Spice Preference (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Less oil & mild spice for kids"
                      value={notes}
                      onChange={(e) => updateBookingData({ notes: e.target.value })}
                      className="booking-input resize-none"
                    />
                  </div>

                  {/* Trust Pill */}
                  <div className="bg-emerald-50/90 border border-emerald-200 rounded-xl p-2.5 sm:p-3 text-xs text-emerald-800 font-medium mb-4 flex items-center gap-2 leading-snug">
                    <span className="shrink-0 text-sm">🛡️</span>
                    <span>Verified Cook • Zero advance payment • Pay after meal</span>
                  </div>

                  {/* Submit Actions */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-stone-100 gap-3">
                    <button
                      type="button"
                      onClick={() => updateBookingData({ step: 2 })}
                      className="text-stone-500 hover:text-stone-900 font-bold text-xs sm:text-sm py-2 px-3 cursor-pointer"
                    >
                      ← Back
                    </button>

                    <button
                      type="submit"
                      className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-full shadow-md shadow-orange-600/25 transition-all cursor-pointer whitespace-nowrap"
                    >
                      Confirm Booking (₹{currentPrice})
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
