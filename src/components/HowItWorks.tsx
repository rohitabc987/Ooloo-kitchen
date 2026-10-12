'use client';

import React from 'react';
import { XCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Book & Relax',
      desc: 'Book your kitchen partner on call (+91 73180 86600) or WhatsApp in under 30 seconds.'
    },
    {
      num: '02',
      title: 'Verified Cook Arrives on Time',
      desc: 'Uniformed, background-checked cook reaches your doorstep in ~30 minutes.'
    },
    {
      num: '03',
      title: 'We Handle the Kitchen',
      desc: 'Focus on your work or guests while we cook fresh, delicious food to your exact taste.'
    }
  ];

  return (
    <section id="how-it-works" style={{ padding: '50px 0 70px 0', backgroundColor: '#FFFFFF' }}>
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
            THE OOLOO EXPERIENCE
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, color: '#121417' }}>
            3 easy <span className="italic-serif">steps.</span>
          </h2>
        </div>

        {/* 3 Step Cards */}
        <div className="grid-3" style={{ marginBottom: '40px' }}>
          {steps.map((step, idx) => (
            <div 
              key={idx}
              style={{
                background: 'var(--bg-main)',
                borderRadius: 'var(--radius-md)',
                padding: '36px 28px',
                border: '1px solid var(--border-light)',
                position: 'relative',
                boxShadow: 'var(--shadow-sm)'
              }}>

              <div style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                fontSize: '3rem',
                fontWeight: 800,
                color: 'rgba(230, 74, 25, 0.15)',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1
              }}>
                {step.num}
              </div>

              <div style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                color: 'var(--primary)',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}>
                STEP {step.num}
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#121417', marginBottom: '12px' }}>
                {step.title}
              </h3>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {step.desc}
              </p>

            </div>
          ))}
        </div>

        {/* 3 Exclusion Pills */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px'
        }} className="exclusion-pills">
          
          <div style={{
            background: '#FFFFFF',
            border: '1px solid var(--border-light)',
            borderRadius: '99px',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '0.9rem',
            fontWeight: 700,
            color: 'var(--text-muted)'
          }}>
            <XCircle size={16} color="var(--primary)" />
            <span>No kitchen cleaning</span>
          </div>

          <div style={{
            background: '#FFFFFF',
            border: '1px solid var(--border-light)',
            borderRadius: '99px',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '0.9rem',
            fontWeight: 700,
            color: 'var(--text-muted)'
          }}>
            <XCircle size={16} color="var(--primary)" />
            <span>No utensil cleaning</span>
          </div>

          <div style={{
            background: '#FFFFFF',
            border: '1px solid var(--border-light)',
            borderRadius: '99px',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '0.9rem',
            fontWeight: 700,
            color: 'var(--text-muted)'
          }}>
            <XCircle size={16} color="var(--primary)" />
            <span>No serving</span>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .exclusion-pills { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
