'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, MapPin, MoreVertical, Phone, MessageSquare, HelpCircle, Calendar, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { LUCKNOW_AREAS } from '../data/lucknowData';
import { LucknowArea } from '../types';

export default function AppHeader() {
  const { selectedArea, setSelectedArea, handleOpenBooking } = useApp();
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  return (
    <header className="app-header" style={{ position: 'relative', borderBottom: '1px solid #F1F5F9', background: '#FFFFFF' }}>
      {/* Backdrop for outside click dismiss */}
      {(isLocationDropdownOpen || isMoreMenuOpen) && (
        <div
          onClick={() => {
            setIsLocationDropdownOpen(false);
            setIsMoreMenuOpen(false);
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 400,
            background: 'transparent',
          }}
        />
      )}

      <div className="header-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Left: Location Selector (Pronto Style) */}
        <div style={{ position: 'relative', zIndex: 450 }}>
          <div
            onClick={() => {
              setIsLocationDropdownOpen(!isLocationDropdownOpen);
              setIsMoreMenuOpen(false);
            }}
            style={{
              cursor: 'pointer',
              userSelect: 'none',
              padding: '2px 0',
            }}
          >
            {/* Top row: Delivering to ▾ */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span
                style={{
                  fontSize: '1.18rem',
                  fontWeight: 800,
                  color: '#121417',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                Delivering to
              </span>
              <ChevronDown
                size={18}
                strokeWidth={2.6}
                color="#121417"
                style={{
                  transform: isLocationDropdownOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s ease',
                  marginTop: '1px',
                }}
              />
            </div>

            {/* Subtext: Neighborhood + ETA */}
            <div
              style={{
                fontSize: '0.8rem',
                color: '#64748B',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '3px',
              }}
            >
              <MapPin size={12} color="#E64A19" strokeWidth={2.4} />
              <span style={{ color: '#334155', fontWeight: 700 }}>
                {selectedArea.name}, Lucknow
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: '#10B981',
                  background: '#ECFDF5',
                  padding: '1px 6px',
                  borderRadius: '4px',
                  letterSpacing: '0.01em',
                }}
              >
                ~{selectedArea.avgEta}
              </span>
            </div>
          </div>

          {/* Location Dropdown Modal/Menu (like on Web) */}
          {isLocationDropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: 0,
                width: '300px',
                maxWidth: '88vw',
                background: '#FFFFFF',
                borderRadius: '16px',
                boxShadow: '0 16px 36px -4px rgba(0, 0, 0, 0.18)',
                border: '1px solid #E2E8F0',
                padding: '8px',
                zIndex: 500,
                animation: 'fadeScaleIn 0.15s ease',
              }}
            >
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#94A3B8',
                  padding: '8px 10px 6px 10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>Select Lucknow Area</span>
                <span style={{ color: '#E64A19' }}>{LUCKNOW_AREAS.length} Areas</span>
              </div>

              <div
                style={{
                  maxHeight: '260px',
                  overflowY: 'auto',
                }}
              >
                {LUCKNOW_AREAS.map((area: LucknowArea) => {
                  const isSelected = selectedArea.name === area.name;
                  return (
                    <button
                      key={area.name}
                      onClick={() => {
                        setSelectedArea(area);
                        setIsLocationDropdownOpen(false);
                      }}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        border: 'none',
                        background: isSelected ? '#FFF5F0' : 'transparent',
                        color: isSelected ? '#E64A19' : '#1E293B',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '0.85rem',
                        transition: 'background 0.15s',
                        marginBottom: '2px',
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: isSelected ? 800 : 600 }}>{area.name}</div>
                        <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '1px' }}>
                          Pincode: {area.code} • {area.cooksAvailable} cooks ready
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            color: '#10B981',
                            background: '#ECFDF5',
                            padding: '2px 6px',
                            borderRadius: '4px',
                          }}
                        >
                          ~{area.avgEta}
                        </span>
                        {isSelected && <Check size={16} color="#E64A19" strokeWidth={2.6} />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right: Three Dots Action Menu (replacing user icon) */}
        <div style={{ position: 'relative', zIndex: 450 }}>
          <button
            id="more-options-btn"
            onClick={() => {
              setIsMoreMenuOpen(!isMoreMenuOpen);
              setIsLocationDropdownOpen(false);
            }}
            aria-label="More options"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#334155',
              transition: 'background 0.15s',
            }}
          >
            <MoreVertical size={18} strokeWidth={2.4} />
          </button>

          {/* Three-Dots Menu Dropdown */}
          {isMoreMenuOpen && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                width: '230px',
                background: '#FFFFFF',
                borderRadius: '16px',
                boxShadow: '0 16px 36px -4px rgba(0, 0, 0, 0.18)',
                border: '1px solid #E2E8F0',
                padding: '6px',
                zIndex: 500,
                animation: 'fadeScaleIn 0.15s ease',
              }}
            >
              <a
                href="tel:+917318086600"
                onClick={() => setIsMoreMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  color: '#1E293B',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <Phone size={16} color="#E64A19" />
                <span>Call Dispatch (+91 73180 86600)</span>
              </a>

              <a
                href="https://wa.me/917318086600?text=Hi%20ooloo!%20I%20need%20help%20with%20booking%20a%20cook."
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMoreMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  color: '#1E293B',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <MessageSquare size={16} color="#25D366" />
                <span>WhatsApp Support</span>
              </a>

              <div style={{ height: '1px', background: '#F1F5F9', margin: '4px 6px' }} />

              <Link
                href="/?tab=bookings"
                onClick={() => setIsMoreMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  color: '#1E293B',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <Calendar size={16} color="#64748B" />
                <span>My Bookings</span>
              </Link>

              <Link
                href="/faqs"
                onClick={() => setIsMoreMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  color: '#1E293B',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <HelpCircle size={16} color="#64748B" />
                <span>FAQs & Help Desk</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
