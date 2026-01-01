
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch(currentPage) {
      case 'About': return <About />;
      case 'Skills': return <Skills />;
      case 'Projects': return <Projects />;
      case 'Contact': return <Contact />;
      default: return <Hero setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>
      </div>

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="pt-16">
        {renderPage()}
      </main>

      <footer className="py-12 border-t border-zinc-900 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center">
              <span className="text-white text-[10px] font-black italic">A</span>
            </div>
            <span className="text-zinc-500 font-bold tracking-tighter text-sm uppercase">Apex Engineering</span>
          </div>
          <p className="text-zinc-600 text-xs mono">
            © {new Date().getFullYear()} — Built with Rust, Python & TypeScript.
          </p>
          <div className="flex gap-6 text-zinc-500 text-sm">
            <span className="opacity-50">Systems Architecture • Full-Stack • AI</span>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;
