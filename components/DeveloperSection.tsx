import React from 'react';
import { ExternalLink, Github, Mail, MessageCircle, Code2, Sparkles, Atom, Server, Wind, Terminal, Cpu } from 'lucide-react';

const DeveloperSection: React.FC = () => {
  const techStack = [
    { name: 'React', icon: <Atom size={20} />, color: 'text-blue-400' },
    { name: 'Node.js', icon: <Server size={20} />, color: 'text-green-500' },
    { name: 'TypeScript', icon: <Code2 size={20} />, color: 'text-blue-600' },
    { name: 'Tailwind', icon: <Wind size={20} />, color: 'text-cyan-400' },
    { name: 'Backend', icon: <Terminal size={20} />, color: 'text-purple-400' },
    { name: 'Architecture', icon: <Cpu size={20} />, color: 'text-emerald-400' },
  ];

  return (
    <section id="developer" className="min-h-screen py-24 bg-forest-900 text-white flex flex-col items-center justify-center relative overflow-hidden selection:bg-green-500 selection:text-white">
      {/* Background decoration - Enhanced with more layers */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-green-500 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-emerald-600 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/5 border border-white/10 text-green-400 text-xs font-black tracking-[0.3em] mb-12 uppercase backdrop-blur-md">
          <Sparkles size={14} />
          <span>The Visionary Behind the Code</span>
        </div>
        
        {/* The "Big Attractive Button" Name Block */}
        <div className="relative group inline-block mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500 rounded-[3rem] blur-xl opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
          
          <a 
            href="https://ssjportfolio-one.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative block px-12 py-10 md:px-20 md:py-16 bg-forest-950/80 backdrop-blur-2xl border border-white/20 rounded-[3rem] shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-green-400/50"
          >
            <h2 className="text-6xl md:text-9xl font-serif font-black leading-[0.9] mb-4 text-white">
              Shaveesh <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-300 via-emerald-400 to-teal-500">
                Jeshurun.S
              </span>
            </h2>
            <div className="flex items-center justify-center gap-3 text-green-400 font-bold tracking-widest uppercase text-sm mt-6 opacity-60 group-hover:opacity-100 transition-opacity">
              <span>View Interactive Portfolio</span>
              <ExternalLink size={18} />
            </div>
          </a>
        </div>

        <p className="text-xl md:text-3xl text-forest-50/70 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
          Full-Stack Architect specializing in <span className="text-white font-medium italic underline decoration-green-500">Eco-Tech Solutions</span> and immersive digital storytelling.
        </p>

        {/* Technology Stack Icons Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {techStack.map((tech) => (
            <div 
              key={tech.name}
              className="group relative flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
            >
              <div className={`${tech.color} transition-transform group-hover:rotate-12`}>
                {tech.icon}
              </div>
              <span className="text-xs font-bold tracking-wider text-white/80 uppercase">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Contact Grid - Refined Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          <a 
            href="https://github.com/shaveeshjeshururun18-coder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-4 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl transition-all hover:-translate-y-2 hover:border-green-400/50"
          >
            <div className="p-3 bg-black/30 rounded-2xl group-hover:text-green-400 transition-colors">
              <Github size={28} />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Codebase</p>
              <p className="font-bold text-lg">GitHub Profile</p>
            </div>
          </a>

          <a 
            href="mailto:shaveeshjeshururun18@gmail.com" 
            className="group flex items-center justify-center gap-4 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl transition-all hover:-translate-y-2 hover:border-green-400/50"
          >
            <div className="p-3 bg-red-500/10 rounded-2xl group-hover:text-red-400 transition-colors">
              <Mail size={28} />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Inquiries</p>
              <p className="font-bold text-lg">Send an Email</p>
            </div>
          </a>

          <a 
            href="https://wa.me/919841723628" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-4 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl transition-all hover:-translate-y-2 hover:border-green-400/50"
          >
            <div className="p-3 bg-green-500/10 rounded-2xl group-hover:text-green-400 transition-colors">
              <MessageCircle size={28} />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Instant</p>
              <p className="font-bold text-lg">WhatsApp Chat</p>
            </div>
          </a>
        </div>

        {/* Stats Grid - Enhanced */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto border-t border-white/10 pt-20">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
            <h4 className="text-4xl font-black text-green-400 mb-2">5+</h4>
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-black">Years Mastery</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
            <h4 className="text-4xl font-black text-emerald-400 mb-2">50+</h4>
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-black">Impact Projects</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
            <h4 className="text-4xl font-black text-teal-400 mb-2">100%</h4>
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-black">Pixel Precision</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
            <h4 className="text-4xl font-black text-blue-400 mb-2">UI/UX</h4>
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-black">Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;