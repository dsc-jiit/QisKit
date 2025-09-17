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
      </div>
    </section>
  );
};

export default Schedule;