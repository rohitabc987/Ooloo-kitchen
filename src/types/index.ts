export interface LucknowArea {
  name: string;
  code: string;
  status: 'Active' | 'Upcoming';
  avgEta: string;
  cooksAvailable: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: string; // emoji or icon name
  duration: string;
  idealFor: string;
  popular: boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  unit: string;
  ideal: string;
  includes: string[];
  popular: boolean;
  tag?: string;
  cta: string;
}

export interface DishCategory {
  category: string;
  items: string[];
}

export interface SubscriptionPlan {
  title: string;
  price: string;
  period: string;
  visits: string;
  desc: string;
  savings: string;
  popular?: boolean;
  features: string[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  location: string;
  rating: number;
  tag: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface HeroSlide {
  badge: string;
  titleMain: string;
  titleAccent: string;
  subheading: string;
  desc: string;
  image: string;
  stat1: string;
  stat1Label: string;
  stat2: string;
  stat2Label: string;
  stat3: string;
  stat3Label: string;
}

export interface BookingFormData {
  step: number;
  service: ServiceItem;
  selectedDishes: string[];
  customDish: string;
  peopleCount: number;
  timeSlot: string;
  bookingDate: string;
  name: string;
  phone: string;
  address: string;
  notes: string;
  isSubmitted: boolean;
}

export interface AppContextType {
  selectedArea: LucknowArea;
  setSelectedArea: (area: LucknowArea) => void;
  isBookingModalOpen: boolean;
  setIsBookingModalOpen: (open: boolean) => void;
  selectedService: ServiceItem | null;
  setSelectedService: (service: ServiceItem | null) => void;
  handleOpenBooking: (service?: ServiceItem | null, mode?: string) => void;
  handleCloseBooking: () => void;
  bookingData: BookingFormData;
  updateBookingData: (data: Partial<BookingFormData>) => void;
  resetBooking: () => void;
}
