// TravcoPayment.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
const bookingId=sessionStorage.getItem('bookingId')
const Payment = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const onClick=()=>{
// dispatch(payForBooking({bookingId}))
toast.success('your payment is success')
navigate('/')
    }
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-black bg-opacity-80 text-center py-12">
        
      </div>

      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md mt-8 p-6">
        <div className="text-center font-semibold text-xl mb-4">Fevtour</div>

        <div className="border p-4 rounded-lg space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Payment details</label>
            <input
              type="text"
              placeholder="1234 1234 1234 1234"
              maxLength="19"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="MM"
              maxLength="2"
              className="w-1/3 border border-gray-300 rounded-md p-2 text-center"
            />
            <input
              type="text"
              placeholder="YY"
              maxLength="2"
              className="w-1/3 border border-gray-300 rounded-md p-2 text-center"
            />
            <input
              type="text"
              placeholder="CVV"
              maxLength="3"
              className="w-1/3 border border-gray-300 rounded-md p-2 text-center"
            />
          </div>

          {/* Payment Icons */}
          <div className="flex justify-end space-x-2 pt-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              className="h-6"
              alt="Visa"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              className="h-6"
              alt="Mastercard"
            />
          </div>
        </div>

        <div className="text-center text-lg font-medium mt-6 mb-4">
          USD <span className="font-bold">{'kjj'}</span>
        </div>

        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold" onClick={()=>onClick()}>
          PAY NOW
        </button>

        <div className="text-center mt-4 text-gray-600 cursor-pointer hover:underline">
          Cancel
        </div>
      </div>
    </div>
  );
};

export default Payment;
