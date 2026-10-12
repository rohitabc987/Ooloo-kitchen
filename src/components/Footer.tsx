'use client';

import React from 'react';
import { MapPin, Phone, Heart, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { LUCKNOW_AREAS } from '../data/lucknowData';
import { LucknowArea } from '../types';

export default function Footer() {
  const { handleOpenBooking } = useApp();

  return (
    <footer style={{
      backgroundColor: 'var(--bg-dark)',
      color: '#FFFFFF',
      padding: '80px 0 40px 0',
      borderTop: '1px solid var(--border-dark)'
    }}>
      <div className="container">
        
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
          gap: '40px',
          marginBottom: '60px'
        }} className="footer-grid">
          
          {/* Brand Info */}
          <div>
            <a href="#" style={{ textDecoration: 'none' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '2.4rem',
                color: '#FFFFFF',
                letterSpacing: '-0.04em'
              }}>
                ooloo<span style={{ color: 'var(--primary)', fontSize: '2.8rem', lineHeight: 0 }}>.</span>
              </span>
            </a>

            <p style={{
              color: '#A0A5AB',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              margin: '16px 0 24px 0',
              maxWidth: '320px'
            }}>
              Lucknow's 1st 30-minute on-demand kitchen cook & meal prep platform. Verified, background-checked cooks at your doorstep.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" style={{ background: '#252930', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                <Instagram size={18} />
              </a>
              <a href="#" style={{ background: '#252930', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                <Facebook size={18} />
              </a>
              <a href="#" style={{ background: '#252930', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '20px', letterSpacing: '0.02em' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#services" style={{ color: '#A0A5AB', textDecoration: 'none' }}>Services & Prep</a></li>
              <li><a href="#pricing" style={{ color: '#A0A5AB', textDecoration: 'none' }}>Hourly Rates</a></li>
              <li><a href="#subscriptions" style={{ color: '#A0A5AB', textDecoration: 'none' }}>Monthly Pass</a></li>
              <li><a href="#how-it-works" style={{ color: '#A0A5AB', textDecoration: 'none' }}>How It Works</a></li>
              <li><a href="#faqs" style={{ color: '#A0A5AB', textDecoration: 'none' }}>FAQs</a></li>
            </ul>
          </div>

          {/* Top Lucknow Areas */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '20px', letterSpacing: '0.02em' }}>
              Active Hubs (30 Min)
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              {LUCKNOW_AREAS.slice(0, 6).map((area: LucknowArea) => (
                <li key={area.name} style={{ color: '#A0A5AB', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={12} color="var(--primary)" />
                  <span>{area.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Dispatch */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '20px', letterSpacing: '0.02em' }}>
              Lucknow Dispatch Desk
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: '#A0A5AB' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="var(--primary)" />
                <a href="tel:+917318086600" style={{ color: '#FFFFFF', fontWeight: 700, textDecoration: 'none' }}>+91 73180 86600</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={16} color="var(--primary)" />
                <span>7:00 AM – 10:00 PM (Mon - Sun)</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} color="var(--primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>Hub 4, Vibhuti Khand, Gomti Nagar, Lucknow, UP 226010</span>
              </div>

              <button 
                onClick={() => handleOpenBooking()}
                className="btn btn-primary"
                style={{ marginTop: '8px', padding: '12px 20px', fontSize: '0.85rem' }}>
                <span>Book 30-Min Cook</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-dark)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.85rem',
          color: '#A0A5AB'
        }}>
          <div>
            © {new Date().getFullYear()} ooloo Technologies Pvt Ltd. Made with <Heart size={14} fill="var(--primary)" color="var(--primary)" style={{ display: 'inline', verticalAlign: 'middle' }} /> in Lucknow.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: '#A0A5AB', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#A0A5AB', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: '#A0A5AB', textDecoration: 'none' }}>Cook SOP & Hygiene Charter</a>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 550px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
