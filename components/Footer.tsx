
import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const BUK_LINK = "https://buk.pt/barbearia-amorim?utm_source=website&utm_medium=website&utm_content=website";
  const PHONE_NUMBER = "+351912735577";

  return (
    <footer className="bg-dark text-white pt-24 pb-12 relative overflow-hidden">
      {/* Barber stripe pattern overlay */}
      <div className="absolute top-0 left-0 w-full h-1 barber-pattern"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img 
                src="https://imagizer.imageshack.com/img923/6327/BY1FmD.png" 
                alt="Logo Barbearia Amorim" 
                className="h-16 w-auto object-contain" 
              />
            </div>
            <p className="text-white/60 text-lg max-w-xs leading-relaxed text-center md:text-left mx-auto md:mx-0">
              Onde toda a gente se sente em casa. Mais que uma barbearia, o teu ponto de encontro em Arcozelo.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://instagram.com/barbearia_amorim__" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-dark transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-dark transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Col */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold uppercase text-gold mb-8 tracking-wider">Contactos</h3>
            <ul className="space-y-6 flex flex-col items-center md:items-start">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0" />
                <span className="text-white/60">
                  R. das Calçadas 559, 4750-123<br />
                  Arcozelo, Barcelos, Portugal
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-gold flex-shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="text-white/60 hover:text-white">{PHONE_NUMBER.replace("+351", "+351 ")}</a>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-gold flex-shrink-0" />
                <span className="text-white/60">
                  Segunda: 14:00 - 20:00<br />
                  Terça a Sábado: 08:00 - 20:00<br />
                  Domingo: Encerrado
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2026 Barbearia Amorim. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold">Política de Privacidade</a>
            <a href="#" className="hover:text-gold">Termos & Condições</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
