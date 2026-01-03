
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { STUDIO_METRICS } from '../constants';
import { Bot, Terminal, Shield, Workflow, Play, Settings } from 'lucide-react';

const AIStudio: React.FC = () => {
  return (
    <section id="ai-studio" className="py-24 bg-gradient-to-b from-slate-950 to-indigo-950/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 text-indigo-400 mb-4">
                <Workflow size={20} />
                <span className="text-sm font-bold uppercase tracking-widest">Enterprise AI</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Studio <span className="text-white">Workspace</span></h2>
              <p className="text-slate-400 text-lg">
                I build specialized AI tools that automate workflows, generate high-value insights, and power intelligent decision-making systems.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 glass-card rounded-2xl">
                <Bot className="text-cyan-400" />
                <div>
                  <h4 className="font-bold">Natural Language Apps</h4>
                  <p className="text-xs text-slate-500">LLM-powered agents and custom chat systems.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 glass-card rounded-2xl">
                <Shield className="text-indigo-400" />
                <div>
                  <h4 className="font-bold">Secure Integrations</h4>
                  <p className="text-xs text-slate-500">Privacy-first AI implementation for enterprises.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 glass rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            {/* Mock Dashboard Header */}
            <div className="bg-slate-900/50 p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="h-4 w-32 bg-slate-800 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="p-1.5 hover:bg-slate-800 rounded-md"><Settings size={16} className="text-slate-400" /></button>
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30"></div>
              </div>
            </div>

            {/* Mock Dashboard Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">Processing Output</h3>
                    <span className="text-xs text-green-400 flex items-center"><span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>Live</span>
                  </div>
                  <div className="bg-slate-950 rounded-xl p-4 font-mono text-xs text-slate-400 border border-slate-800 min-h-[160px]">
                    <p className="text-indigo-400 mb-2">{`// System Initialized...`}</p>
                    <p className="text-cyan-400">{`> Loading neural weights (gemini-3-pro)...`}</p>
                    <p className="text-slate-500">{`> Token usage: 4.2k / 1M`}</p>
                    <p className="text-slate-500">{`> Execution time: 1.2s`}</p>
                    <div className="mt-4 flex items-center space-x-2">
                       <Play size={12} className="text-indigo-400 fill-indigo-400" />
                       <div className="h-1 w-24 bg-indigo-900 rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-indigo-500"></div>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold">Traffic & Tokens</h3>
                  <div className="h-[160px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={STUDIO_METRICS}>
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                        <XAxis dataKey="name" stroke="#64748b" fontSize={10} axisLine={false} tickLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                          itemStyle={{ color: '#818cf8', fontWeight: 'bold' }}
                        />
                        <Area type="monotone" dataKey="value" stroke="#6366f1" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                 {[
                   { label: 'Uptime', val: '99.9%' },
                   { label: 'Requests', val: '1.2M' },
                   { label: 'Latency', val: '42ms' },
                   { label: 'Accuracy', val: '98.2%' },
                 ].map(stat => (
                   <div key={stat.label} className="p-4 bg-slate-900/40 rounded-xl border border-slate-800 text-center">
                     <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">{stat.label}</p>
                     <p className="text-lg font-bold text-slate-200">{stat.val}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStudio;
