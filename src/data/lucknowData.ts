import { LucknowArea, ServiceItem, PricingTier, DishCategory, SubscriptionPlan, TestimonialItem, FaqItem, HeroSlide } from '../types';

export const LUCKNOW_AREAS: LucknowArea[] = [
  { name: 'Gomti Nagar', code: '226010', status: 'Active', avgEta: '20 mins', cooksAvailable: 18 },
  { name: 'Gomti Nagar Extension', code: '226010', status: 'Active', avgEta: '22 mins', cooksAvailable: 14 },
  { name: 'Hazratganj', code: '226001', status: 'Active', avgEta: '25 mins', cooksAvailable: 12 },
  { name: 'Sushant Golf City', code: '226030', status: 'Active', avgEta: '18 mins', cooksAvailable: 16 },
  { name: 'Aliganj', code: '226024', status: 'Active', avgEta: '24 mins', cooksAvailable: 15 },
  { name: 'Indira Nagar', code: '226016', status: 'Active', avgEta: '23 mins', cooksAvailable: 11 },
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
    title: 'Kitchen Prep',
    subtitle: 'Chopping, cutting, peeling & pre-preparation.',
    desc: 'Get your onions, garlic, veggies chopped, ginger-garlic pastes freshly prepared, and marinades ready before you start cooking.',
    icon: 'UtensilsCrossed',
    duration: '1 Hour',
    idealFor: 'Busy home chefs & meal prep',
    popular: false
  },
  {
    id: 'cooking',
    title: 'Full Meal Cooking',
    subtitle: 'North Indian, Awadhi, South Indian & multi-cuisine.',
    desc: 'From fresh phulkas/rotis to rich gravies, dal, rice & snacks made to your exact spice and salt preference.',
    icon: 'ChefHat',
    duration: '1 to 2 Hours',
    idealFor: 'Daily lunches, family dinners & healthy meals',
    popular: true
  },
  {
    id: 'ondemand',
    title: 'On-Demand Cook (30 Min)',
    subtitle: 'Express cook at your doorstep in 30 minutes.',
    desc: 'Unexpected guests or emergency dinner? Our nearest verified cook reaches your home within 30 minutes flat across Lucknow.',
    icon: 'Zap',
    duration: '30 min arrival',
    idealFor: 'Instant emergency hunger & last-minute plans',
    popular: true
  },
  {
    id: 'party',
    title: 'Family Gathering & Party',
    subtitle: 'Up to 20 people with 2 trained cooks.',
    desc: 'Hosting a dinner party, birthday, or puja? 2 dedicated cooks handle end-to-end cooking so you can enjoy your guests.',
    icon: 'PartyPopper',
    duration: '3 Hours Min',
    idealFor: 'House parties, Kitty parties & Festive get-togethers',
    popular: false
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: '1 Hour Booking',
    price: '₹299',
    unit: 'per session',
    ideal: 'Up to 3 people',
    includes: ['2 Mains (e.g. Paneer & Dal)', 'Phulkas / Rotis & Rice', 'Basic Salad / Raita prep'],
    popular: false,
    cta: 'Book 1-Hour Cook'
  },
  {
    name: '2 Hours Booking',
    price: '₹399',
    unit: 'per session',
    ideal: 'Up to 6 people',
    includes: ['3-4 Main Dishes + Starter', 'Phulkas / Parathas & Biryani/Rice', 'Vegetable prep & chopping included', 'Customized spice level'],
    popular: true,
    tag: 'MOST POPULAR',
    cta: 'Book 2-Hour Cook'
  },
  {
    name: 'Extra 30 Mins',
    price: '₹99',
    unit: 'add-on',
    ideal: 'Flexibility guaranteed',
    includes: ['Add anytime mid-session', 'Extra dish or dessert prep', 'No hassle extending cook time'],
    popular: false,
    cta: 'Add Extra Time'
  },
  {
    name: 'Party / Event Rate',
    price: '₹999',
    unit: 'per hour (Min 3 hrs)',
    ideal: 'Up to 20 guests',
    includes: ['2 Trained & Uniformed Cooks', 'Multi-course Party Menu', 'Starters, Main Course & Dessert', 'End-to-End Kitchen Management'],
    popular: false,
    cta: 'Book Party Cooks'
  }
];

export const POPULAR_DISHES: DishCategory[] = [
  { category: 'North Indian Gravies', items: ['Paneer Butter Masala', 'Kadhai Paneer', 'Dal Tadka / Dal Makhani', 'Chole Masala', 'Mix Veg Gravy', 'Malai Kofta'] },
  { category: 'Lucknowi Specialities', items: ['Awadhi Dum Biryani (Veg/Non-Veg)', 'Galouti Prep & Paratha', 'Kathal Masala', 'Tehri Lucknowi'] },
  { category: 'Breads & Rice', items: ['Butter Phulka / Plain Roti', 'Lachha Paratha', 'Stuffed Aloo/Gobi Paratha', 'Jeera Rice', 'Pulao'] },
  { category: 'Breakfast & Snacks', items: ['Poha / Upma', 'Crispy Pakodas', 'Samosa Filling & Chaat Prep', 'Chana Masala'] },
  { category: 'Healthy & Fitness', items: ['Sautéed High-Protein Veggies', 'Boiled Eggs & Salad Prep', 'Oatmeal & Soups', 'Less-Oil Home Meals'] }
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    title: 'Single Meal Pass',
    price: '₹2,799',
    period: '/month',
    visits: '30 Visits (1 visit/day)',
    desc: 'Perfect for working professionals needing daily fresh lunch or dinner.',
    savings: 'Save ₹3,171/mo',
    features: ['Fixed dedicated cook', 'Same daily time slot guarantee', 'Free replacement if cook is absent', 'Pause/Resume anytime']
  },
  {
    title: 'Full Day Double Pass',
    price: '₹4,499',
    period: '/month',
    visits: '60 Visits (2 visits/day)',
    desc: 'Complete kitchen peace of mind for families — fresh Lunch AND Dinner daily.',
    savings: 'Save ₹7,471/mo',
    popular: true,
    features: ['Lunch cook + Dinner cook', 'Weekly menu planning support', 'Custom dietary requirements', 'VIP Priority Customer Support', 'Zero cancellation charges']
  },
  {
    title: 'Weekend Gourmet Pass',
    price: '₹1,899',
    period: '/month',
    visits: '12 Weekend Visits',
    desc: 'Relax on Saturdays & Sundays! Special meals cooked right at home.',
    savings: 'Save ₹1,689/mo',
    features: ['Friday night + Sat + Sun', 'Party & special dish expertise', 'Great for weekend hosting', 'Flexibility to roll-over unused days']
  }
];

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
