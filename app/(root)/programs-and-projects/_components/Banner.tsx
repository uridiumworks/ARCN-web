import CustomContainer from '@/components/CustomContainer'
import React from 'react'
import "./style.css"

export default function Banner(prop: {isLoading: boolean, title: string}) {
  return (
    <section className=" banel bg-card text-left md:h-[19rem] place-content-center bg-black p-6">
      <CustomContainer>
        {!prop.isLoading && <h2 className="font-extrabold text-white text-xl md:text-3xl sm:text-4xl">
          {prop.title}
        </h2> }
      </CustomContainer>
    </section>
  )
}
