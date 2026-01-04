
import React from 'react';

const testimonials = [
  {
    name: "Ricardo Oliveira",
    text: "Comprei meu primeiro seminovo na Via e a experiência foi impecável. Carro com cheiro de novo e atendimento nota 10.",
    role: "Proprietário de Corolla",
    image: "https://i.pravatar.cc/150?u=ricardo"
  },
  {
    name: "Mariana Silva",
    text: "O que mais me impressionou foi a transparência. Me mostraram todo o histórico do veículo. Recomendo de olhos fechados!",
    role: "Proprietária de Jeep Compass",
    image: "https://i.pravatar.cc/150?u=mariana"
  },
  {
    name: "Carlos Eduardo",
    text: "Melhor avaliação do meu usado na troca. Consegui fechar negócio rápido e saí dirigindo minha SUV dos sonhos.",
    role: "Proprietário de Hilux",
    image: "https://i.pravatar.cc/150?u=carlos"
  }
];

const SocialProof: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 fade-in">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#004080] mb-6">Quem já comprou, aprova.</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Nossa maior conquista é a satisfação dos nossos clientes. Conheça as histórias de quem já encontrou o carro ideal na Via Seminovos.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-[#004080]">4.9/5 no Google</span>
          </div>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 fade-in">
          {testimonials.map((t, i) => (
            <div key={i} className={`bg-gray-50 p-6 rounded-2xl border border-gray-100 ${i === 2 ? 'md:col-span-2' : ''}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-blue-600 font-medium uppercase">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
