
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2000" 
          alt="Caminhões Seminovos Via" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#004080]/90 to-black/40"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-white mt-16">
        <div className="max-w-3xl fade-in visible">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500 text-xs font-bold tracking-wider mb-6 animate-pulse">
            FROTA PRÓPRIA REVISADA
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Caminhões com a <span className="text-blue-400">procedência</span> de quem opera o Brasil.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
            Na Via Seminovos você adquire veículos diretamente da frota de um dos maiores grupos logísticos do país. Caminhões com manutenção rigorosa e prontos para o trabalho pesado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onCtaClick}
              className="bg-white text-[#004080] px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-105"
            >
              TENHO INTERESSE
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
