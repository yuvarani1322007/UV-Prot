
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 mb-8 backdrop-blur-sm animate-pulse">
          <Sparkles size={14} className="text-cyan-400" />
          <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase">Available for new ventures</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
          AI-Driven <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">Developer</span> & Digital Innovator
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Building intelligent, scalable, and high-performance digital solutions at the intersection of enterprise SaaS and modern AI architectures.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-full font-bold flex items-center justify-center hover:bg-slate-200 transition-all group">
            View Projects
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-700 text-white rounded-full font-bold hover:bg-slate-800 transition-all">
            Contact Me
          </a>
        </div>
      </div>

      {/* Hero Visual Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
