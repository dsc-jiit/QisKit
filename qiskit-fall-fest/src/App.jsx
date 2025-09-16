import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, Users, Code, Zap, Award, Mail, MapPin } from 'lucide-react';

const QiskitFallFest = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-20">
        {/* Geometric Shapes */}
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
        
        {/* Mathematical Formulas */}
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

        {/* Moving Mathematical Numbers */}
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

        {/* Moving Coding Words */}
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
        
        {/* Circuit-like Lines */}
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
        </svg>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-800/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                QISKIT
              </span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-light mb-4 text-blue-200">
              Fall Fest 2025
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Dive into the quantum realm with hands-on workshops, expert talks, and cutting-edge research in quantum computing
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1">
              Register Now
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="mx-auto text-cyan-400" size={32} />
          </div>
        </div>

        {/* Floating Quantum Gates */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 left-10 w-16 h-16 border-2 border-cyan-400/50 rounded-lg flex items-center justify-center animate-float"
            style={{ animationDelay: '0s' }}
          >
            <span className="text-cyan-400 font-bold">H</span>
          </div>
          <div 
            className="absolute top-1/3 right-20 w-16 h-16 border-2 border-purple-400/50 rounded-lg flex items-center justify-center animate-float"
            style={{ animationDelay: '1s' }}
          >
            <span className="text-purple-400 font-bold">X</span>
          </div>
          <div 
            className="absolute bottom-1/3 left-1/3 w-16 h-16 border-2 border-blue-400/50 rounded-lg flex items-center justify-center animate-float"
            style={{ animationDelay: '2s' }}
          >
            <span className="text-blue-400 font-bold">Z</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About Qiskit Fall Fest
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join the global quantum computing community for an immersive experience in quantum programming, 
              algorithms, and the future of computing technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-blue-800/30 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <Code className="text-cyan-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Hands-on Workshops</h3>
              <p className="text-gray-300">
                Learn quantum programming with Qiskit through interactive coding sessions and real quantum hardware access.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-xl border border-blue-800/30 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <Users className="text-purple-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Expert Speakers</h3>
              <p className="text-gray-300">
                Hear from leading researchers and industry professionals about the latest developments in quantum computing.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-xl border border-blue-800/30 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <Zap className="text-blue-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Quantum Hardware</h3>
              <p className="text-gray-300">
                Get exclusive access to IBM's quantum computers and run your algorithms on real quantum hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Event Schedule
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { time: '9:00 AM', title: 'Opening Ceremony', desc: 'Welcome and introduction to quantum computing' },
                { time: '10:30 AM', title: 'Quantum Basics Workshop', desc: 'Introduction to qubits, gates, and circuits' },
                { time: '1:00 PM', title: 'Lunch & Networking', desc: 'Connect with fellow quantum enthusiasts' },
                { time: '2:30 PM', title: 'Advanced Algorithms', desc: 'Quantum algorithms and applications' },
                { time: '4:00 PM', title: 'Hardware Access Lab', desc: 'Run experiments on real quantum computers' },
                { time: '5:30 PM', title: 'Closing & Awards', desc: 'Wrap-up and recognition ceremony' }
              ].map((event, index) => (
                <div key={index} className="flex items-center p-6 bg-slate-800/30 rounded-xl border border-blue-800/20">
                  <div className="w-24 text-cyan-400 font-bold text-lg">{event.time}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-300">{event.desc}</p>
                  </div>
                  <Calendar className="text-blue-400" size={24} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Ready to Join?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Secure your spot at Qiskit Fall Fest 2025. Limited seats available for this exclusive quantum computing event.
          </p>
          
          <div className="max-w-md mx-auto bg-slate-800/50 p-8 rounded-xl border border-blue-800/30">
            <div className="mb-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">Free</div>
              <p className="text-gray-300">Open to all students and professionals</p>
            </div>
            
            <ul className="text-left mb-8 space-y-3">
              <li className="flex items-center">
                <Award className="text-green-400 mr-3" size={20} />
                <span>Workshop materials included</span>
              </li>
              <li className="flex items-center">
                <Zap className="text-blue-400 mr-3" size={20} />
                <span>Quantum hardware access</span>
              </li>
              <li className="flex items-center">
                <Users className="text-purple-400 mr-3" size={20} />
                <span>Networking opportunities</span>
              </li>
            </ul>
            
            <button className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1">
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-blue-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Qiskit Fall Fest 2025
              </span>
            </div>
            <div className="flex justify-center space-x-8 mb-6">
              <a href="#" className="flex items-center text-gray-400 hover:text-cyan-400">
                <Mail className="mr-2" size={20} />
                contact@qiskitfalltest.org
              </a>
              <a href="#" className="flex items-center text-gray-400 hover:text-cyan-400">
                <MapPin className="mr-2" size={20} />
                Virtual Event
              </a>
            </div>
            <p className="text-gray-400">&copy; 2025 IBM Qiskit Fall Fest. All rights reserved.</p>
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
      `}</style>
    </div>
  );
};

export default QiskitFallFest;