import React from 'react';
import { Server, Cloud, Database, Code2, Blocks, Globe } from 'lucide-react';

export function Services() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="mt-4 text-gray-400">
            Comprehensive solutions for your digital transformation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Server />}
            title="Enterprise Development"
            description="Custom Java & Angular solutions built for scale and performance"
          />
          <ServiceCard
            icon={<Cloud />}
            title="Cloud Solutions"
            description="AWS architecture design, migration, and optimization"
          />
          <ServiceCard
            icon={<Database />}
            title="Big Data Processing"
            description="Apache Kafka implementation for real-time data streaming"
          />
          <ServiceCard
            icon={<Code2 />}
            title="Web Development"
            description="Modern web applications using React and JavaScript"
          />
          <ServiceCard
            icon={<Blocks />}
            title="Blockchain Solutions"
            description="Web3 development and smart contract implementation"
          />
          <ServiceCard
            icon={<Globe />}
            title="Digital Consulting"
            description="Strategic technology advisory and roadmap planning"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="relative group">
      <div
        className="relative p-6 rounded-xl border border-white/[0.08] bg-black/20 hover:bg-black/30 transition-colors duration-300">
        <div className="service-card relative p-6 rounded-xl transition-all duration-300">
          <div className="text-blue-400 mb-4 transform group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-400 group-hover:text-gray-300">
            {description}
          </p>
        </div>

        <div
          className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"/>
      </div>
    </div>
      );
      }
