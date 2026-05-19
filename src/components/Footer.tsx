import { personalInfo } from '@/data/portfolio';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#1A1A1A] pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-8 md:mb-0 max-w-sm">
            <a href="#home" className="text-xl font-bold text-white tracking-tighter uppercase font-mono mb-4 inline-block">
              AMAR
            </a>
            <p className="text-[#9E9E9E] font-light text-sm leading-relaxed">
              Thank you for visiting my portfolio! I'm truly grateful for your time and interest in my work. Let's connect and build something meaningful together. ❤️
            </p>
          </div>
          
          <div className="flex gap-12">
            <div>
              <h5 className="text-[10px] font-mono text-[#666] uppercase tracking-widest mb-4">Navigation</h5>
              <ul className="space-y-2 text-xs font-mono uppercase tracking-widest text-[#9E9E9E]">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-mono text-[#666] uppercase tracking-widest mb-4">Connect</h5>
              <ul className="space-y-2 text-xs font-mono uppercase tracking-widest text-[#9E9E9E]">
                <li><a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">Email</a></li>
                <li><a href={`https://instagram.com/${personalInfo.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#1A1A1A]">
          <p className="text-[#666] font-mono text-[10px] uppercase tracking-widest mb-4 md:mb-0">
            © {new Date().getFullYear()} AMAR.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 border border-[#333] flex items-center justify-center text-[#9E9E9E] hover:text-black hover:bg-white transition-all group rounded-none"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
