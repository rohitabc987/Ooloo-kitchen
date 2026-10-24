import { LucknowArea, ServiceItem, PricingTier, DishCategory, SubscriptionPlan, TestimonialItem, FaqItem, HeroSlide, PartyPlan, OtherServiceItem } from '../types';

export const LUCKNOW_AREAS: LucknowArea[] = [
  { name: 'Gomti Nagar', code: '226010', status: 'Active', avgEta: '20 mins', cooksAvailable: 18 },
  { name: 'Gomti Nagar Extension', code: '226010', status: 'Active', avgEta: '22 mins', cooksAvailable: 14 },
  { name: 'Hazratganj', code: '226001', status: 'Active', avgEta: '25 mins', cooksAvailable: 12 },
  { name: 'Indira Nagar', code: '226016', status: 'Active', avgEta: '23 mins', cooksAvailable: 11 },
  { name: 'Alambagh', code: '226005', status: 'Active', avgEta: '24 mins', cooksAvailable: 12 },
  { name: 'Sushant Golf City', code: '226030', status: 'Active', avgEta: '18 mins', cooksAvailable: 16 },
  { name: 'Aliganj', code: '226024', status: 'Active', avgEta: '24 mins', cooksAvailable: 15 },
  { name: 'Mahanagar', code: '226006', status: 'Active', avgEta: '26 mins', cooksAvailable: 9 },
  { name: 'Vrindavan Yojna', code: '226029', status: 'Active', avgEta: '21 mins', cooksAvailable: 10 },
  { name: 'Rajajipuram', code: '226017', status: 'Active', avgEta: '28 mins', cooksAvailable: 8 },
  { name: 'Jankipuram', code: '226021', status: 'Active', avgEta: '27 mins', cooksAvailable: 7 },
  { name: 'Ashiyana / LDA Colony', code: '226012', status: 'Active', avgEta: '25 mins', cooksAvailable: 13 },
  { name: 'Vikas Nagar', code: '226022', status: 'Active', avgEta: '25 mins', cooksAvailable: 6 }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'prep',
    title: 'Vegetable Preparation',
    subtitle: 'Chopping, cutting, peeling & pre-preparation.',
    desc: 'Get your onions, veggies, pastes & marinades freshly chopped and prepped at ₹199/hr.',
    icon: 'Carrot',
    duration: '1 Hour',
    idealFor: 'Busy home chefs & daily meal prep',
    popular: false
  },
  {
    id: 'cooking',
    title: 'Cooking Assistant',
    subtitle: 'North Indian, Awadhi, Multi-cuisine & daily meals.',
    desc: 'Fresh phulkas, curries, dal, and rice cooked to your exact taste. 1 Hour (₹299 for up to 3) or 2 Hours (₹399 for up to 5).',
    icon: 'ChefHat',
    duration: '1 to 2 Hours',
    idealFor: 'Daily lunches, family dinners & healthy meals',
    popular: true
  },
  {
    id: 'ondemand',
    title: 'On-Demand Cook (30 Mins)',
    subtitle: 'Available in 30 minutes* across Lucknow.',
    desc: 'Need kitchen help today? Professional verified cook dispatched to your doorstep within 30 minutes.',
    icon: 'Zap',
    duration: '30 min arrival',
    idealFor: 'Instant urgent hunger & unexpected guests',
    popular: true
  },
  {
    id: 'party',
    title: 'Party & Family Gatherings',
    subtitle: 'Complete party plans for 10 to 50 guests.',
    desc: 'Make your special occasions stress-free with our trusted kitchen support services starting at ₹1,999.',
    icon: 'PartyPopper',
    duration: '3 to 5 Hours',
    idealFor: 'House parties, birthdays & family get-togethers',
    popular: true
  },
  {
    id: 'kitchen_cleaning',
    title: 'Kitchen Organising',
    subtitle: 'Clean surfaces, tidy shelves & kitchen organizing.',
    desc: 'Dedicated helper for arranging spice jars, kitchen cabinets, deep stovetop and platform turnover at ₹199/hr.',
    icon: 'Sparkles',
    duration: 'Hourly flexible',
    idealFor: 'Pantry reset & deep kitchen hygiene',
    popular: false
  },
  {
    id: 'utensils',
    title: 'Utensils Cleaning',
    subtitle: 'Hygiene washing & arranging of cookware & plates.',
    desc: 'Add-on service: Thorough dishwashing and scrub clean of all utensils at ₹199/hr.',
    icon: 'UtensilsCrossed',
    duration: 'Hourly flexible',
    idealFor: 'Post-cooking cleanup & large meal days',
    popular: false
  },
  {
    id: 'serving',
    title: 'Food Serving',
    subtitle: 'Table and dining serving by courteous helpers.',
    desc: 'Add-on service: Hot roti serving & dining table hosting assistance at ₹199/hr (or ₹1,000 per party event).',
    icon: 'Clock',
    duration: 'Hourly flexible',
    idealFor: 'Guest gatherings & special family dinners',
    popular: false
  },
  {
    id: 'subscription',
    title: 'Smart Subscriptions',
    subtitle: 'Save up to 30% with monthly kitchen partner plans.',
    desc: 'Same trained cook daily, hold days, priority booking & zero hidden charges from ₹5,999/month.',
    icon: 'Calendar',
    duration: 'Daily visits',
    idealFor: 'Working professionals & busy households',
    popular: false
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: '1 Hour Booking',
    price: '₹299',
    unit: 'up to 3 people',
    ideal: 'Up to 3 people',
    includes: ['1 Hour dedicated cooking', '2 Mains (e.g. Paneer & Dal)', 'Phulkas / Rotis & Rice', 'Customized spice & salt level'],
    popular: false,
    cta: 'Book 1-Hour Cook'
  },
  {
    name: '2 Hours Booking',
    price: '₹399',
    unit: 'up to 5 people',
    ideal: 'Up to 5 people',
    includes: ['2 Hours dedicated cooking', '3-4 Main Dishes + Starter', 'Phulkas / Parathas & Biryani', 'Vegetable prep & chopping included', 'Customized to your taste'],
    popular: true,
    tag: 'MOST POPULAR',
    cta: 'Book 2-Hour Cook'
  },
  {
    name: 'Extra 30 Minutes',
    price: '₹99',
    unit: 'add-on',
    ideal: 'Flexibility guaranteed',
    includes: ['Add anytime mid-session', 'Extra dish or dessert prep', 'No hassle extending cook time'],
    popular: false,
    cta: 'Add Extra Time'
  },
  {
    name: 'Family Gathering & Party',
    price: '₹1,999',
    unit: 'starting (1-10 people)',
    ideal: '10 to 50 guests',
    includes: ['3 to 5 Hours of dedicated cooking', 'End-to-end multi-course meal preparation', 'Servers & Cleaners available at ₹1,000/event', 'Stress-free celebration hosting'],
    popular: false,
    cta: 'Book Party Plan'
  }
];

export const PARTY_PLANS: PartyPlan[] = [
  { people: '1 to 10', minPeople: 1, maxPeople: 10, hours: '3 hours', amount: 1999, amountFormatted: '₹1,999' },
  { people: '11 to 20', minPeople: 11, maxPeople: 20, hours: '4 hours', amount: 2999, amountFormatted: '₹2,999' },
  { people: '21 to 30', minPeople: 21, maxPeople: 30, hours: '4 hours', amount: 3999, amountFormatted: '₹3,999' },
  { people: '31 to 40', minPeople: 31, maxPeople: 40, hours: '5 hours', amount: 4999, amountFormatted: '₹4,999' },
  { people: '41 to 50', minPeople: 41, maxPeople: 50, hours: '5 hours', amount: 5999, amountFormatted: '₹5,999' },
];

export const PARTY_ADDONS = [
  { id: 'server', title: 'Server', rate: '₹1,000', unit: 'Per Event', icon: '🤵', desc: 'Dedicated professional table & buffet serving' },
  { id: 'cleaner', title: 'Cleaner', rate: '₹1,000', unit: 'Per Event', icon: '🧹', desc: 'Post-event kitchen and dining area deep cleaning' },
];

export const OTHER_SERVICES: OtherServiceItem[] = [
  { id: 'kitchen_prep', title: 'Kitchen Preparation', rate: '₹199', unit: '/Hrs', icon: '🥕', desc: 'Chopping, cutting, peeling & pre-preparation' },
  { id: 'utensils_cleaning', title: 'Utensils Cleaning', rate: '₹199', unit: '/Hrs', icon: '🍽️', desc: 'Washing, sanitising & arranging all utensils' },
  { id: 'kitchen_cleaning', title: 'Kitchen Cleaning', rate: '₹199', unit: '/Hrs', icon: '🧽', desc: 'Platform, stovetop & counter hygienic turnover' },
  { id: 'serving', title: 'Serving', rate: '₹199', unit: '/Hrs', icon: '🛎️', desc: 'Hot roti serving & dining table hosting assistance' },
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'smart',
    title: 'Smart Plan',
    badge: 'BEST FOR REGULAR FAMILIES',
    price: '₹5,999',
    period: '/month',
    desc: '1 Hour Daily (Up to 3 People)',
    savings: 'Save up to 30%',
    popular: false,
    color: '#05B865',
    features: [
      '1 Hour Daily (Up to 3 People)',
      'Same Trained Cook',
      'Up to 4 Service Hold Days',
      'Priority Booking',
      'Festive Off'
    ]
  },
  {
    id: 'elite',
    title: 'Elite Plan',
    badge: 'BEST FOR LARGE FAMILIES',
    price: '₹8,999',
    period: '/month',
    desc: '2 Hours Daily (Up to 5 People)',
    savings: 'Save up to 30%',
    popular: true,
    color: '#0284C7',
    features: [
      '2 Hours Daily (Up to 5 People)',
      'Same Trained Cook',
      'Up to 5 Service Hold Days',
      'Priority Booking',
      'Festive Off'
    ]
  },
  {
    id: 'duo',
    title: 'Duo Plan',
    badge: 'BEST FOR SMALL FAMILIES',
    price: '₹11,999',
    period: '/month',
    desc: '1 Hour Morning + 1 Hour Evening (Up to 3 People)',
    savings: 'Save up to 30%',
    popular: false,
    color: '#E64A19',
    features: [
      '1 Hour Morning + 1 Hour Evening (Up to 3 People)',
      'Same Trained Cook',
      'Up to 5 Service Hold Days',
      'Priority Booking',
      'Festive Off'
    ]
  },
  {
    id: 'custom',
    title: 'Custom Plan',
    badge: 'BEST FOR CUSTOM NEEDS',
    price: '₹14,999',
    period: '/month',
    desc: '1 Hour Daily (Up to 3 People) + 2 Hours Daily (Up to 5 People)',
    savings: 'Save up to 30%',
    popular: false,
    color: '#D97706',
    features: [
      '1 Hour Daily (Up to 3 People) + 2 Hours Daily (Up to 5 People)',
      'Same Trained Cook',
      'Up to 5 Service Hold Days',
      'Priority Booking',
      'Festive Off'
    ]
  },
  {
    id: 'signature',
    title: 'Signature Plan',
    badge: 'BEST FOR MEDIUM FAMILIES',
    price: '₹17,999',
    period: '/month',
    desc: '2 Hours Morning + 2 Hours Evening (Up to 5 People)',
    savings: 'Save up to 30%',
    popular: false,
    color: '#7C3AED',
    features: [
      '2 Hours Morning + 2 Hours Evening (Up to 5 People)',
      'Same Trained Cook',
      'Up to 6 Service Hold Days',
      'Highest Booking Priority',
      'Festive Off'
    ]
  }
];

export const TERMS_AND_CONDITIONS = {
  hourly: [
    'Cancellation charges ₹100 will be applicable if you cancel on arrival of the cook.',
    'Booking is subject to availability and confirmation.',
    'We do not provide kitchen cleaning or utensils cleaning (unless booked separately at ₹199/hr).',
    'No serving (unless booked separately at ₹199/hr).'
  ],
  party: [
    '50% advance required for booking confirmation.',
    'Cancellation charges: ₹499.',
    'Booking subject to availability and confirmation.',
    'Server and cleaner available as add-ons at ₹1,000 each per event.'
  ],
  subscription: [
    'Save up to 30% compared to daily individual bookings.',
    'Same verified, trained cook assigned to your home.',
    'Flexible service hold days included for family trips.',
    'Festive off as per company calendar.'
  ]
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "I haven't chopped an onion or worried about evening dinner in 3 months. ooloo's cook arrives in Gomti Nagar on time like clockwork. Pure peace of mind!",
    author: 'Anjali Tripathi',
    location: 'Gomti Nagar, Lucknow',
    rating: 5,
    tag: '2 Hours Daily Plan'
  },
  {
    quote: "The cook reached my home in Sushant Golf City in just 22 minutes when guests arrived unannounced! Prepared delicious Kadhai Paneer and 20 rotis in 1 hour.",
    author: 'Sandeep Kumar',
    location: 'Sushant Golf City, Lucknow',
    rating: 5,
    tag: '30-Min On-Demand'
  },
  {
    quote: "Hosted a party for 18 relatives. 2 ooloo cooks took over my kitchen and served restaurant quality Awadhi Biryani and starters. Worth every single rupee!",
    author: 'Ritika & Aman Gupta',
    location: 'Hazratganj, Lucknow',
    rating: 5,
    tag: 'Party Rate Booking'
  }
];

export const FAQS: FaqItem[] = [
  {
    q: 'How does the 30-minute doorstep service work?',
    a: 'We have hyper-local hubs of verified, background-checked cooks stationed across Lucknow (Gomti Nagar, Hazratganj, Aliganj, etc.). When you order on-demand, our nearest cook is dispatched immediately with live ETA updates.'
  },
  {
    q: 'Do ooloo cooks bring ingredients and spices?',
    a: 'No. Our cooks cook using your ingredients, your utensils, and your stove. This ensures 100% hygiene, your preferred oil/ghee brand, and exact spice levels customized to your family taste.'
  },
  {
    q: 'What is excluded from the ooloo kitchen service?',
    a: 'To maintain strict focus on hygiene and high quality food preparation, our cooks DO NOT handle utensil washing, floor cleaning, or table serving. They focus 100% on chopping, cooking, and leaving the kitchen counter wiped clean.'
  },
  {
    q: 'How are ooloo cooks background checked and trained?',
    a: 'Every ooloo cook undergoes mandatory Police Verification, Aadhaar authentication, medical health screening, and hands-on kitchen hygiene SOP training before entering any client home.'
  },
  {
    q: 'Can I book a cook via WhatsApp directly?',
    a: 'Yes! You can tap the "Book on WhatsApp" button or message +91 73180 86600. Our automated instant booking assistant will confirm your slot in under 60 seconds.'
  }
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    badge: 'HYPERLOCAL 30-MIN DISPATCH',
    titleMain: 'Need help in the',
    titleAccent: 'kitchen today?',
    subheading: "We've got your kitchen covered.",
    desc: 'Trained cooks. Trusted support. Hassle-free experience. Book a cook on WhatsApp — at your doorstep in 30 minutes across Lucknow.',
    image: '/images/hero_cook_ooloo.png',
    stat1: '30 min',
    stat1Label: 'At your doorstep',
    stat2: '2,400+',
    stat2Label: 'Homes served',
    stat3: '100%',
    stat3Label: 'Police verified'
  },
  {
    badge: 'CUSTOM MEALS TO YOUR EXACT TASTE',
    titleMain: 'Your verified cook',
    titleAccent: 'at doorstep in 30 mins.',
    subheading: 'North Indian, Awadhi, South Indian & Healthy diets.',
    desc: 'Your oil brand, your spices, your stove. Enjoy hot Phulkas, Paneer Butter Masala & Biryani prepared in your own kitchen.',
    image: '/images/hero_cook_ooloo_2.png',
    stat1: '30 min',
    stat1Label: 'At your doorstep',
    stat2: '2,400+',
    stat2Label: 'Homes served',
    stat3: '100%',
    stat3Label: 'Police verified'
  }
];
