
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] overflow-x-hidden">
      <Header onCtaClick={openModal} />
      
      <main>
        <Hero onCtaClick={openModal} />
        
        <section id="features" className="py-20 bg-gray-50">
          <Features />
        </section>
      </main>

      <Footer />

      <LeadModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
