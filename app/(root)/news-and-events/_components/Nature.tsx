import CustomContainer from '@/components/CustomContainer'
import React from 'react'
import "./style.css"
export default function nature() {
  return (
    <section className=" text-left banner bg-card bg-fixed bg-center bg-no-repeat relative h-[10rem] md:h-[19rem] place-content-center">
      <div className="absolute inset-0 lg:h-[19rem] bg-[#000] bg-opacity-[.40]"></div>
      <CustomContainer>
      <h2 className="font-extrabold relative z-10 text-black text-xl lg:px-2 md:text-3xl sm:text-4xl">
        Nature-positive farms on remote hillsides in India, show the future of resilient farming
      </h2>
      </CustomContainer>
    </section>
  )
}
