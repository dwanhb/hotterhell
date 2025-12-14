import { Flame } from 'lucide-react';

const foodCategories = [
  {
    image: '/openart-image_h4zpafyx_1765431903662_raw.png',
    title: 'WINGS & BURGERS',
    description: 'Turn ordinary into EXTRAORDINARY. Your BBQ will never be the same.',
  },
  {
    image: '/openart-image_onmh3woe_1765431842041_raw.png',
    title: 'TACOS & WINGS',
    description: 'Mexican night just got a volcanic upgrade. Taco Tuesday becomes Inferno Tuesday.',
  },
  {
    image: '/openart-image_utfoby2i_1765431511962_raw.png',
    title: 'EVERYTHING ELSE',
    description: 'Eggs. Pizza. Ice cream. Nothing is safe. Nothing is sacred. Everything gets MOLTEN.',
  },
];

interface FoodShowcaseProps {
  onBuyNow: () => void;
}

export default function FoodShowcase({ onBuyNow }: FoodShowcaseProps) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 drop-shadow-[0_0_20px_rgba(255,102,0,0.5)]">
          UNLEASH ON EVERYTHING
        </h2>
        <p className="text-xl md:text-2xl text-orange-200 text-center mb-16 max-w-3xl mx-auto">
          No food is safe from the <span className="text-orange-400 font-black">MOLTEN TREATMENT</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {foodCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl border-2 border-orange-600/50 hover:border-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,102,0,0.5)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-80 object-cover"
              />
              <div className="relative z-20 p-6">
                <h3 className="text-2xl md:text-3xl font-black text-orange-400 mb-3 tracking-wider">
                  {category.title}
                </h3>
                <p className="text-lg text-orange-100 leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-red-400 font-bold">
                  <Flame className="w-5 h-5 animate-pulse" />
                  <span>DEVASTATION GUARANTEED</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl md:text-3xl text-orange-300 mb-8 font-bold">
            What are you waiting for? Your food is <span className="text-red-500">BORING</span> right now.
          </p>
          <button
            onClick={onBuyNow}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white text-xl md:text-2xl font-black px-12 py-6 rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,102,0,0.8)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Flame className="relative z-10 w-8 h-8 animate-pulse" />
            <span className="relative z-10">GET MOLTEN NOW</span>
            <Flame className="relative z-10 w-8 h-8 animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  );
}
