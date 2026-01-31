import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'முகப்பு', id: 'top' }, 
    { name: 'வரலாறு', id: 'history' }, 
    { name: 'தரவுகள்', id: 'impact' }, 
    { name: 'தீர்வுகள்', id: 'solution' }, 
    { name: 'கொள்கை', id: 'policy' }, 
    { name: 'சமூகம்', id: 'community' },
    { name: 'Developer', id: 'developer' }, // Added Developer
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-forest-900 border-b border-gray-100' 
          : 'bg-transparent py-6 text-white'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 font-bold text-xl cursor-pointer font-serif"
          onClick={() => scrollToSection('top')}
        >
          <Leaf size={24} className={isScrolled ? "text-forest-700" : "text-green-400"} />
          <span>ஆனைமலை மீட்பு</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-sans">
          {navLinks.map((link) => (
            <button 
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-semibold tracking-wide hover:text-orange-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-gray-100'
              } ${link.id === 'developer' ? 'text-green-500 font-bold' : ''}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg ${
              isScrolled 
                ? 'bg-forest-800 text-white hover:bg-forest-900' 
                : 'bg-white text-forest-900 hover:bg-gray-100'
            }`}
          >
            பங்களிக்க
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl md:hidden flex flex-col p-4 animate-fade-in-up text-gray-900">
          {navLinks.map((link) => (
            <button 
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`py-4 text-left font-semibold border-b border-gray-50 last:border-none hover:text-forest-700 hover:bg-gray-50 px-2 rounded-lg transition-colors ${link.id === 'developer' ? 'text-forest-800 font-bold underline' : ''}`}
            >
              {link.name}
            </button>
          ))}
          <button className="mt-4 py-3 bg-forest-800 text-white rounded-lg font-bold">
            பங்களிக்க
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;