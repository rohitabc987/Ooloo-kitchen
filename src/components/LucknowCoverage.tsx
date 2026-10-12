'use client';

import React, { useState } from 'react';
import { MapPin, Search, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { LUCKNOW_AREAS } from '../data/lucknowData';
import { LucknowArea } from '../types';

export default function LucknowCoverage() {
  const { selectedArea, setSelectedArea, handleOpenBooking } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAreas = LUCKNOW_AREAS.filter((area: LucknowArea) => 
    area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.code.includes(searchTerm)
  );

  return (
    <section style={{ padding: '50px 0 70px 0', backgroundColor: '#FFFFFF', width: '100%' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 28px auto' }}>
          <div style={{
            fontSize: '0.8rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            color: 'var(--primary)',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            HYPERLOCAL COVERAGE
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#121417', marginBottom: '14px' }}>
            Serving all top areas in <span className="italic-serif">Lucknow.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Check if ooloo 30-minute doorstep kitchen service is active in your locality.
          </p>

          <div style={{
            position: 'relative',
            maxWidth: '500px',
            margin: '24px auto 0 auto'
          }}>
            <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text"
              placeholder="Search area (e.g. Gomti Nagar, Hazratganj, 226010)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px 14px 48px',
                borderRadius: '99px',
                border: '1.5px solid var(--border-light)',
                fontSize: '0.95rem',
                outline: 'none',
                fontFamily: 'var(--font-body)'
              }}
            />
          </div>
        </div>

        {/* Lucknow Areas Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '16px'
        }}>
          {filteredAreas.map((area: LucknowArea) => {
            const isSelected = selectedArea.name === area.name;
            return (
              <div 
                key={area.name}
                onClick={() => setSelectedArea(area)}
                style={{
                  background: isSelected ? 'var(--primary-light)' : 'var(--bg-main)',
                  border: isSelected ? '2px solid var(--primary)' : '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px 24px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <MapPin size={16} color="var(--primary)" />
                    <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#121417' }}>
                      {area.name}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '24px' }}>
                    Pincode: {area.code} • {area.cooksAvailable} cooks nearby
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--green)',
                    background: 'var(--green-light)',
                    padding: '3px 10px',
                    borderRadius: '99px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Clock size={12} /> ~{area.avgEta}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: isSelected ? 'var(--primary)' : 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>
                    {isSelected ? '✓ Selected' : 'Tap to set location'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div style={{
          marginTop: '40px',
          background: 'var(--bg-dark)',
          color: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          padding: '24px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>
              Don't see your area listed?
            </div>
            <div style={{ fontSize: '0.88rem', color: '#A0A5AB' }}>
              We are expanding across all 110 wards of Lucknow rapidly. Request express cook arrival in your society.
            </div>
          </div>

          <button 
            onClick={() => handleOpenBooking()}
            className="btn btn-whatsapp" 
            style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
            <span>Check My Area Delivery</span>
          </button>
        </div>

      </div>
    </section>
  );
}
