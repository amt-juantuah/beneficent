'use client';

import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import { footerContent } from './JSON';


const iconMap = {
  FaFacebookF: <FaFacebookF />,
  FaInstagram: <FaInstagram />,
  FaLinkedinIn: <FaLinkedinIn />
};

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Brand & Tagline */}
        <h1 className="text-3xl font-extrabold text-indigo-400 mb-2">{footerContent.brand}</h1>
        <p className="text-sm text-gray-300 mb-6">
          {footerContent.tagline}
        </p>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-sm text-gray-300">
          {footerContent.links.map((link, index) => (
            <Link key={index} href={link.href} className="hover:text-indigo-400 transition">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700 mb-6" />

        {/* Socials */}
        <div className="flex justify-center space-x-6 mb-6">
          {footerContent.socials.map((social, index) => (
            <a key={index} target='_blank' href={social.url} className="text-gray-400 hover:text-indigo-400 text-lg transition">
              {iconMap[social.icon]}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Beneficent Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

