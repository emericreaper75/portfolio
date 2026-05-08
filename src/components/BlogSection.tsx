import { motion } from 'motion/react';
import { Calendar, ChevronRight } from 'lucide-react';
import { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
  index: number;
  key?: string | number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group cursor-pointer bg-[#080808] border-b border-[#1A1A1A] hover:bg-[#0c0c0c] transition-colors"
    >
      <div className="flex flex-col md:flex-row gap-8 p-8 items-center">
        <div className="w-full md:w-32 aspect-square bg-[#050505] overflow-hidden relative border border-[#1A1A1A]">
           <img 
              src={`https://picsum.photos/seed/blog-${index}/400/400`} 
              alt={post.title} 
              className="w-full h-full object-cover grayscale brightness-50 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
              referrerPolicy="no-referrer"
           />
        </div>
        
        <div className="flex-grow">
          <div className="flex items-center gap-4 mb-2 system-label text-[8px] opacity-40">
            <span>[ENTRY_{index.toString().padStart(3, '0')}]</span>
            <span>{new Date(post.createdAt).toISOString().split('T')[0]}</span>
            <span className="text-brand-cyan">{post.tags[0]}</span>
          </div>
          
          <h4 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors uppercase tracking-tight">
            {post.title}
          </h4>
          
          <p className="text-[#606060] line-clamp-1 mb-4 text-[11px] font-sans lowercase tracking-normal">
            {post.excerpt}
          </p>
        </div>

        <div className="system-label text-[8px] text-brand-cyan flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          ACCESS_LOG <span className="text-lg">→</span>
        </div>
      </div>
    </motion.div>
  );
}

export function BlogSection() {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of IoT in Industrial Automation',
      excerpt: 'Exploring how edge computing and real-time monitoring are revolutionizing factory efficiency and preventative maintenance.',
      author: 'Emeric Reaper',
      tags: ['IoT', 'Engineering'],
      slug: 'future-of-iot',
      featured: true,
      published: true,
      createdAt: Date.now(),
      content: '',
    },
    {
      id: '2',
      title: 'Astrophysics and the Search for Dark Energy',
      excerpt: 'A deep dive into current theories and the role of computational models in understanding the expansion rate of the universe.',
      author: 'Emeric Reaper',
      tags: ['Science', 'Astrophysics'],
      slug: 'dark-energy-research',
      featured: false,
      published: true,
      createdAt: Date.now() - 86400000 * 5,
      content: '',
    },
    {
      id: '3',
      title: 'Autonomous Navigation in Multi-Agent Systems',
      excerpt: 'Investigating path planning algorithms for swarms of micro-rovers in unstructured environments.',
      author: 'Emeric Reaper',
      tags: ['Robotics', 'AI'],
      slug: 'autonomous-navigation',
      featured: false,
      published: true,
      createdAt: Date.now() - 86400000 * 12,
      content: '',
    }
  ];

  const featuredPost = posts.find(p => p.featured) || posts[0];
  const otherPosts = posts.filter(p => p.id !== featuredPost?.id);

  return (
    <div className="py-20 bg-[#050505] border-y border-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="system-label text-brand-cyan mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-cyan"></span> INTEL_ARCHIVE_V1
            </h2>
            <h3 className="text-4xl font-bold text-white tracking-tighter italic">
              KNOWLEDGE_REPOSITORIES
            </h3>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 group cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#080808] border border-[#1A1A1A] p-4 md:p-8 hover:border-brand-cyan/40 transition-colors">
              <div className="aspect-video bg-black overflow-hidden border border-[#1A1A1A]">
                <img 
                  src={`https://picsum.photos/seed/featured/1200/800`} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4 system-label text-[10px]">
                  <span className="text-brand-cyan px-2 py-0.5 border border-brand-cyan/20 bg-brand-cyan/5 italic">FEATURED_ENTRY</span>
                  <span className="opacity-40">{new Date(featuredPost.createdAt).toISOString().split('T')[0]}</span>
                </div>
                <h4 className="text-3xl font-bold text-white mb-6 group-hover:text-brand-cyan transition-colors uppercase tracking-tight italic leading-tight">
                  {featuredPost.title}
                </h4>
                <p className="text-[#A0A0A0] mb-8 text-sm font-sans lowercase leading-relaxed max-w-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="system-label text-[10px] text-brand-cyan flex items-center gap-2">
                  READ_FULL_DOCUMENTATION <span className="text-xl">→</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="flex flex-col border border-[#1A1A1A]">
          {otherPosts.map((post, i) => {
            const { id } = post;
            return <BlogCard key={id} post={post} index={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
