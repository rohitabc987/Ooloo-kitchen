'use client';

import React, { useState } from 'react';
import { MapPin, Menu, X, ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { LUCKNOW_AREAS } from '../data/lucknowData';
import { LucknowArea } from '../types';

export default function Navbar() {
  const { selectedArea, setSelectedArea } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [areaDropdownOpen, setAreaDropdownOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(250, 247, 242, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-light)',
      transition: 'all 0.3s ease',
      width: '100%'
    }}>
      {/* Top Banner Alert */}
      <div className="top-banner-alert" style={{
        background: 'linear-gradient(90deg, #121417 0%, #2D1810 100%)',
        color: '#FFFFFF',
        padding: '6px 16px',
        fontSize: '0.8rem',
        fontWeight: 600,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        flexWrap: 'wrap'
      }}>
        <span>⚡ Cooks in <strong>30 mins</strong> across Lucknow.</span>
        <a href="tel:+917318086600" style={{ color: '#FF9E7D', textDecoration: 'underline', marginLeft: '4px', whiteSpace: 'nowrap' }}>
          Call +91 73180 86600
        </a>
      </div>

      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>

        {/* Brand Logo Only */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '2px', flexShrink: 0 }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.8rem',
              color: '#121417',
              letterSpacing: '-0.04em'
            }}>
              ooloo<span style={{ color: 'var(--primary)', fontSize: '2.2rem', lineHeight: 0 }}>.</span>
            </span>
          </a>
        </div>

        {/* Navigation Links Desktop */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="desktop-only">
          <a href="#services" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>Services</a>
          <a href="#pricing" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>Pricing</a>
          <a href="#subscriptions" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>Subscriptions</a>
          <a href="#how-it-works" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>How It Works</a>
          <a href="#faqs" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>FAQs</a>
        </nav>

        {/* Right Header Area: Location Option Selector Button (Moved to Right Side) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setAreaDropdownOpen(!areaDropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '99px',
                background: '#FFFFFF',
                border: '1.5px solid var(--border-light)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                whiteSpace: 'nowrap'
              }}>
              <MapPin size={15} color="var(--primary)" style={{ flexShrink: 0 }} />
              <span className="area-pill-text">{selectedArea.name}</span>
              <ChevronDown size={14} color="var(--text-muted)" style={{ flexShrink: 0 }} />
            </button>

            {areaDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '110%',
                right: 0,
                width: '260px',
                background: '#FFFFFF',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-light)',
                padding: '8px',
                zIndex: 200
              }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', padding: '6px 8px', textTransform: 'uppercase' }}>
                  Select Lucknow Neighborhood
                </div>
                <div style={{ maxHeight: '240px', overflowY: 'auto' }}>
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
                        fontSize: '0.85rem'
                      }}>
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

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              padding: '4px',
              display: 'none'
            }}
            className="mobile-toggle">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--border-light)',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600 }}>Services</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600 }}>Pricing</a>
          <a href="#subscriptions" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600 }}>Subscriptions</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600 }}>How It Works</a>
          <a href="#faqs" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600 }}>FAQs</a>
        </div>
      )}
    </header>
  );
}
