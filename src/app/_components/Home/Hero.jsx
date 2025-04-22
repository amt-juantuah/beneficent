'use client'

import React, {useState, useEffect} from 'react'
import { Button } from '../../../components/ui/button';
import { heroCapture } from '../JSON';
import Link from 'next/link';

const Hero = () => {
 
  return (
      <div className="hero-backg bg-white-500 w-full h-full">
        <div className="relative overflow-hidden ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <div 
                data-aos="fade-right"
                className="relative"
              >
                <img
                  src="/assets/images/care1.jpg"
                  alt="Hero Care"
                  className="mx-auto rounded  transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Right Column - Text & CTA */}
              <div 
                data-aos="zoom-in-up"
                className="text-center md:text-left"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to <span className='beneficent-l'>Beneficent</span> Care & Support
                </h1>
                <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-6">
                  {heroCapture.title}
                </h2>
                <p className="text-gray-500 text-lg mb-8">
                  {heroCapture.details}
                </p>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-left items-center">
                  <a href='/about-us' className="rounded outline outline-1 p-1.5 text-sm/6 font-bold md:w-auto hover:bg-indigo-200 transition-all transform-200">
                    About Us <span aria-hidden="true">&rarr;</span>
                  </a>
                  <Link href="/services" passHref>
                    <Button variant="outline" size="default" className="text-sm/6 font-semibold text-white-900 md:w-auto">
                    Explore Services <span aria-hidden="true">&rarr;</span>
                    </Button>
                  </Link>
                  <Link href="/careers" passHref>
                    <Button variant="secondary" size="default" className="text-sm/6 font-semibold text-white-900 md:w-auto">
                      Jobs <span aria-hidden="true">&rarr;</span>
                    </Button>
                  </Link>
                  <Link href="/faq" passHref>
                    <Button variant="outline" size="default" className=" text-sm/6 font-semibold text-white-900 md:w-auto ">
                      FAQ <span aria-hidden="true">&rarr;</span>
                    </Button>
                  </Link>
                  <Link href="/enquiry" passHref>
                    <Button variant="outline" size="default" className=" text-sm/6 font-semibold text-white-900 md:w-auto ">
                      Ask a Question <span aria-hidden="true">&rarr;</span>
                    </Button>
                  </Link>
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-500 transition-colors duration-200 text-lg font-medium"
                  >
                    Find Carers
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-500 transition-colors duration-200 text-lg font-medium"
                  >
                    Explore Care
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-500 transition-colors duration-200 text-lg font-medium"
                  >
                    Jobs
                  </motion.button> */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero