import React from 'react'
import Header from '../_components/Header';
import Faq from '../_components/Faq/Faq';
import Footer from '../_components/Footer';

export default function Page() {
    return (
      <div className="container mx-auto p-3 lg:px-4">
        <Header />
        <Faq />
        <Footer />
      </div>
    );
  }