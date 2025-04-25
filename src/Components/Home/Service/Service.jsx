import React from 'react';
import { FaPlane, FaCalendarAlt, FaMapMarkerAlt, FaCogs } from 'react-icons/fa';

const services = [
  { icon: <FaCalendarAlt />, title: 'Calculated Weather', desc: 'Built Wicket longer admire do barton vanity itself do in.' },
  { icon: <FaPlane />, title: 'Best Flights', desc: 'Engrossed listening. Park gate sell they west hard for the.' },
  { icon: <FaMapMarkerAlt />, title: 'Local Events', desc: 'Barton vanity itself do in it. Preferred to men it engrossed listening.' },
  { icon: <FaCogs />, title: 'Customization', desc: 'We deliver outsourced aviation services for military customers.' },
];

const Services = () => {
  return (
    <section className="py-12 px-6 text-center bg-white">
      <h2 className="text-3xl font-bold mb-10 text-blue-900">We Offer Best Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {services.map((s, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-xl transition">
            <div className="text-3xl text-blue-500 mb-4">{s.icon}</div>
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-gray-500">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;