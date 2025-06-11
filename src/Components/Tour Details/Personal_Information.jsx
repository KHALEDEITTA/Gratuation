/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useState } from 'react'
import G_Personal from '../../Assets/personal information.jpg'
import ground from '../../Assets/shutterstock_1519243514_ead2797924.webp'
import { Link, useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneTrip } from '../../store/trip/tripslic';
import { bookTrip } from '../../store/booking/bookingslic';
import { toast } from 'react-toastify';


function InputField({ label,setItem, type = "text", textarea = false ,placeholder}) {
    return (
      <div className="flex flex-col">
        <label className="mb-1 text-gray-700 font-medium">{label}</label>
        {textarea ? (
          <textarea
             onChange={(e)=>setItem(e.target.value)}
            rows={4}
            className="border p-2 rounded-md hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className="border p-2 rounded-md hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
         onChange={(e)=>setItem(e.target.value)}
         
            />
        )}
      </div>
    );
  }
  
  function SelectField({ label, options ,setItem}) {
    return (
      <div className="flex flex-col">
        <label className="mb-1 text-gray-700 font-medium">{label}</label>
        <select className="border p-2 rounded-md hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition" onChange={(e)=>setItem(e.target.value)}>
          {options.map((opt, idx) => (
            <option key={idx}>{opt}</option>
          ))}
        </select>
      </div>
    );
  }


export default function Personal_Information() {
 const param=useParams()
 const dispatch=useDispatch()
  useEffect(()=>{
dispatch(fetchOneTrip(param.id))

  },[])
 
const {currentTrip}=useSelector((state)=>state.trip)
const {status,id}=useSelector((state)=>state.payment)
const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nationality, setNationality] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [guideLanguage, setGuideLanguage] = useState("");
  const [specialRequirements, setSpecialRequirements] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [child, setchild] = useState(0);
const [adult,setadult]=useState(1)
const navigate=useNavigate()
const bookingId=sessionStorage.getItem('bookingId')


const totalprice=(child*(currentTrip?.price/2))+(adult*currentTrip?.price)
const onsubmitt=()=>{

  if(!firstName || !lastName || !email && !nationality && !guideLanguage && !bookingDate && !phone )
{
  toast.error("pleace enter full Info")
  return
}

const dataForm={


  "firstName": firstName,
    "lastName": lastName,
    "email":email,
    "phone": phone,
    "nationality":nationality,
    "hotelName": "tolip",
    "guideLanguage":guideLanguage,
    "specialRequirements": "",
    "bookingDate": bookingDate,
    "numberOfAdults": adult,
    "numberOfChildren": child


}
dispatch(bookTrip({ tripId:currentTrip.tripId, bookingData:dataForm }))


//  status
//  && 
 navigate(`/TourDetails/payment/`)
 toast.success('your order is success')
}
useEffect(()=>{

  console.log('jjj')
},[status])
  return (
 <> {
    currentTrip? 
      <>
           
    <div className="relative h-[25rem] w-full">
            <img
            src={G_Personal}
            alt="About Background"
            className="w-full h-full object-center"
        />
        </div>
        
        <div className="flex items-center justify-center space-x-6 mt-10">
 
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center">
          ✓
        </div>
        <p className="mt-2">Choose Package</p>
      </div>


      <div className="w-32 h-1 bg-red-600 mb-6" />


      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center">
          ✓
        </div>
        <p className="mt-2">Personal Information</p>
      </div>


      <div className="w-32 h-1 bg-gray-200 mb-6" />

    
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

    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="First Name" placeholder={'enter your first name'} setItem={setFirstName} />
        <InputField label="Last Name" placeholder={'enter your last name'} setItem={setLastName}/>
        <InputField label="Phone" placeholder={'enter your phone'} setItem={setPhone}/>
        <InputField label="Email" type="email" placeholder={'enter your email'} setItem={setEmail}/>
        <InputField label="Accommodation Hotel Name" setItem={setHotelName} />
        <SelectField
        setItem={setNationality}
            label="Customer Nationality"
            options={["Select country", "Egypt", "USA", "Germany"]}
        />
        <SelectField
        setItem={setGuideLanguage}
            label="Guide Language"
            options={["Select", "English", "Arabic", "French"]}
        />
        <div className="md:col-span-2">
            <InputField label="Special Requirements" textarea    setItem={setSpecialRequirements}/>
        </div>
        <div  >
            <div 
            className="mt-2 cursor-pointer w-[100%] ml-20 text-center flex justify-center items-center bg-red-600 text-white py-2 px-8 rounded hover:bg-red-700 transition"
         
            onClick={()=>onsubmitt()}
            >
              {status ?
                'Place Order':'proccessing'}
            </div>
        </div>
        
    </form>
        
    </div>

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
                <p className="font-medium">{currentTrip.label} </p>
                {/* <p className="text-sm text-gray-500">Date: 03-May-2025</p> */}
            </div>
        </div>
        <div className="text-sm text-gray-600">
            {/* <div className="flex justify-between ">
                <div className='flex flex-col'>
                    <span>Adult</span>
                    <span>$161</span>
                </div>
                <span>x1</span>
                <span>$161</span>
            </div> */}
        </div>
        </div>
        <div className="flex justify-between mt-4 text-lg font-bold text-red-600">
            {/* <span>Total payment</span>
            <span>${currentTrip.price}</span> */}
        </div>
           <div className="bg-gray-100 p-6 rounded shadow-md max-w-xl mx-auto">
                <h3 className="text-lg font-semibold mb-4">Total price</h3>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-red-600 font-medium">$ {totalprice}</span>
                  <span className="text-green-500 text-xl">✔</span>
                </div>
        
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Dates</label>
                    <input
                    onChange={(e)=>setBookingDate(e.target.value)}
                      type="date"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
        
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">Adults</label>
                      <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        onChange={(e)=>setadult(e.target.value)}
                      />
                    </div>
                 {
                    }
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">
                        Child 
                      </label>
                     <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        onChange={(e)=>setchild(e.target.value)}
                      />
                    </div>
                  </div>
        
                   
                </div>
              </div>
              
              
              
    </div>

    </div>

    
    
    
    </>:<div>loading</div>
  }</>
  )
}


