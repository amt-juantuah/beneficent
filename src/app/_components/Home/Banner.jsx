'use client'

import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion";

const Banner = ({col, to}) => {
  const [scrollY, setScrollY] = useState(0);
  const background = col || "grey" ;
  const gradTowards = to || "l" ;
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
      <div className={`bg-white w-full h-full bg-gradient-to-`+ gradTowards +` from-` + background +`-600 `}>
        <div className="relative overflow-hidden ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center md:text-left"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Transform Your Business with Our Solution
                </h1>
                <p className="text-gray-500 text-lg mb-8">
                  Experience the next generation of business management. Our platform
                  helps you streamline operations, boost productivity, and drive
                  growth with powerful, intuitive tools.
                </p>
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-500 transition-colors duration-200 text-lg font-medium"
                  >
                    Download Now
                  </motion.button>
                  <p className="text-gray-400 text-sm">
                    14-day free trial • No credit card required
                  </p>
                </div>
              </motion.div>


              {/* Right Column - Text & CTA */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src="/assets/images/care1.jpg"
                  alt="Carer"
                  className="w-4/5 mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </motion.div>

              
            </div>
          </div>

          {/* Background Decorative Elements */}
          {/* <div
            className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600 opacity-10"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          /> */}
        </div>
      </div>
  )
}

export default Banner