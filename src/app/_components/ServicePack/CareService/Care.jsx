import Link from 'next/link'
import React from 'react'
import { services } from '../../JSON'
import { Button } from '@/components/ui/button'

const Care = (Prop) => {
  const service = services.find(element => element.area.toLowerCase() === Prop.slug)

  return (
    <div className='container w-auto pt-10'>
      <Link href='/services' className=" text-sm/6 font-semibold text-[#3b68fb] justify-start">



        <button type="button" className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-2 py-2 items-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2 gap-2">
          <div className="flex size-9 flex-none items-center justify-center rounded-full bg-white shadow group-hover:bg-white">
            <img className='h-[90%] w-[90%] rounded-full' src="/assets/logos/12.png" />
          </div>
          See Other Services
        </button>
      </Link>
      
      <div className="group p-3 card-floor pb-12 mb-12">
        {/* <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            < item.icon aria-hidden="true" className="size-6 text-indigo-600 group-hover:text-indigo-200" />
                        </div> */}
        {/* <h1 className='font-semibold py-2 text-xl text-gray-900'>{key + 1}. {item.step}</h1> */}
        <div className='grid grid-cols-1 md:grid-cols-2 justify-between pb-4'>
          <div className="flex flex-col py-4">
            <h1 className='p-2 mb-4 text-xl md:text-xl font-bold text-[#fafafa] bg-[#560a61] border-2 border-[#560a61] max-w-[220px] transition-all duration-400'>{service.name}</h1>
            <div className="size-3 border bg-gradient-radial from-indigo-500 to-indigo-600t"></div>
            <h2 className='py-4 md:pt-14 text-gray-500'>{service.description}</h2>
          </div>
          <div className='bg-white rounded-xl w-full h-full md:h-full bg-cover bg-center'>
            <img
              src={service.background}
              className="inset-0 w-full h-full object-cover rounded-xl" alt="Background"
            />
          </div>

        </div>
        {/* ...... subservices list ...... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between">
          {service.submenu.map((itx, idx) => (
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

      </div>
    </div>
  )
}

export default Care