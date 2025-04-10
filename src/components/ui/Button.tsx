import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
}

export function Button({ 
  variant = 'primary', 
  size = 'md',
  className, 
  children, 
  icon,
  iconPosition = 'right',
  disabled,
  loading = false,
  fullWidth = false,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-secondary-900',
        // Variants
        variant === 'primary' && 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-400 dark:bg-primary-600 dark:hover:bg-primary-700',
        variant === 'secondary' && 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus:ring-secondary-300 dark:bg-secondary-800 dark:text-secondary-100 dark:hover:bg-secondary-700',
        variant === 'outline' && 'border border-secondary-300 bg-transparent text-secondary-900 hover:bg-secondary-50 focus:ring-secondary-300 dark:border-secondary-700 dark:text-secondary-100 dark:hover:bg-secondary-800',
        variant === 'ghost' && 'bg-transparent text-secondary-900 hover:bg-secondary-100 focus:ring-secondary-300 dark:text-secondary-100 dark:hover:bg-secondary-800',
        // Sizes
        size === 'sm' && 'h-8 px-3 text-xs',
        size === 'md' && 'h-10 px-4 text-sm',
        size === 'lg' && 'h-12 px-5 text-base',
        // Full width
        fullWidth && 'w-full',
        // Disabled
        (disabled || loading) && 'opacity-60 cursor-not-allowed pointer-events-none',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {icon && iconPosition === 'left' && !loading && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && !loading && <span className="ml-2">{icon}</span>}
    </button>
  );
}