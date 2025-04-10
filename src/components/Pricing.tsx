import React from 'react';
import { PricingTier } from './pricing/PricingTier';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started with AI',
    features: [
      'Access to public models',
      'Community support',
      'Basic API access',
      'Limited inference requests',
    ],
  },
  {
    name: 'Pro',
    price: '$49',
    description: 'For professionals and small teams',
    features: [
      'Everything in Free',
      'Priority support',
      'Advanced API access',
      'Unlimited inference requests',
      'Team collaboration tools',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations with custom needs',
    features: [
      'Everything in Pro',
      'Custom model deployment',
      'Dedicated support',
      'SLA guarantees',
      'Custom integrations',
      'Security features',
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-secondary-50 dark:bg-secondary-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg leading-6 font-semibold text-primary-500 uppercase tracking-wider">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-secondary-900 dark:text-white sm:text-4xl lg:text-5xl">
            The right price for you
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-secondary-600 dark:text-secondary-300">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
        </div>
        
        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {tiers.map((tier) => (
            <PricingTier key={tier.name} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
}