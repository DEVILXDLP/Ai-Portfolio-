
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-3">Biography</h2>
            <h3 className="text-5xl font-bold mb-8">Crafting digital <br/><span className="gradient-text">masterpieces</span> since 2017.</h3>
            
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                My journey started with a fascination for how systems communicate. Over the past 7 years, 
                that fascination turned into a professional career building high-load distributed systems, 
                complex web architectures, and high-performance engines.
              </p>
              <p>
                I believe that software should be invisible—meaning it should be so efficient, intuitive, 
                and fast that the user never has to think about the technology behind it. This philosophy 
                drives every line of code I write.
              </p>
              <p>
                When I'm not in front of a terminal, I'm usually exploring open-source contributions, 
                mentoring junior developers, or building weird experimental CLI tools in Rust just for fun.
              </p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass p-8 rounded-3xl">
              <div className="aspect-square bg-zinc-900 rounded-2xl overflow-hidden mb-8 border border-zinc-800">
                 <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" alt="Apex Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <p className="text-xs text-zinc-500 uppercase font-bold mb-1">Based In</p>
                  <p className="text-white font-medium">Digital Nomad / SF</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <p className="text-xs text-zinc-500 uppercase font-bold mb-1">Education</p>
                  <p className="text-white font-medium">CS & Math</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
