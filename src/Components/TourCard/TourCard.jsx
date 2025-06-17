

// const allTours = [
//   {
//     id: 1,
//     title: "Giza Pyramids, Sphinx and the Egyptian Museum Tour from Mersa Matruh",
//     image: img1,
//     location: "Mersa Matruh",
//     duration: "18 Hours",
//     price: 0,
//     type: "Cultural & Historical",
//     size: "Group Tour",
//     hours: "1 Day"
//   },
//   {
//     id: 2,
//     title: "Evening Nile Cruise with dinner and show in Cairo",
//     image: img1,
//     location: "Cairo",
//     duration: "4 Hours",
//     price: 64,
//     type: "Boat Trips & Cruises",
//     size: "Group Tour",
//     hours: "1 to 4 Hours"
//   },
//   {
//     id: 3,
//     title: "Cairo by Night at Alazhar Park with dinner",
//     image: img1,
//     location: "Cairo",
//     duration: "4 Hours",
//     price: 70,
//     type: "Night Tours",
//     size: "Group Tour",
//     hours: "1 to 4 Hours"
//   },
//   {
//     id: 4,
//     title: "Private transfer to/from Sphinx Airport",
//     image: img1,
//     location: "Cairo",
//     duration: "2 Hours",
//     price: 125,
//     type: "Airport Transfers",
//     size: "Group Tour",
//     hours: "1 to 4 Hours"
//   },
//   {
//     id: 5,
//     title: "Private Fayoum Oasis + Meidum Pyramid Tour",
//     image: img1,
//     location: "Cairo",
//     duration: "8 Hours",
//     price: 128,
//     type: "Adventure & Desert Tours",
//     size: "Group Tour",
//     hours: "1 Day"
//   },
//   {
//     id: 6,
//     title: "Full-day Giza Pyramids & Museum with lunch",
//     image: img1,
//     location: "Cairo",
//     duration: "8 Hours",
//     price: 129,
//     type: "Cultural & Historical",
//     size: "Group Tour",
//     hours: "1 Day"
//   }
// ];
import  { useEffect, useState } from 'react';
import img1 from '../../Assets/destination5.png';
import { Link, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchonedestination } from '../../store/destinationslic';

const TourCard = ({ tour }) => (
 <Link to={`/TourDetails/${tour.tripId}`}> <div className="bg-white rounded-2xl shadow-sm hover:shadow-2xl p-4 hover:text-red-600 w-full md:w-[300px] h-[390px]">
    <img src={tour.coverImage || img1} alt={tour.label} className="rounded-2xl mb-3 h-[180px] w-full object-cover" />
    <h3 className="mb-1.5">{tour.label}</h3>

    <div className="text-sm text-gray-600 flex items-center gap-5 mb-1.5">
      <span className='flex gap-2 mt-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className=" lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
        <span className='mt-1'>{tour.location || "Aswan"}</span>
        </span>
      <span className='flex gap-2 mt-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <span>{tour.duration}</span></span>
    </div>

    <p className=" flex flex-col">
      <span className='text-md mt-2 text-gray-500 font-bold'>From</span> <span className=" font-extrabold flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 lucide lucide-dollar-sign-icon lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
         {tour.price}</span>
    </p>
  </div></Link>
);

const DestinationGuide = () => {
  const param=useParams()
  // const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedGroupSizes, setSelectedGroupSizes] = useState([]);
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(fetchonedestination(param.id))

  },[])
  const [sortOrder, setSortOrder] = useState("none");
const {listForOne,desinationName}=useSelector((state)=>state.destinations)
  const handleCheckboxChange = (value, setState) => {
    setState(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
    // setPage(1);
  };
  const filteredTours = listForOne
    .filter(tour => {
      const matchesSearch = tour.label.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedTypes.length ? selectedTypes.includes(tour.tripType) : true;
      const matchesDuration = selectedDurations.length ? selectedDurations.includes(tour.duration) : true;
      // const matchesSize = selectedGroupSizes.length ? selectedGroupSizes.includes(tour.size) : true;
      return matchesSearch && matchesType && matchesDuration ;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  // const toursPerPage = 3;
  // const totalPages = Math.ceil(filteredTours.length / toursPerPage);
  // const startIndex = (page - 1) * toursPerPage;
  // const currentTours = filteredTours.slice(startIndex, startIndex + toursPerPage);

  return (
    <div className="font-serif">
      <div className="relative h-96 bg-cover bg-center bgTour" >
        <div className="absolute inset-0 bg-black bg-opacity-15 flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-5xl text-white font-semibold mt-5 ml-12">{desinationName}</h1>
        </div>
      </div>

      {/* <div className="px-10 py-4 text-sm text-gray-600 space-x-2">
        <span>Home</span> {'>'} <Link to={'/TopDestinations'}><span>
          Destinations
          </span></Link> {'>'} <span className="text-black font-semibold">{desinationName}</span>
      </div> */}
      <div className="px-10 ml-2 py-4 mb-5 text-lg text-gray-600 space-x-2 ">
                  <Link to={'/'} className='px-3 hover:text-slate-800'>Home</Link> {'>'} 
                  <Link to={'/TopDestinations'} className='px-3 hover:text-slate-800'><span>Destinations
          </span></Link> {'>'} <span className='px-2 text-slate-700 font-semibold'>{desinationName}</span>
              </div>

      <div className="px-5 py-8 mx-16 flex flex-col shadow-sm border-2 border-gray-300 border-opacity-30 rounded-xl md:flex-row md:items-center justify-between ">
        <div className="text-xl opacity-90 font-sans ">
          Found <span className="text-red-600  font-semibold">{filteredTours.length}</span> Results For <span className="text-red-600 font-bold">{desinationName}</span>
        </div>

          <div className='text-lg'>
          <span className="text-red-600 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-plus-icon lucide-map-plus"><path d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12"/><path d="M15 5.764V12"/><path d="M18 15v6"/><path d="M21 18h-6"/><path d="M9 3.236v15"/></svg>
            Destination Guide
          </span>
          </div>
        <div className="flex items-center gap-4">
          <h1 className='text-lg opacity-70'>Sort by:</h1>
          <select
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
              // setPage(1);
            }}
            className="border-2 rounded-lg px-2 py-3 text-md opacity-85"
          >
            <option value="asc">Price (Low to High)</option>
            <option value="asc">Price (High to Low)</option>
            <option value="desc">Duration (Short to Long)</option>
            <option value="asc">Newest</option>
          </select>
        </div>
      </div>

      <div className="p-10 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 ml-6">

        <aside className="space-y-6 border p-5 rounded-2xl shadow-sm h-[600px]">
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
                      {/* {console.log(listForOne)} */}
          <div>
            <h4 className="font-semibold text-gray-900  text-opacity-80 mb-2 flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-luggage-icon lucide-luggage text-red-600 mt-2 mr-2"><path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"/><path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"/><path d="M10 20h4"/><circle cx="16" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></svg>
              What are you looking for?</h4>
            <ul className="space-y-1 text-gray-600 text-opacity-85">
              {["Adventure & Desert Tours", "Boat Trips & Cruises", "Cultural & Historical", "Night Tours", "Airport Transfers"].map(type => (
                <li key={type}>
                  <label className='inline-flex items-center cursor-pointer'>
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => handleCheckboxChange(type, setSelectedTypes)}
                      className="mr-1 peer hidden"
                    />
                    <div className="w-5 h-5 rounded border-2 border-gray-300 peer-checked:border-red-600 peer-checked:bg-red-600 flex items-center justify-center transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check text-white"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <span className='ml-2 select-non'>{type}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-gray-900  text-opacity-80 flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 lucide lucide-user-round-plus-icon lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/></svg>
              Group Size
              </h4>
            <ul className="space-y-1 text-gray-600 text-opacity-85 ml-2">
              <li>
                <label className='inline-flex items-center cursor-pointer'>
                  <input
                    type="checkbox"
                    checked={selectedGroupSizes.includes("Group Tour")}
                    onChange={() => handleCheckboxChange("Group Tour", setSelectedGroupSizes)}
                    className="mr-1 peer hidden "
                  />
                  <div className="w-5 h-5 rounded border-2 border-gray-300 peer-checked:border-red-600 peer-checked:bg-red-600 flex items-center justify-center transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check text-white"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>

                  <span className='ml-2 select-non'>Group Tour</span> 
                </label>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-gray-900  text-opacity-75 flex gap-2 "> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Durations</h4>
            <ul className="space-y-1 text-gray-600 text-opacity-85">
              {["1 to 4 Hours", "1 Day"].map(duration => (
                <li key={duration}>
                  <label className='inline-flex items-center cursor-pointer '>
                    <input
                      type="checkbox"
                      checked={selectedDurations.includes(duration)}
                      onChange={() => handleCheckboxChange(duration, setSelectedDurations)}
                      className="mr-1 peer hidden"
                    />
                    <div className="w-5 h-5 rounded border-2 border-gray-300 peer-checked:border-red-600 peer-checked:bg-red-600 flex items-center justify-center transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check text-white"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    <span className='ml-2 select-non'>{duration}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

       
        <section>
          <div className="flex flex-wrap gap-6">
            {
              filteredTours.map(tour => <TourCard key={tour.id} tour={tour} />)
            }
          </div>
 
          {/* <div className=" flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 border rounded ${page === i + 1 ? 'bg-red-600 text-white' : ''}`}
              >
                {i + 1}
              </button>
            ))}
            {page < totalPages && (
              <button onClick={() => setPage(page + 1)} className="px-3 py-1 border rounded">
                &gt;
              </button>
            )}
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default DestinationGuide;