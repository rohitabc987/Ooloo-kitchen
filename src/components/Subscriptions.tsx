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
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 32px auto' }}>
          <div style={{
            fontSize: '0.8rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            color: 'var(--primary)',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            MONTHLY SAVINGS
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#121417', marginBottom: '16px' }}>
            Smart Kitchen <span className="italic-serif">Subscriptions.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Never worry about daily kitchen help again. Enjoy guaranteed fixed cooks, zero cancellation fees, and up to 40% monthly savings.
          </p>
        </div>

        {/* Subscription Cards */}
        <div className="grid-3" style={{ alignItems: 'stretch' }}>
          {SUBSCRIPTION_PLANS.map((plan: SubscriptionPlan, idx: number) => (
            <div 
              key={idx}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '40px 32px',
                border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--border-light)',
                boxShadow: plan.popular ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>

              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--primary)',
                  color: '#FFFFFF',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '4px 16px',
                  borderRadius: '99px',
                  letterSpacing: '0.05em'
                }}>
                  BEST VALUE FOR FAMILIES
                </div>
              )}

              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--green)', background: 'var(--green-light)', display: 'inline-block', padding: '4px 12px', borderRadius: '99px', marginBottom: '16px' }}>
                  {plan.savings}
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#121417', marginBottom: '8px' }}>
                  {plan.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.5 }}>
                  {plan.desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '2.8rem', fontWeight: 800, color: '#121417', fontFamily: 'var(--font-heading)' }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 600 }}>{plan.period}</span>
                </div>

                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={16} /> {plan.visits}
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '20px', marginBottom: '32px' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '12px' }}>
                    What's Included:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {plan.features.map((feat: string, fIdx: number) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                        <Check size={16} color="var(--green)" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a 
                href={`https://wa.me/917318086600?text=Hi%20ooloo!%20I%20am%20interested%20in%20the%20${encodeURIComponent(plan.title)}%20monthly%20subscription%20in%20${encodeURIComponent(selectedArea.name)}.`}
                target="_blank"
                rel="noreferrer"
                className={`btn ${plan.popular ? 'btn-whatsapp' : 'btn-outline'}`}
                style={{ width: '100%', padding: '14px' }}>
                <MessageSquare size={16} />
                <span>Inquire Plan on WhatsApp</span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
