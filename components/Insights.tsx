
import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, BookOpen, ArrowUpRight } from 'lucide-react';
import { LATEST_INSIGHTS } from '../constants';

const Insights: React.FC = () => {
  return (
    <section id="insights" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold text-[#D4AF37] tracking-[0.3em] uppercase mb-4 block">News & Analysis</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold">Latest <span className="italic font-normal">Insights</span></h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/60 max-w-sm mb-2"
          >
            Stay informed with Alex's deep dives into national policy, grassroots movements, and the path to a New Nigeria.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {LATEST_INSIGHTS.map((insight, idx) => {
            const isLarge = idx === 0 || idx === 3;
            return (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, filter: 'blur(5px)', y: 30 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`group relative overflow-hidden rounded-sm border border-white/10 ${
                  isLarge ? 'md:col-span-7' : 'md:col-span-5'
                }`}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={insight.imageUrl} 
                    alt={insight.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/20 to-transparent p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#008751] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-wider">
                      {insight.category}
                    </span>
                    <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">
                      {insight.date}
                    </span>
                    <div className="ml-auto">
                      {insight.type === 'thread' ? (
                        <Twitter className="w-4 h-4 text-white/40" />
                      ) : (
                        <BookOpen className="w-4 h-4 text-white/40" />
                      )}
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:text-[#D4AF37] transition-colors">
                    {insight.title}
                  </h3>
                  
                  <p className="text-sm text-white/60 mb-6 line-clamp-2">
                    {insight.summary}
                  </p>
                  
                  <button className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] group/btn">
                    READ {insight.type.toUpperCase()} 
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <button className="px-12 py-5 border border-white/10 hover:bg-white/5 transition-all text-sm font-bold tracking-widest">
            EXPLORE FULL ARCHIVE
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Insights;
