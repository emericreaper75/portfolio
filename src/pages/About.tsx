import { AboutSection } from '../components/AboutSection';
import { motion } from 'motion/react';

export function About() {
  return (
    <div className="flex-1">
      <div className="bg-[#080808] border-b border-[#1A1A1A] p-12">
        <h1 className="text-[60px] md:text-[80px] font-black text-white tracking-tighter italic leading-none">
          ABOUT<span className="text-brand-cyan">_</span>ME<span className="text-brand-cyan">.</span>
        </h1>
        <p className="system-label text-brand-cyan mt-4 opacity-60">IDENT_SEQ_001 // BIOGRAPHICAL_DATA_RETRIEVAL</p>
      </div>
      <AboutSection />
    </div>
  );
}
