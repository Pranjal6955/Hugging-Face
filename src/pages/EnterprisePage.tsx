import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Shield, Users, Zap, MessageCircle, CreditCard, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Enterprise Security',
    description: 'Advanced security features including SSO, audit logs, and custom deployment options.',
    icon: Shield,
  },
  {
    name: 'Dedicated Support',
    description: '24/7 support from our expert team and dedicated account management.',
    icon: Users,
  },
  {
    name: 'Custom Solutions',
    description: 'Tailored AI solutions and infrastructure designed for your specific needs.',
    icon: Zap,
  },
  {
    name: 'Priority Access',
    description: 'First access to new models, capabilities, and features.',
    icon: MessageCircle,
  },
  {
    name: 'Flexible Billing',
    description: "Custom pricing plans that scale with your organization's needs.",
    icon: CreditCard,
  },
  {
    name: 'Compliance',
    description: 'Meet regulatory requirements with our enterprise-grade compliance features.',
    icon: Lock,
  },
];

const companies = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png' },
];

export function EnterprisePage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-white to-secondary-50 dark:from-secondary-900 dark:to-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1 
            className="text-4xl font-extrabold text-secondary-900 dark:text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="block">Enterprise-grade</span>
            <span className="block text-primary-500 animate-text-shimmer">AI solutions</span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get the support and infrastructure you need to successfully adopt AI in your organization.
          </motion.p>
          <motion.div 
            className="mt-10 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </motion.div>
        </div>
        
        {/* Trusted by section */}
        <div className="py-12 border-y border-secondary-200 dark:border-secondary-700 mb-16">
          <p className="text-center text-lg font-medium text-secondary-600 dark:text-secondary-400 mb-6">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {companies.map(company => (
              <div key={company.name} className="h-8 md:h-12">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="h-full object-contain opacity-60 dark:invert dark:opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white">
              Enterprise Features
            </h2>
            <p className="mt-4 text-lg text-secondary-600 dark:text-secondary-300">
              Everything you need to deploy AI at scale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-4">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-secondary-900 dark:text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-secondary-600 dark:text-secondary-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-secondary-900 dark:bg-secondary-800 rounded-2xl p-8 md:p-12 mt-16">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Ready to get started with Enterprise?</h2>
              <p className="mt-3 text-secondary-300">
                Talk to our sales team to find the right solution for your organization.
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:ml-8">
              <Button size="lg" className="w-full md:w-auto">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
