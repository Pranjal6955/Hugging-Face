import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Github } from 'lucide-react';
import { ThemeToggle } from './ui/ThemeToggle';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Models', href: '/models' },
    { name: 'Datasets', href: '/datasets' },
    { name: 'Spaces', href: '/spaces' },
    { name: 'Enterprise', href: '/enterprise' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md shadow-sm border-b border-secondary-100 dark:border-secondary-800" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Nav Links */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-secondary-900 dark:text-white">
                🤗 <span className="animate-text-shimmer">Hugging Face</span>
              </Link>
            </div>
            <nav className="hidden md:ml-6 md:flex space-x-1">
              {navigation.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors",
                    location.pathname === item.href
                      ? "text-primary-500 dark:text-primary-400"
                      : "text-secondary-700 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400"
                  )}
                >
                  {item.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 scale-x-0 transition-transform origin-left",
                    location.pathname === item.href && "scale-x-100"
                  )}></span>
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Search, Theme Toggle, and Auth buttons */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-center md:ml-6 space-x-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-secondary-400" />
                  </div>
                  <input
                    type="text"
                    className="input pl-10 pr-3 py-1.5"
                    placeholder="Search"
                  />
                </div>
                
                <ThemeToggle />
                
                <a href="https://github.com" className="p-2 text-secondary-600 hover:text-secondary-900 dark:text-secondary-400 dark:hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                
                <Link to="/login">
                  <Button 
                    variant="ghost" 
                    size="sm"
                  >
                    Login
                  </Button>
                </Link>
                
                <Link to="/signup">
                  <Button
                    variant="primary"
                    size="sm"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <ThemeToggle className="mr-2" />
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 dark:text-secondary-400 dark:hover:text-white dark:hover:bg-secondary-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-secondary-900 border-b border-secondary-100 dark:border-secondary-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    location.pathname === item.href
                      ? "text-primary-500 bg-primary-50 dark:bg-primary-900/10 dark:text-primary-400"
                      : "text-secondary-900 dark:text-secondary-100 hover:bg-secondary-100 dark:hover:bg-secondary-800"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-secondary-400" />
                  </div>
                  <input
                    type="text"
                    className="input pl-10 w-full"
                    placeholder="Search"
                  />
                </div>
                <Link to="/login" className="w-full">
                  <Button variant="outline" className="w-full justify-center">Login</Button>
                </Link>
                <Link to="/signup" className="w-full">
                  <Button variant="primary" className="w-full justify-center">Sign Up</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}