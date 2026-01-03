
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <a href="#home" className="text-xl font-bold tracking-tighter mb-2 block">
            <span className="text-indigo-500">U</span>v
          </a>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Uv. Built with AI & Passion.</p>
        </div>

        <nav className="flex space-x-8 text-sm font-medium text-slate-500">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-2">
           <div className="w-2 h-2 rounded-full bg-green-500"></div>
           <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Systems Operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
