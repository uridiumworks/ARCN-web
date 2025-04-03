import CustomContainer from '@/components/CustomContainer'
import React from 'react'
import "./style.css"
export default function nature() {
  return (
    <section className=" text-left banner bg-card h-[10rem] md:h-[19rem] place-content-center">
      <CustomContainer>
      <h2 className="font-extrabold text-black text-xl lg:px-12 md:text-3xl sm:text-4xl">
        Nature-positive farms on remote hillsides in India, show the future of resilient farming
      </h2>
      </CustomContainer>
    </section>
  )
}
