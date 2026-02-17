
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'Insights', href: '#insights' },
    { name: 'Movement Map', href: '#map' },
    { name: 'Join', href: '#newsletter' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#121212]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#008751] flex items-center justify-center font-bold text-white rounded-sm group-hover:bg-[#D4AF37] transition-colors">
            AB
          </div>
          <span className="font-serif text-xl font-bold tracking-tight">ALEX BROWN</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-[#D4AF37] transition-colors tracking-wide"
            >
              {link.name.toUpperCase()}
            </a>
          ))}
          <button className="bg-[#D4AF37] text-black px-6 py-2.5 text-sm font-bold hover:bg-white transition-all transform hover:-translate-y-0.5">
            SUPPORT
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-[#121212] border-b border-white/10 overflow-hidden"
      >
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium border-b border-white/5 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[#D4AF37] text-black w-full py-4 text-sm font-bold">
            SUPPORT
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
