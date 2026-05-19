import { motion } from 'motion/react';
import { personalInfo, specialties, achievements } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className="py-24 relative border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Statistics Section */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1A1A1A] border border-[#1A1A1A] mb-24"
        >
          {[
            { value: "12+", label: "Projects Completed" },
            { value: "3+", label: "Years Experience" },
            { value: "50k", label: "Lines of Code" },
            { value: "10+", label: "Happy Clients" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-[#050505] p-8 text-center flex flex-col items-center justify-center hover:bg-[#0A0A0A] transition-colors">
              <span className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</span>
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#666] uppercase">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-12"
          >
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="w-8 h-[1px] bg-white"></span>
                <h2 className="text-xs font-mono tracking-widest text-[#9E9E9E] uppercase">Who I Am</h2>
              </div>
              <div className="text-[17px] text-[#9E9E9E] font-light leading-relaxed whitespace-pre-line mb-8">
                {personalInfo.aboutMe}
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-[10px] font-mono tracking-widest text-[#666] uppercase mb-2">Freelance:</h4>
                  <p className="text-white text-sm tracking-wide">{personalInfo.freelance}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono tracking-widest text-[#666] uppercase mb-2">Location:</h4>
                  <p className="text-white text-sm tracking-wide">NASHIK, IN</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <h4 className="text-[10px] font-mono tracking-widest text-[#666] uppercase mb-2">Languages:</h4>
                  <p className="text-white text-sm tracking-wide">{personalInfo.languages}</p>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-mono tracking-widest text-[#666] uppercase mb-4">Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.skillsText?.split('\n').map((skill, idx) => (
                      <span key={idx} className="px-3 py-1.5 border border-[#333] text-[#CCC] text-[10px] font-mono uppercase bg-[#111]">
                        {skill}
                      </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="flex items-center space-x-4 mb-6">
              <span className="w-8 h-[1px] bg-white"></span>
              <h2 className="text-xs font-mono tracking-widest text-[#9E9E9E] uppercase">Services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1A1A1A] border border-[#1A1A1A]">
              {specialties.map((spec, idx) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={spec.title}
                    className="bg-[#050505] p-8 hover:bg-[#0A0A0A] transition-colors group flex flex-col items-start"
                  >
                    <h4 className="font-semibold text-white mb-4 tracking-wide">{spec.title}</h4>
                    <p className="text-sm text-[#9E9E9E] font-light leading-relaxed">{spec.description}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-4 mb-8">
            <span className="w-8 h-[1px] bg-white"></span>
            <h2 className="text-xs font-mono tracking-widest text-[#9E9E9E] uppercase">Achievements</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {achievements.map((acc, idx) => (
              <div key={idx} className="border border-[#1A1A1A] bg-[#050505] p-8 hover:border-[#333] transition-colors group">
                <h4 className="text-lg font-semibold text-white mb-2">{acc.title}</h4>
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#06b6d4] mb-4">{acc.issuer}</p>
                <p className="text-[#9E9E9E] font-light text-sm leading-relaxed">{acc.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
