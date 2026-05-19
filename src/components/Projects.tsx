import { motion } from 'motion/react';
import { projects } from '@/data/portfolio';
import { ExternalLink, Github } from 'lucide-react';
import { useDevice } from '@/hooks/useDevice';

export function Projects() {
  const device = useDevice();
  // Mobile layout - horizontal scrolling carousel style
  if (device === 'mobile') {
    return (
      <section id="projects" className="py-16 relative border-b border-[#1A1A1A]">
        <div className="px-6 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-8 h-[1px] bg-white"></span>
            <h2 className="text-[10px] font-mono tracking-widest text-[#9E9E9E] uppercase">Portfolio</h2>
          </div>
          <h3 className="text-4xl font-semibold text-white tracking-tight">Work<span className="text-[#333]">.</span></h3>
        </div>

        <motion.div 
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: [40, -15, 0], opacity: [0, 1, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-6 space-x-6"
        >
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="min-w-[85vw] snap-center flex flex-col bg-[#050505] border border-[#1A1A1A] relative"
            >
              <div className="h-40 w-full overflow-hidden border-b border-[#111]">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-[9px] font-mono font-medium px-2 py-1 border border-[#333] text-[#CCC] uppercase mb-3 self-start">
                  {project.category}
                </span>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-[#9E9E9E] font-light text-xs leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-[9px] font-mono bg-[#111] border border-[#222] text-[#9E9E9E] px-2 py-1 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#111]">
                  <a href="https://github.com/Amar03ete?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center text-[10px] font-mono uppercase text-[#666] hover:text-white transition-colors">
                    <Github size={12} className="mr-1" />
                    Code
                  </a>
                  <a href="#" className="flex items-center text-[10px] font-mono uppercase text-[#666] hover:text-white transition-colors">
                    <ExternalLink size={12} className="mr-1" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    );
  }

  // Desktop and Tablet layout
  return (
    <section id="projects" className="py-24 relative border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-8 h-[1px] bg-white"></span>
            <h2 className="text-xs font-mono tracking-widest text-[#9E9E9E] uppercase">Portfolio</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">Featured Work<span className="text-[#333]">.</span></h3>
          <p className="text-[#9E9E9E] max-w-2xl font-light">Data science and AI projects that solve real-world business challenges.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-px bg-[#1A1A1A] border border-[#1A1A1A]">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-[#050505] relative overflow-hidden transition-all duration-300 hover:bg-[#0A0A0A] hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 hover:border-[#333]"
            >
              <div className="h-48 sm:h-56 w-full overflow-hidden border-b border-[#111]">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-mono font-medium px-2 py-1 border border-[#333] text-[#CCC] uppercase mb-4 inline-block">
                      {project.category}
                    </span>
                    <h4 className="text-2xl font-semibold text-white group-hover:text-white transition-colors">
                      {project.title}
                    </h4>
                  </div>
                  <span className={`text-[10px] uppercase font-mono px-2 py-1 border ${project.status === 'Completed' ? 'border-emerald-500/30 text-emerald-400' : 'border-amber-500/30 text-amber-400'}`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-[#9E9E9E] mb-8 flex-1 font-light text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-8 mb-8 border-t border-[#111] pt-6">
                  <div>
                    <h5 className="text-[10px] font-mono text-[#666] mb-3 uppercase tracking-widest">Key Features</h5>
                    <ul className="space-y-2">
                      {project.keyFeatures.map(feature => (
                        <li key={feature} className="text-xs text-[#9E9E9E] flex items-start">
                          <span className="w-1 h-1 bg-[#333] mt-1.5 mr-2 shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                     <h5 className="text-[10px] font-mono text-[#666] mb-3 uppercase tracking-widest">Achievements</h5>
                     <ul className="space-y-2">
                       {project.keyAchievements.map(ach => (
                          <li key={ach} className="text-xs text-emerald-400/80 flex items-start">
                            <span className="mr-2">✓</span> {ach}
                          </li>
                       ))}
                     </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-[10px] font-mono bg-[#111] border border-[#222] text-[#9E9E9E] px-2 py-1 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-start gap-4 mt-auto pt-6 border-t border-[#111]">
                  <a href="https://github.com/Amar03ete?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center text-xs font-mono uppercase tracking-widest text-[#666] hover:text-white transition-colors">
                    <Github size={14} className="mr-2" />
                    Source
                  </a>
                  <a href="#" className="flex items-center text-xs font-mono uppercase tracking-widest text-[#666] hover:text-white transition-colors">
                    <ExternalLink size={14} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-16 text-center"
        >
          <a
            href="https://github.com/Amar03ete"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 bg-transparent border border-[#333] text-white px-8 py-4 font-mono uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all"
          >
            <Github size={16} />
            <span>View All Repositories</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
