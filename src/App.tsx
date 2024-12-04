import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { TechStack } from './components/TechStack/index';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <TechStack />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
