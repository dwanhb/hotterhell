import { Flame, Book, Droplets, Award, Heart } from 'lucide-react';

export default function StorySection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,102,0,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.15),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 mb-6">
            THE ORIGIN STORY
          </h2>
          <p className="text-2xl text-orange-300/90 font-bold">
            Not Made. Unleashed.
          </p>
        </div>

        <div className="space-y-32">
          <StoryBlock
            icon={<Flame className="w-12 h-12" />}
            title="The Spark Before the Fire"
            align="left"
            image="/the_spark_before_the_fire.png"
          >
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              Before Molten Sauce was on shelves and in kitchens around the world, it lived in the mind of one man:
              <span className="text-orange-400 font-bold"> Adrian Kwan</span> — son of a humble cook, grandson of a chili farmer, and a man who believed that flavour and fear could exist in the same bite.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              Adrian grew up in a small town where life was simple but the food was bold. His father ran a tiny roadside stall, famous for one thing: a homemade chili paste that made grown men sweat and still come back for more.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              As a boy, Adrian watched people's faces when they took that first bite: the pause... the shock... the slow smile... the "wah, sedap gila" between coughs and sips of water.
            </p>
            <p className="text-xl text-orange-400 font-bold mt-6 italic">
              Heat wasn't just about pain. It was about pride, memory, and emotion.
            </p>
          </StoryBlock>

          <StoryBlock
            icon={<Book className="w-12 h-12" />}
            title="The Night Everything Changed"
            align="right"
            image="/the_night_everything_changed.png"
          >
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              Years later, Adrian's father suddenly fell ill. The stall closed. The chili stopped flowing.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              One late night, going through his father's old things, Adrian found a small, stained notebook: handwritten recipes, scribbles, failed experiments, and one line circled three times in red ink:
            </p>
            <blockquote className="border-l-4 border-orange-500 pl-6 py-4 my-6 bg-gradient-to-r from-orange-900/30 to-transparent">
              <p className="text-2xl text-orange-300 font-bold italic leading-relaxed">
                "The sauce that isn't made... It's unleashed."
              </p>
            </blockquote>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              His father had been chasing something — a sauce that didn't just add spice, but told a story, tested courage, left a mark.
            </p>
            <p className="text-xl text-orange-400 font-bold mt-6">
              That night, Adrian made a promise: "I'll finish what you started."
            </p>
          </StoryBlock>

          <StoryBlock
            icon={<Droplets className="w-12 h-12" />}
            title="Obsession: From Kitchen to Lab"
            align="left"
            image="/from_kitchen_to_lab.png"
          >
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              What began as a tribute turned into a full-blown obsession. Adrian spent years:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">▸</span>
                <span className="text-lg text-zinc-300">Studying chili varieties, capsaicin extraction, and Scoville units</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">▸</span>
                <span className="text-lg text-zinc-300">Visiting chili farms and spice markets across Asia and Latin America</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">▸</span>
                <span className="text-lg text-zinc-300">Testing blends at 2AM, burning his tongue, his hands, his eyes, but refusing to stop</span>
              </li>
            </ul>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              He wasn't just trying to make a "hot sauce." He was trying to capture that feeling from childhood: the moment a simple roadside dish made a person feel alive, challenged, and a little bit terrified.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              He failed. A lot. Some batches tasted like chemical fire with no soul. Others had beautiful flavour but not enough heat to be memorable.
            </p>
            <p className="text-xl text-orange-400 font-bold mt-6">
              But every failure led to one more note. One more tweak. One more test.
            </p>
            <p className="text-2xl text-red-500 font-black mt-8">
              Then came Batch #7395.
            </p>
          </StoryBlock>

          <StoryBlock
            icon={<Award className="w-12 h-12" />}
            title="The Birth of Molten Sauce"
            align="right"
            image="/the_birth_of_molten_sauce.png"
          >
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              Batch #7395 looked... different. Thick. Deep red. When he opened the lid, there was a wave of heat that almost made him cough just from the smell.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              He dipped the tip of a toothpick in. Touched it to his tongue.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              For a moment — nothing. Then: a blast of heat. Not messy or random, but clean, sharp, rising like a wave. Like lava breaking through the earth.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              He felt his face flush, his eyes water — and then, the second layer: smoke, roasted chili, a hint of vinegar brightness, a savoury depth that didn't drown in the fire.
            </p>
            <div className="bg-gradient-to-r from-red-900/40 via-orange-900/40 to-red-900/40 border-2 border-orange-500 rounded-lg p-8 my-8">
              <p className="text-3xl md:text-4xl font-black text-orange-400 text-center">
                16,000,000 SCOVILLE HEAT UNITS
              </p>
            </div>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              People told him: "This is too much. No one will buy this." "Why so extreme?" "Just make something safe and marketable."
            </p>
            <p className="text-xl text-orange-400 font-bold italic mt-6">
              "This isn't for everyone. It's for the ones who look at a warning label and think, 'I can handle it.'"
            </p>
          </StoryBlock>

          <StoryBlock
            icon={<Heart className="w-12 h-12" />}
            title="From a Son's Tribute to a Global Phenomenon"
            align="left"
            image="/global_phenomenon.png"
          >
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              He started small. Hand-filling bottles. Slapping on labels printed from a home printer. Selling quietly to local burger joints, chicken wing stalls, and friends who loved ridiculous heat.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              One day, a small café ran a "Molten Wing Challenge." Finish 6 wings coated in Molten Sauce, no milk, no water — and your name goes on the wall.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              Someone recorded it. Posted it online. People watched a grown man talk big, take a bite, go silent, turn red, and laugh and cough at the same time.
            </p>
            <p className="text-xl text-orange-400 font-bold mb-6">
              The video went viral. And in the comments, one line kept repeating: "What sauce is that?"
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-8">
              <div className="bg-zinc-900/50 border border-orange-500/30 rounded-lg p-6">
                <p className="text-orange-400 font-bold mb-2">Featured in viral food challenge videos</p>
                <p className="text-zinc-400">YouTube and TikTok sensations worldwide</p>
              </div>
              <div className="bg-zinc-900/50 border border-orange-500/30 rounded-lg p-6">
                <p className="text-orange-400 font-bold mb-2">Used by top chefs</p>
                <p className="text-zinc-400">Extreme burgers, ramen, and wings</p>
              </div>
              <div className="bg-zinc-900/50 border border-orange-500/30 rounded-lg p-6">
                <p className="text-orange-400 font-bold mb-2">Global distribution</p>
                <p className="text-zinc-400">Specialty hot sauce shops worldwide</p>
              </div>
              <div className="bg-zinc-900/50 border border-orange-500/30 rounded-lg p-6">
                <p className="text-orange-400 font-bold mb-2">Rite of passage</p>
                <p className="text-zinc-400">A badge of bravery for chili lovers</p>
              </div>
            </div>
            <p className="text-lg text-zinc-300 leading-relaxed">
              What started as one man honouring his father became a global badge of bravery.
            </p>
          </StoryBlock>
        </div>

        <div className="mt-32 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border-2 border-orange-500 rounded-2xl p-12 shadow-[0_0_80px_rgba(255,102,0,0.3)]">
            <h3 className="text-4xl md:text-5xl font-black text-orange-400 mb-8">
              Today: A Global Legend
            </h3>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Today, Molten Sauce is known as one of the hottest legal sauces available to the public. A symbol of courage among spice lovers. A brand with a cult following, not just for the heat, but for the story behind it.
            </p>
            <div className="border-t-2 border-orange-500/30 pt-8 mt-8">
              <p className="text-lg text-zinc-400 italic mb-4">
                On the side of every bottle, in small print, are the words:
              </p>
              <p className="text-2xl text-orange-300 font-bold italic">
                "For my father, who taught me that real heat comes from the heart."
              </p>
            </div>
            <p className="text-xl text-zinc-300 leading-relaxed mt-8">
              Behind the 16,000,000 Scoville, the flames, the viral challenges, the dramatic ads... Molten Sauce is still about the same thing: a son, a stall, a notebook, and the belief that some things in life aren't just made.
            </p>
            <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 mt-6">
              They're unleashed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StoryBlockProps {
  icon: React.ReactNode;
  title: string;
  align: 'left' | 'right';
  image?: string;
  children: React.ReactNode;
}

function StoryBlock({ icon, title, align, image, children }: StoryBlockProps) {
  return (
    <div className="space-y-8">
      <div className={`flex flex-col ${align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-start`}>
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-[0_0_40px_rgba(255,102,0,0.5)]">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl font-black text-orange-400 mb-6 tracking-tight">
            {title}
          </h3>
          {image && (
            <div className="mb-8 overflow-hidden rounded-xl border-2 border-orange-500/30 shadow-[0_0_60px_rgba(255,102,0,0.2)]">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          <div className="prose prose-invert max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
