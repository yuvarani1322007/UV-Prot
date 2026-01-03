
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold tracking-tighter flex items-center group">
          <span className="text-indigo-500 mr-1 transition-transform group-hover:rotate-12">U</span>
          <span>v</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 neon-glow-violet">
            Let's Build
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-slate-950/98 z-40 transition-transform duration-500 md:hidden flex flex-col items-center justify-center space-y-8 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {NAV_LINKS.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-2xl font-bold text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <button className="px-8 py-4 bg-indigo-600 text-white rounded-full text-lg font-bold">
          Hire Me
        </button>
      </div>
    </header>
  );
};

export default Header;
