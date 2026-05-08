import { BlogSection } from '../components/BlogSection';

export function Blog() {
  return (
    <div className="flex-1">
      <div className="bg-[#080808] border-b border-[#1A1A1A] p-12">
        <h1 className="text-[60px] md:text-[80px] font-black text-white tracking-tighter italic leading-none">
          BLOG<span className="text-brand-cyan">_</span>LOGS<span className="text-brand-cyan">.</span>
        </h1>
        <p className="system-label text-brand-cyan mt-4 opacity-60">INTEL_STREAM_DATA // RESEARCH_NOTES</p>
      </div>
      <BlogSection />
    </div>
  );
}
