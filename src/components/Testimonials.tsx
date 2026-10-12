'use client';

import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/lucknowData';
import { TestimonialItem } from '../types';

export default function Testimonials() {
  return (
    <section style={{ padding: '50px 0 70px 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 32px auto' }}>
          <div style={{
            fontSize: '0.8rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            LOVED IN LUCKNOW
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, color: '#121417' }}>
            Families across Lucknow <span className="italic-serif">trust ooloo.</span>
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid-3">
          {TESTIMONIALS.map((t: TestimonialItem, idx: number) => (
            <div 
              key={idx}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '36px 28px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}>

              <Quote size={32} color="rgba(230, 74, 25, 0.2)" style={{ marginBottom: '16px' }} />

              <p style={{
                fontSize: '1.05rem',
                color: 'var(--text-primary)',
                fontWeight: 600,
                lineHeight: 1.6,
                marginBottom: '24px',
                fontStyle: 'italic'
              }}>
                "{t.quote}"
              </p>

              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                  {[...Array(t.rating)].map((_, sIdx) => (
                    <Star key={sIdx} size={16} fill="#FFB800" color="#FFB800" />
                  ))}
                </div>

                <div style={{ fontWeight: 800, fontSize: '1rem', color: '#121417' }}>
                  {t.author}
                </div>

                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                  <MapPin size={12} color="var(--primary)" /> {t.location}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
