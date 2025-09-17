import React from 'react';
import { Code, Users, Zap } from 'lucide-react';

// Feature cards data
const features = [
  {
    icon: <Code size={48} className="text-cyan-400" />,
    title: 'Hands-on Workshops',
    description: 'Learn quantum programming with Qiskit through interactive coding sessions and real quantum hardware access.',
  },
  {
    icon: <Users size={48} className="text-purple-400" />,
    title: 'Expert Speakers',
    description: 'Hear from leading researchers and industry professionals about the latest developments in quantum computing.',
  },
  {
    icon: <Zap size={48} className="text-blue-400" />,
    title: 'Quantum Hardware',
    description: 'Get exclusive access to IBM\'s quantum computers and run your algorithms on real quantum hardware.',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
    >

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-20 bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-xl">
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
            About Qiskit Fall Fest
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join the global quantum computing community for an immersive experience in quantum programming, 
            algorithms, and the future of computing technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-24 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white/15"
            >
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-20 max-w-4xl mx-auto bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-xl">
          <img src="/images/quantumplators.png" alt="Quantumplators" className="mx-auto mb-6 w-40 h-auto" />
          <h2 className="text-4xl font-bold mb-4 text-cyan-300">Quantumplators</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Introducing Quantumplators, the pioneering Quantum Computing Special Team at VIT Chennai.
            Quantumplators is a dynamic force driven by passionate college students, charting new territories
            in the ever-expanding world of quantum computing. Our mission is to propel VIT Chennai into the
            quantum era by fostering quantum literacy, preparing for cutting-edge quantum hackathons,
            and providing ample research opportunities. With our dedicated student leaders at the helm,
            we aim to lead the charge in quantum exploration.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-xl">
          <img src="/images/qiskit.png" alt="IBM Qiskit" className="mx-auto mb-6 w-40 h-auto" />
          <h2 className="text-4xl font-bold mb-4 text-blue-300">IBM Qiskit</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Qiskit is an open-source framework developed by IBM for quantum computing. It allows users to
            create and run quantum programs on both simulators and real quantum hardware. Qiskit includes
            tools for building quantum circuits, simulating quantum systems, and developing quantum algorithms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
