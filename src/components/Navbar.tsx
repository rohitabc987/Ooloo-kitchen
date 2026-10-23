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
    <header style={{ position: 'sticky', top: 0, zIndex: 300, width: '100%' }}>
      {/* ===================== DESKTOP NAVBAR ===================== */}
      <nav className="desktop-navbar" style={{
        background: 'rgba(250, 247, 242, 0.96)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--border-light)',
        boxShadow: '0 2px 20px rgba(0,0,0,0.04)'
      }}>
        <div className="desktop-navbar-inner">
          {/* Logo */}
          <Link href="/" className="desktop-navbar-logo">
            ooloo<span>.</span>
          </Link>

          {/* Nav links */}
          <div className="desktop-navbar-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isCurrentActive(link.href) ? 'desktop-navbar-nav-item-active' : ''}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="desktop-navbar-actions">
            {/* Area Selector Pill */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setAreaDropdownOpen(!areaDropdownOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '99px',
                  background: '#FFFFFF',
                  border: '1.5px solid var(--border)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                <MapPin size={14} color="var(--primary)" />
                <span>{selectedArea.name}</span>
                <ChevronDown size={13} color="var(--text-muted)" />
              </button>

              {areaDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '115%',
                  right: 0,
                  width: '260px',
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--border-light)',
                  padding: '8px',
                  zIndex: 400
                }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', padding: '6px 8px', textTransform: 'uppercase' }}>
                    Select Lucknow Neighborhood
                  </div>
                  <div style={{ maxHeight: '220px', overflowY: 'auto' }}>
                    {LUCKNOW_AREAS.map((area: LucknowArea) => (
                      <button
                        key={area.name}
                        onClick={() => {
                          setSelectedArea(area);
                          setAreaDropdownOpen(false);
                        }}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '8px 10px',
                          borderRadius: '6px',
                          border: 'none',
                          background: selectedArea.name === area.name ? 'var(--primary-light)' : 'transparent',
                          color: selectedArea.name === area.name ? 'var(--primary)' : 'var(--text-primary)',
                          fontWeight: selectedArea.name === area.name ? 700 : 500,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '0.83rem'
                        }}
                      >
                        <span>{area.name}</span>
                        <span style={{ fontSize: '0.7rem', color: 'var(--green)', background: 'var(--green-light)', padding: '2px 5px', borderRadius: '4px' }}>
                          ~{area.avgEta}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/?tab=bookings" className="desktop-navbar-tab-btn">
              My Bookings
            </Link>
            <button
              className="desktop-navbar-book-btn"
              onClick={() => handleOpenBooking()}
            >
              Book a Cook →
            </button>
          </div>
        </div>
      </nav>

      {/* ===================== MOBILE TOP BAR (hidden on desktop) ===================== */}
      <div className="mobile-header-bar" style={{
        background: 'rgba(250, 247, 242, 0.98)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-light)',
        padding: '12px 18px',
        display: 'none', // Will be controlled via media queries
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.6rem',
            color: '#121417',
            letterSpacing: '-0.04em'
          }}>
            ooloo<span style={{ color: 'var(--primary)' }}>.</span>
          </span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => handleOpenBooking()}
            style={{
              background: 'var(--primary)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '99px',
              padding: '6px 14px',
              fontSize: '0.78rem',
              fontWeight: 800,
              cursor: 'pointer'
            }}
          >
            Book Cook
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#121417',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center'
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          background: '#FFFFFF',
          borderBottom: '1px solid var(--border-light)',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: 'var(--shadow-md)'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: isCurrentActive(link.href) ? 'var(--primary)' : 'var(--text-primary)',
                fontWeight: isCurrentActive(link.href) ? 800 : 600,
                fontSize: '1rem',
                padding: '6px 0',
                borderBottom: '1px solid var(--border-light)'
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
            <Link
              href="/?tab=bookings"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '10px',
                borderRadius: '8px',
                background: 'var(--bg-light)',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontWeight: 700,
                fontSize: '0.85rem'
              }}
            >
              My Bookings
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 767px) {
          .mobile-header-bar {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
