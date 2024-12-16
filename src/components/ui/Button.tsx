import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md text-sm font-medium transition-colors',
        variant === 'primary' && 'bg-yellow-500 hover:bg-yellow-600 text-white',
        variant === 'secondary' && 'text-gray-900 hover:text-gray-700',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}