
import React from 'react';
import { Cpu, Zap, Layers } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 aspect-square glass-card rounded-3xl overflow-hidden p-8 flex items-center justify-center">
               {/* Abstract AI Graphic Replacement */}
               <div className="w-full h-full relative border border-indigo-500/20 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-indigo-500/5"></div>
                  <div className="relative space-y-4 text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/30">
                      <Cpu size={64} className="text-indigo-400" />
                    </div>
                    <div className="space-y-2">
                       <div className="h-2 w-32 mx-auto bg-slate-700 rounded-full overflow-hidden">
                         <div className="h-full w-2/3 bg-indigo-500 animate-[shimmer_2s_infinite]"></div>
                       </div>
                       <div className="h-2 w-24 mx-auto bg-slate-700 rounded-full overflow-hidden">
                         <div className="h-full w-1/2 bg-cyan-400 animate-[shimmer_2s_infinite_0.5s]"></div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Designing the Future of <span className="text-indigo-400">Intelligent</span> Software</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                I'm a technology professional dedicated to crafting high-tier digital experiences. My approach blends deep technical expertise with an AI-first mindset, ensuring that every product I build is not only functional but future-proof.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 glass-card rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 border border-indigo-500/20">
                  <Zap className="text-indigo-400" size={24} />
                </div>
                <h3 className="font-bold mb-2">Performance First</h3>
                <p className="text-sm text-slate-500">Optimized for speed, low latency, and efficient resource utilization.</p>
              </div>
              <div className="p-6 glass-card rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 border border-cyan-500/20">
                  <Layers className="text-cyan-400" size={24} />
                </div>
                <h3 className="font-bold mb-2">Scalable Architecture</h3>
                <p className="text-sm text-slate-500">Built using modular, enterprise-grade frameworks that grow with your user base.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
