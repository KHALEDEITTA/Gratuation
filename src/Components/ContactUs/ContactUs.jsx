import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { fetchAllBranches } from '../../store/branch/branchslic';

const ContactUs = () => {
  const scrollRef = useRef(null);
  const dispatch = useDispatch();
  const [selectedBranch, setSelectedBranch] = useState(null);

  useEffect(() => {
    dispatch(fetchAllBranches());
  }, [dispatch]);

  const { list } = useSelector((state) => state.branch);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const branchData = selectedBranch || list[0]; // الفرع المختار أو أول فرع افتراضيًا

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-80 bg-cover bg-center bgContactUs">
        <div className="absolute inset-0 bg-black bg-opacity-15 flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-5xl text-white font-semibold mb-4 ml-12">Contact Us</h1>
        </div>
      </div>

      <div className="px-10 ml-2 py-4 mb-5 text-lg text-gray-600 space-x-2">
        <Link to={'/'} className="px-3 hover:text-slate-800">Home</Link> {'>'} <span className="px-2 text-slate-700 font-semibold">Contact Us</span>
      </div>

      <div className="flex items-center px-12 py-10">
        <button
          onClick={scrollLeft}
          className="bg-gray-200 hover:bg-red-600 hover:text-white p-2 rounded-full"
        >
          <AiOutlineLeft size={20} />
        </button>
<div className="mx-auto px-3 w-full max-w-5xl">
  <div
    ref={scrollRef}
    className="flex overflow-x-auto no-scrollbar space-x-3"
    style={{ scrollBehavior: 'smooth' }}
  >
    {list.map((branch, index) => (
      <div
        key={index}
        onClick={() => setSelectedBranch(branch)}
        className={`flex-shrink-0 w-48 rounded-2xl border-2 px-6 py-3 text-center transition cursor-pointer ${
          selectedBranch?.id === branch.id
            ? 'bg-red-600 text-white border-red-600'
            : 'border-gray-200 hover:text-white hover:border-red-600 hover:bg-red-600'
        }`}
      >
        {branch.name}
      </div>
    ))}
  </div>
</div>

        <button
          onClick={scrollRight}
          className="bg-gray-200 hover:bg-red-600 hover:text-white p-2 rounded-full z-10"
        >
          <AiOutlineRight size={20} />
        </button>
      </div>

      {branchData ? (
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
          <div className="flex-1 space-y-12">
            <h2 className="text-4xl font-semibold text-gray-800">{branchData?.name}</h2>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-red-600 text-2xl mt-1" />
              <div>
                <h4 className="text-2xl font-semibold text-gray-700 mb-1">Location</h4>
                <p className="text-gray-600 text-lg">{branchData?.location || 'No location available'}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-red-600 text-2xl mt-1" />
              <div>
                <h4 className="text-2xl font-semibold text-gray-700 mb-1">Email Us</h4>
                <p className="text-gray-600 text-lg">{branchData?.email || 'No email available'}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhone className="text-red-600 text-2xl mt-1" />
              <div>
                <h4 className="text-2xl font-semibold text-gray-700 mb-1">Phone</h4>
                <p className="text-gray-600 text-lg">{branchData?.phone || 'No phone available'}</p>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Us Message</h2>
            <p className="text-gray-600 mb-8">
              Do you have anything on your mind to tell? Please don't hesitate to get in touch with us via our contact form.
            </p>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Mobile"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                placeholder="Write Message"
                rows="5"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded transition duration-300"
              >
                GET IN TOUCH
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 text-lg text-gray-500">Loading...</div>
      )}
    </div>
  );
};

export default ContactUs;
