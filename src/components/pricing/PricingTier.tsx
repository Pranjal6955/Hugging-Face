import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  className?: string;
}

export function PricingTier({ name, price, description, features, className }: PricingTierProps) {
  const isPopular = name === 'Pro';
  const isEnterprise = name === 'Enterprise';

  return (
    <Card className={cn(
      "flex flex-col h-full overflow-hidden relative",
      isPopular && "border-primary-400 dark:border-primary-500 shadow-md ring-2 ring-primary-400 dark:ring-primary-500",
      className
    )}>
      {isPopular && (
        <div className="absolute top-2 right-2 z-10">
          <span className="inline-flex items-center px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
            Popular
          </span>
        </div>
      )}
      
      <CardHeader className={cn(
        "text-center px-4 md:px-6 pt-6",
        isPopular && "bg-primary-50/50 dark:bg-primary-900/10"
      )}>
        <h3 className="inline-flex px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
          {name}
        </h3>
        <div className="mt-4 flex flex-wrap items-baseline justify-center">
          <span className="text-4xl md:text-6xl font-extrabold break-words">
            {price}
          </span>
          {!isEnterprise && <span className="ml-1 text-xl md:text-2xl font-medium text-secondary-500 dark:text-secondary-400">/mo</span>}
        </div>
        <p className="mt-3 text-sm md:text-lg text-secondary-600 dark:text-secondary-300 line-clamp-2 hover:line-clamp-none">
          {description}
        </p>
      </CardHeader>
      
      <CardContent className="flex-grow space-y-4 px-4 md:px-6">
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start">
              <div className="flex-shrink-0 pt-1">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 dark:text-green-400" aria-hidden="true" />
              </div>
              <p className="ml-3 text-sm md:text-base text-secondary-700 dark:text-secondary-300 break-words">
                {feature}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pt-4 pb-6 px-4 md:px-6">
        <Button
          className="w-full"
          variant={isPopular ? "primary" : "secondary"}
        >
          {isEnterprise ? 'Contact us' : 'Get started'}
        </Button>
      </CardFooter>
    </Card>
  );
}