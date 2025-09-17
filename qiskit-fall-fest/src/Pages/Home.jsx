import React from "react";
import { ChevronDown } from "lucide-react";
import QiskitImage from "../assets/Qiskit_01.png";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black"
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        <div className="lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src={QiskitImage}
            alt="Qiskit Logo"
            className="h-[400px] w-auto object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.5)] animate-pulse-slow"
          />
        </div>

        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          {/* Heading */}
          <h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Qiskit Fall Fest 2025
          </h1>

          {/* Subheading */}
          <h2
            className="text-xl md:text-2xl text-blue-300 font-semibold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            The Century of Quantum ⚛️  
          </h2>

          {/* Divider */}
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 rounded-full mx-auto lg:mx-0"></div>

          {/* Description */}
          <p
            className="text-lg text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Join us for an immersive journey into the next 100 years of quantum mechanics — 
            featuring hands-on workshops, expert-led sessions, and real-world problem solving.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg text-white hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Register Now
            </button>
            <button
              className="px-8 py-4 border-2 border-cyan-400 rounded-xl font-semibold text-lg text-cyan-300 hover:bg-cyan-400/10 transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-cyan-400" size={36} />
      </div>

      {/* Floating Quantum Gates */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-20 w-16 h-16 border-2 border-cyan-400/50 rounded-lg flex items-center justify-center animate-float"
          style={{ animationDelay: "0s" }}
        >
          <span className="text-cyan-400 font-bold">H</span>
        </div>
        <div
          className="absolute top-1/3 right-32 w-16 h-16 border-2 border-purple-400/50 rounded-lg flex items-center justify-center animate-float"
          style={{ animationDelay: "1s" }}
        >
          <span className="text-purple-400 font-bold">X</span>
        </div>
        <div
          className="absolute bottom-1/5 left-1/4 w-16 h-16 border-2 border-blue-400/50 rounded-lg flex items-center justify-center animate-float"
          style={{ animationDelay: "2s" }}
        >
          <span className="text-blue-400 font-bold">Z</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;
