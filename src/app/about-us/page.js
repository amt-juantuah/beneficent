import React from 'react'
import AboutUs from '../_components/AboutUs/AboutUs';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

export default function Page() {
    return (
      <div className="container mx-auto p-3 lg:px-4">
        <Header />
        <AboutUs />
        <Footer />
      </div>
    );
  }