'use client';

import React from 'react';

export default function Ticker() {
  const items = [
    '30 min · at your doorstep',
    'Smart Subscriptions',
    'Kitchen Prep & Chopping',
    'Full Meal Cooking',
    'On-Demand Verified Cook',
    'Family & Party Catering',
    'Hygiene Tested & Background Checked',
    'Lucknow Hyperlocal Service'
  ];

  return (
    <div className="ticker-wrap">
      <div className="ticker-move">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="ticker-item">
            <span>{item}</span>
            <span className="ticker-dot">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
