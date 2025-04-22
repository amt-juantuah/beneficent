'use client';
import React from 'react';
import Notification from '../../components/Notification';
import CareerApplicationForm from '../../components/CareerApplicationForm';
import Header from '../_components/Header'
import Footer from '../_components/Footer'

const JobApplication = () => {
  return (
    <div className="container mx-auto p-3 lg:px-4">
      <Header />
      <Notification />
      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Career Application</h2>
      <p className="text-lg text-gray-600">
        If you're interested in joining the team, please submit your application and CV.
      </p>
      <CareerApplicationForm />
      <Footer />
    </div>
  );
};

export default JobApplication;
