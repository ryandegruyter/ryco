import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/10 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              RyCo
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2">About</a>
              <a href="mailto:info@ryco.site" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90">
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2">About</a>
            <a href="mailto:info@ryco.site" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white block px-3 py-2 rounded-lg">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
