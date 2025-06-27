import  { useEffect, useState } from 'react';
import img1 from '../../Assets/destination5.png';
import { Link, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchonedestination } from '../../store/destinationslic';
import { fetchAllNileCruises, filterNileCruisesByItinerary } from '../../store/nile_Curises/Nile_Cruisesslic';
import { fetchAllItineraries } from '../../store/iteriations/iterationslic';
import { all } from 'axios';

const TourNile = ({ tour }) => (
 <Link to={`/TourDetails/${tour.id}`}> <div className="bg-white rounded-2xl shadow-sm hover:shadow-2xl p-4 hover:text-red-600 w-full md:w-[300px] h-[390px]">
    <img src={tour.coverImage || img1} alt={tour.label} className="rounded-2xl mb-3 h-[180px] w-full object-cover" />
    <h3 className="mb-1.5">{tour.label}</h3>

    <div className="text-sm text-gray-600 flex items-center gap-5 mb-1.5">
      <span className='flex gap-2 mt-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className=" lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
        <span className='mt-1'>{tour.location || "Aswan"}</span>
        </span>
      {/* <span className='flex gap-2 mt-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <span>{tour.duration}</span></span> */}
    </div>

    <p className=" flex flex-col">
      <span className='text-md mt-2 text-gray-500 font-bold'>From</span> <span className=" font-extrabold flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 lucide lucide-dollar-sign-icon lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
         {tour.price}</span>
    </p>
  </div></Link>
);




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
            <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-red-600 mt-3 lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="border-b p-2 rounded-md hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
               onChange={(e)=>setItem(e.target.value)}
               
                  />
            </div>
        )}
      </div>
    );
  }
  
  function SelectField({ label, options ,setItem}) {
    return (
      <div className="flex flex-col">
        <label className="mb-1 text-gray-700 font-medium">{label}</label>
        <div className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mt-2 lucide lucide-user-round-plus-icon lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/></svg>
            <select className="border-b w-full p-2 rounded-md  hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition" onChange={(e)=>setItem(e.target.value)}>
          {options.map((opt, idx) => (
            <option key={idx}>{opt}</option>
          ))}
        </select>
        </div>
            
      </div>
    );
  }

const NileCruises = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selecteditieration, setitieration] = useState('All');
//   const [selectedGroupSizes, setSelectedGroupSizes] = useState([]);
    const [bookingDate, setBookingDate] = useState("");
    const [child, setchild] = useState(0);
  const [adult,setadult]=useState(1)

  const dispatch=useDispatch()
  useEffect(()=>{
 if(selecteditieration==="All"){
    dispatch(fetchAllNileCruises())
  }
  else
  dispatch(filterNileCruisesByItinerary(selecteditieration))




  },[selecteditieration])
  const [sortOrder, setSortOrder] = useState("none");
const {list}=useSelector((state)=>state.Cruises)

  const filteredTours = list
    .filter(tour => {
        const matchesSearch = tour.label.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedTypes.length ? selectedTypes.includes(tour.tripType) : true;
        const matchesDuration = selectedDurations.length ? selectedDurations.includes(tour.duration) : true;
        return matchesSearch && matchesType && matchesDuration ;
    })
    .sort((a, b) => {
        if (sortOrder === "asc") return a.price - b.price;
        if (sortOrder === "desc") return b.price - a.price;
        return 0;
    });


  return (
    <div className="font-serif">
      <div className="relative h-96 bg-cover bg-center bgnile" >
        <div className="absolute inset-0 bg-black bg-opacity-15 flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-5xl text-white font-semibold mt-5 ml-12">{'khh'}</h1>
        </div>
      </div>


    <div className="px-10 ml-2 py-4 mb-5 text-lg text-gray-600 space-x-2 ">
        <Link to={'/'} className='px-3 hover:text-slate-800'>Home</Link> {'>'} 
        <Link className='px-3 hover:text-slate-800'><span>Cruises
        </span></Link> 
    </div>


    <div className="p-10 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 ml-6">

        <aside className="space-y-6 border p-5 rounded-2xl shadow-sm h-[600px]">
            <h1 className='text-3xl ml-2 text-gray-800 '>Search</h1>
          <input
            type="text"
            placeholder="Search..."
            className="w-full border px-3 py-2 rounded-3xl"
            value={searchTerm}
            onChange={(e) => {
            setSearchTerm(e.target.value);
              // setPage(1);
            }}
        />
        <hr className='' />
                      {/* {console.log(listForOne)} */}
        <form className="grid grid-cols-1 gap-6">
           <SelectField
        setItem={setitieration}
            label="Itinerary"
            options={["All","7 Nights - Luxor / Aswan / Luxor","4 Nights - Luxor / Aswan","3 Nights - Aswan / Luxor"]}
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
        <hr />
        <InputField
          label="Date"
          placeholder="select a date"
          type="date"
          setItem={setBookingDate}
        />
        </form>
      
        
        </aside>

       
        <section>
          <div className="flex flex-wrap gap-6">
            {
                filteredTours.map(tour => 
                
             <Link to={`/NileCruises/${tour.id}`}>   <TourNile key={tour.id} tour={tour} /></Link>
              
              )
            }
          </div>
        </section>
      </div>
    </div>
  );
};

export default NileCruises;