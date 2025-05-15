import CustomContainer from '@/components/CustomContainer'
import React from 'react'
import "./style.css"

interface NatureProps {
  title: string;
}

export default function Nature({ title }: NatureProps) {
  return (
    <section className="relative text-left banner bg-card h-[10rem] md:h-[19rem] place-content-center">
      <div className="absolute inset-0 lg:h-[19rem] bg-[#000] bg-opacity-[.50]"></div>
      <CustomContainer>
        <h2 className="font-extrabold relative z-10 text-white text-xl md:text-3xl sm:text-4xl">
          {title}
        </h2>
      </CustomContainer>
    </section>
  );
}
