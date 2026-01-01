
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass p-12 rounded-[2.5rem] border-zinc-800 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-indigo-600/5 -z-10"></div>
          
          <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.2em] mb-6">Connect With Me</h2>
          <h3 className="text-4xl md:text-6xl font-black mb-8">Ready to Build Something <br/><span className="gradient-text">Legendary?</span></h3>
          
          <p className="text-zinc-400 max-w-xl mb-12 text-lg">
            I'm currently accepting new projects and collaboration opportunities. 
            The fastest way to reach me is through Discord.
          </p>

          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-4 bg-[#5865F2] hover:bg-[#4752C4] px-10 py-5 rounded-2xl text-xl font-bold transition-all transform hover:scale-105"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                apex.xyz
              </a>
            </div>
            <p className="text-zinc-500 text-sm mono">
              Direct Messages only. Serious inquiries please.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
