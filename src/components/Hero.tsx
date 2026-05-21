import { motion } from 'motion/react';
import { personalInfo } from '@/data/portfolio';
import { ArrowRight, Download, Terminal, Database, Code2, Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 border-b border-[#1A1A1A]">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-8 max-md:items-center max-md:text-center mt-8 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center max-md:mb-4 lg:hidden"
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48 border border-[#333] p-1.5 rounded-full overflow-hidden mb-6">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover filter grayscale rounded-full"
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1.5 font-mono uppercase tracking-widest bg-[#111] border border-[#333] text-[#CCC] text-[10px] sm:text-xs font-semibold">
                Status: Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Desktop Status Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex items-center space-x-2"
          >
            <span className="px-3 py-1.5 font-mono uppercase tracking-widest bg-[#111] border border-[#333] text-[#CCC] text-[10px] sm:text-xs font-semibold">
              Status: Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight text-white font-sans max-md:text-6xl"
          >
            Amar<span className="text-[#333]">.</span>
            <br />
            <span className="text-3xl md:text-5xl text-[#666] font-normal mt-4 md:mt-4 block tracking-normal max-md:text-[28px] max-md:leading-tight">
              {personalInfo.tagline}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[17px] text-[#9E9E9E] leading-relaxed max-w-xl font-light max-md:text-[15px]"
          >
            {personalInfo.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center space-x-2 bg-white text-black px-6 py-4 font-mono uppercase tracking-widest text-xs hover:bg-[#CCC] transition-colors w-full sm:w-auto"
            >
              <span>Get In Touch</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="/AMAR_CV.pdf"
              download="AMAR_CV.pdf"
              className="inline-flex items-center justify-center space-x-2 bg-transparent border border-[#333] text-white px-6 py-4 font-mono uppercase tracking-widest text-xs hover:bg-[#111] transition-colors w-full sm:w-auto"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
            <div className="flex items-center justify-center gap-4 sm:ml-4 sm:justify-start">
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-[#333] text-[#9E9E9E] hover:bg-[#111] hover:text-white hover:border-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] transition-all flex items-center justify-center group"
                >
                  <Github size={16} className="group-hover:text-white transition-all" />
                </a>
              )}
              {personalInfo.linkedIn && (
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-[#333] text-[#9E9E9E] hover:bg-[#111] hover:text-[#0a66c2] hover:border-[#0a66c2] hover:drop-shadow-[0_0_10px_rgba(10,102,194,0.7)] transition-all flex items-center justify-center group"
                >
                  <Linkedin size={16} className="group-hover:text-[#0a66c2] transition-all" />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Right side - Profile Image (Desktop) / Hidden Mobile here, shown below */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative border border-[#1A1A1A] bg-[#050505] p-4 aspect-square max-w-[450px] mx-auto float-right">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white z-10" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white z-10" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white z-10" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white z-10" />
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
