import React from 'react';
import { Box, Brain, Database, Globe } from 'lucide-react';

const features = [
  {
    name: 'Models',
    description: 'Access thousands of machine learning models for various tasks.',
    icon: Brain,
  },
  {
    name: 'Datasets',
    description: 'Find and share machine learning datasets with the community.',
    icon: Database,
  },
  {
    name: 'Spaces',
    description: 'Create and discover machine learning apps in minutes.',
    icon: Box,
  },
  {
    name: 'Community',
    description: 'Join a global community of ML practitioners and researchers.',
    icon: Globe,
  },
];

export function Features() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-yellow-500 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for AI
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Access state-of-the-art machine learning models, datasets, and apps.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}