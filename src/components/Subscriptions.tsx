'use client';

import React from 'react';
import { Check, Calendar, MessageSquare } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SUBSCRIPTION_PLANS } from '../data/lucknowData';
import { SubscriptionPlan } from '../types';

export default function Subscriptions() {
  const { selectedArea } = useApp();

  return (
    <section id="subscriptions" style={{ padding: '50px 0 70px 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 36px auto' }}>
          <div style={{
            fontSize: '0.8rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            color: 'var(--primary)',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            SAVE UP TO 30% ON SUBSCRIPTION PLANS
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#121417', marginBottom: '14px' }}>
            Smart Kitchen <span className="italic-serif">Subscriptions.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Never worry about daily kitchen help again. Enjoy guaranteed same trained cooks, flexible service hold days, priority booking, and zero hidden charges.
          </p>
        </div>

        {/* Subscription Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          alignItems: 'stretch'
        }}>
          {SUBSCRIPTION_PLANS.map((plan: SubscriptionPlan, idx: number) => (
            <div 
              key={idx}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '36px 24px',
                border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--border-light)',
                boxShadow: plan.popular ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >

              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--primary)',
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  fontWeight: 900,
                  padding: '4px 16px',
                  borderRadius: '99px',
                  letterSpacing: '0.05em',
                  whiteSpace: 'nowrap'
                }}>
                  BEST FOR LARGE FAMILIES
                </div>
              )}

              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: plan.color || 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                  {plan.badge}
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#121417', marginBottom: '8px' }}>
                  {plan.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.5 }}>
                  {plan.desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#121417', fontFamily: 'var(--font-heading)' }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 600 }}>{plan.period}</span>
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>
                    Plan Highlights:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
                    {plan.features.map((feat: string, fIdx: number) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', fontSize: '0.86rem', color: 'var(--text-primary)' }}>
                        <Check size={16} color="var(--green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a 
                href={`https://wa.me/917318086600?text=Hi%20ooloo!%20I%20am%20interested%20in%20the%20${encodeURIComponent(plan.title)}%20(${plan.price}%2Fmonth)%20in%20${encodeURIComponent(selectedArea.name)}.`}
                target="_blank"
                rel="noreferrer"
                className={`btn ${plan.popular ? 'btn-whatsapp' : 'btn-outline'}`}
                style={{ width: '100%', padding: '13px' }}>
                <MessageSquare size={16} />
                <span>Inquire on WhatsApp</span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
