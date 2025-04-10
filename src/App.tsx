import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageTransition } from './components/layout/PageTransition';
import { ModelsPage } from './pages/ModelsPage';
import { DatasetsPage } from './pages/DatasetsPage';
import { SpacesPage } from './pages/SpacesPage';
import { EnterprisePage } from './pages/EnterprisePage';
import { PricingPage } from './pages/PricingPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Enterprise } from './components/Enterprise';
import { Posts } from './components/Posts';
import { Pricing } from './components/Pricing';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Enterprise />
      <Posts />
      <Pricing />
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/models" element={<PageTransition><ModelsPage /></PageTransition>} />
        <Route path="/datasets" element={<PageTransition><DatasetsPage /></PageTransition>} />
        <Route path="/spaces" element={<PageTransition><SpacesPage /></PageTransition>} />
        <Route path="/enterprise" element={<PageTransition><EnterprisePage /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><PricingPage /></PageTransition>} />
        <Route path="/login" element={<PageTransition><LoginPage /></PageTransition>} />
        <Route path="/signup" element={<PageTransition><SignupPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-secondary-900 transition-colors duration-300">
        <Header />
        <div className="pt-16">
          <AnimatedRoutes />
          <Footer />
        </div>
      </div>
    </Router>
  );
}