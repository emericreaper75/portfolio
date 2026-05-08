import { motion } from 'motion/react';
import { ArrowRight, Code, Cpu, Database, Globe, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex grid grid-cols-12 overflow-hidden bg-[#050505]">
      <div className="col-span-full md:col-span-7 lg:col-span-8 p-6 md:p-12 flex flex-col justify-end relative border-r border-[#1A1A1A]">
        {/* Background Grid */}
        <div className="absolute inset-0 technical-grid opacity-30 pointer-events-none" />
        
        {/* Abstract SVG Decoration */}
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden sm:block">
          <svg width="300" height="300" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.5">
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="30" strokeDasharray="2 2" />
            <path d="M50 10 V90 M10 50 H90" />
          </svg>
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-cyan mb-2 system-label">DEVELOPER_IDENTITY_V1</h2>
            <h1 className="text-[50px] sm:text-[80px] md:text-[90px] lg:text-[110px] leading-[0.85] font-black text-white tracking-tighter mb-6 italic">
              EMERIC<span className="text-brand-cyan">_</span>REAPER<span className="text-brand-cyan">.</span>
            </h1>
            <p className="max-w-md text-xs md:text-sm leading-relaxed tracking-normal lowercase text-[#D0D0D0] mb-8 font-sans">
              Full-stack engineer specializing in IoT, robotics, and astrophysics. Building high-performance systems from the ground up at JNTUA College of Engineering.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button className="bg-brand-cyan hover:bg-cyan-400 text-black rounded-none h-10 px-6 md:px-8 system-label font-bold border-none text-[8px] md:text-[10px]">
                  INITIALIZE_PROJECT_VIEW
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="col-span-full md:col-span-5 lg:col-span-4 flex flex-col">
        {/* Core Stack Section */}
        <div className="flex-1 p-8 border-b border-[#1A1A1A]">
          <div className="flex justify-between items-center mb-8 system-label">
            <span className="text-white">CORE_STACK</span>
            <span className="text-brand-cyan">[04]</span>
          </div>
          <div className="space-y-6">
            {[
              { label: 'TYPESCRIPT', value: 94 },
              { label: 'REACT_VITE', value: 88 },
              { label: 'FIREBASE_CORE', value: 82 },
              { label: 'ROBOTICS_ROS', value: 76 },
            ].map((skill) => (
              <div key={skill.label} className="flex flex-col gap-2">
                <div className="flex justify-between system-label text-[8px]">
                  <span>{skill.label}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="h-[2px] bg-[#1A1A1A] w-full">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.value}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-brand-cyan"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Stats Section */}
        <div className="p-8 flex flex-col justify-between h-48 bg-[#080808]">
          <div className="system-label">
            <div className="text-brand-cyan mb-2">SESSION_STATS</div>
            <div className="text-4xl font-black text-white leading-none">99.98<span className="text-sm opacity-40">%</span></div>
            <div className="text-[8px] mt-2 opacity-60">PLATFORM_UPTIME</div>
          </div>
          <div className="flex gap-1 h-6 items-end">
            {[2, 4, 3, 6, 2, 5, 3, 4, 2, 6].map((h, i) => (
              <div key={i} className={`w-full bg-[#1A1A1A]`} style={{ height: `${h * 4}px`, backgroundColor: i % 3 === 0 ? '#00E5FF' : '#1A1A1A' }}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
