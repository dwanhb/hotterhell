import { useState } from 'react';
import { X, Flame, ShoppingCart } from 'lucide-react';
import type { Product } from '../lib/supabase';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  quantity: number;
  onCheckout: (name: string, email: string) => Promise<void>;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  product,
  quantity,
  onCheckout,
}: CheckoutModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  if (!isOpen || !product) return null;

  const total = (product.price * quantity).toFixed(2);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      await onCheckout(name, email);
      window.location.href = 'https://toyyibpay.com/Molten-Sauce';
    } catch (error) {
      console.error('Checkout error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(`There was an error processing your order: ${errorMessage}`);
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-zinc-900 to-black rounded-2xl border-2 border-orange-600/50 shadow-[0_0_50px_rgba(255,102,0,0.3)] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 text-orange-400 flex items-center justify-center transition-colors duration-200 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {isComplete ? (
          <div className="p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center animate-pulse">
              <Flame className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-4xl font-black text-orange-400 mb-4">
              HEAT UNLEASHED!
            </h3>
            <p className="text-xl text-orange-200">
              Your order has been received. Check your email for confirmation.
            </p>
            <p className="text-orange-300 mt-4">
              Prepare your taste buds for devastation...
            </p>
          </div>
        ) : (
          <>
            <div className="p-8 border-b-2 border-orange-600/30">
              <h2 className="text-4xl font-black text-orange-400 mb-2 flex items-center gap-3">
                <ShoppingCart className="w-8 h-8" />
                CHECKOUT
              </h2>
              <p className="text-orange-200">
                One step away from flavor annihilation.
              </p>
            </div>

            <div className="p-8">
              <div className="mb-8 p-6 bg-zinc-800 rounded-xl border border-orange-600/30">
                <h3 className="text-2xl font-black text-orange-400 mb-4">
                  Order Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-orange-100">
                    <span>{product.name}</span>
                    <span>${product.price}</span>
                  </div>
                  <div className="flex justify-between text-orange-100">
                    <span>Quantity</span>
                    <span className="font-bold">×{quantity}</span>
                  </div>
                  <div className="pt-3 border-t border-orange-600/30 flex justify-between">
                    <span className="text-2xl font-black text-orange-400">Total</span>
                    <span className="text-2xl font-black text-orange-400">${total}</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-bold text-orange-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border-2 border-orange-600/50 rounded-lg text-orange-100 placeholder-orange-300/50 focus:outline-none focus:border-orange-400 transition-colors duration-200"
                    placeholder="John 'The Brave' Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-bold text-orange-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border-2 border-orange-600/50 rounded-lg text-orange-100 placeholder-orange-300/50 focus:outline-none focus:border-orange-400 transition-colors duration-200"
                    placeholder="heatseeker@example.com"
                  />
                </div>

                <div className="p-5 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 rounded-lg border-2 border-yellow-500/50">
                  <p className="text-yellow-200 text-sm text-center font-black mb-2 uppercase tracking-wide">
                    ⚠️ PROOF OF CONCEPT NOTICE ⚠️
                  </p>
                  <p className="text-yellow-100 text-sm text-center leading-relaxed">
                    This is a demonstration site. Payment processing is functional and powered by ToyyibPay, but <span className="font-bold">no physical products will be shipped</span>.
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg border border-orange-500">
                  <p className="text-orange-300 text-sm text-center font-bold">
                    🔒 Secure payment powered by ToyyibPay
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="group relative w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white text-xl font-black px-8 py-6 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,102,0,0.8)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <Flame className="relative z-10 w-6 h-6" />
                  <span className="relative z-10">
                    {isProcessing ? 'REDIRECTING TO PAYMENT...' : 'PROCEED TO PAYMENT'}
                  </span>
                  <Flame className="relative z-10 w-6 h-6" />
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
