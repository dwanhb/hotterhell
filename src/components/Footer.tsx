import { Flame } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black py-12 border-t-2 border-orange-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <Flame className="w-8 h-8 text-orange-500 animate-pulse" />
            <span className="text-2xl font-black text-orange-400 tracking-wider">
              MOLTEN SAUCE
            </span>
            <Flame className="w-8 h-8 text-orange-500 animate-pulse" />
          </div>

          <p className="text-orange-200 text-center max-w-2xl leading-relaxed">
            Not made. Unleashed. Handle at your own risk.
          </p>

          <div className="text-orange-300 text-sm text-center space-y-2">
            <p className="font-bold">⚠️ WARNING: Extremely hot. Keep away from children, pets, and the weak-willed.</p>
            <p>© {new Date().getFullYear()} Molten Sauce. All rights reserved. All taste buds destroyed.</p>
          </div>

          <div className="pt-6 border-t border-orange-600/30 w-full max-w-2xl">
            <div className="p-4 bg-yellow-600/10 border border-yellow-600/30 rounded-lg">
              <p className="text-yellow-300 text-sm text-center font-bold">
                ⚠️ PROOF OF CONCEPT: This is a demonstration e-commerce site. Payment processing is functional, but no physical products are sold or shipped.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
