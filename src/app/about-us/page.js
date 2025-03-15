import React from 'react'
import AboutUs from '../_components/AboutUs/AboutUs';
import Header from '../_components/Header';

export default function Home() {
    return (
      <div className="container mx-auto p-3 lg:px-4">
        <AboutUs />
      </div>
    );
  }