import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // A dark, textured background image URL that resembles the reference image.
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2070&auto=format&fit=crop';
  
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Overlay to darken the background image and enhance text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      {/* Container for content, layered above the overlay */}
      <div className="relative z-10 flex flex-col flex-grow">
        <Header onNavigate={handleNavigate} />
        {currentPage === 'home' && <Hero />}
        {currentPage === 'about' && <About />}
        {currentPage === 'work' && <Work />}
        {currentPage === 'contact' && <Contact onNavigate={handleNavigate} />}
      </div>
    </div>
  );
};

export default App;