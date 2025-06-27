import React, { useEffect, useState } from 'react'
import header from '../../../Assets/Banner-Hotel-Booking.jpg'
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneTrip } from '../../../store/trip/tripslic';
import { bookTrip } from '../../../store/booking/bookingslic';
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

export default function Hotel_Information() {
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
  const [Check_out, setCheck_out] = useState("");
  const [child, setchild] = useState(0);
const [adult,setadult]=useState(1)
const navigate=useNavigate()
const bookingId=sessionStorage.getItem('bookingId')


const totalprice=(child*(currentTrip?.price/2))+(adult*currentTrip?.price)
const onsubmitt=()=>{

  if(!firstName || !lastName || !email && !nationality && !guideLanguage && !bookingDate && !Check_out && !phone )
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
    "Check-out Date": Check_out,
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

  // console.log('jjj')
},[status])
  return (
    <>
    <div className="relative  h-[25rem] w-full">
            <img
            src={header}
            alt="About Background"
            className="w-full h-full object-center"
            />  
            
            <div className="absolute inset-0 flex items-center bg-black bg-opacity-5">
                <p className="text-white text-4xl ml-8 font-bold w-1/3">Hotel</p>
            </div>
            
        </div>
    
            <div className="flex items-center justify-center space-x-6 mt-10 ">
    
            <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center">
                    ✓
                </div>
                <p className="mt-2">Choose Data</p>
            </div>
    
    
            <div className="w-32 h-1 bg-red-600 mb-6" />
    
    
            <div className="flex flex-col items-center ">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center">
                    ✓
                </div>
                <p className="mt-2">Chooses Rooms</p>
            </div>
    
            <div className="w-32 h-1 bg-gray-200 mb-6" />
    
            <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center">
                    ✓
                </div>
                <p className="mt-2">Personal Information</p>
            </div>
        
            <div className="w-32 h-1 bg-gray-200 mb-6" />
            
            <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center">
                    ✓
                </div>
                <p className="mt-2">Booking</p>
            </div>
            <div className="w-32 h-1 bg-gray-200 mb-6" />
    
        
            <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border border-gray-400 text-gray-700 flex items-center justify-center">
                    5
                </div>
                <p className="mt-2">Booking Completed!</p>
            </div>
        </div>


        <div className="max-w-5xl mx-auto p-6 mt-14">
            <div className="flex items-center mb-14 mt-8">
            <div className="flex-grow border-t border-gray-300"></div>
            <h2 className="mx-4 text-xl font-semibold text-gray-600">Hotel Information</h2>
            <div className="flex-grow border-t border-gray-300"></div>
    </div>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="First Name" placeholder={'enter your first name'} setItem={setFirstName} />
        <InputField label="Last Name" placeholder={'enter your last name'} setItem={setLastName}/>
        <InputField label="Phone" placeholder={'enter your phone'} setItem={setPhone}/>
        <InputField label="Email" type="email" placeholder={'enter your email'} setItem={setEmail}/>
        
        <SelectField
        setItem={setNationality}
            label="Customer Nationality"
            options={["Select country", "Egypt", "USA", "Germany"]}
        />
        <SelectField
        setItem={setadult}
        
            label="Adults"
            options={[1, 2, 3, 4,5]}
        />
        <SelectField
        setItem={setchild}
            label="Childs"
            options={[0 ,1 ,2 ,3 ,4 ]}
        />
        <SelectField
        setItem={setGuideLanguage}
            label="Guide Language"
            
            options={["Select", "English", "Arabic", "French"]}
        />
        <InputField
          label="Check-in Date"
          placeholder="select a date"
          type="date"
          setItem={setBookingDate}
        />
        <InputField
          label="Check-out Date"
          placeholder="select a date"
          type="date"
          setItem={setCheck_out}
        />
        <div className="md:col-span-2">
            <InputField label="Special Requirements" textarea    setItem={setSpecialRequirements}/>
        </div>
        
        
        
    </form>
        <div className='w-1/2 m-auto mt-5' >
            <div 
            className="cursor-pointer w-[85%] text-center text-lg bg-red-600 text-white py-2 px-6 rounded-xl hover:bg-red-700 transition"
         
            onClick={()=>onsubmitt()}
            >
              {status ?
                'Place Order':'proccessing'}
            </div>
        </div>
    </div>
    </>
  )
}
