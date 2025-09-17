import React from 'react';

const Workshops = () => {
  return (
    <section id="workshops" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Workshops & Sessions
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our comprehensive workshop lineup designed for all skill levels, from quantum beginners to advanced researchers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { title: 'Quantum Computing Fundamentals', desc: 'Learn the basics of qubits, superposition, and entanglement with hands-on exercises.', level: 'Beginner' },
            { title: 'Qiskit Programming Workshop', desc: 'Dive deep into Qiskit programming with practical examples and real quantum hardware access.', level: 'Intermediate' },
            { title: 'Quantum Algorithms Deep Dive', desc: 'Explore advanced algorithms like Shor\'s and Grover\'s with implementation guidance.', level: 'Advanced' },
            { title: 'Quantum Hardware Lab', desc: 'Get hands-on experience with real quantum processors and learn about hardware limitations.', level: 'All Levels' },
            { title: 'Quantum Machine Learning', desc: 'Discover how quantum computing can enhance machine learning algorithms and applications.', level: 'Intermediate' },
            { title: 'Research Frontiers Panel', desc: 'Join leading researchers discussing the latest breakthroughs in quantum computing.', level: 'All Levels' }
          ].map((workshop, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{workshop.title}</h3>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">{workshop.level}</span>
              </div>
              <p className="text-gray-200">{workshop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;