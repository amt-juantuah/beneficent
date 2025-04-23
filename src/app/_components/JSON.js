import {
  HomeIcon,
  InformationCircleIcon,
  CogIcon,
  CurrencyDollarIcon,
  BookOpenIcon,
  PhoneIcon,
  BriefcaseIcon,
  NewspaperIcon,
  MapPinIcon,
  UserGroupIcon,
  LifebuoyIcon,
  ClipboardListIcon
} from "@heroicons/react/24/outline";

import {
  FaHandsHelping, FaHeart, FaUsers, FaCar, FaUserNurse,
  FaPhone,
  FaMapMarkerAlt,
  FaClipboardCheck,
  FaUserPlus,
  FaLifeRing
} from "react-icons/fa";
import { MdChat, MdElderly, MdOutlineAccessibilityNew, MdOutlineLocalDining } from "react-icons/md";
import { IoIosPeople, IoIosCalendar } from "react-icons/io";
import { GiHouseKeys, GiMedicalPack, GiHealthNormal, GiChefToque } from "react-icons/gi";
import { RiTeamLine, RiPriceTag3Line, RiHotelLine } from "react-icons/ri";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { AiOutlineSafetyCertificate, AiOutlineSchedule, AiOutlineSolution } from "react-icons/ai";

import { ChevronDownIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

import { BsFillHouseFill } from "react-icons/bs";
import { BiBuildingHouse } from "react-icons/bi";
import { FiTruck, FiUsers } from "react-icons/fi";


// export const xxxnavbarItemsxxx = [
//       {
//         "name": "About Us",
//         "href": "/about",
//         "submenu": [
//           {
//             "name": "Who We Are",
//             "href": "/about/who-we-are"
//           },
//           {
//             "name": "Mission, Vision, and Values",
//             "href": "/about/mission-vision-values"
//           },
//           {
//             "name": "Meet the Team",
//             "href": "/about/meet-the-team"
//           }
//         ]
//       },
//       {
//         "name": "Our Services",
//         "href": "/services",
//         "submenu": [
//           {
//             "name": "Non-Regulated Services",
//             "href": "/services/non-regulated",
//             "submenu": [
//               { "name": "Companionship", "href": "/services/non-regulated/companionship" },
//               { "name": "Domestic Assistance", "href": "/services/non-regulated/domestic-assistance" },
//               { "name": "Meal Preparation", "href": "/services/non-regulated/meal-preparation" },
//               { "name": "Errands & Transportation", "href": "/services/non-regulated/errands-transportation" },
//               { "name": "Home Safety Checks", "href": "/services/non-regulated/home-safety-checks" },
//               { "name": "Lifestyle Support", "href": "/services/non-regulated/lifestyle-support" }
//             ]
//           },
//           {
//             "name": "Regulated Services",
//             "href": "/services/regulated",
//             "submenu": [
//               { "name": "Personal Care", "href": "/services/regulated/personal-care" },
//               { "name": "Medication Administration", "href": "/services/regulated/medication-administration" },
//               { "name": "Dementia & Alzheimer’s Care", "href": "/services/regulated/dementia-alzheimers-care" },
//               { "name": "Live-In & 24/7 Care", "href": "/services/regulated/live-in-care" },
//               { "name": "Palliative & End-of-Life Care", "href": "/services/regulated/palliative-end-of-life-care" },
//               { "name": "Post-Hospital Discharge Care", "href": "/services/regulated/post-hospital-discharge-care" },
//               { "name": "Specialized Nursing Services", "href": "/services/regulated/specialized-nursing-services" }
//             ]
//           },
//           {
//             "name": "Additional Services",
//             "href": "/services/additional",
//             "submenu": [
//               { "name": "Short-Term Respite Care", "href": "/services/additional/short-term-respite-care" },
//               { "name": "Rehabilitation & Therapy Support", "href": "/services/additional/rehabilitation-therapy-support" },
//               { "name": "Mental Health Support", "href": "/services/additional/mental-health-support" }
//             ]
//           }
//         ]
//       },
//       {
//         "name": "Pricing",
//         "href": "/pricing",
// "submenu": [
//   { "name": "Transparent Pricing Packages", "href": "/pricing/packages" },
//   { "name": "Flexible Payment Options", "href": "/pricing/payment-options" }
// ]
//       },
//       {
//         "name": "Client Resources",
//         "href": "/resources",
//         "submenu": [
//           { "name": "FAQs", "href": "/resources/faqs" },
//           { "name": "Caregiver Tips and Guides", "href": "/resources/tips-guides" },
//           { "name": "Downloadable Brochures", "href": "/resources/brochures" }
//         ]
//       },
//       {
//         "name": "Contact Us",
//         "href": "/contact",
// "submenu": [
//   { "name": "Request a Consultation", "href": "/contact/request-consultation" },
//   { "name": "Contact Information", "href": "/contact/info" },
//   { "name": "Live Chat", "href": "/contact/live-chat" }
// ]
//       },
//       {
//         "name": "Careers",
//         "href": "/careers",
// "submenu": [
//   { "name": "Join Our Team", "href": "/careers/join" },
//   { "name": "Current Job Openings", "href": "/careers/job-openings" }
// ]
//       },
//       {
//         "name": "Blog/News",
//         "href": "/blog"
//       }
//     ]

export const cookieCategories = {
  essential: {
    name: 'Essential',
    description: 'Necessary for the website to function properly.',
    required: true,
  },
  analytics: {
    name: 'Analytics',
    description: 'Help us understand how visitors interact with the website.',
    required: false,
  },
  marketing: {
    name: 'Marketing',
    description: 'Used to deliver personalized ads.',
    required: false,
  },
};


export const footerContent = {
  "brand": "Beneficent",
  "tagline": "Providing care, cleaning, and staffing solutions with compassion and excellence.",
  "links": [
    { "label": "About", "href": "/about-us" },
    { "label": "Care", "href": "/services/care" },
    { "label": "Cleaning", "href": "/services/cleaning" },
    { "label": "Staffing", "href": "/services/staffing" },
    { "label": "FAQ", "href": "/faq" },
    { "label": "Contact", "href": "/about-us/#contact" },
    { "label": "Privacy Policy", "href": "/" }
  ],
  "socials": [
    { "icon": "FaFacebookF", "url": "https://www.facebook.com" },
    { "icon": "FaInstagram", "url": "https://www.instagram.com" },
    { "icon": "FaLinkedinIn", "url": "https://www.linkedin.com" }
  ]
}



export const testimonials = [
  {
    "name": "Janey Lawry",
    "image": "/assets/images/client1.jpg",
    "description": "Beneficent's care services were a lifesaver for our family. Their staff is friendly and very professional. They really took the time to understand my needs and provided the highest level of care!",
    "role": "Client",
    "ratings": 4.6
  },
  {
    "name": "Carlos Laurenzo",
    "image": "/assets/images/client2.jpg",
    "description": "I have been using Beneficent’s cleaning service for months now, and I couldn’t be happier. They are thorough, reliable, and have an eye for detail. Highly recommended!",
    "role": "Customer",
    "ratings": 5
  },
  {
    "name": "Ayesha Khan",
    "image": "/assets/images/client3.jpg",
    "description": "The staffing services provided by Beneficent have been excellent. They are quick to respond to our needs and always provide reliable, professional staff members. Great service all around!",
    "role": "Business Owner",
    "ratings": 5
  },
  {
    "name": "Robert Brown",
    "image": "/assets/images/client4.jpg",
    "description": "I am incredibly grateful to the team at Beneficent for their exceptional care services. They provide excellent support, and my loved one has improved significantly since they started receiving care.",
    "role": "Family Member",
    "ratings": 4.5
  },
  {
    "name": "Mariana Garcia",
    "image": "/assets/images/client5.jpg",
    "description": "Beneficent’s team is incredibly professional and caring. The care they provide for my elderly mother has been beyond excellent, and I feel so much more at ease knowing she is in good hands.",
    "role": "Daughter",
    "ratings": 5
  },
  {
    "name": "David Windouyk",
    "image": "/assets/images/client6.jpg",
    "description": "I’ve had the pleasure of working with Beneficent for several months. Their staffing solutions have been invaluable to our organization, providing us with well-qualified and reliable staff.",
    "role": "HR Manager",
    "ratings": 4.0
  },
  {
    "name": "Chinara Henshaw",
    "image": "/assets/images/client7.jpg",
    "description": "The cleaning team from Beneficent did an amazing job with my office space. Their attention to detail is exceptional, and the team is always professional. I will definitely use them again.",
    "role": "Office Manager",
    "ratings": 5
  },
  {
    "name": "Nathan Clarke",
    "image": "/assets/images/client8.jpg",
    "description": "I’ve used Beneficent’s services for my elderly parents, and they’ve been fantastic. The care staff are attentive and genuinely compassionate, making the experience much easier for all of us.",
    "role": "Son",
    "ratings": 5
  }
]


export const callsToAction = [
  { name: 'See us working', href: '/services', icon: PlayCircleIcon },
  { name: 'Contact Office', href: 'tel:07438731206', icon: PhoneIcon },
];


export const actionPoint = {
  telX: "07438731206",
  emY: "info@beneficent.uk",
}

export const heroCapture = {
  title: "To us, Care means kindness and Generousity",
  details: "We are keen about doing good, being kind, and being generous."
}

export const aboutUs = {
  contact: {
    title: "How to Contact us",
    tel: "07438731206",
    name: "Beneficent Care and Support Office",
    street: "79 College Road",
    city: "London",
    area: "Harrow",
    postcode: "HA1 1BD",
    email: "info@beneficent.uk"
  },
  vision: {
    title: "Vision and Values",
    submenu: [
      {
        title: "Our vision",
        detail: "Our arch vision is to become a trusted partner in healthcare services in ways that demonstrate genuine kindness, love, and generousity with quality care and support",
        lists: [],
      },
      {
        title: "Our values",
        detail: "Every member of our staff and management upholds the values of:",
        lists: ["Kindness", "Tenderness", "Compliance", "Respect", "Generosity"],
      },
      {
        title: "Our Mission",
        detail: "Our mission is to provide tailored, reliable and compassionate care that meets the evolving needs of our community, delivered by highly equiped and empathetic professionals",
        lists: [],
      },
    ]
  },
  history: {},
  people: {},
  environment: {},
  community: {},
  dataprotection: {},
  media: {},
}



export const servicesSteps = [
  {
    step: "Initial Conversation",
    detail: "Begin your journey with Beneficent by sharing your unique care needs in an initial conversation. Our welcoming team listens closely, setting a personalized foundation for your experience",
    icon: FaPhone,
  },
  {
    step: "Visit for Assessment",
    detail: "A  dedicated care consultant visits you, or connects via video call, to conduct a comprehensive assessment. We capture your physical, emotional, and lifestyle requirements using modern tools and empathetic dialogue",
    icon: FaMapMarkerAlt,
  },
  {
    step: "Customized Care Plan",
    detail: "Together, we create a custom care plan that adapts with flexible scheduling, personalized caregiver matching, and technology-driven monitoring as your needs evolve",
    icon: FaClipboardCheck,
  },
  {
    step: "Seamless Onboarding",
    detail: "Transition smoothly into our services with a personal introduction to your dedicated care team. We ensure you feel informed, supported, and confident in your care arrangement from day one",
    icon: FaUserPlus,
  },
  {
    step: "Continuous Support",
    detail: "Enjoy regular follow-ups, feedback, and care plan adjustments to ensure evolving, high-quality support.",
    icon: FaLifeRing,
  },
];

export const services = [
  {
    name: "Care Services",
    area: "care",
    href: "/services/care",
    description: "Explore the wide range of care services offered by Beneficent.",
    icon: MdElderly,
    background: "/assets/images/in_chair_care.jpg",
    longDescription: "Beneficent offers compassionate and personalized care services, helping clients maintain independence and dignity at home. Our support includes companionship, daily assistance, and tailored care solutions designed to improve quality of life with respect and empathy",
    submenu: [
      {
        image: "/assets/images/companion-friend.jpg",
        id: "companionship",
        name: "Companionship and a Friend",
        href: "/services/care/companionship",
        description: "Emotional support and social engagement for clients.",
        icon: IoIosPeople,
        longDescription: "Our Companionship and a Friend service is designed to combat loneliness and promote emotional well-being. Many individuals, especially older adults or those living alone, experience feelings of isolation that can negatively impact their mental and physical health. Our trained and compassionate companions provide regular visits to engage in meaningful conversation, play games, go for short walks, or simply share a cup of tea. Whether it’s reminiscing over photo albums, watching a favourite show together, or attending community events, the goal is to make every interaction uplifting and valuable. This service supports clients in feeling connected, seen, and valued, while also offering families peace of mind knowing their loved ones have someone they can rely on for friendly social interaction and emotional comfort.",
      },
      { 
        image: "/assets/images/domestic-help.jpg", 
        id: "domestic-assistance", 
        name: "Daily Living Support", 
        href: "/services/care/domestic-assistance",
        description: "Help with household chores and daily tasks.",
        icon: FaHandsHelping,
        longDescription: "Daily Living Support focuses on assisting clients with routine household activities to help maintain a clean, safe, and organized living environment. This service includes help with light cleaning, laundry, tidying up living spaces, making beds, washing dishes, and organizing personal belongings. It’s ideal for individuals who may be physically limited, recovering from illness, or simply need an extra hand to stay on top of everyday tasks. By reducing the physical strain of these chores, clients are able to preserve their energy for the activities they enjoy. Our support staff approach each home with respect and sensitivity, tailoring their help to each person’s preferences and ensuring that dignity and independence are always maintained. Whether you need regular support or just an occasional visit, our Daily Living Support is here to help make life easier and more comfortable.", 
      },
      { 
        image: "/assets/images/light-cooking.jpg", 
        id: "meal-preparation", 
        name: "Light Meal Preparation", 
        href: "/services/care/meal-preparation", 
        description: "Assistance with preparing nutritious meals.", 
        icon: MdOutlineLocalDining,
        longDescription: "Our Light Meal Preparation service ensures clients receive regular, balanced, and delicious meals without the stress of cooking. This service is particularly beneficial for individuals who may have dietary restrictions, experience fatigue, or struggle with the physical demands of meal prep. Our carers can assist with planning simple menus, grocery shopping, and preparing breakfast, lunch, or light dinners. Meals can be tailored to cultural preferences and nutritional needs. Beyond the practical side of cooking, mealtime can also be a social experience — a chance to share conversation and routine with a friendly face. We focus on using fresh ingredients and maintaining food safety while promoting healthy eating habits. By supporting clients in this area, we contribute to their overall well-being, energy levels, and independence.", 
      },
      { 
        image: "/assets/images/shopping.jpg", 
        id: "errands-transportation", 
        name: "Errands & Shopping", 
        href: "/services/care/errands-transportation", 
        description: "Help with errands like shopping.", 
        icon: FaCar,
        longDescription: "Running errands can become increasingly challenging for individuals with mobility issues, lack of transportation, or busy schedules. Our Errands & Shopping service is here to help with day-to-day activities such as picking up prescriptions, grocery shopping, mailing parcels, or even returning library books. Clients can choose to have a support worker accompany them on outings or have us complete the tasks on their behalf. The service is designed to reduce stress, save time, and promote independence by ensuring essential tasks are managed efficiently and reliably. We’re happy to follow specific shopping lists, visit preferred stores, and accommodate special instructions. For many clients, this support can significantly improve their quality of life by ensuring they have consistent access to necessities and feel empowered in their daily routines.",
      },
      { 
        image: "/assets/images/exercise.jpg", 
        id: "lifestyle-support", 
        name: "Lifestyle Support (flowering, reading, etc)", 
        href: "/services/care/lifestyle-support", 
        description: "Assistance with maintaining a fulfilling lifestyle.", 
        icon: IoIosCalendar, 
        longDescription: "Lifestyle Support is about enriching daily life by helping clients maintain routines and activities that bring them joy and meaning. This may include hobbies such as gardening, light exercise, reading, journaling, arts and crafts, or attending community groups. Our team works closely with each individual to understand their preferences and goals, providing gentle encouragement and practical help where needed. We can assist with organizing supplies, reading aloud, setting up virtual calls with family, or even accompanying clients on local outings. The aim is to help clients feel engaged, stimulated, and happy — because health is about more than just physical care. By fostering creativity, connection, and personal interest, we help build confidence, improve mood, and support mental and emotional wellness. Every small moment of enjoyment contributes to a fuller, richer life.",
      }
    ]
  },
  {
    name: "Industrial Cleaning",
    area: "cleaning",
    href: "/services/cleaning",
    description: "Discover cleaning services provided by Beneficent.",
    icon: CogIcon,
    background: "/assets/images/cleaning-team.jpg",
    longDescription: "Our industrial cleaning services ensure spotless, safe environments across offices, construction sites, and commercial spaces. Beneficent delivers reliable, high-quality cleaning with trained professionals and eco-friendly products, tailored to your needs and industry standards",
    submenu: [
      {
        image:"/assets/images/move-in.jpg",
        id: "home-move-cleaning",
        name: "Home Move-In / Move-Out Cleaning",
        href: "/services/cleaning/home-move-cleaning",
        description: "Thorough cleaning for homes before moving in and after moving out.",
        icon: BsFillHouseFill,
        longDescription: "Moving into a new home—or out of one—can be overwhelming. Our Home Move-In / Move-Out Cleaning service is designed to take one big task off your plate by delivering a deep, comprehensive clean at just the right time. For move-ins, we ensure the new home is spotless, disinfected, and welcoming, with attention to details like cupboards, drawers, appliances, light fixtures, and floors. For move-outs, we help tenants or homeowners leave behind a sparkling clean space that meets landlord or buyer expectations. This service includes dusting, scrubbing, mopping, and sanitizing every room, making the property fresh and presentable. Ideal for renters wanting to secure their deposit or sellers looking to impress potential buyers, this thorough cleaning helps reduce stress and save time during busy transitions. Our professional cleaners arrive equipped with quality supplies and work diligently to meet the highest standards, ensuring peace of mind and a smooth handover.",
      },
      {
        image:"/assets/images/office.jpg",
        id: "new-house-cleaning",
        name: "Offices and New House Cleaning",
        href: "/services/cleaning/new-house-cleaning",
        description: "Professional cleaning for new properties and office environments.",
        icon: BiBuildingHouse,
        longDescription: "Our Offices and New House Cleaning service focuses on creating fresh, hygienic environments in spaces that are either newly built, renovated, or in need of a reset. Whether it’s a new home that needs a final pre-move clean or an office space being prepared for staff and clients, our expert team ensures every surface, room, and corner is thoroughly cleaned and ready for use. We tackle dust, construction debris, fingerprints, and leftover packaging or materials, leaving behind a spotless, professional finish. For office settings, we also ensure high-touch points such as door handles, keyboards, and communal areas are disinfected to maintain a healthy workspace. Our flexible approach allows for one-time deep cleans or recurring cleaning schedules, tailored to the client’s needs. We take pride in attention to detail, using eco-friendly products and modern equipment to deliver exceptional results. Let us help you make a powerful first impression—whether it's a client entering a business or a family stepping into their new home."
      },
      {
        image:"/assets/images/construction-cleaners.jpg",
        id: "construction-cleaning",
        name: "Construction and Commercial Cleaning",
        href: "/services/cleaning/construction-cleaning",
        description: "Post-construction cleaning for safe and tidy spaces.",
        icon: AiOutlineSafetyCertificate,
        longDescription: "Construction projects often leave behind more than just beautiful upgrades—they also leave dust, debris, and mess. Our Construction and Commercial Cleaning service is specifically tailored to meet the needs of contractors, property developers, and businesses who want their new or renovated spaces to shine. We remove leftover materials such as plaster dust, drywall scraps, paint splatters, and more, paying special attention to safety and cleanliness. Our team uses industrial-grade equipment and products to clean floors, windows, fixtures, and surfaces thoroughly and efficiently. Whether it's a single property, a multi-unit development, or a commercial facility, our service ensures a safe and presentable space that’s ready for occupancy or inspection. We also understand the importance of meeting deadlines in post-construction timelines, so we offer flexible scheduling to keep your project on track. Our cleaning helps reveal the true quality of the work completed, giving clients a finished space they can immediately enjoy or showcase."
      },
      {
        image:"/assets/images/home-cleaners.jpg",
        id: "house-cleaning",
        name: "House Cleaning",
        href: "/services/cleaning/house-cleaning",
        description: "Comprehensive cleaning solutions for homes.",
        icon: MdOutlineLocalDining,
        longDescription: "Our House Cleaning service provides thorough, reliable, and customized cleaning for homes of all sizes. Whether you need a one-off deep clean, regular weekly support, or a tidy-up before hosting guests, our service is designed to fit around your lifestyle and preferences. We handle dusting, vacuuming, mopping, kitchen and bathroom sanitation, and more. Clients can choose specific areas of focus or allow our team to follow a standard top-to-bottom checklist. We’re attentive to hygiene, using safe, eco-friendly products and techniques to eliminate germs and allergens, making your space cleaner and healthier. This service is ideal for busy families, elderly individuals, or anyone who values a clean and peaceful living environment. Our experienced cleaners treat every home with respect and care, ensuring consistent quality and professionalism. With us, your home won’t just look clean—it will feel fresh, comfortable, and revitalized.",
      },
      {
        image:"/assets/images/kitchen-clean.jpg",
        id: "kitchen-deep-cleaning",
        name: "Kitchen Deep Cleaning",
        href: "/services/cleaning/kitchen-deep-cleaning",
        description: "Intensive kitchen cleaning services for residential and commercial properties.",
        icon: AiOutlineSchedule,
        longDescription: "The kitchen is the heart of any home or food-based business—but it’s also one of the areas that requires the most intense cleaning. Our Kitchen Deep Cleaning service goes beyond the surface to tackle the grease, grime, and buildup that accumulates over time. We clean behind appliances, scrub stovetops and ovens, sanitize countertops, degrease hoods and vents, and ensure sinks and cabinets are spotless. In commercial settings, we adhere to hygiene standards required by health regulations, making this an essential service for restaurants, cafés, and catering businesses. For homeowners, our service helps maintain a clean and safe cooking space, free of bacteria and allergens. We use food-safe cleaning agents and professional tools to get into all those hard-to-reach places. Whether your kitchen needs a seasonal refresh, pre-inspection clean, or regular maintenance, our deep cleaning ensures it stays sparkling and hygienic, so you can focus on preparing meals—not cleaning up messes.",
      },
    ],
  },
  {
    name: "Staffing Agency",
    area: "staffing",
    href: "/services/staffing",
    description: "Discover Staffing support services provided by Beneficent.",
    icon: CogIcon,
    background: "/assets/images/staffing-team.jpg",
    longDescription: "Beneficent connects businesses with reliable staff including care workers, nurses, and hospitality personnel. Our staffing solutions offer flexibility, professionalism, and skill-matched placements to support your operational needs across healthcare and commercial industries",
    submenu: [
      {
        image:"/assets/images/care-staff.jpg",
        id: "care-workers",
        name: "Care & Support Workers",
        href: "/services/staffing/care-workers",
        description: "Experienced care workers available for home and facility care.",
        icon: IoIosPeople,
        longDescription: "Our Care & Support Workers are trained professionals who provide compassionate, personalized assistance to individuals in both residential homes and care facilities. They support clients with a range of needs, including mobility assistance, hygiene support, medication prompting, companionship, and more. Whether it's long-term care for the elderly, support for individuals with disabilities, or temporary help during recovery, our staff are adaptable, respectful, and empathetic. Each worker is vetted and trained to uphold the dignity, safety, and preferences of those they support. We offer flexible scheduling and can respond to both short-notice and ongoing staffing requirements. Our commitment is to deliver not just help, but genuine human connection, making a positive difference in the lives of those we serve.",
      },
      {
        image:"/assets/images/nurse.jpg",
        id: "nurses",
        name: "Nurses",
        href: "/services/staffing/nurses",
        description: "Qualified nurses for medical care and support.",
        icon: FaUserNurse,
        longDescription: "We provide highly qualified and experienced nurses for both short-term and long-term healthcare needs across residential, clinical, and community settings. Our nursing staff includes Registered Nurses (RNs), Licensed Practical Nurses (LPNs), and specialist nurses for elderly care, post-operative support, and chronic condition management. They are capable of administering medications, monitoring vital signs, wound care, and liaising with families and medical teams. Each nurse undergoes rigorous background checks and professional training updates, ensuring up-to-date clinical knowledge and compassionate bedside manner. Whether you're a care facility seeking temporary cover or a home-based patient needing clinical support, our nursing professionals offer the highest standard of medical care with empathy and professionalism.",
      },
      {
        image:"/assets/images/factory.jpg",
        id: "hotel-factory-workers",
        name: "Hotel and Factory Workers",
        href: "/services/staffing/hotel-factory-workers",
        description: "Reliable staffing for hotels, factories, and industrial sites.",
        icon: RiHotelLine,
        longDescription: "Our Hotel and Factory Workers service provides dependable, trained personnel to meet the dynamic needs of hospitality and industrial environments. From housekeeping staff and porters to warehouse workers and general labourers, we supply staff who are punctual, hardworking, and ready to contribute from day one. We understand the importance of efficiency and safety in fast-paced settings, so all candidates are vetted for work ethic, reliability, and relevant experience. For hotels, we provide front-of-house and back-of-house staff who represent your brand with professionalism. In factories or warehouses, we offer workers with knowledge of health and safety procedures and a strong commitment to productivity. Whether you need seasonal cover, shift workers, or ongoing support, we tailor staffing solutions to your operational requirements.",
      },
      {
        image:"/assets/images/kitchen-assistant.jpg",
        id: "kitchen-assistants",
        name: "Kitchen Assistants",
        href: "/services/staffing/kitchen-assistants",
        description: "Skilled kitchen staff to assist with food preparation and hygiene.",
        icon: FaHandsHelping,
        longDescription: "Our Kitchen Assistants play a vital role in keeping food service environments running smoothly. They assist chefs with basic food preparation, maintain cleanliness in food prep areas, and ensure that hygiene standards are rigorously followed. From peeling vegetables and preparing ingredients to cleaning workstations and handling deliveries, our assistants bring energy and reliability to every shift. Suitable for schools, care homes, restaurants, and catering events, our kitchen assistants are well-trained in food safety practices and understand the pace and discipline required in kitchen settings. We provide temporary, part-time, or full-time placements depending on your specific needs. Every assistant is vetted for professionalism, teamwork, and a positive attitude—so your kitchen stays both efficient and safe.",
      },
      {
        image:"/assets/images/kitchen-porter.jpg",
        id: "kitchen-porters",
        name: "Kitchen Porters",
        href: "/services/staffing/kitchen-porters",
        description: "Support staff for maintaining kitchen cleanliness and efficiency.",
        icon: GiChefToque,
        longDescription: "Kitchen Porters are essential to keeping kitchens clean, organized, and fully operational. Our staffing service provides dedicated kitchen porters who handle dishwashing, waste removal, deep cleaning of equipment, and general back-of-house support. These professionals work tirelessly to ensure hygiene standards are maintained, helping chefs and kitchen assistants work efficiently without disruption. Whether it’s during peak service hours or overnight cleaning, our porters are available for flexible shifts and can adapt to your specific operational routines. We serve a variety of clients—from restaurants and cafes to healthcare kitchens and corporate catering—ensuring a clean and compliant kitchen environment at all times. Every porter we provide is trained in food hygiene practices and comes ready to integrate into your team seamlessly.",
      },
    ]
  }
]


export const navbarItems = [
  // {
  //   name: "Home",
  //   href: "/",
  //   description: "Welcome to Beneficent, providing quality care services with compassion.",
  //   icon: HomeIcon
  // },
  // {
  //   name: "About Us",
  //   href: "/about",
  //   description: "Learn more about Beneficent, our mission, vision, and team.",
  //   icon: InformationCircleIcon,
  //   submenu: [
  //     {
  //       name: "Who We Are",
  //       href: "/about/who-we-are",
  //       description: "Discover the history and ethos of Beneficent Care & Support.",
  //       icon: RiTeamLine
  //     },
  //     {
  //       name: "Mission, Vision, and Values",
  //       href: "/about/mission-vision-values",
  //       description: "Understand Beneficent's guiding principles and aspirations.",
  //       icon: HiOutlineShieldCheck
  //     },
  //     {
  //       name: "Meet the Team",
  //       href: "/about/meet-the-team",
  //       description: "Get to know the dedicated professionals behind Beneficent's care services.",
  //       icon: FaUsers
  //     }
  //   ]
  // },
  {
    name: "Care Services",
    href: "/services/care",
    description: "Explore the wide range of care services offered by Beneficent.",
    icon: MdElderly,
    submenu: [
      { name: "Companionship and a Friend", href: "/services/care/#companionship", description: "Emotional support and social engagement for clients.", icon: IoIosPeople },
      { name: "Daily Living Support", href: "/services/care/#domestic-assistance", description: "Help with household chores and daily tasks.", icon: FaHandsHelping },
      { name: "Light Meal Preparation", href: "/services/care/#meal-preparation", description: "Assistance with preparing nutritious meals.", icon: MdOutlineLocalDining },
      { name: "Errands & Shopping", href: "/services/care/#errands-transportation", description: "Help with errands like shopping.", icon: FaCar },
      { name: "Lifestyle Support (flowering, reading, etc)", href: "/services/care/#lifestyle-support", description: "Assistance with maintaining a fulfilling lifestyle.", icon: IoIosCalendar }
    ]
  },
  // {
  //   name: "Our Care Support",
  //   href: "/services/care-support",
  //   description: "Explore the wide range of care services offered by Beneficent.",
  //   icon: MdElderly,
  //   submenu: [
  //     { name: "Personal Care", href: "/services/regulated/personal-care", description: "Support with personal hygiene and grooming.", icon: MdOutlineAccessibilityNew },
  //     { name: "Medication Administration", href: "/services/regulated/medication-administration", description: "Ensuring safe and timely medication management.", icon: GiMedicalPack },
  //     { name: "Dementia & Alzheimer’s Care", href: "/services/regulated/dementia-alzheimers-care", description: "Specialized care plans for cognitive conditions.", icon: GiHealthNormal },
  //     { name: "Live-In & 24/7 Care", href: "/services/regulated/live-in-care", description: "Round-the-clock care solutions for comprehensive support.", icon: MdElderly },
  //     { name: "Palliative & End-of-Life Care", href: "/services/regulated/palliative-end-of-life-care", description: "Compassionate care for individuals in the final stages of life.", icon: AiOutlineSchedule },
  //     { name: "Post-Hospital Discharge Care", href: "/services/regulated/post-hospital-discharge-care", description: "Support for recovery and rehabilitation after hospitalization.", icon: FaHandsHelping },
  //     { name: "Specialized Nursing Services", href: "/services/regulated/specialized-nursing-services", description: "Advanced nursing services for complex medical needs.", icon: GiMedicalPack },
  //     { name: "Short-Term Respite Care", href: "/services/additional/short-term-respite-care", description: "We step in while you take a break from caring for your family", icon: FaHandsHelping },
  //   ]
  // },

  {
    name: "Cleaning Services",
    href: "/cleaning",
    description: "Discover cleaning services provided by Beneficent.",
    icon: CogIcon,
    submenu: [
      {
        name: "Home Move-In / Move-Out Cleaning",
        href: "/services/cleaning/#home-move-cleaning",
        description: "Thorough cleaning for homes before moving in and after moving out.",
        icon: BsFillHouseFill,
      },
      {
        name: "Offices and New House Cleaning",
        href: "/services/cleaning/#new-house-cleaning",
        description: "Professional cleaning for new properties and office environments.",
        icon: BiBuildingHouse,
      },
      {
        name: "Construction and Commercial Cleaning",
        href: "/services/cleaning/#construction-cleaning",
        description: "Post-construction cleaning for safe and tidy spaces.",
        icon: AiOutlineSafetyCertificate,
      },
      {
        name: "House Cleaning",
        href: "/services/cleaning/#house-cleaning",
        description: "Comprehensive cleaning solutions for homes.",
        icon: MdOutlineLocalDining,
      },
      {
        name: "Kitchen Deep Cleaning",
        href: "/services/cleaning/#kitchen-deep-cleaning",
        description: "Intensive kitchen cleaning services for residential and commercial properties.",
        icon: AiOutlineSchedule,
      },
    ],
  },
  {
    name: "Staffing",
    href: "/staffing",
    description: "Discover Staffing support services provided by Beneficent.",
    icon: CogIcon,
    submenu: [
      {
        name: "Care & Support Workers",
        href: "/services/staffing/#care-workers",
        description: "Experienced care workers available for home and facility care.",
        icon: IoIosPeople,
      },
      {
        name: "Nurses",
        href: "/services/staffing/#nurses",
        description: "Qualified nurses for medical care and support.",
        icon: FaUserNurse,
      },
      {
        name: "Hotel and Factory Workers",
        href: "/services/staffing/#hotel-factory-workers",
        description: "Reliable staffing for hotels, factories, and industrial sites.",
        icon: RiHotelLine,
      },
      {
        name: "Kitchen Assistants",
        href: "/services/staffing/#kitchen-assistants",
        description: "Skilled kitchen staff to assist with food preparation and hygiene.",
        icon: FaHandsHelping,
      },
      {
        name: "Kitchen Porters",
        href: "/services/staffing/#kitchen-porters",
        description: "Support staff for maintaining kitchen cleanliness and efficiency.",
        icon: GiChefToque,
      },
    ]
  },
  // {
  //   name: "Pricing",
  //   href: "/pricing",
  //   description: "Transparent and flexible pricing options for Beneficent's services.",
  //   icon: RiPriceTag3Line,
  //   submenu: [
  //   { "name": "Transparent Pricing Packages", "href": "/pricing/packages", icon: RiPriceTag3Line },
  //   { "name": "Flexible Payment Options", "href": "/pricing/payment-options", icon: RiPriceTag3Line }
  // ]
  // },
  // {
  //   name: "Client Resources",
  //   href: "/resources",
  //   description: "Helpful resources for clients and families from Beneficent.",
  //   icon: BookOpenIcon
  // },
  {
    name: "Contact Us",
    href: "/about-us",
    description: "Get in touch with Beneficent's team.",
    icon: PhoneIcon,
    submenu: [
      { "name": "Contact Information", "href": "/about-us/#contact", icon: PhoneIcon, description: "Get in touch with Beneficent by contacting us", },
      { "name": "Request a Consultation", "href": "/enquiry", icon: AiOutlineSolution, description: "Benefit from our consultation session", },
      { "name": "Live Chat", "href": "/enquiry", icon: MdChat, description: "Chat with one of our respondents" }
    ]
  },
  {
    name: "Careers",
    href: "/careers",
    description: "Explore career opportunities with Beneficent.",
    icon: BriefcaseIcon,
    submenu: [
      { "name": "Join Our Team", "href": "/careers", icon: RiTeamLine, description: "Send us your CV and job applications" },
      { "name": "Current Job Openings", "href": "/careers", icon: BriefcaseIcon, description: "Explore career opportunities with Beneficent." }
    ]
  },
  // {
  //   name: "Blog/News",
  //   href: "/blog",
  //   description: "Read the latest updates, articles, and care tips from Beneficent.",
  //   icon: NewspaperIcon
  // }
]


export const faqs = [
  {
    "question": "What services does Beneficent provide?",
    "answer": "Beneficent offers a wide range of services, including care services, industrial cleaning, staffing solutions, and tailored healthcare services to meet individual needs."
  },
  {
    "question": "Are your staff members qualified and trained?",
    "answer": "Yes, all of our staff undergoes extensive training and certification to ensure high-quality services, including background checks to ensure client safety."
  },
  {
    "question": "How can I book a service with Beneficent?",
    "answer": "You can easily book a service through our online form, by calling our customer service, or by visiting our service pages for more details on the booking process."
  },
  {
    "question": "Do you offer services on weekends or holidays?",
    "answer": "Yes, we offer flexible services on weekends and holidays based on your needs. Our team is available for emergency requests as well."
  },
  {
    "question": "What is the minimum service requirement?",
    "answer": "Each service may have different requirements, but we aim to provide flexibility. Please contact us for detailed information about service packages and minimum requirements."
  },
  {
    "question": "How can I cancel or reschedule my service?",
    "answer": "You can cancel or reschedule your service by contacting our customer support team at least 24 hours before your scheduled appointment."
  },
  {
    "question": "Do you offer personalized care plans?",
    "answer": "Yes, we offer customized care plans that are designed according to each individual's unique needs and preferences. We work closely with clients to develop the best solution."
  },
  {
    "question": "What measures do you take to ensure safety during services?",
    "answer": "We follow strict safety protocols, including regular training, risk assessments, and safety equipment, to ensure that services are delivered safely and securely."
  },
  {
    "question": "Can I change the caregiver assigned to me?",
    "answer": "Yes, you can request a different caregiver if you feel it is necessary. We aim to ensure your comfort and satisfaction with our services."
  },
  {
    "question": "How do I make a complaint about a service?",
    "answer": "If you have any concerns or complaints, please contact our customer support team immediately. We are committed to resolving any issues as quickly as possible."
  },
  {
    "question": "Do you have any package deals for multiple services?",
    "answer": "Yes, we offer package deals that allow you to bundle services and receive discounts. Contact us for more information on available packages."
  },
  {
    "question": "Can I request a specific time for service?",
    "answer": "Yes, you can request a specific time, and we will do our best to accommodate your preferences based on availability."
  },
  {
    "question": "What types of cleaning services do you offer?",
    "answer": "We offer a variety of cleaning services, including industrial cleaning, commercial cleaning, residential cleaning, and deep cleaning services tailored to your needs."
  },
  {
    "question": "How do I know if I need a deep cleaning?",
    "answer": "A deep cleaning is recommended if you need more thorough cleaning than regular cleaning, such as for spring cleaning, after renovation, or if your space has accumulated heavy dirt and grime."
  },
  {
    "question": "Do you offer cleaning services for businesses?",
    "answer": "Yes, we provide commercial and industrial cleaning services, ensuring that your workspace is clean, safe, and well-maintained."
  },
  {
    "question": "What cleaning products do you use?",
    "answer": "We use eco-friendly and non-toxic cleaning products wherever possible to ensure a safe environment for both our clients and staff."
  },
  {
    "question": "How often should I schedule cleaning services?",
    "answer": "The frequency of cleaning services depends on the type of space and usage. We recommend regular cleanings based on your needs and preferences."
  },
  {
    "question": "Can I book a one-time cleaning service?",
    "answer": "Yes, you can book a one-time cleaning service. We offer flexible options for both one-time and recurring cleanings."
  },
  {
    "question": "How do I get a quote for services?",
    "answer": "You can get a quote by visiting our website, filling out the service request form, or contacting our customer support team to discuss your needs."
  },
  {
    "question": "Do you provide staffing services for short-term and long-term needs?",
    "answer": "Yes, we provide staffing services for both short-term and long-term needs, whether for special projects or ongoing assistance."
  },
  {
    "question": "How do you vet your staff?",
    "answer": "All staff members undergo a thorough vetting process, which includes background checks, reference checks, and skills assessments to ensure they meet our high standards."
  },
  {
    "question": "Can I request temporary or seasonal staff?",
    "answer": "Yes, we provide temporary and seasonal staffing solutions tailored to your business needs, whether for holidays, peak seasons, or short-term projects."
  },
  {
    "question": "What industries do you provide staffing services for?",
    "answer": "We provide staffing services for various industries, including healthcare, retail, hospitality, office support, manufacturing, and more."
  },
  {
    "question": "Are your staffing services flexible?",
    "answer": "Yes, we offer flexible staffing services to suit your specific needs, whether you need part-time, full-time, or temporary workers."
  },
  {
    "question": "How do you handle the onboarding process for new staff?",
    "answer": "We handle the entire onboarding process, including training, orientation, and ensuring that new staff members are well-prepared for their roles."
  },
  {
    "question": "What should I do if I need to make a change to my staffing requirements?",
    "answer": "Please contact our staffing team as soon as possible, and we will make adjustments to meet your updated requirements."
  },
  {
    "question": "Do you provide healthcare staffing solutions?",
    "answer": "Yes, we offer healthcare staffing solutions for both short-term and long-term placements, including nurses, support staff, and caregivers."
  },
  {
    "question": "How do I become a caregiver or staff member with Beneficent?",
    "answer": "If you are interested in working with Beneficent, you can apply through our website. We look for individuals who are passionate about providing excellent service and care."
  },
  {
    "question": "Do you offer services for elderly or disabled individuals?",
    "answer": "Yes, we provide specialized care services for elderly and disabled individuals, ensuring their comfort, safety, and well-being."
  },
  {
    "question": "How can I get in touch with Beneficent customer support?",
    "answer": "You can contact our customer support team by calling our helpline, emailing us, or using the live chat feature on our website."
  },
  {
    "question": "What is the best way to pay for services?",
    "answer": "We offer multiple payment options, including credit/debit card payments, bank transfers, and invoicing for larger projects."
  },
  {
    "question": "Do you offer discounts for first-time customers?",
    "answer": "Yes, we offer a special discount for first-time customers. Please contact us for more details."
  },
  {
    "question": "How do you ensure the quality of your services?",
    "answer": "We have a strict quality assurance process in place, including regular training, performance reviews, and client feedback to maintain the highest service standards."
  },
  {
    "question": "Are your services covered by insurance?",
    "answer": "Yes, our services are covered by comprehensive insurance to ensure peace of mind for our clients."
  }
]
