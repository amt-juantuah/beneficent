'use client'

import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion";

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
      <div className="bg-white w-full h-full">
        <div className="relative overflow-hidden ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text & CTA */}              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center md:text-left"
              >
                <h4 className="text-4xl md:text-3xl font-bold text-gray-500 mb-6">
                  Companionship
                </h4>
                <p className="text-gray-500 text-lg mb-8">
                Our dedicated companions spend quality time with you or your loved one, 
                engaging in meaningful conversations, sharing hobbies, or simply enjoying 
                each other’s company to alleviate loneliness and foster connection
                </p>
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full md:w-auto bg-indigo-600 text-white px-24 py-3 hover:bg-indigo-500 transition-colors duration-200 text-lg font-medium"
                  >
                    Explore further
                  </motion.button>
                </div>
              </motion.div>


              {/* Right Column - image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative grid grid-cols-2 gap-4"
              >
                <img
                  src="/assets/images/care1.jpg"
                  alt="Carer"
                  className="mx-auto shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <img
                  src="/assets/images/care1.jpg"
                  alt="Carer"
                  className="mx-auto shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <img
                  src="/assets/images/care1.jpg"
                  alt="Carer"
                  className=" mx-auto shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <img
                  src="/assets/images/care1.jpg"
                  alt="Carer"
                  className="mx-auto shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Banner