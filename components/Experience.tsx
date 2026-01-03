
import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-indigo-400">Journey</span></h2>
          <p className="text-slate-500">Over half a decade of experience building for the web.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-800"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="relative flex items-start group">
                {/* Timeline Dot */}
                <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 z-10 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

                <div className="ml-16 w-full">
                  <div className="glass-card p-8 rounded-3xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-indigo-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-400 font-semibold border border-slate-700 whitespace-nowrap self-start">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
