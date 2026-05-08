import { motion } from 'motion/react';
import { Cpu, Globe, Rocket, Zap } from 'lucide-react';

const skills = [
  { name: 'Hardware', items: ['PCB Design', 'Microcontrollers', 'Embedded Systems', 'IoT Sensors'] },
  { name: 'Software', items: ['TypeScript', 'React/Next.js', 'Express', 'Python'] },
  { name: 'Tools', items: ['Git', 'Docker', 'Prisma', 'Firebase'] },
  { name: 'Science', items: ['Astrophysics', 'Signal Processing', 'Robotics Kinematics'] },
];

export function AboutSection() {
  return (
    <div className="py-20 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 lg:col-span-4"
          >
            <div className="relative aspect-[4/5] bg-[#080808] border border-[#1A1A1A] grayscale brightness-50 hover:brightness-100 hover:grayscale-0 transition-all duration-700">
               <img 
                src="https://picsum.photos/seed/portrait/800/1000" 
                alt="Emeric Reaper Profile" 
                className="w-full h-full object-cover mix-blend-screen"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-0 right-0 p-4">
                 <div className="status-dot"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 lg:col-span-8"
          >
            <h2 className="system-label text-brand-cyan mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-cyan"></span> NODE_BIOGRAPHY_V1
            </h2>
            <h3 className="text-4xl font-bold text-white mb-8 tracking-tighter italic">
              ENGINEERING_MINDSET <br /> 
              SYSTEM_LEVEL_INTEGRATION
            </h3>
            
            <p className="text-[#A0A0A0] leading-relaxed mb-10 text-sm max-w-2xl font-sans tracking-normal lowercase">
              I am a final year electronics and communication engineering student at jntua. my technical focus lies at the intersection of embedded hardware and cloud infrastructure. i build robots, investigate astrophysics datasets, and architect full-stack platforms with precision and scalability.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#1A1A1A] pt-10">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <h5 className="text-white system-label mb-4 flex items-center gap-2">
                    {skill.name}
                  </h5>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-[#606060] text-[9px] system-label hover:text-brand-cyan transition-colors cursor-default">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
