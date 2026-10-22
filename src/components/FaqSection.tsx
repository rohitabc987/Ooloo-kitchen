'use client';

import React, { useState } from 'react';
import { ChevronDown, Phone, ArrowRight, HelpCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { FAQS } from '../data/lucknowData';
import { FaqItem } from '../types';

export default function FaqSection() {
  const { handleOpenBooking } = useApp();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faqs" style={{ padding: '40px 0 70px 0', backgroundColor: 'transparent' }}>
      <div className="container">

        {/* FAQs Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 48px auto' }}>
          <div className="page-badge" style={{ justifyContent: 'center' }}>
            <span className="page-badge-dot" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h1 className="page-title" style={{ textAlign: 'center' }}>
            Got questions? <span className="italic-serif" style={{ color: 'var(--primary)' }}>We have answers.</span>
          </h1>
          <p className="page-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Everything you need to know about grocery ingredients, cook timing, background checks, and hygiene standards.
          </p>
        </div>

        {/* Accordion List — Completely Borderless & No Background Box */}
        <div style={{ maxWidth: '920px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
          {FAQS.map((faq: FaqItem, idx: number) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid var(--border)',
                  padding: '10px 0',
                  transition: 'all 0.2s ease'
                }}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '20px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 'clamp(1.2rem, 1.5vw, 1.45rem)',
                    fontWeight: 800,
                    color: isOpen ? 'var(--primary)' : '#121417',
                    gap: '20px',
                    transition: 'color 0.2s ease'
                  }}>
                  <span>{faq.q}</span>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: isOpen ? 'var(--primary-light)' : 'rgba(0,0,0,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <ChevronDown 
                      size={22} 
                      color={isOpen ? 'var(--primary)' : '#121417'}
                      style={{ 
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease'
                      }} 
                    />
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 0 24px 0',
                    fontSize: 'clamp(1.05rem, 1.2vw, 1.18rem)',
                    color: '#4A4F55',
                    lineHeight: 1.7
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Desk */}
        <div style={{
          marginTop: '64px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #121417 0%, #2D1810 100%)',
          padding: '48px 36px',
          borderRadius: '24px',
          color: '#FFFFFF',
          maxWidth: '920px',
          margin: '64px auto 0 auto'
        }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 850, color: '#FFFFFF', marginBottom: '12px' }}>
            Still have a question?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.08rem', marginBottom: '26px', maxWidth: '640px', margin: '0 auto 26px auto' }}>
            Our Lucknow kitchen helpline is open daily from 7:00 AM to 10:00 PM. Call us directly or book in seconds.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a 
              href="tel:+917318086600"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 30px',
                borderRadius: '99px',
                background: 'var(--primary)',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '1.02rem',
                boxShadow: '0 4px 16px rgba(230,74,25,0.4)'
              }}>
              <Phone size={18} />
              <span>Call +91 73180 86600</span>
            </a>
            <button 
              onClick={() => handleOpenBooking()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 30px',
                borderRadius: '99px',
                background: 'rgba(255,255,255,0.15)',
                color: '#FFFFFF',
                border: '1.5px solid rgba(255,255,255,0.25)',
                fontWeight: 800,
                fontSize: '1.02rem',
                cursor: 'pointer'
              }}>
              <span>Book Online →</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
