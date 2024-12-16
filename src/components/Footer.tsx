import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" aria-hidden="true" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; {currentYear} Hugging Face. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}