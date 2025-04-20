'use client'
import Image from "next/image";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Banner from "./_components/Home/Banner";
import Hero from "./_components/Home/Hero";
import Divider from "./_components/Home/Divider";
import SolutionStep from "./_components/Home/SolutionStep";
import Testimonial from "./_components/Home/Testimonial";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 200, // animation duration
      easing: 'ease-in-out',
      once: true, // whether animation should happen only once
    })
  }, [])

  
  return (
    <div className="container mx-auto p-3 lg:px-4 overflow-hidden transition-opacity duration-500">
      <Header />
      <Hero />
      <Divider />
      <SolutionStep />
      <Banner />
      <Testimonial />
      <Footer />
    </div>
  );
}
