import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Reviews', href: '#reviews' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all w-full backdrop-blur-md bg-[#050505]/80',
          isScrolled ? 'border-b border-[#1A1A1A] py-3 md:py-4' : 'py-4 md:py-6 border-b border-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-white tracking-tighter uppercase font-mono">
            AMAR
          </a>

          {/* Desktop/Tablet Nav */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] lg:text-xs font-mono uppercase tracking-widest text-[#9E9E9E] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 border border-[#333] hover:bg-white hover:text-black text-white text-[10px] lg:text-xs font-mono uppercase tracking-widest transition-all"
            >
              Connect
            </a>
          </nav>

          {/* Mobile hamburger for extra links (optional) */}
          <button
            className="md:hidden text-[#9E9E9E] hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Flyout Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 right-0 bg-[#050505] border-b border-[#1A1A1A] py-4 px-6 flex flex-col space-y-4 shadow-xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-mono uppercase tracking-widest text-[#9E9E9E] hover:text-white transition-colors block border-b border-[#1A1A1A] pb-2"
                >
                  {link.name}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Bottom Tab Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-lg border-t border-[#1A1A1A] pb-safe pt-2">
        <div className="grid grid-cols-4 items-center h-14">
          <a href="#home" className="flex flex-col items-center justify-center w-full h-full text-[#666] hover:text-white transition-colors">
            <Home size={20} className="mb-1" />
            <span className="text-[9px] font-mono">HOME</span>
          </a>
          <a href="#about" className="flex flex-col items-center justify-center w-full h-full text-[#666] hover:text-white transition-colors">
            <User size={20} className="mb-1" />
            <span className="text-[9px] font-mono">ABOUT</span>
          </a>
          <a href="#projects" className="flex flex-col items-center justify-center w-full h-full text-[#666] hover:text-white transition-colors">
            <Briefcase size={20} className="mb-1" />
            <span className="text-[9px] font-mono">WORK</span>
          </a>
          <a href="#contact" className="flex flex-col items-center justify-center w-full h-full text-[#666] hover:text-white transition-colors">
            <Mail size={20} className="mb-1" />
            <span className="text-[9px] font-mono">CONNECT</span>
          </a>
        </div>
      </div>
    </>
  );
}
