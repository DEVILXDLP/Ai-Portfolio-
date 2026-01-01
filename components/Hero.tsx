
import React from 'react';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-xs font-medium text-zinc-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for new projects
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Engineering the <span className="gradient-text">Next Frontier</span> of Software.
          </h1>
          
          <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl">
            I'm Apex, a Senior Systems Architect & Full-Stack Developer with 7 years of experience 
            building high-performance applications in <span className="text-zinc-100 font-semibold">Rust, Python, and TypeScript.</span>
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setCurrentPage('Projects')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
            >
              View Work
            </button>
            <button 
              onClick={() => setCurrentPage('Contact')}
              className="px-8 py-4 glass hover:bg-zinc-800/50 text-white rounded-xl font-bold transition-all"
            >
              Get in Touch
            </button>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-zinc-800/50 animate-in fade-in duration-1000 delay-500">
          <div>
            <p className="text-3xl font-bold text-white mb-1">7+</p>
            <p className="text-zinc-500 text-sm uppercase tracking-wider">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white mb-1">50+</p>
            <p className="text-zinc-500 text-sm uppercase tracking-wider">Projects Delivered</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white mb-1">12+</p>
            <p className="text-zinc-500 text-sm uppercase tracking-wider">Tech Stacks</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white mb-1">∞ </p>
            <p className="text-zinc-500 text-sm uppercase tracking-wider">Passion for Code</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
