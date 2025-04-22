// 'use client';
import React from 'react';
import Notification from '../../components/Notification';
import EnquiryForm from '../../components/EnquiryForm';
import Header from '../_components/Header'
import Footer from '../_components/Footer'

const Contact = () => {
  return (
    <div className="container mx-auto p-3 lg:px-4">
      <Header />
      <Notification />
      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Enquiry and Requests</h2>
      <p className="text-lg text-gray-600">
        If you have any questions or requests, feel free to let us know! Please use the form below.
      </p>
      <EnquiryForm />
      <Footer />
    </div>
  );
};

export default Contact;
