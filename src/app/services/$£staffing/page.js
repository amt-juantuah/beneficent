import React from 'react'
import Header from '../../_components/Header'
import Staffing from '@/app/_components/ServicePack/StaffingService/Staffing'

function Page() {
  return (
    <div className='container mx-auto p-3 lg:px-4'>
      <Header />
      <Staffing />
    </div>
  )
}

export default Page