
import React from 'react';
import { Scissors, Star } from 'lucide-react';
import { Service, Testimonial, PortfolioItem } from './types';

// CSS filter to convert black to #D4AF37 (Gold)
const goldFilter = { filter: 'invert(72%) sepia(35%) saturate(836%) hue-rotate(1deg) brightness(92%) contrast(87%)' };

export const SERVICES: Service[] = [
  {
    id: 1,
    name: "Corte de Cabelo",
    description: "Corte clássico ou moderno ao teu estilo",
    price: "€10",
    icon: <Scissors className="w-10 h-10 text-gold" />,
  },
  {
    id: 2,
    name: "Corte Degradê",
    description: "Degradê profissional com acabamento perfeito",
    price: "€12",
    icon: <img src="https://res.cloudinary.com/dp1vz8hho/image/upload/v1769709319/hairstyle_1_gjnzse.png" className="w-10 h-10 object-contain" style={goldFilter} alt="Ícone Corte Degradê" />,
  },
  {
    id: 3,
    name: "Barba",
    description: "Aparar e moldar a barba com precisão",
    price: "€5",
    icon: <img src="https://res.cloudinary.com/dp1vz8hho/image/upload/v1769709319/hairstyle_insfam.png" className="w-10 h-10 object-contain" style={goldFilter} alt="Ícone Barba" />,
  },
  {
    id: 4,
    name: "Corte Degradê e Barba",
    description: "Combo completo para ficares impecável",
    price: "€15",
    icon: <Star className="w-10 h-10 text-gold" />,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Tiago Sá",
    rating: 5,
    text: "Excelente profissionais, espaço acolhedor e com uma proximidade fantástica com o cliente",
  },
  {
    id: 2,
    name: "Francisco Rodrigues",
    rating: 5,
    text: "Bom ambiente entre profissionais e utilizadores, bastante agradável.",
  },
  {
    id: 3,
    name: "Micael Dias",
    rating: 5,
    text: "Trabalho fantástico. Simpatia e profissionalismo acima de tudo. Recomendo.",
  },
  {
    id: 4,
    name: "Paulo Vilas Boas",
    rating: 5,
    text: "Simpatia e profissionalismo do staff! Uma casa de família onde te vais sentir bem sempre com boa disposição",
  },
  {
    id: 5,
    name: "Jorge Amorim",
    rating: 5,
    text: "Foi a minha primeira vez nesta barbearia mas não será a última. Adorei o profissionalismo do barbeiro. Corte feito com precisão e ao detalhe. Recomendo vivamente.",
  },
];

// Portfolio images optimized with Cloudinary transformations
export const PORTFOLIO: PortfolioItem[] = [
  { 
    id: 1, 
    imageUrl: "https://res.cloudinary.com/dp1vz8hho/image/upload/c_scale,q_auto:good,f_auto,w_800/v1769710213/166375916_897661667738592_1738628129124270690_n_gfzhek.jpg", 
    alt: "Corte de cabelo profissional masculino na Barbearia Amorim em Barcelos" 
  },
  { 
    id: 2, 
    imageUrl: "https://res.cloudinary.com/dp1vz8hho/image/upload/c_scale,q_auto:good,f_auto,w_800/v1769710213/266243971_901784840531122_830537519241150567_n_gefgpr.jpg", 
    alt: "Estilo e design de corte degradê realizado na Barbearia Amorim" 
  },
  { 
    id: 3, 
    imageUrl: "https://res.cloudinary.com/dp1vz8hho/image/upload/c_scale,q_auto:good,f_auto,w_800/v1769710213/82168292_177235907039138_8453032306142704429_n_xlzmcn.jpg", 
    alt: "Acabamento superior e barba aparada na Barbearia Amorim Barcelos" 
  },
];

// Instagram feed - replace with real images from Instagram when available
export const INSTAGRAM_PHOTOS = [
    "https://picsum.photos/400/400?random=10",
    "https://picsum.photos/400/400?random=11",
    "https://picsum.photos/400/400?random=12",
    "https://picsum.photos/400/400?random=13",
    "https://picsum.photos/400/400?random=14",
    "https://picsum.photos/400/400?random=15",
];
