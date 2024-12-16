import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
}

export function PricingTier({ name, price, description, features }: PricingTierProps) {
  return (
    <Card>
      <CardHeader>
        <div>
          <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-yellow-100 text-yellow-600">
            {name}
          </h3>
        </div>
        <div className="mt-4 flex items-baseline text-6xl font-extrabold">
          {price}
          {name !== 'Enterprise' && <span className="ml-1 text-2xl font-medium text-gray-500">/mo</span>}
        </div>
        <p className="mt-5 text-lg text-gray-500">{description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-start">
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-green-500" aria-hidden="true" />
              </div>
              <p className="ml-3 text-base text-gray-700">{feature}</p>
            </li>
          ))}
        </ul>
        <Button className="w-full">
          {name === 'Enterprise' ? 'Contact us' : 'Get started'}
        </Button>
      </CardContent>
    </Card>
  );
}