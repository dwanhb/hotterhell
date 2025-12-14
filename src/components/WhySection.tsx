import { Flame, Zap, Trophy, Skull } from 'lucide-react';

const reasons = [
  {
    icon: Flame,
    title: 'VOLCANIC HEAT',
    description: 'Not hot. Not extra hot. MOLTEN. We extracted pure fire from the earth\'s core and bottled it for your taste buds.',
  },
  {
    icon: Zap,
    title: 'INSTANT FLAVOR EXPLOSION',
    description: 'One drop transforms boring chicken into a culinary masterpiece. Two drops? You\'re playing with forces beyond your control.',
  },
  {
    icon: Trophy,
    title: 'BRAGGING RIGHTS',
    description: 'Not everyone can handle Molten Sauce. Join the elite few who conquered the heat and lived to tell the tale.',
  },
  {
    icon: Skull,
    title: 'NO MERCY FORMULA',
    description: 'We don\'t do "mild." We don\'t do "medium." We do DEVASTATION. Pure. Uncut. Unforgiving.',
  },
];

interface WhySectionProps {
  onBuyNow: () => void;
}

export default function WhySection({ onBuyNow }: WhySectionProps) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 drop-shadow-[0_0_20px_rgba(255,102,0,0.5)]">
          WHY YOUR MEALS ARE BORING
        </h2>
        <p className="text-xl md:text-2xl text-orange-200 text-center mb-16 max-w-3xl mx-auto">
          Because they don't have <span className="text-orange-400 font-black">MOLTEN SAUCE</span>. Simple as that.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl border-2 border-orange-600/50 hover:border-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,102,0,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <div className="relative z-10">
                  <Icon className="w-16 h-16 text-orange-500 mb-4 group-hover:animate-pulse" />
                  <h3 className="text-2xl md:text-3xl font-black text-orange-400 mb-3 tracking-wider">
                    {reason.title}
                  </h3>
                  <p className="text-lg text-orange-100 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={onBuyNow}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white text-xl md:text-2xl font-black px-12 py-6 rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,102,0,0.8)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Flame className="relative z-10 w-8 h-8 animate-pulse" />
            <span className="relative z-10">I'M READY TO UNLEASH</span>
            <Flame className="relative z-10 w-8 h-8 animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  );
}
