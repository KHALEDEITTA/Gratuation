
export default function UpFoot() {
  return (
    <div
    className="bg-cover  bg-center bg-no-repeat py-7 px-5 md:px-20 mx-10 rounded-xl flex justify-center items-center footer"
    
    >
        
      <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl  max-w-5xl w-full text-center flex gap-10 ">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800">
          Subscribe to our newsletter
        </h2>
        <p className="text-gray-700 mt-2">
          Join our mailing list to receive monthly news and updates about our developments
        </p>
      </div>

        <div className="mt-5 flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-red-600 text-white px-6 py-2 rounded-md shadow hover:bg-red-700 transition">
            Subscribe
          </button>
        </div>
        
        
      </div>
      
    </div>
  );
}
