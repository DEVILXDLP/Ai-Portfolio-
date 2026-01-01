
import React from 'react';
import { LANGUAGES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-24 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-3">Core Expertise</h2>
          <h3 className="text-4xl font-bold">The Technical Arsenal</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {LANGUAGES.map((skill, index) => (
            <div 
              key={skill.name} 
              className="space-y-4 animate-in fade-in slide-in-from-left-10 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold border border-zinc-800"
                    style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                  >
                    {skill.name.charAt(0)}
                  </div>
                  <span className="text-xl font-semibold text-zinc-100">{skill.name}</span>
                </div>
                <span className="text-sm mono text-zinc-500">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                <div 
                  className="h-full rounded-full transition-all duration-1500 ease-out"
                  style={{ 
                    width: `${skill.level}%`, 
                    backgroundColor: skill.color,
                    boxShadow: `0 0 15px ${skill.color}60`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 glass rounded-[2rem] border-blue-500/20">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
            <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
            Extended Stack
          </h4>
          <div className="flex flex-wrap gap-3">
            {['Docker', 'Kubernetes', 'AWS', 'PostgreSQL', 'Redis', 'React', 'Node.js', 'Wasm', 'Next.js', 'PyTorch', 'Tensorflow'].map((tag, i) => (
              <span 
                key={tag} 
                className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-zinc-300 hover:border-blue-500/50 hover:text-white transition-all duration-300 animate-in zoom-in duration-500"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
