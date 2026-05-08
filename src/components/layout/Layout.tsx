import React from 'react';
import { Navbar } from '../Navbar';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navItems = [
    { name: 'PROJECTS', href: '/projects' },
    { name: 'BLOG', href: '/blog' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <main className="relative min-h-screen bg-[#050505] text-[#A0A0A0] selection:bg-cyan-500/30 font-mono text-[10px] uppercase tracking-widest overflow-hidden border-[#1A1A1A] border-2 md:border-4 lg:border-8">
      <div className="scanline" />
      <Navbar />
      
      <div className="flex pt-12 min-h-screen">
        {/* Left Vertical System Nav */}
        <nav className="w-16 border-r border-[#1A1A1A] hidden flex-col items-center py-12 gap-12 bg-[#080808] lg:flex shrink-0">
          <Link to="/" className="text-brand-cyan -rotate-90 whitespace-nowrap mb-8 font-bold hover:opacity-80 transition-opacity">INDEX_00</Link>
          <div className="flex flex-col gap-12 opacity-60">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`-rotate-90 hover:text-brand-cyan transition-colors whitespace-nowrap ${
                  location.pathname === item.href ? 'text-brand-cyan opacity-100 font-bold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto mb-4 text-brand-cyan">
            <div className="w-1 h-12 bg-brand-cyan shadow-[0_0_8px_#00E5FF]"></div>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col h-[calc(100vh-3rem)] overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="min-h-full flex flex-col"
              >
                {children}
                
                {/* Footer is part of the scroll area to ensure it appears at bottom of every page */}
                <footer className="h-auto md:h-10 border-t border-[#1A1A1A] flex flex-col md:flex-row items-center justify-between px-6 py-4 md:py-0 bg-[#080808] text-[8px] gap-4 md:gap-0 mt-auto">
                  <div className="flex flex-wrap justify-center gap-6">
                    <div className="flex gap-2"><span>DB_STATUS:</span><span className="text-brand-cyan">CONNECTED</span></div>
                    <div className="flex gap-2"><span>AUTH:</span><span className="text-brand-cyan">FIREBASE_v11</span></div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4">
                    <span>&copy; {new Date().getFullYear()} EMERIC_REAPER_PORTFOLIO</span>
                    <span className="opacity-40">DESIGN_BY_SYSTEM</span>
                  </div>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
