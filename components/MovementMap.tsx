
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Globe } from 'lucide-react';

const MovementMap: React.FC = () => {
  return (
    <section id="map" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8">The <span className="text-[#D4AF37]">Movement</span> Map</h2>
            <p className="text-lg text-white/60 mb-12 leading-relaxed">
              Tracking progress across all 36 states. Our presence is growing, our message is resonating, and our movement is unstoppable. See where we are most active.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#008751]/20 flex items-center justify-center text-[#008751] mt-1">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">32% Increase in Engagement</h4>
                  <p className="text-white/50 text-sm">Monthly growth in grassroots coordination across the North-Central region.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mt-1">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Election Vigilance Units</h4>
                  <p className="text-white/50 text-sm">Fully operational oversight committees in 744 Local Government Areas.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Simple Abstract Representation of Nigeria Map */}
            <div className="relative aspect-square bg-[#121212] rounded-full border border-white/5 flex items-center justify-center p-12 overflow-hidden">
               <div className="absolute inset-0 opacity-20 pointer-events-none">
                 <svg viewBox="0 0 100 100" className="w-full h-full text-[#008751]">
                    <path d="M20,40 Q40,10 80,30 T60,80 Q30,90 20,40" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.5" />
                 </svg>
               </div>
               
               {/* Activity Pulses */}
               <div className="relative z-10 w-full h-full">
                  <PulsePoint top="30%" left="40%" label="Abuja" color="#D4AF37" size="lg" />
                  <PulsePoint top="75%" left="30%" label="Lagos" color="#008751" size="xl" />
                  <PulsePoint top="60%" left="70%" label="Enugu" color="#008751" size="md" />
                  <PulsePoint top="20%" left="65%" label="Kano" color="#D4AF37" size="md" />
                  <PulsePoint top="55%" left="20%" label="Ibadan" color="#008751" size="sm" />
                  <PulsePoint top="85%" left="55%" label="Port Harcourt" color="#008751" size="lg" />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PulsePoint = ({ top, left, label, color, size }: { top: string, left: string, label: string, color: string, size: 'sm' | 'md' | 'lg' | 'xl' }) => {
  const sizeMap = { sm: 4, md: 6, lg: 10, xl: 16 };
  return (
    <div className="absolute" style={{ top, left }}>
      <div className="relative flex items-center justify-center">
        <div 
          className="absolute rounded-full animate-ping opacity-75" 
          style={{ 
            backgroundColor: color, 
            width: `${sizeMap[size] * 3}px`, 
            height: `${sizeMap[size] * 3}px`,
            animationDuration: '3s'
          }} 
        />
        <div 
          className="rounded-full shadow-lg border border-white/20" 
          style={{ 
            backgroundColor: color, 
            width: `${sizeMap[size]}px`, 
            height: `${sizeMap[size]}px` 
          }} 
        />
        <span className="absolute mt-10 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest bg-black/80 px-2 py-1 border border-white/10 backdrop-blur-sm">
          {label}
        </span>
      </div>
    </div>
  );
}

export default MovementMap;
