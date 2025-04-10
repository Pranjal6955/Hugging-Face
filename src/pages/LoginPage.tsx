import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Github, Twitter, Mail, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
      console.log('Login with:', email, password);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-secondary-50 dark:bg-secondary-900">
      <div className="max-w-md w-full space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link to="/" className="inline-flex text-3xl font-bold text-secondary-900 dark:text-white">
            🤗 <span className="animate-text-shimmer">Hugging Face</span>
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-secondary-900 dark:text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-secondary-600 dark:text-secondary-300">
            Or{' '}
            <Link to="/signup" className="font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
              create a new account
            </Link>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 space-y-6"
        >
          <div className="grid grid-cols-1 gap-3">
            <Button 
              className="w-full bg-[#24292F] hover:bg-[#24292F]/90 text-white flex items-center justify-center"
              icon={<Github className="mr-2 h-5 w-5" />}
            >
              Sign in with GitHub
            </Button>
            <Button 
              className="w-full bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white flex items-center justify-center"
              icon={<Twitter className="mr-2 h-5 w-5" />}
            >
              Sign in with Twitter
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-secondary-300 dark:border-secondary-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-secondary-50 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-300">
                Or continue with
              </span>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input w-full"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input w-full pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-secondary-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-secondary-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-secondary-300 dark:border-secondary-700 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-secondary-700 dark:text-secondary-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full"
                variant="primary"
                loading={isLoading}
                icon={!isLoading ? <Mail className="mr-2 h-5 w-5" /> : undefined}
              >
                Sign in
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
