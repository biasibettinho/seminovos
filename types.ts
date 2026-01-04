
import React from 'react';

export interface FormData {
  nome: string;
  telefone: string;
  estado: string;
}

export interface Testimonial {
  name: string;
  text: string;
  role: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  // Fix: Added React import to satisfy the React.ReactNode namespace requirement
  icon: React.ReactNode;
}
