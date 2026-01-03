
import React from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { SOCIALS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let’s Build Something <span className="text-indigo-400 italic">Intelligent</span></h2>
            <p className="text-slate-400 text-lg mb-12 max-w-lg">
              Open for strategic partnerships, high-impact consulting, or full-time roles in forward-thinking AI/SaaS companies.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-800">
                  <Mail className="text-indigo-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email Me</p>
                  <p className="text-white font-medium">uv@innovatelabs.io</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-800">
                  <MapPin className="text-indigo-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Based In</p>
                  <p className="text-white font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              {SOCIALS.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center hover:bg-indigo-600/20 hover:border-indigo-500/50 transition-all"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-10">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all flex items-center justify-center group neon-glow-violet"
              >
                Send Message
                <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
