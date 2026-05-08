import { ProjectCard } from './ProjectCard';
import { Project } from '@/types';

const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'IoT Weather Surveillance System',
    description: 'A real-time weather monitoring system using ESP32 and various sensors, featuring a responsive dashboard for data visualization.',
    image: 'https://picsum.photos/seed/iot/800/600',
    tags: ['ESP32', 'React', 'Firebase', 'IoT'],
    featured: true,
    slug: 'iot-weather-system',
    createdAt: Date.now(),
  },
  {
    id: '2',
    title: 'Autonomous Rover Control',
    description: 'Robotics project focusing on obstacle avoidance and remote path planning using Raspberry Pi and Python.',
    image: 'https://picsum.photos/seed/robotics/800/600',
    tags: ['Python', 'Raspberry Pi', 'Robotics'],
    featured: true,
    slug: 'autonomous-rover',
    createdAt: Date.now(),
  },
  {
    id: '3',
    title: 'Astrophysics Data Visualizer',
    description: 'A tool for fetching and visualizing celestial data from NASA APIs, built with D3.js and TypeScript.',
    image: 'https://picsum.photos/seed/space/800/600',
    tags: ['D3.js', 'TypeScript', 'NASA API'],
    featured: true,
    slug: 'astro-visualizer',
    createdAt: Date.now(),
  },
];

export function ProjectsSection() {
  return (
    <div className="py-20 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="system-label text-brand-cyan mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-cyan"></span> PROJECT_LOGS_V2.0
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter italic">
              ENGINEERING_SAMPLES
            </h3>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-4 system-label">
             <button className="text-white border-b border-brand-cyan pb-1 whitespace-nowrap">ALL_DATA</button>
             <button className="text-[#404040] hover:text-white pb-1 transition-colors whitespace-nowrap">ROBOTICS</button>
             <button className="text-[#404040] hover:text-white pb-1 transition-colors whitespace-nowrap">IOT_NODES</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {MOCK_PROJECTS.map((project, i) => {
            const { id } = project;
            return <ProjectCard key={id} project={project} index={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
