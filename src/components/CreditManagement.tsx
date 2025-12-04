import { useState } from 'react';
import { ArrowLeft, CreditCard, TrendingUp, TrendingDown, ShoppingCart, Plus } from 'lucide-react';
import type { CreditTransaction } from '../App';

interface CreditManagementProps {
  credits: number;
  history: CreditTransaction[];
  onBack: () => void;
  onPurchase: (amount: number, price: number) => void;
}

const CREDIT_PACKAGES = [
  { credits: 10, price: 15, popular: false },
  { credits: 25, price: 35, popular: true },
  { credits: 50, price: 65, popular: false },
  { credits: 100, price: 120, popular: false }
];

export function CreditManagement({ credits, history, onBack, onPurchase }: CreditManagementProps) {
  const [showPurchase, setShowPurchase] = useState(false);

  const handlePurchase = (pkg: typeof CREDIT_PACKAGES[0]) => {
    onPurchase(pkg.credits, pkg.price);
    setShowPurchase(false);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white p-4 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={onBack}
            className="p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors backdrop-blur-sm"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="font-bold">Credits</h1>
        </div>

        {/* Current Balance */}
        <div className="bg-blue-700 rounded-lg p-4">
          <p className="text-sm text-blue-200 mb-1">Current Balance</p>
          <p className="text-4xl mb-3">{credits}</p>
          <button
            onClick={() => setShowPurchase(!showPurchase)}
            className="w-full bg-white text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            <span>Purchase Credits</span>
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-4">
        {/* Purchase Section */}
        {showPurchase && (
          <section className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h2 className="mb-3 text-neutral-900">Credit Packages</h2>
            <div className="space-y-3">
              {CREDIT_PACKAGES.map((pkg) => (
                <button
                  key={pkg.credits}
                  onClick={() => handlePurchase(pkg)}
                  className="w-full bg-white border border-neutral-300 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition-all text-left relative"
                >
                  {pkg.popular && (
                    <span className="absolute top-2 right-2 text-xs bg-blue-600 text-white px-2 py-1 rounded">
                      Popular
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-neutral-900 mb-1">{pkg.credits} Credits</p>
                      <p className="text-sm text-neutral-600">
                        €{(pkg.price / pkg.credits).toFixed(2)} per credit
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl text-blue-600">€{pkg.price}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Credit Info */}
        <section className="mb-6">
          <h2 className="mb-3 text-neutral-900">How Credits Work</h2>
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 space-y-3 text-sm">
            <div>
              <p className="text-neutral-900 mb-1">4-person rooms</p>
              <p className="text-neutral-600">2 credits per 30 minutes</p>
            </div>
            <div className="border-t border-neutral-300 pt-3">
              <p className="text-neutral-900 mb-1">6-person rooms</p>
              <p className="text-neutral-600">3 credits per 30 minutes</p>
            </div>
            <div className="border-t border-neutral-300 pt-3">
              <p className="text-neutral-900 mb-1">Cancellations</p>
              <p className="text-neutral-600">Full refund if cancelled before booking time</p>
            </div>
          </div>
        </section>

        {/* Transaction History */}
        <section>
          <h2 className="mb-3 text-neutral-900">Transaction History</h2>
          {history.length === 0 ? (
            <div className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 text-center text-neutral-600">
              <p>No transactions yet</p>
            </div>
          ) : (
            <div className="space-y-2">
              {history.map(transaction => (
                <div 
                  key={transaction.id}
                  className="bg-white border border-neutral-200 rounded-lg p-3"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${
                        transaction.type === 'purchase' 
                          ? 'bg-green-100' 
                          : transaction.type === 'refund'
                          ? 'bg-blue-100'
                          : 'bg-neutral-100'
                      }`}>
                        {transaction.type === 'purchase' ? (
                          <ShoppingCart className="w-4 h-4 text-green-600" />
                        ) : transaction.type === 'refund' ? (
                          <TrendingUp className="w-4 h-4 text-blue-600" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-neutral-600" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-neutral-900">{transaction.description}</p>
                        <p className="text-xs text-neutral-500">{transaction.date}</p>
                      </div>
                    </div>
                    <span className={`${
                      transaction.amount > 0 
                        ? 'text-green-600' 
                        : 'text-red-600'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}{transaction.amount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
