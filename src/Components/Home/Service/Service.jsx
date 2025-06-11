
import poto4 from '../../../Assets/serves.flight.png'
import poto2 from '../../../Assets/serves.honey-moon.png'
import poto3 from '../../../Assets/serves.world.png'
import poto1 from '../../../Assets/serves.environment-protection.png'

const services = [
  {
    title: "Diverse Programs",
    description:
      "The company offers various tourism programs that suit all tastes and budgets.",
    icon: poto1, // تأكد من وجود الصورة أو استخدم SVG inline
  },
  {
    title: "Providing customized services",
    description:
      "To meet customers' needs, such as honeymoon trips, family trips, cultural trips, and adventure trips",
    icon: poto2,
  },
  {
    title: "Organizing tourist tours",
    description:
      "The company organizes various tours that include the most famous tourist attractions",
    icon: poto3,
  },
  {
    title: "Integrated services",
    description:
        "We are keen to provide our customers with a smooth and distinctive tourist experience in various destinations",
    icon: poto4,
  },
];

export default function ServicesSection() {
  return (<>
    <div className={`bg-cover bg-center pt-20 px-8 mt-14 servess`}>
      <div className="bg-white bg-opacity-90 py-10 px-5 md:px-20 rounded-t-3xl shadow-xl" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" >
          {services.map((service, index) => (<>
            <div
              key={index}
              // data-aos="fade-up"
              data-aos="zoom-in"
              className="bg-white rounded-2xl  shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center"
            >
              <img
                src={service.icon}
                alt="icon"
                className="mx-auto mb-4 w-20 h-20"
                onError={(e) => (e.target.style.display = "none")}
              />
              <h3 className="text-xl font-bold font-serif text-slate-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 font-serif text-sm leading-relaxed">
                {service.description}
              </p>
              
            </div></>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
