'use client';

import React from 'react';
import { X, Check, MessageSquare, Sparkles, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { LUCKNOW_AREAS, SERVICES, POPULAR_DISHES } from '../data/lucknowData';
import { LucknowArea, ServiceItem, DishCategory } from '../types';

export default function BookingModal() {
  const {
    selectedArea,
    setSelectedArea,
    isBookingModalOpen,
    handleCloseBooking,
    bookingData,
    updateBookingData
  } = useApp();

  if (!isBookingModalOpen) return null;

  const {
    step,
    service,
    selectedDishes,
    customDish,
    peopleCount,
    timeSlot,
    bookingDate,
    name,
    phone,
    address,
    notes,
    isSubmitted
  } = bookingData;

  const toggleDish = (dish: string) => {
    if (selectedDishes.includes(dish)) {
      updateBookingData({ selectedDishes: selectedDishes.filter(d => d !== dish) });
    } else {
      updateBookingData({ selectedDishes: [...selectedDishes, dish] });
    }
  };

  const handleAddCustomDish = () => {
    if (customDish.trim() && !selectedDishes.includes(customDish.trim())) {
      updateBookingData({
        selectedDishes: [...selectedDishes, customDish.trim()],
        customDish: ''
      });
    }
  };

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    updateBookingData({ isSubmitted: true });
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getWhatsAppMessage = () => {
    const dishList = selectedDishes.length > 0 ? selectedDishes.join(', ') : 'Custom Menu';
    const text = `*New Cook Booking on ooloo!* 🍳\n\n` +
      `*Name:* ${name || 'Customer'}\n` +
      `*Phone:* ${phone || 'Not provided'}\n` +
      `*Area:* ${selectedArea.name} (${selectedArea.code})\n` +
      `*Address:* ${address || 'Lucknow'}\n` +
      `*Service:* ${service.title}\n` +
      `*People:* ${peopleCount} Persons\n` +
      `*Preferred Slot:* ${timeSlot} (${bookingDate})\n` +
      `*Selected Dishes:* ${dishList}\n` +
      `*Special Notes:* ${notes || 'None'}\n\n` +
      `Please confirm cook assignment for ${selectedArea.name}!`;
    return encodeURIComponent(text);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(18, 20, 23, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        width: '100%',
        maxWidth: '680px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        border: '1px solid var(--border-light)'
      }}>
        
        {/* Header */}
        <div style={{
          padding: '24px 32px',
          borderBottom: '1px solid var(--border-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          background: '#FFFFFF',
          zIndex: 10
        }}>
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              ⚡ 30-Min Doorstep Cook Dispatch
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#121417' }}>
              {isSubmitted ? 'Booking Requested!' : `Book your Cook in ${selectedArea.name}`}
            </h3>
          </div>
          <button 
            onClick={handleCloseBooking}
            style={{
              background: 'var(--bg-main)',
              border: 'none',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-muted)'
            }}>
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '32px' }}>
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'var(--green-light)',
                color: 'var(--green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <Check size={40} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#121417', marginBottom: '8px' }}>
                Cook Assigned to {selectedArea.name}!
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '440px', margin: '0 auto 28px auto' }}>
                We are ready to dispatch our nearest verified cook. Click below to open WhatsApp and send your instant order details.
              </p>

              <div style={{
                background: 'var(--bg-main)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                textAlign: 'left',
                marginBottom: '28px',
                border: '1px solid var(--border-light)',
                fontSize: '0.9rem'
              }}>
                <div style={{ fontWeight: 700, marginBottom: '8px', color: '#121417' }}>📋 Order Summary:</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', color: 'var(--text-muted)' }}>
                  <div><strong>Area:</strong> {selectedArea.name}</div>
                  <div><strong>ETA:</strong> ~{selectedArea.avgEta}</div>
                  <div><strong>Service:</strong> {service.title}</div>
                  <div><strong>People:</strong> {peopleCount} Guests</div>
                  <div><strong>Slot:</strong> {timeSlot}</div>
                  <div><strong>Date:</strong> {bookingDate}</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a 
                  href={`https://wa.me/917318086600?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', padding: '16px', fontSize: '1.05rem' }}>
                  <MessageSquare size={20} />
                  <span>Send Confirmation via WhatsApp</span>
                </a>

                <a 
                  href="tel:+917318086600"
                  className="btn btn-dark"
                  style={{ width: '100%', padding: '14px' }}>
                  <Phone size={18} />
                  <span>Call Dispatch (+91 73180 86600)</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleCompleteBooking}>
              {/* Step indicator */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '28px' }}>
                {[1, 2, 3].map((s) => (
                  <div 
                    key={s} 
                    style={{ 
                      flex: 1, 
                      height: '4px', 
                      borderRadius: '2px', 
                      background: step >= s ? 'var(--primary)' : 'var(--border-light)' 
                    }} 
                  />
                ))}
              </div>

              {/* Step 1: Service & Area Selection */}
              {step === 1 && (
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#121417', marginBottom: '12px' }}>
                    1. Select Service Type
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                    {SERVICES.map((svc: ServiceItem) => (
                      <div
                        key={svc.id}
                        onClick={() => updateBookingData({ service: svc })}
                        style={{
                          border: service.id === svc.id ? '2px solid var(--primary)' : '1px solid var(--border-light)',
                          background: service.id === svc.id ? 'var(--primary-light)' : '#FFFFFF',
                          padding: '16px',
                          borderRadius: 'var(--radius-sm)',
                          cursor: 'pointer'
                        }}>
                        <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#121417' }}>{svc.title}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>{svc.subtitle}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#121417', marginBottom: '12px' }}>
                    2. Select Lucknow Neighborhood
                  </div>
                  <select 
                    value={selectedArea.name}
                    onChange={(e) => {
                      const found = LUCKNOW_AREAS.find((a: LucknowArea) => a.name === e.target.value);
                      if (found) setSelectedArea(found);
                    }}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-light)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      marginBottom: '24px',
                      outline: 'none'
                    }}>
                    {LUCKNOW_AREAS.map((a: LucknowArea) => (
                      <option key={a.name} value={a.name}>
                        {a.name} (Pincode: {a.code}) - ETA ~{a.avgEta}
                      </option>
                    ))}
                  </select>

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button 
                      type="button" 
                      onClick={() => updateBookingData({ step: 2 })}
                      className="btn btn-primary">
                      Next: Choose Dishes →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Dishes & Guests */}
              {step === 2 && (
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#121417', marginBottom: '12px' }}>
                    3. Select Dishes / Meal Preferences
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '8px' }}>
                      Popular Dishes:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {POPULAR_DISHES.flatMap((c: DishCategory) => c.items).map((dish: string) => {
                        const isSelected = selectedDishes.includes(dish);
                        return (
                          <button
                            key={dish}
                            type="button"
                            onClick={() => toggleDish(dish)}
                            style={{
                              padding: '6px 14px',
                              borderRadius: '99px',
                              border: isSelected ? '1.5px solid var(--primary)' : '1px solid var(--border-light)',
                              background: isSelected ? 'var(--primary)' : 'var(--bg-main)',
                              color: isSelected ? '#FFFFFF' : 'var(--text-primary)',
                              fontSize: '0.82rem',
                              fontWeight: 600,
                              cursor: 'pointer'
                            }}>
                            {isSelected ? '✓ ' : '+ '}{dish}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Add Custom Dish input */}
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                    <input 
                      type="text"
                      placeholder="Add any specific dish (e.g. Baingan Bharta, Fish Curry)..."
                      value={customDish}
                      onChange={(e) => updateBookingData({ customDish: e.target.value })}
                      style={{
                        flex: 1,
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.88rem'
                      }}
                    />
                    <button 
                      type="button"
                      onClick={handleAddCustomDish}
                      className="btn btn-outline"
                      style={{ padding: '10px 18px', fontSize: '0.85rem' }}>
                      Add Dish
                    </button>
                  </div>

                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#121417', marginBottom: '12px' }}>
                    4. How many people to cook for?
                  </div>
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '28px' }}>
                    {[2, 4, 6, 8, 12].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => updateBookingData({ peopleCount: num })}
                        style={{
                          flex: 1,
                          padding: '10px',
                          borderRadius: 'var(--radius-sm)',
                          border: peopleCount === num ? '2px solid var(--primary)' : '1px solid var(--border-light)',
                          background: peopleCount === num ? 'var(--primary-light)' : '#FFFFFF',
                          color: peopleCount === num ? 'var(--primary)' : 'var(--text-primary)',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}>
                        {num} Guests
                      </button>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button 
                      type="button" 
                      onClick={() => updateBookingData({ step: 1 })}
                      className="btn btn-outline">
                      ← Back
                    </button>
                    <button 
                      type="button" 
                      onClick={() => updateBookingData({ step: 3 })}
                      className="btn btn-primary">
                      Next: Contact & Time →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact details & Time slot */}
              {step === 3 && (
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#121417', marginBottom: '12px' }}>
                    5. Select Time Slot
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                    {['Express (Within 30 Mins)', 'Lunch (12:00 PM - 2:00 PM)', 'Dinner (7:00 PM - 9:00 PM)', 'Custom Schedule'].map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => updateBookingData({ timeSlot: slot })}
                        style={{
                          padding: '12px',
                          borderRadius: 'var(--radius-sm)',
                          border: timeSlot === slot ? '2px solid var(--primary)' : '1px solid var(--border-light)',
                          background: timeSlot === slot ? 'var(--primary-light)' : '#FFFFFF',
                          color: timeSlot === slot ? 'var(--primary)' : 'var(--text-primary)',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}>
                        {slot}
                      </button>
                    ))}
                  </div>

                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#121417', marginBottom: '12px' }}>
                    6. Your Lucknow Address & Contact
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                    <input 
                      type="text"
                      placeholder="Your Full Name *"
                      required
                      value={name}
                      onChange={(e) => updateBookingData({ name: e.target.value })}
                      style={{
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.9rem'
                      }}
                    />
                    <input 
                      type="tel"
                      placeholder="Phone Number (10-digits) *"
                      required
                      value={phone}
                      onChange={(e) => updateBookingData({ phone: e.target.value })}
                      style={{
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <input 
                    type="text"
                    placeholder="House / Apartment & Landmark in Lucknow *"
                    required
                    value={address}
                    onChange={(e) => updateBookingData({ address: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.9rem',
                      marginBottom: '12px'
                    }}
                  />

                  <textarea 
                    placeholder="Special instructions (e.g., less oil, extra spicy, cook arrives by back gate)..."
                    rows={2}
                    value={notes}
                    onChange={(e) => updateBookingData({ notes: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.9rem',
                      marginBottom: '24px',
                      resize: 'none'
                    }}
                  />

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button 
                      type="button" 
                      onClick={() => updateBookingData({ step: 2 })}
                      className="btn btn-outline">
                      ← Back
                    </button>
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      style={{ padding: '14px 28px' }}>
                      <Sparkles size={18} />
                      Confirm & Book Cook
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
