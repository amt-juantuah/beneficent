import {
  HomeIcon,
  InformationCircleIcon,
  CogIcon,
  CurrencyDollarIcon,
  BookOpenIcon,
  PhoneIcon,
  BriefcaseIcon,
  NewspaperIcon
} from "@heroicons/react/24/outline";

import { FaHandsHelping, FaHeart, FaUsers, FaCar } from "react-icons/fa";
import { MdChat, MdElderly, MdOutlineAccessibilityNew, MdOutlineLocalDining } from "react-icons/md";
import { IoIosPeople, IoIosCalendar } from "react-icons/io";
import { GiHouseKeys, GiMedicalPack, GiHealthNormal } from "react-icons/gi";
import { RiTeamLine, RiPriceTag3Line } from "react-icons/ri";
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
      { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
      { name: 'Contact sales', href: '#', icon: PhoneIcon },
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
            { name: "Companionship", href: "/services/non-regulated/companionship", description: "Emotional support and social engagement for clients.", icon: IoIosPeople },
            { name: "Domestic Assistance", href: "/services/non-regulated/domestic-assistance", description: "Help with household chores and daily tasks.", icon: FaHandsHelping },
            { name: "Meal Preparation", href: "/services/non-regulated/meal-preparation", description: "Assistance with preparing nutritious meals.", icon: MdOutlineLocalDining },
            { name: "Errands & Transportation", href: "/services/non-regulated/errands-transportation", description: "Transportation and help with errands like shopping.", icon: FaCar },
            { name: "Lifestyle Support", href: "/services/non-regulated/lifestyle-support", description: "Assistance with maintaining a fulfilling lifestyle.", icon: IoIosCalendar }
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
          href: "/cleaning-services",
          description: "Discover cleaning services provided by Beneficent.",
          icon: CogIcon,
          submenu: [
            {
              name: "Home Move-In Cleaning",
              href: "/other-services/home-move-in-cleaning",
              description: "Thorough cleaning for homes before moving in.",
              icon: BsFillHouseFill,
            },
            {
              name: "Home Move-Out Cleaning",
              href: "/other-services/home-move-out-cleaning",
              description: "Professional cleaning services for homes before moving out.",
              icon: FiTruck,
            },
            {
              name: "New House Cleaning",
              href: "/other-services/new-house-cleaning",
              description: "Deep cleaning services for new properties.",
              icon: BiBuildingHouse,
            },
            {
              name: "Construction Cleaning",
              href: "/other-services/construction-cleaning",
              description: "Post-construction cleaning for safe and tidy spaces.",
              icon: AiOutlineSafetyCertificate,
            },
            {
              name: "House Cleaning",
              href: "/other-services/house-cleaning",
              description: "Comprehensive cleaning solutions for homes.",
              icon: MdOutlineLocalDining,
            },
            {
              name: "Office Cleaning",
              href: "/other-services/office-cleaning",
              description: "Professional cleaning for office environments.",
              icon: BriefcaseIcon,
            },
            {
              name: "Deep Cleaning",
              href: "/other-services/deep-cleaning",
              description: "Intensive cleaning services for residential and commercial properties.",
              icon: AiOutlineSchedule,
            },
          ],
        },
        {
          name: "Staffing",
          href: "/staffing-services",
          description: "Discover Staffing support services provided by Beneficent.",
          icon: CogIcon,
          submenu: [
            {
              name: "Hotel and Factory Agency Support",
              href: "/other-services/hotel-factory-support",
              description: "Staffing solutions for hotel and factory operations.",
              icon: FiUsers,
            },
            {
              name: "Kitchen Porter",
              href: "/other-services/kitchen-porter",
              description: "Support staff for kitchen management and cleaning.",
              icon: MdOutlineLocalDining,
            },
            {
              name: "Kitchen Assistant",
              href: "/other-services/kitchen-assistant",
              description: "Assistance with kitchen operations and meal preparation.",
              icon: FaHandsHelping,
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
          href: "/contact",
          description: "Get in touch with Beneficent's care agency team.",
          icon: PhoneIcon,
          submenu: [
            { "name": "Contact Information", "href": "/contact/info", icon: PhoneIcon, description: "Get in touch with Beneficent by contacting us", },
            { "name": "Request a Consultation", "href": "/contact/request-consultation", icon: AiOutlineSolution, description: "Benefit from our consultation session", },
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