import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

export function Card({ className, children, hover = true }: CardProps) {
  return (
    <div className={cn(
      "card",
      hover && "transform transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: CardProps) {
  return (
    <div className={cn(
      "px-6 py-8 sm:p-10 sm:pb-6",
      "border-b border-secondary-100 dark:border-secondary-700",
      className
    )}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children }: CardProps) {
  return (
    <h3 className={cn(
      "text-lg font-semibold text-secondary-900 dark:text-secondary-100",
      className
    )}>
      {children}
    </h3>
  );
}

export function CardDescription({ className, children }: CardProps) {
  return (
    <p className={cn(
      "mt-2 text-sm text-secondary-500 dark:text-secondary-400",
      className
    )}>
      {children}
    </p>
  );
}

export function CardContent({ className, children }: CardProps) {
  return (
    <div className={cn(
      "px-6 pt-6 pb-8 bg-secondary-50 dark:bg-secondary-800/50",
      className
    )}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children }: CardProps) {
  return (
    <div className={cn(
      "px-6 py-4 border-t border-secondary-100 dark:border-secondary-700",
      "bg-secondary-50/50 dark:bg-secondary-800/30",
      className
    )}>
      {children}
    </div>
  );
}