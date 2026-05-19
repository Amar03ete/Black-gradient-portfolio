import { motion } from 'motion/react';
import { education, certifications } from '@/data/portfolio';

export function Education() {
  return (
    <section id="education" className="py-24 bg-[#050505] relative border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-8 h-[1px] bg-white"></span>
            <h2 className="text-xs font-mono tracking-widest text-[#9E9E9E] uppercase">Academic Base</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">Education & Certifications<span className="text-[#333]">.</span></h3>
          <p className="text-[#9E9E9E] font-light max-w-xl">Academic foundation and continuous learning journey in data science and technology.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Education Left Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-8 border-b border-[#111] pb-4">Degrees</h4>

            <div className="space-y-0 border-l border-[#1A1A1A]">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-8 py-8 border-b border-[#1A1A1A] last:border-b-0 hover:bg-[#0A0A0A] transition-colors"
                >
                  <div className="absolute left-[-5px] top-[38px] w-[9px] h-[9px] bg-[#050505] border-2 border-[#666]" />
                  
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-xl font-semibold text-white leading-tight">{edu.degree}</h5>
                    <span className="text-xs font-mono text-[#666] shrink-0 ml-4 border border-[#333] px-2 py-1">{edu.period}</span>
                  </div>
                  
                  <div className="text-white text-sm mb-1">{edu.major}</div>
                  <div className="text-[#9E9E9E] text-sm mb-4">{edu.institution} • {edu.location}</div>
                  
                  <p className="text-[#9E9E9E] text-sm mb-6 leading-relaxed font-light">{edu.description}</p>
                  
                  <div className="mb-6">
                    <h6 className="text-[10px] font-mono uppercase text-[#666] mb-3 tracking-widest">Key Coursework</h6>
                    <div className="flex flex-wrap gap-2">
                       {edu.coursework.map(course => (
                         <span key={course} className="text-[10px] font-mono bg-[#111] border border-[#222] text-[#9E9E9E] px-2 py-1 uppercase">
                           {course}
                         </span>
                       ))}
                    </div>
                  </div>
                  
                  <div>
                     <h6 className="text-[10px] font-mono uppercase text-[#666] mb-3 tracking-widest">Achievements</h6>
                    <ul className="space-y-1">
                      {edu.achievements.map((ach, i) => (
                        <li key={i} className="text-sm text-[#9E9E9E] flex items-start">
                           <span className="text-emerald-500 mr-2 opacity-80">✓</span>
                           <span className="font-light">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

           {/* Certifications Right Column */}
           <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-8 border-b border-[#111] pb-4">Certifications</h4>

            <div className="grid gap-px border border-[#1A1A1A] bg-[#1A1A1A]">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#050505] p-6 hover:bg-[#0A0A0A] transition-colors group flex flex-col"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h5 className="text-lg font-semibold text-white group-hover:text-white transition-colors pr-4">{cert.title}</h5>
                    <span className="text-[10px] font-mono text-[#666] shrink-0 border border-[#333] px-2 py-1">{cert.year}</span>
                  </div>
                  <div className="text-white text-xs font-mono uppercase tracking-widest mb-4">{cert.issuer}</div>
                  <p className="text-[#9E9E9E] text-sm leading-relaxed font-light">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
