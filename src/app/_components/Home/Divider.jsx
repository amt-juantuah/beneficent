import React from 'react'

const Divider = () => {
  
  return (
    <div className='container w-full h-14 hero-div-bg items-center ounded-tl-none rounded-tr-none rounded-bl-[16px] rounded-br-[16px]'>
      <div className='flex flex-row gap-3 h-full w-full p-2 items-center justify-evenly'>
        <div className="h-full">
          <img className="h-full rounded-md" src="/assets/logos/11.png" loading="lazy" alt="" />
            {/* <span className=""> </span> */}
        </div>
        <div className="h-full ">
          <img className="h-full" src="/assets/images/xx6-Photoroom.png" loading="lazy" alt="" />
          {/* <span className='beneficent'></span> */}
        </div>
        <div className="h-full">
          <img className="h-full" src="/assets/images/xx5-Photoroom.png" loading="lazy" alt="" />
          {/* <span className='beneficent'></span> */}
          </div>
        <div className="h-full">
          <img className="h-full" src="/assets/images/xx4-Photoroom.png" loading="lazy" alt="" />
          {/* <span className='beneficent'></span> */}
          </div>
        <div className="h-full">
          <img className="h-full" src="/assets/images/xx2-Photoroom.png" loading="lazy" alt="" />
          {/* <span className=""></span> */}
          </div>
      </div>
    </div>
  )
}
export default Divider