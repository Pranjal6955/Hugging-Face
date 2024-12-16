import React from 'react';
import { Building2, Shield, Users, Zap } from 'lucide-react';

export function Enterprise() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-yellow-500 font-semibold tracking-wide uppercase">Enterprise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Enterprise-grade AI solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Get the support and infrastructure you need to successfully adopt AI in your organization.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-yellow-500 rounded-md shadow-lg">
                      <Shield className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Enterprise Security</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Advanced security features including SSO, audit logs, and custom deployment options.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-yellow-500 rounded-md shadow-lg">
                      <Users className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Dedicated Support</h3>
                  <p className="mt-5 text-base text-gray-500">
                    24/7 support from our expert team and dedicated account management.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-yellow-500 rounded-md shadow-lg">
                      <Zap className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Custom Solutions</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Tailored AI solutions and infrastructure designed for your specific needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}