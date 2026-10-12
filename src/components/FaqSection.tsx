'use client';

import React, { useState } from 'react';
import { ChevronDown, Utensils } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { FAQS, POPULAR_DISHES } from '../data/lucknowData';
import { FaqItem, DishCategory } from '../types';

export default function FaqSection() {
  const { handleOpenBooking } = useApp();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>(POPULAR_DISHES[0].category);

  return (
    <section id="faqs" style={{ padding: '50px 0 70px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">

        {/* Popular Dishes Showcase */}
        <div style={{
          background: 'var(--bg-main)',
          borderRadius: 'var(--radius-lg)',
          padding: '40px 36px',
          border: '1px solid var(--border-light)',
          marginBottom: '50px'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 24px auto' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '8px' }}>
              POPULAR MENU DISHES
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#121417' }}>
              What our cooks <span className="italic-serif">love to make.</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '6px' }}>
              Authentic North Indian, Awadhi specialties & healthy daily meals prepared in your kitchen.
            </p>
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '32px' }}>
            {POPULAR_DISHES.map((cat: DishCategory) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '99px',
                  border: activeCategory === cat.category ? '2px solid var(--primary)' : '1px solid var(--border-light)',
                  background: activeCategory === cat.category ? 'var(--primary)' : '#FFFFFF',
                  color: activeCategory === cat.category ? '#FFFFFF' : 'var(--text-primary)',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>
                {cat.category}
              </button>
            ))}
          </div>

          {/* Dishes Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            {POPULAR_DISHES.find((c: DishCategory) => c.category === activeCategory)?.items.map((dish: string, idx: number) => (
              <div 
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-sm)',
                  padding: '16px 20px',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                <Utensils size={18} color="var(--primary)" />
                <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)' }}>{dish}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 28px auto' }}>
          <div style={{
            fontSize: '0.8rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#121417' }}>
            Got questions? <span className="italic-serif">We have answers.</span>
          </h2>
        </div>

        {/* Accordion list */}
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {FAQS.map((faq: FaqItem, idx: number) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                style={{
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  background: isOpen ? 'var(--primary-light)' : '#FFFFFF',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease'
                }}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#121417'
                  }}>
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    color="var(--primary)"
                    style={{ 
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0
                    }} 
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 28px 24px 28px',
                    fontSize: '0.98rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    borderTop: '1px solid rgba(230, 74, 25, 0.1)'
                  }}>
                    <div style={{ paddingTop: '16px' }}>{faq.a}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA */}
        <div style={{
          marginTop: '60px',
          textAlign: 'center',
          background: 'var(--bg-main)',
          padding: '36px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-light)'
        }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#121417', marginBottom: '8px' }}>
            Have a custom dish or event request?
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px' }}>
            Our Lucknow support desk is live 7 AM to 10 PM daily.
          </p>
          <button 
            onClick={() => handleOpenBooking()}
            className="btn btn-whatsapp">
            <span>Talk to Lucknow Support Desk</span>
          </button>
        </div>

      </div>
    </section>
  );
}
