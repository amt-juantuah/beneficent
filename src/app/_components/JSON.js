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

import { FaHandsHelping, FaHeart, FaUsers, FaCar, FaUserNurse,
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

    export const callsToAction = [
      { name: 'See us working', href: '#', icon: PlayCircleIcon },
      { name: 'Contact Office', href: 'tel:07438731206', icon: PhoneIcon },
    ];


    export const actionPoint = {
      telX: "07438731206",
      emY: "beneficentcare@yahoo.com",
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
          postcode: "HA1 1BD"
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
        href: "/services/care",
        description: "Explore the wide range of care services offered by Beneficent.",
        icon: MdElderly,
        background: "/assets/images/in_chair_care.jpg",
        submenu: [
          { name: "Companionship and a Friend", href: "/services/non-regulated/companionship", description: "Emotional support and social engagement for clients.", icon: IoIosPeople },
          { name: "Daily Living Support", href: "/services/non-regulated/domestic-assistance", description: "Help with household chores and daily tasks.", icon: FaHandsHelping },
          { name: "Light Meal Preparation", href: "/services/non-regulated/meal-preparation", description: "Assistance with preparing nutritious meals.", icon: MdOutlineLocalDining },
          { name: "Errands & Shopping", href: "/services/non-regulated/errands-transportation", description: "Help with errands like shopping.", icon: FaCar },
          { name: "Lifestyle Support (flowering, reading, etc)", href: "/services/non-regulated/lifestyle-support", description: "Assistance with maintaining a fulfilling lifestyle.", icon: IoIosCalendar }
        ]
      },
      {
        name: "Industrial Cleaning",
        href: "/services/cleaning",
        description: "Discover cleaning services provided by Beneficent.",
        icon: CogIcon,
        background: "/assets/images/cleaning-team.jpg",
        submenu: [
          {
            name: "Home Move-In / Move-Out Cleaning",
            href: "/cleaning/home-move-cleaning",
            description: "Thorough cleaning for homes before moving in and after moving out.",
            icon: BsFillHouseFill,
          },
          {
            name: "Offices and New House Cleaning",
            href: "/cleaning/new-house-cleaning",
            description: "Professional cleaning for new properties and office environments.",
            icon: BiBuildingHouse,
          },
          {
            name: "Construction and Commercial Cleaning",
            href: "/cleaning/construction-cleaning",
            description: "Post-construction cleaning for safe and tidy spaces.",
            icon: AiOutlineSafetyCertificate,
          },
          {
            name: "House Cleaning",
            href: "/cleaning/house-cleaning",
            description: "Comprehensive cleaning solutions for homes.",
            icon: MdOutlineLocalDining,
          },
          {
            name: "Kitchen Deep Cleaning",
            href: "/cleaning/kitchen-deep-cleaning",
            description: "Intensive kitchen cleaning services for residential and commercial properties.",
            icon: AiOutlineSchedule,
          },
        ],
      },
      {
        name: "Staffing Agency",
        href: "/services/staffing",
        description: "Discover Staffing support services provided by Beneficent.",
        icon: CogIcon,
        background: "/assets/images/staffing-team.jpg",
        submenu: [
          {
            name: "Care & Support Workers",
            href: "/staffing/care-workers",
            description: "Experienced care workers available for home and facility care.",
            icon: IoIosPeople,
          },
          {
            name: "Nurses",
            href: "/staffing/nurses",
            description: "Qualified nurses for medical care and support.",
            icon: FaUserNurse,
          },
          {
            name: "Hotel and Factory Workers",
            href: "/staffing/hotel-factory-workers",
            description: "Reliable staffing for hotels, factories, and industrial sites.",
            icon: RiHotelLine,
          },
          {
            name: "Kitchen Assistants",
            href: "/staffing/kitchen-assistants",
            description: "Skilled kitchen staff to assist with food preparation and hygiene.",
            icon: FaHandsHelping,
          },
          {
            name: "Kitchen Porters",
            href: "/staffing/kitchen-porters",
            description: "Support staff for maintaining kitchen cleanliness and efficiency.",
            icon: GiChefToque,
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
          href: "/services/initial-offer",
          description: "Explore the wide range of care services offered by Beneficent.",
          icon: MdElderly,
          submenu: [
            { name: "Companionship and a Friend", href: "/services/non-regulated/companionship", description: "Emotional support and social engagement for clients.", icon: IoIosPeople },
            { name: "Daily Living Support", href: "/services/non-regulated/domestic-assistance", description: "Help with household chores and daily tasks.", icon: FaHandsHelping },
            { name: "Light Meal Preparation", href: "/services/non-regulated/meal-preparation", description: "Assistance with preparing nutritious meals.", icon: MdOutlineLocalDining },
            { name: "Errands & Shopping", href: "/services/non-regulated/errands-transportation", description: "Help with errands like shopping.", icon: FaCar },
            { name: "Lifestyle Support (flowering, reading, etc)", href: "/services/non-regulated/lifestyle-support", description: "Assistance with maintaining a fulfilling lifestyle.", icon: IoIosCalendar }
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
              href: "/cleaning/home-move-cleaning",
              description: "Thorough cleaning for homes before moving in and after moving out.",
              icon: BsFillHouseFill,
            },
            {
              name: "Offices and New House Cleaning",
              href: "/cleaning/new-house-cleaning",
              description: "Professional cleaning for new properties and office environments.",
              icon: BiBuildingHouse,
            },
            {
              name: "Construction and Commercial Cleaning",
              href: "/cleaning/construction-cleaning",
              description: "Post-construction cleaning for safe and tidy spaces.",
              icon: AiOutlineSafetyCertificate,
            },
            {
              name: "House Cleaning",
              href: "/cleaning/house-cleaning",
              description: "Comprehensive cleaning solutions for homes.",
              icon: MdOutlineLocalDining,
            },
            {
              name: "Kitchen Deep Cleaning",
              href: "/cleaning/kitchen-deep-cleaning",
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
              href: "/staffing/care-workers",
              description: "Experienced care workers available for home and facility care.",
              icon: IoIosPeople,
            },
            {
              name: "Nurses",
              href: "/staffing/nurses",
              description: "Qualified nurses for medical care and support.",
              icon: FaUserNurse,
            },
            {
              name: "Hotel and Factory Workers",
              href: "/staffing/hotel-factory-workers",
              description: "Reliable staffing for hotels, factories, and industrial sites.",
              icon: RiHotelLine,
            },
            {
              name: "Kitchen Assistants",
              href: "/staffing/kitchen-assistants",
              description: "Skilled kitchen staff to assist with food preparation and hygiene.",
              icon: FaHandsHelping,
            },
            {
              name: "Kitchen Porters",
              href: "/staffing/kitchen-porters",
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
          description: "Get in touch with Beneficent's care agency team.",
          icon: PhoneIcon,
          submenu: [
            { "name": "Contact Information", "href": "/about-us/#contact", icon: PhoneIcon, description: "Get in touch with Beneficent by contacting us", },
            { "name": "Request a Consultation", "href": "about-us#values", icon: AiOutlineSolution, description: "Benefit from our consultation session", },
            { "name": "Live Chat", "href": "/contact/live-chat", icon: MdChat, description: "Chat with one of our caring respondents" }
        ]
        },
        {
          name: "Careers",
          href: "/careers",
          description: "Explore career opportunities with Beneficent.",
          icon: BriefcaseIcon,
          submenu: [
          { "name": "Join Our Team", "href": "/careers/join", icon: RiTeamLine, description: "Send us your CV and job applications" },
          { "name": "Current Job Openings", "href": "/careers/job-openings", icon: BriefcaseIcon, description: "Explore career opportunities with Beneficent." }
        ]
        },
        // {
        //   name: "Blog/News",
        //   href: "/blog",
        //   description: "Read the latest updates, articles, and care tips from Beneficent.",
        //   icon: NewspaperIcon
        // }
      ]