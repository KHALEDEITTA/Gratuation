import { ChevronLeft, ChevronRight } from "lucide-react";
import one from '../../../Assets/review_1.jpg'
import two from '../../../Assets/review_2.jpg'
import three from '../../../Assets/review_3.jpg'
import four from '../../../Assets/review_4.jpg'
import { useState } from "react";

const slides = [
  {
    id: 1,
    image: one, // <-- استبدلها بالصورة الثانية
    number: 1,
    title: "Youssef Gamal",
    city : "Dubai, UAE",
    text: "I’ve tried several websites, but this one was the best in terms of variety of options and speed of confirmation. I booked a full European trip – flights, hotels, attraction tickets – and everything went smoothly!"
  },
  {
    id: 2,
    image: two, // <-- استبدلها بالصورة الأولى
    number: 2,
    title: "Sarah Al-Mansour",
    city : "Riyadh, Saudi Arabia",
    text: "Customer service was fantastic and helped me when there was a change in my flight schedule. The prices were very competitive, and the interface was easy to use – even for someone not used to booking online."
  },
  {
    id: 3,
    image: three, // <-- استبدلها بالصورة الأولى
    number: 3,
    title: "Ahmed Sami",
    city : "Cairo, Egypt",
    text: "My experience was excellent! I was able to book my flight and hotel in less than 10 minutes, and at a cheaper price than all the other sites I’ve tried before. I highly recommend this site to anyone who loves to travel."
  },
  {
    id: 4,
    image: four, // <-- استبدلها بالصورة الأولى
    number: 4,
    title: "Layla Hassan",
    city : "Amman, Jordan",
    text: "Everything was seamless from start to finish. I booked a last-minute trip and was amazed at how quickly I received confirmation. The travel packages are well-organized, and the prices are unbeatable. I’ll definitely be using this service again!"
  }
];

const Comments = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const { image, number, title, text ,city } = slides[current];

  return (<>
    <section className="px-4 py-12 md:px-16 lg:px-24 bg-white">
      <div className="text-left mb-1 flex justify-between ">
        <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Reviews</h2>
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
          className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-600 text-white hover:bg-orange-700"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      </div>
      

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image with Number */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg w-2/3 lg:w-1/4">
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
            <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-3 flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round-icon lucide-circle-user-round mt-1"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
                {title}</h3>
            <h4 className="text-2xl md:text-xl ml-2 font-bold text-orange-400 mb-3 flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pinned-icon lucide-map-pinned"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/></svg>
                {city}</h4>
          <p className="text-gray-600 font-serif w-2/3 text-base leading-relaxed">
            {text}
          </p>
         
        </div>
      </div>

    </section>
    </>
  );
};

export default Comments;