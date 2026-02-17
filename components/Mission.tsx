
import React from 'react';
import { motion } from 'framer-motion';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-32 bg-[#0d0d0d] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-black text-[#D4AF37] tracking-[0.5em] uppercase mb-6 block">The Philosophy</span>
            <h2 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-8">
              A Stance on <span className="text-[#008751]">Liberal</span> Values.
            </h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed max-w-lg">
              <p>
                The foundation of a prosperous Nigeria lies in the absolute transparency of our electoral processes. Without credible elections, the voice of the people remains a whisper.
              </p>
              <p>
                My vision is built on the core belief that leadership is a stewardship of the public trust. We are advocating for a system where merit, transparency, and accountability are not just buzzwords, but the primary drivers of governance.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-neutral-900 overflow-hidden border border-white/10 shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&q=80&w=1000" 
                 alt="Leadership" 
                 className="w-full h-full object-cover grayscale opacity-60"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
            </div>
            {/* Overlay element like in Img 2 */}
            <div className="absolute -bottom-8 -right-8 p-10 bg-[#008751] text-white max-w-xs shadow-2xl">
              <p className="font-serif text-2xl font-bold leading-snug">
                "The power of the people is greater than the people in power."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
