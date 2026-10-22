'use client';

import React from 'react';
import { AppProvider } from '../context/AppContext';
import BookingModal from './BookingModal';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      {children}
      <BookingModal />
    </AppProvider>
  );
}
