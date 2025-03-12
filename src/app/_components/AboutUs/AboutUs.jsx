"use client"

import React from 'react'
import { aboutUs } from '../JSON'
import TableOne from '@/components/tableOne'

const AboutUs = () => {
  return (
    <div className='container border-t border-gray-200 pt-4'>
        { aboutUs.contact &&
          <div className="">
            <h1 className='text-2xl md:text-2xl font-bold text-gray-900 mb-8'>{aboutUs.contact.title}</h1>
            <h2 className="text-2xl md:text-xl font-bold text-gray-900 mb-4">{aboutUs.contact.name}</h2>
            <p className="text-gray-500 text-lg mb-2">{aboutUs.contact.street}</p>
            <p className="text-gray-500 text-lg mb-2">{aboutUs.contact.area}</p>
            <p className="text-gray-500 text-lg mb-2">{aboutUs.contact.city}</p>
            <p className="text-gray-500 text-lg mb-4">{aboutUs.contact.postcode}</p>
            <a className="text-gray-500 text-lg mb-8 underline hover:text-indigo-500" href={`tel:${aboutUs.contact.tel}`}>{aboutUs.contact.tel}</a>
          </div>
        }
        {
          aboutUs.vision &&
          <div className="w-full md:w-2/3 mt-24">
            <h1 className='text-2xl md:text-2xl font-bold text-gray-900 mb-8'>{aboutUs.vision.title}</h1>
            {aboutUs.vision.submenu.map((item, key) => (
              <TableOne key={key} item={item} />
            ))}
          </div>
        }
    </div>
  )
}

export default AboutUs