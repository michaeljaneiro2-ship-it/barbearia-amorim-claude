
import React from 'react';
import { Calendar, Phone } from 'lucide-react';

const Booking: React.FC = () => {
  const BUK_LINK = "https://buk.pt/barbearia-amorim?utm_source=website&utm_medium=website&utm_content=website";
  const PHONE_NUMBER = "+351912735577";

  return (
    <section className="py-24 bg-gold relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
        <Calendar className="w-64 h-64" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 uppercase">
          Marca o Teu Corte em 2 Minutos
        </h2>
        <p className="text-dark/80 text-xl mb-12 font-medium">
          Escolhe o dia, a hora e o barbeiro. Sem esperas, sem complicações.
        </p>

        <div className="flex flex-col items-center gap-6">
          <a
            href={BUK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark text-white hover:bg-dark/90 px-12 py-6 rounded-2xl font-bold text-2xl uppercase shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-4 group"
          >
            <Calendar className="w-8 h-8 text-gold animate-pulse" />
            Agendar Corte
          </a>
          
          <div className="flex items-center gap-3 text-dark/70 font-semibold">
            <span>Preferes ligar?</span>
            <a href={`tel:${PHONE_NUMBER}`} className="text-dark hover:underline flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +351 912 735 577
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
