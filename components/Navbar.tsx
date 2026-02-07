
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Trabalhos', href: '#portfolio' },
    { name: 'Testemunhos', href: '#testemunhos' },
  ];

  const BUK_LINK = "https://buk.pt/barbearia-amorim?utm_source=website&utm_medium=website&utm_content=website";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-center md:justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="https://imagizer.imageshack.com/img923/6327/BY1FmD.png" 
            alt="Logo Barbearia Amorim" 
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-gold transition-colors text-sm font-semibold uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href={BUK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold/90 text-dark px-6 py-2 rounded-lg font-bold text-sm uppercase transition-all hover:-translate-y-1 shadow-md"
          >
            Marcar Agora
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
