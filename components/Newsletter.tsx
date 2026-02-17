
import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section id="newsletter" className="py-32 relative overflow-hidden bg-[#D4AF37]">
      <div className="absolute top-0 left-0 w-full h-1 bg-black/10" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-black font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Take Action Today</span>
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#121212] mb-8">Join the Movement.</h2>
          <p className="text-[#121212]/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Be the first to receive strategic updates, calls to action, and exclusive insights directly from Alex. Together, we fix the nation.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-8 py-5 bg-[#121212] text-white placeholder:text-white/30 font-medium focus:outline-none focus:ring-2 focus:ring-[#008751] transition-all"
            />
            <button className="bg-[#008751] text-white px-10 py-5 font-bold hover:bg-black transition-all flex items-center justify-center gap-3 group">
              JOIN NOW
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
          
          <p className="mt-8 text-black/50 text-sm font-medium">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
      
      {/* Visual background details */}
      <div className="absolute top-1/2 -left-20 w-40 h-40 bg-black/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/2 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Newsletter;
