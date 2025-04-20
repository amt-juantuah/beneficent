'use client'

import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion";
import { services } from '../JSON';
import Link from 'next/link';

const Banner = () => {

  return (
      <div className="bg-[#FAEBD7] w-full h-full">
        <div className="relative overflow-hidden ">
          <h4 className='text-[#990000] text-lg font-bold italic px-4 sm:px-6 lg:px-8 py-10'>&mdash; Specialised Services</h4>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          { services.map(  (item, index) => (
            <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
              {/* Left Column - Text & CTA */}              
              <div
                className="text-center md:text-left"
              >
                <h4 className="text-4xl md:text-3xl font-bold text-indigo-600 mb-6">
                  { item.name}
                </h4>
                <p className="text-gray-500 text-lg mb-8">
                { item.longDescription }
                </p>
                <Link href={item.href} passHref className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full md:w-auto bg-indigo-600 text-white px-24 py-3 hover:bg-indigo-500 transition-colors duration-200 text-lg font-medium"
                  >
                    Explore further
                  </motion.button>
                </Link>
              </div>


              {/* Right Column - image */}
              <div className="relative grid grid-cols-2 gap-4" >

                {item.submenu.slice(0,4).map((itx, idx) => (
                  <img key={itx.id}
                    src={itx.image}
                    alt={itx.id}
                    className="mx-auto shadow-2xl transform hover:scale-105 transition-transform duration-300 w-[16.5625rem] h-[11.375rem] object-cover sm:w-full sm:aspect-[3/2]"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Banner