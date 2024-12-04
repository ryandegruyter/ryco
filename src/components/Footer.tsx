import React from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              RyCo
            </span>
            <p className="mt-4 text-gray-400">
              Transforming businesses through innovative technology solutions
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white">Home</a>
              <a href="#about" className="block text-gray-400 hover:text-white">About</a>
              <a href="mailto:info@ryco.site" className="block text-gray-400 hover:text-white">Contact</a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="info@ryco.site" className="text-gray-400 hover:text-white">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© {new Date().getFullYear()} RyCo NTT (BE 0739.756.444). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
