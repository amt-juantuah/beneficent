import React from 'react'
import Services from '../_components/ServicePack/Services'
import Header from '../_components/Header'

export default function Page(){
  return (
    <div className='container mx-auto p-3 lg:px-4'>
      <Header />
      <Services />
    </div>
  )
}