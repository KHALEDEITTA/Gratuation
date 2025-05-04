/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import G_Personal from '../../Assets/personal information.jpg'
import ground from '../../Assets/shutterstock_1519243514_ead2797924.webp'
import { Link } from 'react-router';


function InputField({ label, type = "text", textarea = false }) {
    return (
      <div className="flex flex-col">
        <label className="mb-1 text-gray-700 font-medium">{label}</label>
        {textarea ? (
          <textarea
            rows={4}
            className="border p-2 rounded-md hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
        ) : (
          <input
            type={type}
            className="border p-2 rounded-md hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
        )}
      </div>
    );
  }
  
  function SelectField({ label, options }) {
    return (
      <div className="flex flex-col">
        <label className="mb-1 text-gray-700 font-medium">{label}</label>
        <select className="border p-2 rounded-md hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition">
          {options.map((opt, idx) => (
            <option key={idx}>{opt}</option>
          ))}
        </select>
      </div>
    );
  }


export default function Personal_Information() {

  return (
    <>
            {/* Header Ground  */}
    <div className="relative h-[25rem] w-full">
            <img
            src={G_Personal}
            alt="About Background"
            className="w-full h-full object-center"
        />
        </div>
        
        <div className="flex items-center justify-center space-x-6 mt-10">
      {/* Step 1 */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center">
          ✓
        </div>
        <p className="mt-2">Choose Package</p>
      </div>

      {/* خط */}
      <div className="w-32 h-1 bg-red-600 mb-6" />

      {/* Step 2 */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center">
          ✓
        </div>
        <p className="mt-2">Personal Information</p>
      </div>

      {/* خط */}
      <div className="w-32 h-1 bg-gray-200 mb-6" />

      {/* Step 3 */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full border border-gray-400 text-gray-700 flex items-center justify-center">
          3
        </div>
        <p className="mt-2">Booking Completed!</p>
      </div>
    </div>
    
    



    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-6xl mx-auto mt-24">
        <div className="max-w-4xl mx-auto p-6">

            <div className="flex items-center mb-8">
            <div className="flex-grow border-t border-gray-300"></div>
            <h2 className="mx-4 text-xl font-semibold text-gray-600">Personal Information</h2>
            <div className="flex-grow border-t border-gray-300"></div>
    </div>

      {/* النموذج */}
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="First Name" />
        <InputField label="Last Name" />
        <InputField label="Phone" />
        <InputField label="Email" type="email" />
        <InputField label="Accommodation Hotel Name" />
        <SelectField
            label="Customer Nationality"
            options={["Select country", "Egypt", "USA", "Germany"]}
        />
        <SelectField
            label="Guide Language"
            options={["Select", "English", "Arabic", "French"]}
        />
        <div className="md:col-span-2">
            <InputField label="Special Requirements" textarea />
        </div>
        <div className='' >
            <Link 
            className="mt-2 w-[100%] ml-20 text-center flex justify-center items-center bg-red-600 text-white py-2 px-8 rounded hover:bg-red-700 transition"
            to={''}
            >
                Place Order
            </Link>
        </div>
        
    </form>
        
    </div>

{/* Order Summary - One Third */}
    <div className="w-full h-full py-10 md:w-1/3 bg-gray-100 mt-8  p-4 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4">Your Order</h3>
        <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex gap-4 mb-4">
                <img
                src={ground}
                alt="Tour"
                className="rounded-md w-20 h-20"
                />
            <div>
                <p className="font-medium">Full day tour of Luxor Highlights</p>
                <p className="text-sm text-gray-500">Date: 03-May-2025</p>
            </div>
        </div>
        <div className="text-sm text-gray-600">
            <div className="flex justify-between ">
                <div className='flex flex-col'>
                    <span>Adult</span>
                    <span>$161</span>
                </div>
                <span>x1</span>
                <span>$161</span>
            </div>
        </div>
        </div>
        <div className="flex justify-between mt-4 text-lg font-bold text-red-600">
            <span>Total payment</span>
            <span>$161</span>
        </div>
    </div>

    </div>

    
    
    
    </>
  )
}


