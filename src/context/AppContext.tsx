'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LucknowArea, ServiceItem, BookingFormData, AppContextType } from '../types';
import { LUCKNOW_AREAS, SERVICES } from '../data/lucknowData';

const initialBookingData: BookingFormData = {
  step: 1,
  service: SERVICES[1], // default Full Meal Cooking
  selectedDishes: ['Paneer Butter Masala', 'Butter Phulka / Plain Roti'],
  customDish: '',
  peopleCount: 4,
  timeSlot: 'Express (Within 30 Mins)',
  bookingDate: new Date().toISOString().split('T')[0],
  name: '',
  phone: '',
  address: '',
  notes: '',
  isSubmitted: false
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedArea, setSelectedArea] = useState<LucknowArea>(LUCKNOW_AREAS[0]); // Gomti Nagar
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [bookingData, setBookingData] = useState<BookingFormData>(initialBookingData);

  const handleOpenBooking = (service: ServiceItem | null = null) => {
    if (service) {
      setSelectedService(service);
      setBookingData(prev => ({ ...prev, service, step: 1 }));
    }
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  const updateBookingData = (data: Partial<BookingFormData>) => {
    setBookingData(prev => ({ ...prev, ...data }));
  };

  const resetBooking = () => {
    setBookingData(initialBookingData);
    setSelectedService(null);
  };

  return (
    <AppContext.Provider
      value={{
        selectedArea,
        setSelectedArea,
        isBookingModalOpen,
        setIsBookingModalOpen,
        selectedService,
        setSelectedService,
        handleOpenBooking,
        handleCloseBooking,
        bookingData,
        updateBookingData,
        resetBooking
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
