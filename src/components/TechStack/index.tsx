import React from 'react';
import { TechCard } from './TechCard';
import { technologies } from './techData';

export function TechStack() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Tech Stack
          </h2>
          <p className="mt-4 text-gray-400">Powered by cutting-edge technologies</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
