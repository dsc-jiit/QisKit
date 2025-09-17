import React, { useState, useEffect } from 'react';
import { Mail, MapPin } from 'lucide-react';
import Home from './Home';
import About from './About';
import Schedule from './Schedule';
import Workshops from './Workshops';
import Register from './Register';
import backgroundImage from '../assets/maths.png';
import badgeLogo from '../assets/Badge_02.png';
import themeImage from '../assets/Theme.png';
import confetti from 'canvas-confetti';
import catImage from '../assets/Cat_01.png';
import dscLogo from '../assets/dsc.png';


const QiskitFallFest = () => {
  const [showCatBubble, setShowCatBubble] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowCatBubble(false);
      }, 10000); 

      return () => clearTimeout(timer);
    }, []);

  const handleBubbleClick = () => {
    setShowCatBubble(true);

    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
      scalar: 1.2,
    });
    setTimeout(() => setShowCatBubble(false), 5000);
  };
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      <div className="fixed inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt="Quantum computing background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      {/* 100 years wala */}
      <div 
          className="fixed bottom-4 right-4 z-50 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
          onClick={handleBubbleClick}
        >
          <img 
            src={themeImage} 
            alt="Years of Quantum Mechanics" 
            className="h-16 w-auto"
          />
        </div>
      {/* bg elements*/}
      <div className="fixed inset-0 opacity-20 z-10">
        <div 
          className="absolute top-20 left-10 w-32 h-32 border-2 border-cyan-400 rotate-45 animate-pulse"
          style={{ transform: `rotate(${45 + scrollY * 0.1}deg)` }}
        />
        <div 
          className="absolute top-40 right-20 w-24 h-24 rounded-full border-2 border-blue-400"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-40 left-1/4 w-20 h-20 border-2 border-purple-400 rotate-12"
          style={{ transform: `rotate(${12 + scrollY * 0.15}deg)` }}
        />
        <div 
          className="absolute top-60 right-1/3 text-cyan-200 font-mono text-lg opacity-60"
          style={{ transform: `translateX(${scrollY * 0.1}px)` }}
        >
          |ψ⟩ = α|0⟩ + β|1⟩
        </div>
        <div 
          className="absolute bottom-60 right-10 text-blue-200 font-mono text-sm opacity-60"
          style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
        >
          H = ½(X + Z)
        </div>
        <div 
          className="absolute top-32 left-1/4 text-purple-200 font-mono text-2xl opacity-50 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.05}px) rotate(${scrollY * 0.02}deg)` }}
        >
          3.14159
        </div>
        <div 
          className="absolute top-80 right-1/4 text-cyan-300 font-mono text-xl opacity-55"
          style={{ transform: `translateX(${-scrollY * 0.08}px)` }}
        >
          1.618
        </div>
        <div 
          className="absolute bottom-32 left-10 text-blue-300 font-mono text-lg opacity-50"
          style={{ transform: `translateY(${-scrollY * 0.12}px)` }}
        >
          2.718
        </div>
        <div 
          className="absolute top-96 left-3/4 text-indigo-200 font-mono text-sm opacity-60"
          style={{ transform: `translateX(${scrollY * 0.06}px) translateY(${scrollY * 0.04}px)` }}
        >
          1.414
        </div>
        <div 
          className="absolute bottom-80 right-1/3 text-teal-200 font-mono text-xl opacity-55 animate-bounce"
          style={{ animationDuration: '4s' }}
        >
          0.577
        </div>
        <div 
          className="absolute top-44 left-1/6 text-green-300 font-mono text-sm opacity-50"
          style={{ transform: `translateX(${scrollY * 0.07}px)` }}
        >
          def quantum_gate():
        </div>
        <div 
          className="absolute top-72 right-1/6 text-yellow-300 font-mono text-xs opacity-55"
          style={{ transform: `translateY(${scrollY * 0.09}px)` }}
        >
          import numpy as np
        </div>
        <div 
          className="absolute bottom-44 left-1/3 text-pink-200 font-mono text-sm opacity-50"
          style={{ transform: `translateX(${-scrollY * 0.05}px)` }}
        >
          circuit.measure()
        </div>
        <div 
          className="absolute top-1/2 left-20 text-orange-200 font-mono text-xs opacity-60"
          style={{ transform: `translateY(${scrollY * 0.11}px) rotate(${scrollY * 0.01}deg)` }}
        >
          qiskit.execute()
        </div>
        <div 
          className="absolute bottom-1/3 right-20 text-lime-200 font-mono text-sm opacity-55"
          style={{ transform: `translateY(${-scrollY * 0.08}px)` }}
        >
          backend.run()
        </div>
        <div 
          className="absolute top-1/3 right-1/2 text-violet-200 font-mono text-xs opacity-50"
          style={{ transform: `translateX(${scrollY * 0.04}px)` }}
        >
          for i in range(n):
        </div>
        <div 
          className="absolute bottom-1/4 left-1/2 text-rose-200 font-mono text-sm opacity-55"
          style={{ transform: `translateY(${scrollY * 0.06}px)` }}
        >
          matrix @ vector
        </div>
        <div 
          className="absolute top-1/4 left-3/4 text-sky-200 font-mono text-xs opacity-60 animate-pulse"
          style={{ animationDuration: '3s' }}
        >
          quantum_state
        </div>
        
        {/* lines*/}
        <svg className="absolute inset-0 w-full h-full opacity-25">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <line x1="0" y1="200" x2="400" y2="200" stroke="url(#lineGradient)" strokeWidth="2" />
          <line x1="0" y1="400" x2="600" y2="300" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="300" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="400" y1="100" x2="800" y2="100" stroke="url(#lineGradient)" strokeWidth="1.5" />
          <line x1="600" y1="500" x2="1000" y2="400" stroke="url(#lineGradient)" strokeWidth="1" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src={badgeLogo} 
                alt="Qiskit Fall Fest 2025" 
                className="w-10 h-10" 
              />
              {/* Add JIIT logo */}
              <img 
                src={dscLogo} 
                alt="DSC" 
                className="w-12 h-12 " 
              />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Qiskit Fall Fest
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#schedule" className="hover:text-cyan-400 transition-colors">Schedule</a>
              <a href="#workshops" className="hover:text-cyan-400 transition-colors">Workshops</a>
              <a href="#register" className="hover:text-cyan-400 transition-colors">Register</a>
            </div>
          </div>
        </div>
      </nav>
      <Home scrollY={scrollY} />
      <About />
      <Schedule />
      <Workshops />
      <Register />
      {showCatBubble && (
        <div className="fixed bottom-28 right-6 z-50 animate-fadeIn">

          <div className="relative bg-white/20 backdrop-blur-xl border-2 border-blue-300/70 rounded-full p-6 w-60 h-60 flex flex-col items-center justify-center shadow-2xl shadow-cyan-400/20 animate-float">
            <div className="absolute -bottom-4 right-8 w-8 h-8 bg-white/20 backdrop-blur-xl border-r-2 border-b-2 border-blue-300/60 transform rotate-45"></div>
            <div className="relative mb-3">
              <div className="animate-bounce" style={{ animationDuration: '2s' }}>
                <img 
                  src={catImage} 
                  alt="Schrödinger's Cat" 
                  className="w-16 h-16 object-contain rounded-full border-2 border-cyan-300/50 shadow-lg shadow-cyan-400/30"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-pulse -z-10"></div>
            </div>
            <div className="text-center px-2">
              <div className="text-lg font-semibold text-white bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Schrödinger's Cat
              </div>
              <div className="text-sm  mt-1">
                Turns 100 🎉
              </div>
            </div>
            
            <div className="absolute top-2 left-4 text-cyan-400/60 animate-pulse">⚛️</div>
            <div className="absolute bottom-4 right-2 text-purple-400/60 animate-ping" style={{ animationDuration: '3s' }}>🔬</div>
            <div className="absolute top-6 right-6 text-blue-400/50 animate-spin" style={{ animationDuration: '8s' }}>🌌</div>
          </div>
        </div>
      )}
      {/* footer */}
      <footer className="w-full py-10 border-t border-white/20 bg-white/10 backdrop-blur-lg relative z-20">
        <div className="w-full px-0">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-10">
              <img 
                src={badgeLogo} 
                alt="Qiskit Fall Fest 2025" 
                className="w-16 h-16 drop-shadow-[0_0_15px_rgba(30,200,238,0.4)]" 
              />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Qiskit Fall Fest 2025
              </span>
            </div>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
              <a href="#" className="flex items-center justify-center text-gray-200 hover:text-cyan-400">
                <Mail className="mr-2" size={20} />
                contact@qiskitfalltest.org
              </a>
              <a href="#" className="flex items-center justify-center text-gray-200 hover:text-cyan-400">
                <MapPin className="mr-2" size={20} />
                In-person Event
              </a>
            </div>
            <p className="text-gray-300">&copy; 2025 IBM Qiskit Fall Fest. All rights reserved.</p>
          </div>
        </div>
      </footer>


      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

      `}</style>
    </div>
  );
};

export default QiskitFallFest;