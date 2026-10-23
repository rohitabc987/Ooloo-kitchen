'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPin, Menu, X, ChevronDown, Phone } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { LUCKNOW_AREAS } from '../data/lucknowData';
import { LucknowArea } from '../types';

export default function Navbar() {
  const pathname = usePathname();
  const { selectedArea, setSelectedArea, handleOpenBooking } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [areaDropdownOpen, setAreaDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'FAQs', href: '/faqs' },
  ];

  const isCurrentActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Fixed Header in its place */}
      <header className="fixed top-0 inset-x-0 z-50 w-full bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm">
        {/* ===================== DESKTOP NAVBAR ===================== */}
        <div className="hidden md:flex w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-20 lg:h-24 items-center justify-between gap-6 lg:gap-8">
          {/* Logo */}
          <Link href="/" className="font-heading font-black text-2xl lg:text-3xl xl:text-4xl text-stone-900 tracking-tight shrink-0 flex items-center">
            ooloo<span className="text-orange-600 text-3xl lg:text-4xl xl:text-5xl leading-none">.</span>
          </Link>

          {/* Nav links: increased size for big screen view */}
          <nav className="flex items-center gap-6 lg:gap-8 xl:gap-10 flex-1 justify-center">
            {navLinks.map((link) => {
              const active = isCurrentActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base lg:text-lg xl:text-xl font-bold transition-colors duration-150 py-1 ${
                    active
                      ? 'text-orange-600 border-b-2 border-orange-600'
                      : 'text-stone-700 hover:text-orange-600'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3 lg:gap-4 shrink-0">
            {/* Area Selector Pill */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setAreaDropdownOpen(!areaDropdownOpen)}
                className="flex items-center gap-2 px-3.5 lg:px-4 py-1.5 lg:py-2 rounded-full bg-white border border-stone-200 text-xs lg:text-sm xl:text-base font-bold text-stone-800 shadow-sm hover:border-stone-300 transition-colors cursor-pointer whitespace-nowrap"
              >
                <MapPin size={16} className="text-orange-600 shrink-0" />
                <span>{selectedArea.name}</span>
                <ChevronDown size={14} className="text-stone-400 shrink-0" />
              </button>

              {areaDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 w-64 bg-white rounded-xl shadow-xl border border-stone-200 p-2 z-50">
                  <div className="text-xs font-bold text-stone-400 px-2 py-1.5 uppercase tracking-wider">
                    Select Lucknow Neighborhood
                  </div>
                  <div className="max-h-56 overflow-y-auto">
                    {LUCKNOW_AREAS.map((area: LucknowArea) => (
                      <button
                        key={area.name}
                        type="button"
                        onClick={() => {
                          setSelectedArea(area);
                          setAreaDropdownOpen(false);
                        }}
                        className={`w-full text-left px-2.5 py-2 rounded-lg text-xs lg:text-sm font-medium flex items-center justify-between cursor-pointer transition-colors ${
                          selectedArea.name === area.name
                            ? 'bg-orange-50 text-orange-600 font-bold'
                            : 'text-stone-800 hover:bg-stone-50'
                        }`}
                      >
                        <span>{area.name}</span>
                        <span className="text-[10px] lg:text-xs text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-semibold">
                          ~{area.avgEta}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/?tab=bookings"
              className="px-4 py-2 rounded-full text-xs lg:text-sm xl:text-base font-bold text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors whitespace-nowrap"
            >
              My Bookings
            </Link>
            <button
              type="button"
              className="px-5 lg:px-6 py-2 lg:py-2.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-xs lg:text-sm xl:text-base font-bold shadow-md shadow-orange-600/25 transition-all cursor-pointer whitespace-nowrap"
              onClick={() => handleOpenBooking()}
            >
              Book a Cook →
            </button>
          </div>
        </div>

        {/* ===================== MOBILE TOP BAR (md:hidden) ===================== */}
        <div className="flex md:hidden items-center justify-between px-4 h-16 w-full">
          <Link href="/" className="font-heading font-black text-2xl text-stone-900 tracking-tight flex items-center">
            ooloo<span className="text-orange-600 text-3xl leading-none">.</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleOpenBooking()}
              className="px-3.5 py-1.5 rounded-full bg-orange-600 text-white text-xs font-bold shadow-sm cursor-pointer"
            >
              Book Cook
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-stone-800 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 px-4 py-3 flex flex-col gap-2 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm font-semibold border-b border-stone-100 ${
                  isCurrentActive(link.href) ? 'text-orange-600 font-bold' : 'text-stone-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/?tab=bookings"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-2 rounded-lg bg-stone-100 text-stone-800 font-bold text-xs"
              >
                My Bookings
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Header spacer so content starts right below fixed header without jumping */}
      <div className="h-16 md:h-20 lg:h-24 w-full shrink-0" aria-hidden="true" />
    </>
  );
}
