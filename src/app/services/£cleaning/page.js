import React from 'react'
import Header from '../../_components/Header'
import Cleaning from '@/app/_components/ServicePack/CleaningService/Cleaning'

function Page() {
  return (
    <div className='container mx-auto p-3 lg:px-4'>
      <Header />
      <Cleaning />
    </div>
  )
}

export default Page