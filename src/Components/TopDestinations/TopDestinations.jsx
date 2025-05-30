import image_1 from '../../Assets/destination1.png' 
import image_2 from '../../Assets/destination3.jpg'
import image_3 from '../../Assets/destination4.jpg'
import image_4 from '../../Assets/destination2.png'
import image_5 from '../../Assets/destination5.png'
import image_6 from '../../Assets/mrsa_mtrwh_4a2989af89.webp'
import image_7 from '../../Assets/ciudad-maderas-MXbM1NrRqtI-unsplash.jpg'
import DestinationsComponent from './DestinationsComponent/DestinationsComponent'
import { Link } from 'react-router'
export default function TopDestinations() {
// const dispatch=useDispatch()
//   useEffect(()=>{
//     dispatch(fetchalldestination())
    
//   })
//   const {list}=useSelector((state)=>state.destinations)
    const Destinations =[
        {
            id: 1,
            image: image_1,
            city: "Aswan",
            tours: "5 Tours",
            color: "orange-200"
        },
        {
            id: 2,
            image: image_2,
            city: "Cairo",
            tours: "12 Tours",
            color: "orange-200"
        },
        {
            id: 3,
            image: image_3,
            city: "Hurghada",
            tours: "9 Tours",
            color: "cyan-200"
        },
        {
            id: 4,
            image: image_4,
            city: "Luxor",
            tours: "10 Tours",
            color: "orange-200"
        },
        {
            id: 5,
            image: image_5,
            city: "Marsa-Alam",
            tours: "11 Tours",
            color: "blue-200"
        },
        {
            id: 6,
            image: image_6,
            city: "Mersa-Matruh",
            tours: "6 Tours",
            color: "blue-200"
        },
        {
            id: 7,
            image: image_7,
            city: "Sharm El Sheikh",
            tours: "10 Tours",
            color: "blue-200"
        },
    ]
  return (
    <>
    <div className="relative h-[400px] bg-cover bg-center topdestinat">
        <div className="absolute inset-0 bg-black bg-opacity-15 flex items-center justify-start">
            <h1 className="text-white text-5xl font-bold ml-24">Destinations</h1>
        </div>
    </div>
    <div>
        <div className="px-10 ml-2 py-4 text-xl text-gray-600 space-x-2">
            <Link to={'/'} className='px-3 hover:text-slate-800'>Home</Link> {'>'} <span className='px-2 text-slate-800 font-bold'>Destinations</span>
        </div>
    </div>
    <div className='mx-14  my-16'>
        <h1 className='text-3xl'>Top Destinations</h1>
    </div>
    
    <div className='grid grid-cols-4 gap-12 mx-14 mt-8'>
    {Destinations.map((tour)=>{
        return(
            <div key={tour.id}>
                <DestinationsComponent image={tour.image} name={tour.city} tours={tour.tours} color={tour.color}/>
            </div>
        )
    })}

    </div>
    
    </>
  )
}
