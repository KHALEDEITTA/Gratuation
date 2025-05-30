import React, { useEffect, useState } from 'react';
import img1 from '../../Assets/WhatsApp Image 2025-05-04 at 7.08.57 PM.jpeg';
import { Link, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchonedestination } from '../../store/destinationslic';

const allTours = [
  {
    id: 1,
    title: "Giza Pyramids, Sphinx and the Egyptian Museum Tour from Mersa Matruh",
    image: img1,
    location: "Mersa Matruh",
    duration: "18 Hours",
    price: 0,
    type: "Cultural & Historical",
    size: "Group Tour",
    hours: "1 Day"
  },
  {
    id: 2,
    title: "Evening Nile Cruise with dinner and show in Cairo",
    image: img1,
    location: "Cairo",
    duration: "4 Hours",
    price: 64,
    type: "Boat Trips & Cruises",
    size: "Group Tour",
    hours: "1 to 4 Hours"
  },
  {
    id: 3,
    title: "Cairo by Night at Alazhar Park with dinner",
    image: img1,
    location: "Cairo",
    duration: "4 Hours",
    price: 70,
    type: "Night Tours",
    size: "Group Tour",
    hours: "1 to 4 Hours"
  },
  {
    id: 4,
    title: "Private transfer to/from Sphinx Airport",
    image: img1,
    location: "Cairo",
    duration: "2 Hours",
    price: 125,
    type: "Airport Transfers",
    size: "Group Tour",
    hours: "1 to 4 Hours"
  },
  {
    id: 5,
    title: "Private Fayoum Oasis + Meidum Pyramid Tour",
    image: img1,
    location: "Cairo",
    duration: "8 Hours",
    price: 128,
    type: "Adventure & Desert Tours",
    size: "Group Tour",
    hours: "1 Day"
  },
  {
    id: 6,
    title: "Full-day Giza Pyramids & Museum with lunch",
    image: img1,
    location: "Cairo",
    duration: "8 Hours",
    price: 129,
    type: "Cultural & Historical",
    size: "Group Tour",
    hours: "1 Day"
  }
];

const TourCard = ({ tour }) => (
 <Link to={`/TourDetails/${tour.tripId}`}> <div className="bg-white rounded shadow p-4 w-full md:w-[300px]">
    <img src={tour.coverImage} alt={tour.label} className="rounded mb-4 h-[180px] w-full object-cover" />
    <h3 className="font-semibold mb-2">{tour.label}</h3>
    <div className="text-sm text-gray-600 flex items-center gap-4 mb-2">
      <span>📍 {tour.location}</span>
      <span>⏱ {tour.duration}</span>
    </div>
    <p className="text-sm">
      From <span className="text-blue-700 font-bold">${tour.price}</span>
    </p>
  </div></Link>
);

const DestinationGuide = () => {
  const param=useParams()
  const [page, setPage] = useState(1);
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
    setPage(1);
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

  const toursPerPage = 3;
  const totalPages = Math.ceil(filteredTours.length / toursPerPage);
  const startIndex = (page - 1) * toursPerPage;
  const currentTours = filteredTours.slice(startIndex, startIndex + toursPerPage);

  return (
    <div className="font-sans">
      <div className="relative h-[400px] bg-cover bg-center bgTour">
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">{desinationName}</h1>
        </div>
      </div>

      <div className="px-10 py-4 text-sm text-gray-600 space-x-2">
        <span>Home</span> {'>'} <Link to={'/TopDestinations'}><span>
          Destinations
          </span></Link> {'>'} <span className="text-black font-semibold">{desinationName}</span>
      </div>

      <div className="px-10 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-lg">
          Found <span className="text-red-600 font-bold">{filteredTours.length}</span> Results For <span className="text-red-600 font-bold">{desinationName}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-red-600 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            Destination Guide
          </span>

        
          <select
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
              setPage(1);
            }}
            className="border px-2 py-1 rounded text-sm"
          >
            <option value="none">Sort by</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="p-10 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">

        <aside className="space-y-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border px-3 py-2 rounded"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1);
            }}
          />
{console.log(listForOne)}
          <div>
            <h4 className="font-semibold mb-2">What are you looking for?</h4>
            <ul className="space-y-1 text-sm">
              {["Adventure & Desert Tours", "Boat Trips & Cruises", "Cultural & Historical", "Night Tours", "Airport Transfers"].map(type => (
                <li key={type}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => handleCheckboxChange(type, setSelectedTypes)}
                      className="mr-1"
                    />
                    {type}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Group Size</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedGroupSizes.includes("Group Tour")}
                    onChange={() => handleCheckboxChange("Group Tour", setSelectedGroupSizes)}
                    className="mr-1"
                  />
                  Group Tour
                </label>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Durations</h4>
            <ul className="space-y-1 text-sm">
              {["1 to 4 Hours", "1 Day"].map(duration => (
                <li key={duration}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedDurations.includes(duration)}
                      onChange={() => handleCheckboxChange(duration, setSelectedDurations)}
                      className="mr-1"
                    />
                    {duration}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

       
        <section>
          <div className="flex flex-wrap gap-6">
            {currentTours.length > 0 ? (
              currentTours.map(tour => <TourCard key={tour.id} tour={tour} />)
            ) : (
              <p>No tours found matching your filters.</p>
            )}
          </div>
 
          <div className="mt-6 flex gap-2">
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default DestinationGuide;