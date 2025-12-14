import { Flame } from 'lucide-react';

interface HeroProps {
  onBuyNow: () => void;
}

export default function Hero({ onBuyNow }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-black to-black"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-red-600 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-12 flex justify-center">
          <img
            src="/byteai_hotter_logo_upscale.png"
            alt="Molten Sauce Logo"
            className="w-80 md:w-96 lg:w-[500px] h-auto drop-shadow-[0_0_30px_rgba(255,102,0,0.8)] animate-pulse"
          />
        </div>

        <div className="mb-8">
          <img
            src="/molten_unleashed.png"
            alt="Molten Sauce - Not Made. Unleashed."
            className="w-full max-w-3xl mx-auto h-auto drop-shadow-[0_0_20px_rgba(255,102,0,0.6)]"
          />
        </div>

        <p className="text-xl md:text-2xl text-orange-200 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          This isn't your grandma's hot sauce. This is liquid fire, volcanic fury, flavor carnage.
          <br />
          <span className="text-orange-400 font-bold">Are you brave enough?</span>
        </p>

        <button
          onClick={onBuyNow}
          className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white text-xl md:text-2xl font-black px-12 py-6 rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,102,0,0.8)] animate-pulse"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <Flame className="relative z-10 w-8 h-8" />
          <span className="relative z-10">UNLEASH THE HEAT</span>
          <Flame className="relative z-10 w-8 h-8" />
        </button>

        <p className="mt-6 text-red-400 text-sm font-bold tracking-wider uppercase">
          ⚠️ Warning: May cause extreme flavor addiction
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
