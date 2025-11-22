import React from 'react';
import { StarField } from './components/StarField';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-950 via-[#1a0b2e] to-slate-950 text-white">
      <StarField />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}