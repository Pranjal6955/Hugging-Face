import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Enterprise } from './components/Enterprise';
import { Posts } from './components/Posts';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900 transition-colors duration-300">
      <Header />
      <div className="pt-16">
        <Hero />
        <Features />
        <Enterprise />
        <Posts />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}