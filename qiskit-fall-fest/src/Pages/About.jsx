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
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-xl">
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-tight text-left">
            Why join?
          </h2>
          <ul className="text-xl text-gray-300 max-w-3xl leading-relaxed list-disc list-outside text-left">
            <li>Hands-On Learning: Build, simulate, and run your own quantum circuits using Qiskit.</li>
            <li>Real Quantum Machines: Experiment with IBM’s actual quantum computers.</li>
            <li>Fun Challenges & Workshops: Solve quantum puzzles, explore algorithms, and test your skills.</li>
            <li>For Everyone: No prior experience needed—perfect for beginners and enthusiasts alike.</li>
            <li>Connect & Collaborate: Meet fellow quantum learners from around the world.</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-24 max-w-6xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white/15"
            >
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-left">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed text-left">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-20 max-w-4xl bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-xl">
          <h2 className="text-4xl font-bold mb-4 text-cyan-300 text-left">Qiskit Fall Fest!</h2>
          <ul className="text-gray-300 text-lg leading-relaxed list-disc list-outside text-left">
            <li>Step into the fascinating world of quantum computing with Qiskit, IBM’s open-source Python toolkit.</li>
            <li>Learn, build, and run quantum circuits on simulators and real quantum computers.</li>
            <li>Have fun and explore cutting-edge technology.</li>
            <li>Perfect for beginners or anyone curious about quantum computing.</li>
            <li>Experiment, innovate, and be part of the quantum revolution.</li>
          </ul>
        </div>
        <div className="max-w-4xl bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-xl">
          <h2 className="text-4xl font-bold mb-4 text-blue-300 text-left">IBM Qiskit</h2>
          <ul className="text-gray-300 text-lg leading-relaxed list-disc list-outside text-left">
            <li>IBM’s open-source Python toolkit for quantum computing.</li>
            <li>Create, simulate, and run quantum circuits on simulators or real quantum machines.</li>
            <li>Makes quantum learning and experimentation easy and accessible.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
