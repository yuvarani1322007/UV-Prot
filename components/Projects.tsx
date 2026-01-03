
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-indigo-400">Work</span></h2>
            <p className="text-slate-500 max-w-xl">Curated selection of projects showcasing expertise in SaaS engineering and AI integrations.</p>
          </div>
          <a href="#" className="text-indigo-400 font-bold flex items-center hover:underline">
            View All Projects <ExternalLink size={16} className="ml-2" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="glass-card rounded-3xl overflow-hidden flex flex-col group h-full">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a href={project.github} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all">
                    <Github size={20} />
                  </a>
                  <a href={project.link} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">Case Study 2024</span>
                  <a href={project.link} className="text-sm font-bold text-white flex items-center group/btn">
                    View Project <ArrowUpRight size={14} className="ml-1 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Internal utility since Lucide doesn't have ArrowUpRight in the context provided
const ArrowUpRight = ({ size, className }: { size: number, className: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

export default Projects;
