'use client';

import React from 'react';
import { ShieldCheck, Award, Sparkles, HeartHandshake, Clock, ThumbsUp, CheckCircle } from 'lucide-react';

export default function TrustSection() {
  const trustPillars = [
    { icon: <ShieldCheck size={24} color="var(--primary)" />, title: 'Verified & Background Checked Staff' },
    { icon: <Award size={24} color="var(--primary)" />, title: 'Trained Kitchen Professionals' },
    { icon: <Sparkles size={24} color="var(--primary)" />, title: 'Hygienic Kitchen Practices' },
    { icon: <HeartHandshake size={24} color="var(--primary)" />, title: 'Covered & Insured' },
    { icon: <Clock size={24} color="var(--primary)" />, title: 'On-Time Service (30 Min)' },
    { icon: <ThumbsUp size={24} color="var(--primary)" />, title: 'Customer Satisfaction Guaranteed' }
  ];

  return (
    <section style={{ padding: '36px 0 60px 0', backgroundColor: 'transparent' }}>
      <div className="container">
        
        {/* Header & Visual Showcase */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '50px',
          alignItems: 'center',
          marginBottom: '36px'
        }} className="trust-grid">
          
          <div>
            <div className="page-badge">
              <span className="page-badge-dot" />
              <span>MEET YOUR OOLOO TEAM</span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3.2rem)', fontWeight: 800, color: '#121417', lineHeight: 1.15, marginBottom: '20px' }}>
              Trained. Trusted. <span className="italic-serif">Tied-in-apron.</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
              Every ooloo cook wears the signature dark apron, passes strict police & background verification, and is trained on 15+ hygiene SOPs before entering your home.
            </p>

            <div style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-sm)',
              padding: '20px',
              borderLeft: '4px solid var(--primary)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#121417' }}>
                "Your kitchen · Your ingredients · Your taste."
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Customized cooking for North Indian, South Indian, Awadhi & healthy home diet plans.
              </div>
            </div>
          </div>

          {/* Real Team Photo Card */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '4px solid #FFFFFF'
            }}>
              <img 
                src="/images/cook_team.png" 
                alt="ooloo professional trained kitchen team in Lucknow" 
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              right: '20px',
              background: 'rgba(18, 20, 23, 0.85)',
              backdropFilter: 'blur(10px)',
              color: '#FFFFFF',
              padding: '16px 20px',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700 }}>
                100% Background Checked & Uniformed
              </div>
              <CheckCircle size={20} color="var(--green)" />
            </div>
          </div>

        </div>

        {/* 6 Trust Grid Cards */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            WHY CHOOSE OOLOO
          </div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#121417', marginTop: '6px' }}>
            Built on <span className="italic-serif">trust.</span>
          </h3>
        </div>

        <div className="grid-3">
          {trustPillars.map((item, idx) => (
            <div 
              key={idx}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '24px 20px',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                boxShadow: 'var(--shadow-sm)'
              }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {item.icon}
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#121417', lineHeight: 1.3 }}>
                {item.title}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .trust-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
