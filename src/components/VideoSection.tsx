import { Flame, PlayCircle } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,102,0,0.1),transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flame className="w-8 h-8 text-orange-500 animate-pulse" />
            <h2 className="text-5xl md:text-6xl font-black text-orange-400 tracking-tight">
              SEE THE HEAT
            </h2>
            <Flame className="w-8 h-8 text-orange-500 animate-pulse" />
          </div>
          <p className="text-xl text-orange-200 max-w-2xl mx-auto leading-relaxed">
            Watch brave souls face the ultimate flavor inferno
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border-4 border-orange-600/50 shadow-[0_0_60px_rgba(255,102,0,0.4)] group">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="relative aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/u3bE9VbDlUs"
                title="Molten Sauce Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full border border-orange-500/50">
              <PlayCircle className="w-5 h-5 text-orange-400" />
              <p className="text-orange-300 font-bold">
                Witness the flavor devastation in action
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
