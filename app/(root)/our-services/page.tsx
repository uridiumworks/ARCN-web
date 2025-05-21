import React from 'react'
import Consult from './consult/page'
import TechnicalServices from './technical-services/page'
// import TechnicalServices from '../../our-services/technical-services/page'
// import Consult from '../../our-services/consult/page'

export default function OurServices() {
  return (
    <div>
        {/* <OurMedia /> */}
        <div className="w-full plant text-white relative bg-impact-static-bg bg-cover font-montserrat bg-black text-left flex flex-col place-content-center h-[19rem] px-4 md:px-42">
            <div className="absolute inset-0 lg:h-[19rem] bg-[#000] bg-opacity-[.65]"></div>
            <div className='relative z-10 md:w-[1100px] mx-auto px-4'>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Our Services
                </h1>
            </div>
        </div>
        <Consult />
        <TechnicalServices />
    </div>
  )
}
