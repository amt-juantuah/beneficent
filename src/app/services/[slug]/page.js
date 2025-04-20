import React from 'react'
import Header from '../../_components/Header'
import Care from '../../_components/ServicePack/CareService/Care'
import Footer from '../../_components/Footer'

async function Page({params}) {
  const { slug } = await params;
  return (
    <div className='container mx-auto p-3 lg:px-4'>
      <Header />
      <Care slug={slug} />
      <Footer />
    </div>
  )
}

export default Page