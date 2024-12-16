import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-lg overflow-hidden",
      className
    )}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: CardProps) {
  return (
    <div className={cn("px-6 py-8 sm:p-10 sm:pb-6", className)}>
      {children}
    </div>
  );
}

export function CardContent({ className, children }: CardProps) {
  return (
    <div className={cn("px-6 pt-6 pb-8 bg-gray-50", className)}>
      {children}
    </div>
  );
}