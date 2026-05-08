import { Hero } from '../components/Hero';
import { motion } from 'motion/react';

export function Home() {
  return (
    <div className="flex-1">
      <Hero />
      <div className="p-6 md:p-12 border-t border-[#1A1A1A] bg-[#080808]">
        <div className="max-w-4xl">
          <h2 className="system-label text-brand-cyan mb-4">SYSTEM_STATUS_LATEST</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="technical-border p-6 bg-black/40">
              <h3 className="text-white font-bold mb-2 system-label text-[10px]">CURRENT_LOCUS</h3>
              <p className="text-xs lowercase opacity-60">analyzing high-density architectures at jntua coea. developing autonomous systems and technical interfaces.</p>
            </div>
            <div className="technical-border p-6 bg-black/40">
              <h3 className="text-white font-bold mb-2 system-label text-[10px]">RECENT_TRANSMISSIONS</h3>
              <p className="text-xs lowercase opacity-60">new research regarding quantum mdx and iot node integration published in the blog sector.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
