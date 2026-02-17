
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const CommunityCTA: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#008751]/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-10">
            <div className="w-16 h-16 bg-[#D4AF37]/10 flex items-center justify-center rounded-full text-[#D4AF37] border border-gold/20">
              <ShieldCheck className="w-8 h-8" />
            </div>
          </div>
          
          <h2 className="font-serif text-6xl md:text-8xl font-bold mb-8">
            Join the <span className="italic font-normal">Movement.</span>
          </h2>
          <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
            Be the change you want to see. Subscribe to get tactical updates on the Obidient movement and grassroots organizing efforts across Nigeria.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-white/5 border border-white/10 px-8 py-5 text-lg focus:outline-none focus:border-[#008751] transition-all"
            />
            <button className="bg-[#D4AF37] text-[#121212] font-black px-10 py-5 text-sm tracking-widest uppercase hover:bg-white transition-all flex items-center justify-center gap-3">
              I'M IN
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
          
          <p className="mt-8 text-[10px] text-white/20 tracking-widest uppercase font-bold">
            Zero Spam. Only Strategy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityCTA;
