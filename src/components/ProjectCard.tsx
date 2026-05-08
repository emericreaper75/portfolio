import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string | number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="bg-[#080808] border border-[#1A1A1A] h-full flex flex-col group hover:border-brand-cyan/40 transition-colors duration-500 overflow-hidden relative">
        <div className="relative aspect-video overflow-hidden border-b border-[#1A1A1A]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="object-cover w-full h-full grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-2 right-2 system-label text-[8px] bg-black/80 px-2 py-0.5 border border-[#1A1A1A] backdrop-blur-sm">
            {project.tags[0] === 'IoT' ? 'NODE_TYPE_IOT' : 'UNIT_TYPE_ROBO'}
          </div>
        </div>
        
        <div className="p-6 flex-grow">
          <div className="flex justify-between items-start mb-4">
             <h4 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors uppercase tracking-tight">{project.title}</h4>
             <span className="system-label text-[8px] opacity-40">#{index.toString().padStart(2, '0')}</span>
          </div>
          
          <p className="text-[#606060] text-[11px] leading-relaxed font-sans mb-6 capitalize line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[8px] system-label text-brand-cyan/60 border border-brand-cyan/20 px-1.5 py-0.5 bg-brand-cyan/5">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="p-4 border-t border-[#1A1A1A] bg-black/20 flex justify-between items-center group-hover:bg-brand-cyan/5 transition-colors">
          <div className="flex gap-4">
            <a 
              href={project.github || "#"} 
              className="p-2 border border-[#1A1A1A] text-[#404040] hover:text-white hover:border-white transition-all bg-black flex items-center gap-2 group/btn"
              title="VIEW_SOURCE"
            >
              <Github size={12} className="group-hover/btn:text-brand-cyan" />
              <span className="text-[8px] system-label hidden sm:inline">SRC</span>
            </a>
            <a 
              href={project.link || "#"} 
              className="p-2 border border-[#1A1A1A] text-[#404040] hover:text-white hover:border-white transition-all bg-black flex items-center gap-2 group/btn"
              title="LIVE_PREVIEW"
            >
              <ExternalLink size={12} className="group-hover/btn:text-brand-cyan" />
              <span className="text-[8px] system-label hidden sm:inline">LIVE</span>
            </a>
          </div>
          <button className="system-label text-[8px] text-brand-cyan flex items-center gap-2 hover:opacity-80 transition-opacity">
            DETAILED_LOG <span className="text-xs">→</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
