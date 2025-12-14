import { Flame, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jake "The Snake" Morrison',
    title: 'Professional Spice Eater',
    text: 'I\'ve tried every hot sauce on the planet. Nothing comes CLOSE to Molten. My taste buds will never be the same. Worth it.',
    rating: 5,
  },
  {
    name: 'Sarah "Iron Stomach" Chen',
    title: 'Food Blogger',
    text: 'Holy mother of heat. I put this on my eggs and saw God. My breakfast burrito ascended to another dimension. 10/10 would get destroyed again.',
    rating: 5,
  },
  {
    name: 'Marcus "The Volcano" Rodriguez',
    title: 'BBQ Champion',
    text: 'I won three competitions with this sauce. The judges couldn\'t handle it. Half of them tapped out. The other half crowned me king. LEGENDARY.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-orange-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-red-600 rounded-full blur-3xl opacity-20 animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 drop-shadow-[0_0_20px_rgba(255,102,0,0.5)]">
          SURVIVORS SPEAK
        </h2>
        <p className="text-xl text-orange-200 text-center mb-16 max-w-2xl mx-auto">
          Real testimonials from real people who unleashed the volcano.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl border-2 border-orange-600/50 hover:border-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,102,0,0.4)]"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-orange-100 text-lg mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-orange-400">{testimonial.name}</p>
                  <p className="text-sm text-orange-300">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
