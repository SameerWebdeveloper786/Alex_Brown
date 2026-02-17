
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#008751]/10 to-transparent pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#D4AF37] mb-6 uppercase">
            <span className="w-2 h-2 rounded-full bg-[#008751] animate-pulse" />
            The Obidient Movement
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6">
            The <span className="text-[#008751]">Voice</span> for a <span className="italic font-normal">New Nigeria.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-lg mb-10 leading-relaxed">
            Dedicated to credible leadership, transparency, and the restoration of dignity to every Nigerian. Join the movement for a brighter, more accountable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#D4AF37] text-black px-8 py-4 font-bold flex items-center justify-center gap-2 group hover:bg-white transition-all">
              JOIN THE MOVEMENT
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 font-bold hover:bg-white/10 transition-all">
              VIEW THE BLUEPRINT
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://picsum.photos/1000/1250?random=10" 
              alt="Alex Brown" 
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Visual elements like in Image 2 */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-lg border border-white/10">
              <p className="text-sm font-medium text-[#D4AF37] mb-1">CURRENT LOCATION</p>
              <p className="text-xl font-bold font-serif tracking-wide">LAGOS, NIGERIA</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
