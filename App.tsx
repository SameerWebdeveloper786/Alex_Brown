
import React from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Insights from './components/Insights';
import MovementMap from './components/MovementMap';
import Mission from './components/Mission';
import CommunityCTA from './components/CommunityCTA';
import MediaSection from './components/MediaSection';
import Footer from './components/Footer';

/**
 * Alex Brown Portfolio - Digital Statesman Version
 * 8 distinct sections with high-premium styling and smooth entrance animations.
 */
const App: React.FC = () => {
  return (
    <main className="relative bg-[#121212] min-h-screen selection:bg-[#008751] selection:text-white">
      {/* 1. Global Preloader with Gold Reveal */}
      <Preloader />
      
      {/* 2. Sticky Premium Navigation */}
      <Navbar />
      
      {/* 3. Hero Section (The Voice) */}
      <Hero />
      
      {/* 4. Impact Stats (The Reach) */}
      <Stats />
      
      {/* 5. Latest Insights (Magazine Grid) */}
      <Insights />
      
      {/* 6. The Movement Map (Obidient Activity) */}
      <MovementMap />
      
      {/* 7. Mission & Vision (The Philosophy) */}
      <Mission />
      
      {/* 8. Media Section (Interviews & Dialogue) */}
      <MediaSection />
      
      {/* 9. Community Call-to-Action (Recruitment) */}
      <CommunityCTA />
      
      {/* 10. Final Footer & Social Hub */}
      <Footer />
    </main>
  );
};

export default App;
