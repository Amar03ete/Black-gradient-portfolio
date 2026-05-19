import { motion } from 'motion/react';
import { personalInfo } from '@/data/portfolio';
import { Mail, Instagram, MapPin, Linkedin } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] border-b border-[#1A1A1A] relative">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-px bg-[#000000] border border-[#1A1A1A]">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#050505] p-8 md:p-12 relative lg:w-[45%] flex flex-col justify-center"
          >
            <div className="flex items-center space-x-4 mb-4">
              <span className="w-8 h-[1px] bg-[#666]"></span>
              <h2 className="text-xs font-mono tracking-widest text-[#9E9E9E] uppercase">Get In Touch</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
              Ready to start a <br/> conversation?
            </h3>
            <p className="text-[#9E9E9E] text-[15px] font-light mb-12 max-w-md">
              I'd love to hear from you about data science opportunities, AI projects, or business analytics collaborations.
            </p>

            <div className="space-y-0 border border-[#1A1A1A]">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center p-6 border-b border-[#1A1A1A] hover:bg-[#0A0A0A] transition-colors group">
                <Mail className="text-[#666] group-hover:text-[#ea4335] group-hover:drop-shadow-[0_0_8px_rgba(234,67,53,0.6)] transition-all mr-6" />
                <div>
                  <div className="text-[10px] font-mono text-[#666] uppercase tracking-widest mb-1">Email</div>
                  <div className="text-[#CCC] font-light truncate max-w-[200px] sm:max-w-none">{personalInfo.email}</div>
                </div>
              </a>

              {personalInfo.linkedIn && (
                <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center p-6 border-b border-[#1A1A1A] hover:bg-[#0A0A0A] transition-colors group">
                  <Linkedin className="text-[#666] group-hover:text-[#0a66c2] group-hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.6)] transition-all mr-6" />
                  <div>
                    <div className="text-[10px] font-mono text-[#666] uppercase tracking-widest mb-1">LinkedIn</div>
                    <div className="text-[#CCC] font-light">Connect with me</div>
                  </div>
                </a>
              )}

              <a href={`https://instagram.com/${personalInfo.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center p-6 border-b border-[#1A1A1A] hover:bg-[#0A0A0A] transition-colors group">
                <Instagram className="text-[#666] group-hover:text-[#E1306C] group-hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.6)] transition-all mr-6" />
                <div>
                  <div className="text-[10px] font-mono text-[#666] uppercase tracking-widest mb-1">Instagram</div>
                  <div className="text-[#CCC] font-light">{personalInfo.instagram}</div>
                </div>
              </a>

              <div className="flex items-center p-6 hover:bg-[#0A0A0A] transition-colors group">
                <MapPin className="text-[#666] group-hover:text-[#34A853] group-hover:drop-shadow-[0_0_8px_rgba(52,168,83,0.6)] transition-all mr-6" />
                <div>
                  <div className="text-[10px] font-mono text-[#666] uppercase tracking-widest mb-1">Location</div>
                  <div className="text-[#CCC] font-light">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#000000] w-full lg:flex-1 h-[750px] md:h-[700px] mb-8 lg:mb-0 relative [&_iframe]:mt-[45px] [&_iframe]:bg-[#000000]"
          >
            <InlineWidget 
              url="https://calendly.com/amar03/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
              styles={{ height: '100%', width: '100%' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
