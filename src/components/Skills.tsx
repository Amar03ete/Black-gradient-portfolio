import { motion } from 'motion/react';
import { skills } from '@/data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0A0A0A] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-8 h-[1px] bg-[#666]"></span>
            <h2 className="text-xs font-mono tracking-widest text-[#9E9E9E] uppercase">Capabilities</h2>
            <span className="w-8 h-[1px] bg-[#666]"></span>
          </div>
          <h3 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">Technical Arsenal<span className="text-[#333]">.</span></h3>
          <p className="text-[#9E9E9E] font-light max-w-2xl mx-auto">My comprehensive toolkit for data science, AI, and business analytics</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-[#1A1A1A] border border-[#1A1A1A]">
          {/* Tech Skills */}
          <div className="bg-[#050505] p-8 hover:bg-[#0A0A0A] transition-colors">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6 border-b border-[#111] pb-4">Core Domains</h4>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-[#111] border border-[#222] px-3 py-1.5 flex items-center space-x-2"
                >
                  <span className="text-sm">{skill.icon}</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#CCC]">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-[#050505] p-8 hover:bg-[#0A0A0A] transition-colors">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6 border-b border-[#111] pb-4">Tools & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tool, idx) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-[#111] border border-[#222] px-3 py-1.5 flex items-center space-x-2"
                >
                  <span className="text-sm">{tool.icon}</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#CCC]">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

           {/* Soft Skills */}
           <div className="bg-[#050505] p-8 hover:bg-[#0A0A0A] transition-colors">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6 border-b border-[#111] pb-4">Soft Skills</h4>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill, idx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-xs font-mono uppercase tracking-widest text-[#9E9E9E] border border-[#222] bg-[#0A0A0A] px-3 py-1.5"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-[#050505] p-8 hover:bg-[#0A0A0A] transition-colors">
             <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6 border-b border-[#111] pb-4">Languages</h4>
             <div className="space-y-4">
                {skills.languages.map((lang, idx) => (
                  <motion.div 
                    key={lang.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#111] border border-[#222] p-4"
                  >
                    <div>
                      <div className="text-white text-sm font-semibold">{lang.name}</div>
                      <div className="text-[10px] font-mono text-[#666] uppercase mt-1 tracking-widest">{lang.level}</div>
                    </div>
                    <div className="flex space-x-1 mt-2 sm:mt-0">
                       {[...Array(5)].map((_, i) => (
                         <span key={i} className={i < lang.stars ? "text-white" : "text-[#333]"}>★</span>
                       ))}
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
