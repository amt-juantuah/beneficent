"use client"

import React from 'react'
import { servicesSteps, actionPoint } from '../JSON'
import { FaHandsHelping } from 'react-icons/fa'
import { useState, useEffect } from "react";


const SolutionStep = () => {
    const [greeting, setGreeting] = useState(null);
    const greet = ["Good Morning ☀️", "Good Afternoon 🌤️", "Good Evening 🌙"]
    // const weather = ["bg-orange-200", "bg-blue-300", "bg-indigo-900"]

  useEffect(() => {
    const getGreeting = () => {
      const hours = new Date().getHours();

      if (hours < 12) {
        return 0;
      } else if (hours < 18) {
        return 1;
      } else {
        return 2;
      }
    };

    setGreeting(getGreeting());
  }, []);

  

  return (
    <div className="container">
        <div className="flex flex-col items-center justify-center pt-12 pb-10 sm:pt-12 sm:pb-10 lg:pt-24 lg:pb-16">
            <h2 className={`text-xl text-center p-4 font-bold text-gray-600 rounded`}>{greet[greeting]}</h2>
            <h1 className='text-3xl text-center p-2 font-semibold text-gray-600'>Our <span className='col-prim'>5 Easy Steps</span>  To The Solution You Need </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between">
            {servicesSteps.map((item, key) => (
            <div data-aos="fade-up"
              data-aos-anchor-placement="center-bottom" key={key} className="group p-3 bg-gray-100 rounded-md shadow-lg hover:shadow-xl transition-transform">
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon aria-hidden="true" className="size-6 text-indigo-600 group-hover:text-indigo-200" />
                </div>
                <h1 className='font-semibold py-2 text-xl text-gray-900'>{key+1}. {item.step}</h1>
                <p className='py-4 text-gray-500'>{item.detail}</p>
            </div>))}
            <div data-aos="flip-right" className="group p-3 rounded-md shadow-lg bg-[url('/assets/images/handshake.jpg')] bg-cover bg-center min-h-[200px] cursor-pointer flex items-end hover:shadow-xl">
              <a href={`tel:${actionPoint.telX}`} className="text-indigo-600 bg-white p-4 rounded flex items-center gap-5 group-hover:text-white group-hover:bg-indigo-600 group-hover:transition-all duration-500 text-lg transition-transform">
                  Let's Get Started
                  <FaHandsHelping />
              </a>
            </div>
        </div>
    </div>
  )
}

export default SolutionStep