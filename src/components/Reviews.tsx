import { motion } from 'motion/react';
import { reviews } from '@/data/portfolio';

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#050505] relative border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-8 h-[1px] bg-white"></span>
            <h2 className="text-xs font-mono tracking-widest text-[#9E9E9E] uppercase">Client Trust</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">Endorsements<span className="text-[#333]">.</span></h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-[#1A1A1A] border border-[#1A1A1A]">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#050505] p-8 hover:bg-[#0A0A0A] transition-colors flex flex-col group"
            >
              <div className="mb-6 relative z-10 flex-1">
                <div className="flex space-x-1 mb-6 text-[#333] group-hover:text-white transition-colors">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <p className="text-[#9E9E9E] leading-relaxed text-[15px] font-light">"{review.content}"</p>
              </div>
              <div className="border-t border-[#111] pt-6 mt-auto">
                <h5 className="font-semibold text-white mb-1">{review.name}</h5>
                <div className="text-xs font-mono text-[#666] uppercase tracking-widest mb-2">{review.title}</div>
                <div className="text-[10px] font-mono text-[#444] uppercase">{review.company} // {review.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
