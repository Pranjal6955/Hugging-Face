import React from 'react';
import { Box, Brain, Database, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="features" className="section bg-secondary-50 dark:bg-secondary-900">
      <div className="container-custom">
        <motion.div 
          className="lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h2 className="text-base text-primary-500 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-secondary-900 dark:text-white sm:text-4xl">
            Everything you need for AI
          </p>
          <p className="mt-4 max-w-2xl text-xl text-secondary-500 dark:text-secondary-300 lg:mx-auto">
            Access state-of-the-art machine learning models, datasets, and apps.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <motion.div key={feature.name} className="relative" variants={itemVariants}>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 dark:bg-primary-600 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-secondary-900 dark:text-white">{feature.name}</p>
                <dd className="mt-2 ml-16 text-base text-secondary-500 dark:text-secondary-300">{feature.description}</dd>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}