import React, { useState } from 'react';
import { Pricing } from '../components/Pricing';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Check, HelpCircle } from 'lucide-react';

export function PricingPage() {
  const [showAnnual, setShowAnnual] = useState(true);
  
  const faqs = [
    {
      question: "What happens when I reach my usage limits?",
      answer: "You'll receive notifications when you approach your limits. If you exceed them, you can upgrade your plan or pay for additional usage at our standard rates."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. For monthly plans, it will end at the current billing period. For annual plans, you can request a prorated refund for the unused portion."
    },
    {
      question: "Do you offer discounts for academic or non-profit organizations?",
      answer: "Yes, we offer special pricing for academic institutions, non-profits, and startups. Please contact our sales team for more information."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and wire transfers for Enterprise plans."
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-secondary-900 dark:text-white sm:text-5xl">
            Simple, <span className="text-primary-500">Transparent</span> Pricing
          </h1>
          <p className="mt-4 text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
            Choose the plan that's right for you. All plans include access to our community features.
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="relative flex bg-secondary-100 dark:bg-secondary-800 rounded-full p-1">
              <button
                className={`relative w-32 py-2 text-sm font-medium rounded-full transition-all ${
                  showAnnual ? 'bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white shadow-sm' : 'text-secondary-700 dark:text-secondary-300'
                }`}
                onClick={() => setShowAnnual(true)}
              >
                Annual (20% off)
              </button>
              <button
                className={`relative w-32 py-2 text-sm font-medium rounded-full transition-all ${
                  !showAnnual ? 'bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white shadow-sm' : 'text-secondary-700 dark:text-secondary-300'
                }`}
                onClick={() => setShowAnnual(false)}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>
      
        <Pricing />
        
        {/* Comparison Table */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-secondary-900 dark:text-white text-center mb-8">
            Compare Plans
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-secondary-200 dark:divide-secondary-700">
              <thead>
                <tr>
                  <th className="py-3.5 px-4 text-left text-sm font-semibold text-secondary-900 dark:text-white">Features</th>
                  <th className="py-3.5 px-4 text-center text-sm font-semibold text-secondary-900 dark:text-white">Free</th>
                  <th className="py-3.5 px-4 text-center text-sm font-semibold text-secondary-900 dark:text-white bg-primary-50/30 dark:bg-primary-900/10">Pro</th>
                  <th className="py-3.5 px-4 text-center text-sm font-semibold text-secondary-900 dark:text-white">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary-200 dark:divide-secondary-700">
                <tr>
                  <td className="py-3 px-4 text-sm text-secondary-800 dark:text-secondary-300">API Calls</td>
                  <td className="py-3 px-4 text-center text-sm text-secondary-800 dark:text-secondary-300">10K / month</td>
                  <td className="py-3 px-4 text-center text-sm text-secondary-800 dark:text-secondary-300 bg-primary-50/30 dark:bg-primary-900/10">100K / month</td>
                  <td className="py-3 px-4 text-center text-sm text-secondary-800 dark:text-secondary-300">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-secondary-800 dark:text-secondary-300">Model Hosting</td>
                  <td className="py-3 px-4 text-center text-sm text-secondary-800 dark:text-secondary-300">3 models</td>
                  <td className="py-3 px-4 text-center text-sm text-secondary-800 dark:text-secondary-300 bg-primary-50/30 dark:bg-primary-900/10">10 models</td>
                  <td className="py-3 px-4 text-center text-sm text-secondary-800 dark:text-secondary-300">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-secondary-800 dark:text-secondary-300">Team Members</td>
                  <td className="py-3 px-4 text-center text-sm text-secondary-800 dark:text-secondary-300">1</td>
                  <td className="py-3 px-4 text-center text-sm text-secondary-800 dark:text-secondary-300 bg-primary-50/30 dark:bg-primary-900/10">5</td>
                  <td className="py-3 px-4 text-center text-sm text-secondary-800 dark:text-secondary-300">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-secondary-800 dark:text-secondary-300">Support</td>
                  <td className="py-3 px-4 text-center text-sm text-secondary-800 dark:text-secondary-300">Community</td>
                  <td className="py-3 px-4 text-center text-sm text-secondary-800 dark:text-secondary-300 bg-primary-50/30 dark:bg-primary-900/10">Email</td>
                  <td className="py-3 px-4 text-center text-sm text-secondary-800 dark:text-secondary-300">Dedicated</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-secondary-800 dark:text-secondary-300">Custom Models</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      <div className="h-5 w-5 rounded-full bg-secondary-200 dark:bg-secondary-700" />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center bg-primary-50/30 dark:bg-primary-900/10">
                    <div className="flex justify-center">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-secondary-800 dark:text-secondary-300">SSO</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      <div className="h-5 w-5 rounded-full bg-secondary-200 dark:bg-secondary-700" />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center bg-primary-50/30 dark:bg-primary-900/10">
                    <div className="flex justify-center">
                      <div className="h-5 w-5 rounded-full bg-secondary-200 dark:bg-secondary-700" />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* FAQs */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-secondary-900 dark:text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <HelpCircle className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-secondary-900 dark:text-white mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-secondary-600 dark:text-secondary-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-secondary-600 dark:text-secondary-300 mb-8">
            Contact our sales team for more information about our plans and custom solutions.
          </p>
          <Button size="lg">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
}
