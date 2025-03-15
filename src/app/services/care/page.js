import React from 'react'
import Header from '../../_components/Header'
import Care from '../../_components/ServicePack/CareService/Care'

function Page() {
  return (
    <div className='container mx-auto p-3 lg:px-4'>
      <Header />
      <Care />
    </div>
  )
}

export default Page