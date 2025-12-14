import { useState } from 'react';
import { Flame, Plus, Minus, ShoppingCart } from 'lucide-react';
import type { Product } from '../lib/supabase';

interface ProductSectionProps {
  product: Product | null;
  onAddToCart: (quantity: number) => void;
}

export default function ProductSection({ product, onAddToCart }: ProductSectionProps) {
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <section className="py-24 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-400 text-xl">Loading the heat...</p>
        </div>
      </section>
    );
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(1, Math.min(12, quantity + change));
    setQuantity(newQuantity);
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <section id="buy" className="relative py-24 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 drop-shadow-[0_0_20px_rgba(255,102,0,0.5)]">
          UNLEASH THE FURY
        </h2>
        <p className="text-xl text-orange-200 text-center mb-16 max-w-2xl mx-auto">
          Stock up before your taste buds riot. Limited quantities available.
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-300 animate-pulse"></div>
            <img
              src="/openart-image_crlukme3_1765432109567_raw.png"
              alt={product.name}
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-black text-orange-400 mb-4">
              {product.name}
            </h3>
            <p className="text-lg text-orange-100 leading-relaxed">
              {product.description}
            </p>

            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border-2 border-orange-600/50">
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl text-orange-200 font-bold">Quantity:</span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="w-12 h-12 rounded-lg bg-orange-600 hover:bg-orange-500 disabled:bg-zinc-700 disabled:cursor-not-allowed text-white font-black text-xl transition-colors duration-200 flex items-center justify-center"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-4xl font-black text-orange-400 w-16 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 12}
                    className="w-12 h-12 rounded-lg bg-orange-600 hover:bg-orange-500 disabled:bg-zinc-700 disabled:cursor-not-allowed text-white font-black text-xl transition-colors duration-200 flex items-center justify-center"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6 pb-6 border-b-2 border-orange-600/30">
                <span className="text-2xl text-orange-200 font-bold">Total:</span>
                <span className="text-4xl font-black text-orange-400">
                  ${totalPrice}
                </span>
              </div>

              <button
                onClick={() => onAddToCart(quantity)}
                className="group relative w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white text-xl md:text-2xl font-black px-8 py-6 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,102,0,0.8)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <ShoppingCart className="relative z-10 w-7 h-7" />
                <span className="relative z-10">ADD TO CART</span>
                <Flame className="relative z-10 w-7 h-7 animate-pulse" />
              </button>

              {quantity >= 6 && (
                <div className="mt-4 p-4 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg border border-orange-500">
                  <p className="text-orange-300 text-center font-bold">
                    🔥 BULK HEAT DETECTED! You're about to unleash serious flavor carnage!
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-zinc-800 rounded-lg border border-orange-600/30">
                <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-sm text-orange-300 font-bold">PURE FIRE</p>
              </div>
              <div className="p-4 bg-zinc-800 rounded-lg border border-orange-600/30">
                <ShoppingCart className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-sm text-orange-300 font-bold">FAST SHIP</p>
              </div>
              <div className="p-4 bg-zinc-800 rounded-lg border border-orange-600/30">
                <span className="text-3xl mb-2 block">💀</span>
                <p className="text-sm text-orange-300 font-bold">NO MERCY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
