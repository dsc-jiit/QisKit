import React from 'react';
import { Award, Zap, Users } from 'lucide-react';


const Register = () => {
  const handleRegisterClick = () => {
    console.log("Register button clicked");
    window.open(
      "https://forms.gle/6BQaanNVWippBydn6",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <section id="register" className="py-20">
      <div className=" z-10 container mx-auto px-6 text-center">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Ready to Join?
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Secure your spot at Qiskit Fall Fest 2025. Limited seats available for this exclusive quantum computing event.
          </p>
        </div>
        
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 relative">
          <div className="mb-6">
            <div className="text-3xl font-bold text-cyan-400 mb-2">Free</div>
            <p className="text-gray-200">Open to all students and professionals</p>
          </div>
          
          <ul className="text-left mb-8 space-y-3">
            <li className="flex items-center text-gray-200">
              <Award className="text-green-400 mr-3" size={20} />
              <span>Workshop materials included</span>
            </li>
            <li className="flex items-center text-gray-200">
              <Zap className="text-blue-400 mr-3" size={20} />
              <span>Quantum hardware access</span>
            </li>
            <li className="flex items-center text-gray-200">
              <Users className="text-purple-400 mr-3" size={20} />
              <span>Networking opportunities</span>
            </li>
          </ul>
          
          <button
  type="button"
  onClick={handleRegisterClick}
  className="w-full z-100 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1"
>
  Register
</button>

        </div>
      </div>
    </section>
  );
};

export default Register;