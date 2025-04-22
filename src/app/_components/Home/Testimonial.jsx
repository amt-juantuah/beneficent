'use client'

import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonials } from '../JSON';
import Star from '../../../components/Star'
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonial = () => {
  return (
    <section className="testimonial-section px-8 py-16 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">What Our <span className='col-prim'>Clients</span> Say</h2>
        <p className="text-lg text-gray-600">Here’s how our services have impacted our clients’ lives.</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {/* Testimonials */}
        { testimonials.map((testimonial, index) => (
        <SwiperSlide  key={index} className="relative bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300">
        <div className="relative"> 
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-72 object-cover"
            loading="lazy"
          />
          {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div> */}
          </div>
            <div className="relative p-3 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} filled={i < testimonial.ratings} />
                ))}
                <span className="ml-2 text-sm font-semibold text-gray-600">
                  {testimonial.ratings.toFixed(1)}
                </span>
              </div>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500 mt-1">{testimonial.role}</p>
          <p className="italic mt-1">{testimonial.description}</p>
          <FaQuoteLeft className="text-5xl text-gray-200 absolute top-16 left-5 z-0" />
        </div>
      </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial