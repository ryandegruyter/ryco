import React from 'react';
import { Code2, Cloud, Database, Blocks } from 'lucide-react';
import { NetworkAnimation } from './NetworkAnimation/NetworkAnimation';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Space background with multiple star layers and cosmic elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/50 to-black">
        {/* Multiple star layers */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 3px),
            radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 2px),
            radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 3px),
            radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 3px)
          `,
          backgroundSize: '550px 550px, 350px 350px, 250px 250px, 150px 150px',
          backgroundPosition: '0 0, 40px 60px, 130px 270px, 70px 100px',
          animation: 'stars 120s linear infinite'
        }} />

        {/* Twinkling stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Planets */}
        <div className="absolute w-32 h-32 planet" style={{ top: '15%', right: '10%' }}>
          <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-800 opacity-30 blur-md" />
        </div>
        <div className="absolute w-20 h-20 planet" style={{ bottom: '20%', left: '15%', animationDelay: '-7s' }}>
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 opacity-20 blur-md" />
        </div>

        {/* Nebula effects */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-purple-500/5 blur-3xl" style={{ top: '20%', left: '30%' }} />
          <div className="absolute w-96 h-96 bg-blue-500/5 blur-3xl" style={{ bottom: '10%', right: '20%' }} />
        </div>
      </div>

      {/* Network Animation */}
      <div className="absolute inset-0 z-0 opacity-70">
        <NetworkAnimation />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Next-Gen IT Consulting
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming ideas into powerful solutions with cutting-edge technology
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <TechCard
              icon={<Code2 className="w-8 h-8"/>}
              title="Full-Stack"
              desc="Java & JavaScript"
              ariaLabel="Full-Stack Development with Java and JavaScript"
            />
            <TechCard
              icon={<Database className="w-8 h-8"/>}
              title="Big Data"
              desc="Apache Kafka"
              ariaLabel="Big Data Solutions with Apache Kafka"
            />
            <TechCard
              icon={<Blocks className="w-8 h-8"/>}
              title="Blockchain"
              desc="Web3 Solutions"
              ariaLabel="Blockchain and Web3 Solutions"
            />
            <TechCard
              icon={<Cloud className="w-8 h-8"/>}
              title="Cloud"
              desc="AWS Experts"
              ariaLabel="Cloud Solutions with AWS"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  ariaLabel: string;
}

function TechCard({icon, title, desc, ariaLabel}: TechCardProps) {
  return (
    <div
      className="relative group"
      role="article"
      aria-label={ariaLabel}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl"/>
      <div
        className="relative p-6 rounded-xl border border-white/[0.08] bg-black/20 hover:bg-black/30 transition-colors duration-300">
        <div className="flex flex-col items-center">
          <div className="text-blue-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{desc}</p>
        </div>
      </div>
      <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
    </div>
  );
}
