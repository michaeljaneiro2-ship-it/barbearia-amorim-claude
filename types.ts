
// Add React import to resolve the 'Cannot find namespace React' error when referencing React.ReactNode.
import React from 'react';

export interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
}

export interface PortfolioItem {
  id: number;
  imageUrl: string;
  alt: string;
}