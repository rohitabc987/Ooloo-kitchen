'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, Clock, Heart, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HERO_SLIDES } from '../data/lucknowData';

export default function Hero() {
  const { selectedArea, handleOpenBooking } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{
      padding: '60px 0 60px 0',
      position: 'relative',
      overflow: 'hidden',
      width: '100%'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gap: '40px',
          alignItems: 'center',
          minHeight: '480px'
        }} className="hero-grid">

          {/* Left Hero Content - Text Slider */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0, width: '100%' }}>

            {/* Horizontal Text Slider Viewport */}
            <div style={{ width: '100%', minWidth: 0, overflow: 'hidden' }}>
              <div style={{
                display: 'flex',
                width: `${HERO_SLIDES.length * 100}%`,
                transform: `translateX(-${currentSlide * (100 / HERO_SLIDES.length)}%)`,
                transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
              }}>
                {HERO_SLIDES.map((slide, idx) => (
                  <div key={idx} style={{ width: `${100 / HERO_SLIDES.length}%`, flexShrink: 0, minWidth: 0, paddingRight: '12px', boxSizing: 'border-box' }}>

                    {/* Tagline Badge */}
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      color: 'var(--primary)',
                      textTransform: 'uppercase',
                      marginBottom: '16px',
                      background: 'var(--primary-light)',
                      padding: '4px 12px',
                      borderRadius: '99px'
                    }}>
                      <Sparkles size={14} color="var(--primary)" />
                      {slide.badge}
                    </div>

                    {/* Main Title */}
                    <h1 style={{
                      fontSize: 'clamp(2.2rem, 4.8vw, 3.8rem)',
                      fontWeight: 800,
                      lineHeight: 1.1,
                      color: '#121417',
                      letterSpacing: '-0.03em',
                      marginBottom: '16px',
                      wordBreak: 'break-word'
                    }}>
                      {slide.titleMain} <span className="italic-serif">{slide.titleAccent}</span>
                    </h1>

                    {/* Subheading */}
                    <div style={{
                      fontSize: '1.2rem',
                      color: 'var(--primary)',
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontWeight: 400,
                      marginBottom: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      flexWrap: 'wrap'
                    }}>
                      <span>{slide.subheading}</span>
                      <Heart size={18} fill="var(--primary)" color="var(--primary)" style={{ flexShrink: 0 }} />
                    </div>

                    {/* Description */}
                    <p style={{
                      fontSize: '1.05rem',
                      color: 'var(--text-muted)',
                      maxWidth: '540px',
                      lineHeight: 1.6,
                      marginBottom: '28px'
                    }}>
                      {slide.desc}
                    </p>

                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
              <a
                href={`https://wa.me/917318086600?text=Hi%20ooloo!%20I%20want%20to%20book%20a%20cook%20in%20${encodeURIComponent(selectedArea.name)}.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '14px 28px', fontSize: '1rem' }}>
                <MessageSquare size={18} />
                Book on WhatsApp
              </a>

              <button
                onClick={() => handleOpenBooking()}
                className="btn btn-primary"
                style={{ padding: '14px 24px', fontSize: '1rem' }}>
                <Clock size={16} />
                30-Min Cook
              </button>
            </div>

            {/* Fixed Static Stats Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border-light)'
            }}>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#121417', fontFamily: 'var(--font-heading)' }}>
                  30 min
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  At your doorstep
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#121417', fontFamily: 'var(--font-heading)' }}>
                  2,400+
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Homes served
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#121417', fontFamily: 'var(--font-heading)' }}>
                  100%
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Police verified
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Image Slider (Synchronized 2-Image Slide) */}
          <div style={{ position: 'relative', width: '100%', minWidth: 0 }}>
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '4px solid #FFFFFF'
            }}>
              <div style={{
                display: 'flex',
                width: `${HERO_SLIDES.length * 100}%`,
                transform: `translateX(-${currentSlide * (100 / HERO_SLIDES.length)}%)`,
                transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
              }}>
                {HERO_SLIDES.map((slide, idx) => (
                  <div key={idx} style={{ width: `${100 / HERO_SLIDES.length}%`, flexShrink: 0, minWidth: 0 }}>
                    <img
                      src={slide.image}
                      alt="ooloo trained cook in Lucknow home kitchen"
                      className="hero-slide-img"
                      style={{
                        width: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-grid {
          grid-template-columns: 1.1fr 0.9fr;
        }
        .hero-slide-img {
          height: 480px;
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .hero-slide-img {
            height: 380px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-slide-img {
            height: 320px !important;
          }
        }
      `}</style>
    </section>
  );
}
