import CustomContainer from "@/components/CustomContainer";
import React from "react";

export default function Hero() {
  return (
    <section className="mt-3 text-center p-12 bg-black sm:p-24">
      <CustomContainer>
        <h2 className="font-bold text-white text-3xl sm:text-4xl sm:leading-[3.2rem]">
          ARCN Supervision Report January 2023
        </h2>
      </CustomContainer>
    </section>
  );
}
