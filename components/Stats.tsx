
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Activity, MapPin, Calendar } from 'lucide-react';
import { IMPACT_STATS } from '../constants';

const Stats: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'MapPin': return <MapPin className="w-5 h-5" />;
      case 'Calendar': return <Calendar className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <section className="py-24 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {IMPACT_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.1), duration: 0.6 }}
              className="flex flex-col items-center md:items-start group"
            >
              <div className="w-12 h-12 bg-[#008751]/10 flex items-center justify-center rounded-sm text-[#D4AF37] mb-4 border border-white/5 group-hover:bg-[#008751]/20 transition-all">
                {getIcon(stat.icon)}
              </div>
              <h3 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-2 text-white">
                {stat.value}
              </h3>
              <p className="text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
