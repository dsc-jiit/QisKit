import React from 'react';
import { Calendar } from 'lucide-react';

const Schedule = () => {
  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Event Schedule
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {[
              { time: '9:00 AM', title: 'TBA', desc: 'TBD' },
              { time: '10:30 AM', title: 'TBA', desc: 'TBD' },
              { time: '1:00 PM', title: 'TBA', desc: 'TBD' },
              { time: '2:30 PM', title: 'TBA', desc: 'TBD' },
              { time: '4:00 PM', title: 'TBA', desc: 'TBD' },
              { time: '5:30 PM', title: 'TBA', desc: 'TBD' }
            ].map((event, index) => (
              <div key={index} className="flex items-center p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
                <div className="w-24 text-cyan-400 font-bold text-lg">{event.time}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-200">{event.desc}</p>
                </div>
                <Calendar className="text-blue-400" size={24} />
              </div>
            ))}
          </div>
        </div>

        {/* Event Details Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Event Details
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Dates */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Dates</h3>
              <p className="text-gray-300">7 - 9 November</p>
              <p className="text-gray-300">2025</p>
            </div>

            {/* Venue */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Venue</h3>
              <p className="text-gray-300">JIIT Noida</p>
            </div>

            {/* Speakers */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Speakers</h3>
              <p className="text-gray-300">TBA</p>
              <p className="text-gray-400 text-sm mt-2">(To Be Announced)</p>
            </div>

            {/* Mode */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mode</h3>
              <p className="text-gray-300">Offline - In Person</p>
              <p className="text-gray-400 text-sm mt-2">Hands-on Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;