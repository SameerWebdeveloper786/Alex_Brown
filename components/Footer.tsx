
import React from 'react';
import { Twitter, Instagram, Linkedin, MessageCircle, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <h2 className="font-serif text-5xl md:text-7xl font-bold mb-10 text-white">
              Fixing Nigeria is a <span className="text-gold italic font-normal">Joint Task.</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 text-[11px] font-black tracking-widest uppercase hover:bg-white hover:text-[#121212] transition-all">
                Follow on X (Twitter) <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] px-8 py-4 text-[11px] font-black tracking-widest uppercase hover:bg-[#25D366] hover:text-white transition-all">
                WhatsApp Channel <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8">HUB</h5>
            <ul className="space-y-4">
              {['The Mission', 'Insights', 'Action Map', 'Volunteer'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm font-medium tracking-wide flex items-center group">
                    {item} <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8">SOCIALS</h5>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#121212] hover:border-transparent transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-white/40 text-[10px] leading-relaxed font-bold tracking-widest uppercase">
              LAGOS, NIGERIA<br />
              GLOBAL OUTREACH
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[9px] font-black tracking-[0.5em] text-white/20 uppercase">
          <p>© 2024 ALEX BROWN. STATESMANSHIP REDEFINED.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">MEDIA KIT</a>
          </div>
        </div>
        
        <div className="absolute -bottom-16 -right-16 text-white/5 select-none pointer-events-none">
          <h1 className="text-[20vw] font-serif font-black tracking-tighter leading-none">ALEX</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
