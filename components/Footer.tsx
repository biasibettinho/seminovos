
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002b55] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex flex-col mb-6">
              <img 
                src="https://viagroup.com.br/assets/via_seminovos-35c3d3a6.png" 
                alt="Via Seminovos Logo" 
                className="h-12 w-fit brightness-0 invert"
              />
              <span className="text-[10px] font-bold tracking-widest uppercase text-blue-300 mt-2">
                GRUPO VIA
              </span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed max-w-xs">
              A Via Group é referência em soluções logísticas integradas, atuando no transporte de leite, ração e setor florestal. A Via Seminovos comercializa os veículos de nossa própria frota, garantindo excelência e procedência.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-blue-400/30 pb-2 inline-block">Navegação</h4>
            <ul className="space-y-4 text-blue-100 text-sm">
              <li><a href="https://viagroup.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sobre a Via Group</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Vantagens</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Frota Disponível</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-blue-400/30 pb-2 inline-block">Siga a Via Group</h4>
            <p className="text-blue-100 text-sm mb-4">Acompanhe nossa atuação no cenário logístico nacional e ofertas de seminovos.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.792 5 15.536 5H18V0h-3.977C10.038 0 9 2.105 9 5.125V8z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200">
          <p>© 2024 Via Seminovos - Uma empresa da Via Group. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0">Excelência em Soluções Logísticas e Revenda de Frota.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
