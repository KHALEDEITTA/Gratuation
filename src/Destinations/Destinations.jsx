import React from 'react';

const destinations = [
  { city: 'Rome, Italy', price: '$3.42k', days: '10 Days Trip', img: 'https://i.ibb.co/F7hKJjB/rome.jpg' },
  { city: 'London, UK', price: '$4.2k', days: '12 Days Trip', img: 'https://i.ibb.co/3Cg8xSz/london.jpg' },
  { city: 'Full Europe', price: '$15k', days: '28 Days Trip', img: 'https://i.ibb.co/YXLPYWX/europe.jpg' },
];

const Destinations = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">Top Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {destinations.map((dest, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={dest.img} alt={dest.city} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{dest.city}</h3>
              <p className="text-gray-500 text-sm">{dest.price}</p>
              <p className="text-gray-400 text-sm">{dest.days}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;