
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core <span className="text-indigo-400">Competencies</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto">A deep dive into the technologies and frameworks I use to bring complex digital products to life.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((category) => (
            <div key={category.title} className="glass-card rounded-3xl p-8 hover:bg-slate-900/40 group">
              <h3 className="text-xl font-bold mb-6 text-indigo-400 group-hover:text-white transition-colors">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-xs font-bold text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out group-hover:bg-cyan-400"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
