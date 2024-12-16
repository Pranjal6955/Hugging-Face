import React from 'react';
import { Search, Menu, Github } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-900">🤗 Hugging Face</span>
            </div>
            <nav className="hidden md:ml-6 md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">Models</a>
              <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">Datasets</a>
              <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">Spaces</a>
              <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">Enterprise</a>
              <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">Pricing</a>
            </nav>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-center md:ml-6 space-x-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                    placeholder="Search"
                  />
                </div>
                <Github className="h-6 w-6 text-gray-700 hover:text-gray-900 cursor-pointer" />
                <button className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  Login
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Sign Up
                </button>
              </div>
            </div>
            <div className="flex md:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}