/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#9E9E9E] font-sans selection:bg-[#333333] selection:text-white relative overflow-hidden">
      {/* Ambient background glow elements for life */}
      <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#06b6d4]/10 blur-[120px] mix-blend-screen opacity-60 animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#3b82f6]/10 blur-[120px] mix-blend-screen opacity-60 animate-[pulse_12s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-[#8b5cf6]/10 blur-[100px] mix-blend-screen opacity-40 animate-[pulse_10s_ease-in-out_infinite]" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 w-full">
        <Navbar />
        
        <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Reviews />
        <Contact />
      </main>

      <Footer />
      </div>
      <Analytics />
    </div>
  );
}
