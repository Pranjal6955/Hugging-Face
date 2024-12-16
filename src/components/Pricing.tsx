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
    <div className="bg-gray-900">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
              Pricing
            </h2>
            <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              The right price for you, whoever you are
            </p>
            <p className="text-xl text-gray-300">
              Choose the perfect plan for your needs. Always know what you'll pay.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-900"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <PricingTier key={tier.name} {...tier} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}