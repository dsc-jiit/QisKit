import React from "react";
import { ChevronDown } from "lucide-react";
import QiskitImage from "../assets/Qiskit_01.png";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black"
    >
      <div className="container mx-auto px-6">
        <div
          className="w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 transition-all duration-300"
        >
          <div className="lg:w-2/5 flex justify-center lg:justify-start">
            <img
              src={QiskitImage}
              alt="Qiskit Logo"
              className="h-[260px] w-auto object-contain drop-shadow-[0_0_20px_rgba(80,211,220,0.5)]"
            />
          </div>

          <div className="lg:w-3/5 text-center lg:text-left space-y-5">
            <h1
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Qiskit Fall Fest 2025
            </h1>

            <h2
              className="text-lg md:text-xl text-blue-400 font-medium tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Celebrating a Century of Quantum 
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mx-auto lg:mx-0"></div>
            <p
              className="text-base md:text-lg text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Join us as we honor 100 years of quantum mechanics with cutting-edge workshops, expert talks, and hands-on quantum learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium text-white hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Register
              </button>
              <button
                className="px-6 py-3 border border-cyan-400 rounded-lg font-medium text-cyan-300 hover:bg-cyan-400/10 transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-cyan-400" size={28} />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-16 w-12 h-12 border border-cyan-400/40 rounded-lg flex items-center justify-center animate-float"
          style={{ animationDelay: "0s" }}
        >
          <span className="text-cyan-400 font-semibold">H</span>
        </div>
        <div
          className="absolute top-1/3 right-28 w-12 h-12 border border-purple-400/40 rounded-lg flex items-center justify-center animate-float"
          style={{ animationDelay: "1s" }}
        >
          <span className="text-purple-400 font-semibold">X</span>
        </div>
        <div
          className="absolute bottom-1/4 left-1/3 w-12 h-12 border border-blue-400/40 rounded-lg flex items-center justify-center animate-float"
          style={{ animationDelay: "2s" }}
        >
          <span className="text-blue-400 font-semibold">Z</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;
