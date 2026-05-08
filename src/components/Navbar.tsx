import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Github, Linkedin, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50">
      <header className={`h-12 border-b border-[#1A1A1A] flex items-center justify-between px-4 md:px-6 transition-colors duration-300 ${scrolled ? 'bg-[#080808]/95 backdrop-blur-md' : 'bg-[#080808]'}`}>
        <div className="flex items-center gap-4 md:gap-6 system-label overflow-hidden whitespace-nowrap">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="status-dot"></div>
            <span className="text-brand-cyan font-bold">EMERIC_SYSTEM_READY</span>
          </Link>
          <span className="opacity-40 hidden lg:inline">/</span>
          <span className="hidden lg:inline">LOC: JNTUA_ANANTHAPURAMU</span>
        </div>
        
        <div className="flex items-center gap-4 system-label">
          <div className="flex items-center gap-2">
            <span className="text-white hidden sm:inline">EMERIC_NODE_01</span>
          </div>
          <div className="px-2 py-0.5 border border-[#1A1A1A] text-[8px] bg-black hidden md:block">VER_1.0.4_STABLE</div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 text-white hover:text-brand-cyan transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Desktop Sub-Nav */}
      <div className="bg-[#030303]/50 backdrop-blur-sm border-b border-[#1A1A1A] hidden md:flex h-10 items-center justify-center gap-12 system-label">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`hover:text-brand-cyan transition-colors ${
              location.pathname === item.href ? 'text-brand-cyan font-bold' : ''
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#080808] border-b border-[#1A1A1A] system-label overflow-hidden"
          >
            <div className="flex flex-col py-6 px-6 gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between group hover:text-brand-cyan transition-colors ${
                    location.pathname === item.href ? 'text-brand-cyan' : ''
                  }`}
                >
                  <span>{item.name}</span>
                  <span className={`transition-opacity ${location.pathname === item.href ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}>→</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
