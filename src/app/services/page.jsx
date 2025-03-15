import React from 'react'
import Header from '../_components/Header'
import Services from '../_components/ServicePack/Services'

const Page = () => {
  return (
    <div className='container mx-auto p-3 lg:px-4'>
        <Header />
        <Services />
    </div>
  )
}

export default Page