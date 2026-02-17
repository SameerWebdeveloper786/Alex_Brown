
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const MediaSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', x: -30 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-black text-[#D4AF37] tracking-[0.5em] uppercase mb-4 block">Media & Press</span>
            <h2 className="font-serif text-5xl md:text-7xl font-bold leading-tight">
              Leading the <span className="italic font-normal">Dialogue.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-sm mb-2 text-lg italic"
          >
            Watch Alex's latest interviews on national television and grassroots community summits.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group cursor-pointer border border-white/5"
        >
          <div className="aspect-video relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1478720143022-10d08220952d?auto=format&fit=crop&q=80&w=2000" 
              alt="Video Interview" 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-24 h-24 bg-[#008751] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#D4AF37] transition-all duration-500">
                <Play className="w-10 h-10 text-white fill-current" />
              </div>
            </div>
            {/* Cinematic Overlay Title */}
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
              <div className="bg-black/60 backdrop-blur-md p-8 border-l-4 border-[#D4AF37]">
                <p className="text-[#D4AF37] font-bold tracking-widest text-xs uppercase mb-2">Exclusive Interview</p>
                <h3 className="text-3xl font-serif font-bold">The Path to Electoral Reform in 2027</h3>
              </div>
              <div className="hidden md:block">
                <p className="text-white/40 font-bold uppercase tracking-widest text-[10px]">15:42 Runtime</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaSection;
