'use client'

import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
      <div className="hero-backg bg-white-500 w-full h-full">
        <div className="relative overflow-hidden ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src="/assets/images/Subject.png"
                  alt="Hero Care"
                  className="w_50_  sm:w_70_ mx-auto rounded  transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </motion.div>

              {/* Right Column - Text & CTA */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center md:text-left"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to <span className='beneficent-l'>Beneficent</span> Care & Support
                </h1>
                <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-6">
                  To us, Care means kindness, Generousity and Mercy
                </h2>
                <p className="text-gray-500 text-lg mb-8">
                The name Beneficent means “doing good, being kind, and acting with generosity.” 
                This reflects our mission: to provide exceptional, compassionate, and 
                professional care services that enhance lives and bring comfort to those in need.
                </p>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-left items-center">
                  <Button size="default" className=" text-sm/6 font-semibold text-white-900 md:w-auto">
                  Find Carers <span aria-hidden="true">&rarr;</span>
                  </Button>
                  <Button size="default" className="text-sm/6 font-semibold text-white-900 md:w-auto">
                  Explore Services <span aria-hidden="true">&rarr;</span>
                  </Button>
                  <Button size="default" className="text-sm/6 font-semibold text-white-900 md:w-auto">
                    Jobs <span aria-hidden="true">&rarr;</span>
                  </Button>
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
  )
}
// kind, generous, or merciful
export default Hero