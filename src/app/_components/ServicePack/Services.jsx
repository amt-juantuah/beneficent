"use client"

import React from 'react';
import { services } from '../JSON';
import { Button } from '../../../components/ui/button';
import Link from 'next/link';


const Services = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col gap-10 mt-20">
                { services.map((item, key) => (
                    <div key={key} className="group p-3 card-floor pb-12 mb-12">
                        {/* <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            < item.icon aria-hidden="true" className="size-6 text-indigo-600 group-hover:text-indigo-200" />
                        </div> */}
                        {/* <h1 className='font-semibold py-2 text-xl text-gray-900'>{key + 1}. {item.step}</h1> */}
                        <div className='grid grid-cols-1 md:grid-cols-2 justify-between pb-4'>
                            <div className="flex flex-col py-4">
                                <h1 className='p-2 mb-4 text-xl md:text-xl font-bold text-[#fafafa] bg-[#560a61] border-2 border-[#560a61] max-w-[220px] transition-all duration-400'>{item.name}</h1>
                                <div className="size-3 border bg-gradient-radial from-indigo-500 to-indigo-600t"></div>
                                <h2 className='py-4 md:pt-14 text-gray-500'>{item.description}</h2>
                                <Link href={item.href} className='w-[100px]' passHref>
                                    <Button variant="link" size="normal" className=" text-sm/6 font-semibold text-[#3b68fb] justify-start">
                                        See More
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 19L19 5"></path>
                                            <path d="M5 5h14v14"></path>
                                        </svg>
                                    </Button>
                                </Link>
                            </div>
                            <div 
                                className='bg-white rounded w-full h-[50vh] md:h-full bg-cover bg-center'
                                style={{ backgroundImage: `url(${item.background})` }}
                            >
                            </div>
                        </div>
                        {/* ...... subservices list ...... */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between">
                            {item.submenu.map((itx, idx) => (
                                <div key={idx} className="group p-3 card-set-color rounded-md shadow hover:shadow-xl transition-all duration-200 flex flex-row items-center justify-between">
                                    <div className=''>
                                        <div className="flex size-9 flex-none items-center justify-center rounded-lg bg-white shadow group-hover:bg-white">
                                            <itx.icon aria-hidden="true" className="size-6 text-[#8400a5] group-hover:text-[#8400a5]" />
                                        </div>
                                        <p className='font-semibold py-2 text-base text-gray-600'>{itx.name}</p>
                                        <p className='py-4 text-gray-500'>{itx.description}</p>
                                    </div>
                                    <div className="bg-white rounded size-32 min-w-32"></div>
                                </div>))}
                        </div>

                    </div>))
                }
            </div>
        </div>
    );
};

export default Services;
