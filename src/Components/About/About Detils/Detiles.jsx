import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import one from '../../../Assets/one about.jpg'
import two from '../../../Assets/two about.jpg'
import three from '../../../Assets/three about.jpg'
import four from '../../../Assets/four about.jpg'
import five from '../../../Assets/five about.jpg'

const slides = [
  {
    id: 1,
    image: one, // <-- استبدلها بالصورة الثانية
    number: 1,
    title: "INTERNATIONAL OFFICES",
    text: `Travco’s professional operational staff serves all needs, together with its international
      presence in Egypt, UAE, Jordan, Qatar, Morocco, Zanzibar, and Oman. It is capable of
      serving international travel partners and Tour operators with tailored travel solutions in the region.`
  },
  {
    id: 2,
    image: two, // <-- استبدلها بالصورة الأولى
    number: 2,
    title: "TECHNOLOGY",
    text: `Travco equips its partners with cutting-edge technology through onboard Juniper software across all its offices,
            supported by XML integration. Additionally, we are connected to multiple leading platforms such as peakwork, TraSo ,Anixe ,XML Travelgate and many others`
  },
  {
    id: 3,
    image: three, // <-- استبدلها بالصورة الأولى
    number: 3,
    title: "BRANCHES",
    text: `Our branches located in Egypt in Cairo, Hurghada, Makadi, Marsa Alam, Sharm El Sheikh, Taba, Aswan, Luxor, Alexandria and Marsa Matruh.`
  },
  {
    id: 4,
    image: four, // <-- استبدلها بالصورة الأولى
    number: 4,
    title: "NETWORK",
    text: `Our strong network of local and international partners guarantees the finest, most innovative, and affordable services in the market.

`
  },
  {
    id: 5,
    image: five, // <-- استبدلها بالصورة الأولى
    number: 5,
    title: "LARGEST PORTFOLIO",
    text: `Travco owns the largest portfolio of hotels & resorts, fleet of transportation and cruises in the Middle East;
      all powered by the destination management company and has won many prestigious travel industry awards
      including the World Travel Award for 23 consecutive years.`
  },
];

const Detiles = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const { image, number, title, text } = slides[current];

  return (<>
    <section className="px-4 py-12 md:px-16 lg:px-24 bg-white">
      <div className="text-left mb-10 flex justify-between ">
        <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Why Work With Us?</h2>
        <p className="text-gray-500 text-lg mt-2">Incomparable Experts in the Travel Industry</p>
      </div>
        <div className="flex justify-end items-center gap-4 mt-8">
        <button
          onClick={prevSlide}
          className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      </div>
      

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image with Number */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg w-full lg:w-1/3">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute bottom-0 left-0 bg-white text-gray-800 text-lg font-medium px-4 py-1 rounded-tr-3xl">
            {number}
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-600 text-base leading-relaxed">
            {text}
          </p>
        </div>
      </div>

    </section>
    </>
  );
};

export default Detiles;
