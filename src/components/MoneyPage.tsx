'use client';

import React from 'react';

const TRANSACTIONS = [
  { icon: '🎁', name: 'Referral Bonus', date: 'Oct 15, 2026', amount: '+₹200', type: 'credit' },
  { icon: '🍳', name: 'Full Meal Cooking', date: 'Oct 12, 2026', amount: '-₹399', type: 'debit' },
  { icon: '🎉', name: 'Welcome Bonus', date: 'Oct 05, 2026', amount: '+₹100', type: 'credit' },
  { icon: '⚡', name: 'Express Cook', date: 'Oct 03, 2026', amount: '-₹199', type: 'debit' },
];

export default function MoneyPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Money</h1>
      </div>

      {/* Wallet Balance */}
      <div className="wallet-balance-card">
        <div className="wallet-label">ooloo Wallet Balance</div>
        <div className="wallet-amount">
          <span className="wallet-amount-currency">₹</span>200
        </div>
        <div className="wallet-amount-sub">Add money or use promo codes to save more!</div>
      </div>

      {/* Quick Actions */}
      <div className="wallet-actions">
        <div className="wallet-action-btn">
          <div className="wallet-action-icon">➕</div>
          <div className="wallet-action-label">Add Money</div>
        </div>
        <div className="wallet-action-btn">
          <div className="wallet-action-icon">🎁</div>
          <div className="wallet-action-label">Coupons</div>
        </div>
        <div className="wallet-action-btn">
          <div className="wallet-action-icon">📜</div>
          <div className="wallet-action-label">History</div>
        </div>
      </div>

      {/* Promo Code */}
      <div style={{ margin: '0 14px 16px' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1A1A1A', marginBottom: 10 }}>Have a promo code?</div>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            type="text"
            placeholder="Enter promo code"
            style={{
              flex: 1,
              padding: '11px 14px',
              border: '1.5px solid #E5E5E5',
              borderRadius: 10,
              fontSize: '0.88rem',
              fontFamily: 'var(--font)',
              outline: 'none',
            }}
          />
          <button style={{
            padding: '11px 18px',
            background: '#E64A19',
            color: '#fff',
            border: 'none',
            borderRadius: 10,
            fontSize: '0.88rem',
            fontWeight: 800,
            cursor: 'pointer',
            fontFamily: 'var(--font)',
          }}>
            Apply
          </button>
        </div>
      </div>

      <div className="divider" />

      {/* Transaction History */}
      <div className="section-header" style={{ paddingBottom: 4 }}>
        <div>
          <div className="section-title">Transaction History</div>
        </div>
      </div>

      {TRANSACTIONS.map((tx, idx) => (
        <div key={idx} className="transaction-item">
          <div className="transaction-icon">{tx.icon}</div>
          <div>
            <div className="transaction-name">{tx.name}</div>
            <div className="transaction-date">{tx.date}</div>
          </div>
          <div className={`transaction-amount ${tx.type}`}>{tx.amount}</div>
        </div>
      ))}
    </>
  );
}
