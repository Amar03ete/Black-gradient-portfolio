import { motion } from 'motion/react';
import { experience } from '@/data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#050505] relative border-b border-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-8 h-[1px] bg-white"></span>
            <h2 className="text-xs font-mono tracking-widest text-[#9E9E9E] uppercase">Experience</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">Professional Record<span className="text-[#333]">.</span></h3>
          <p className="text-[#9E9E9E] font-light max-w-xl">Diverse freelance experience across data science, digital marketing, and web development</p>
        </motion.div>

        <div className="space-y-0 border-l border-[#1A1A1A]">
          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12 py-12 border-b border-[#1A1A1A] last:border-b-0 hover:bg-[#0A0A0A] transition-colors"
            >
              {/* Timeline marker */}
              <div className="absolute left-[-5px] top-[54px] w-[9px] h-[9px] bg-[#050505] border-2 border-[#666]" />

              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-semibold text-white mb-2">{job.role}</h4>
                  <div className="text-[#9E9E9E] text-sm break-words"><span className="text-white">{job.company}</span> • {job.location}</div>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <div className="text-white font-mono text-sm tracking-wide mb-2">{job.period}</div>
                  <span className="text-[10px] uppercase font-mono border border-[#333] px-2 py-1 text-[#CCC] inline-block">{job.type}</span>
                </div>
              </div>
              
              <p className="text-[#9E9E9E] text-sm mb-6 leading-relaxed font-light">{job.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-[10px] font-mono text-[#666] mb-3 uppercase tracking-widest">Key Responsibilities</h5>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-[#9E9E9E] flex items-start">
                        <span className="w-1 h-1 bg-[#333] mt-1.5 mr-2 shrink-0"></span>
                        <span className="flex-1 font-light">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-[10px] font-mono text-[#666] mb-3 uppercase tracking-widest">Key Achievements</h5>
                  <ul className="space-y-2 mb-6">
                    {job.achievements.map((ach, i) => (
                      <li key={i} className="text-sm text-emerald-400/80 flex items-start">
                        <span className="mr-2">✓</span>
                        <span className="flex-1 font-light">{ach}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h5 className="text-[10px] font-mono text-[#666] mb-3 uppercase tracking-widest">Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map(tech => (
                      <span key={tech} className="text-[10px] font-mono border border-[#222] bg-[#111] text-[#9E9E9E] px-2 py-1 uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
