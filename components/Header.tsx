
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onCtaClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://viagroup.com.br/assets/via_seminovos-35c3d3a6.png" 
            alt="Via Seminovos Logo" 
            className={`h-12 w-auto transition-all ${isScrolled ? '' : 'brightness-0 invert'}`}
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Vantagens</a>
          <button 
            onClick={onCtaClick}
            className="bg-[#004080] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            TENHO INTERESSE
          </button>
        </nav>

        <button 
          onClick={onCtaClick}
          className="md:hidden bg-[#004080] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg"
        >
          INTERESSE
        </button>
      </div>
    </header>
  );
};

export default Header;
