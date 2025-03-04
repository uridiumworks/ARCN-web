import { Divide } from "lucide-react";
import Image from "next/image";
import React from "react";

const logos = [
  "/Images/Homepage/partner-logo2.png",
  "/Images/Homepage/partner-logo3.png",
  "/Images/Homepage/partner-logo4.png",
  "/Images/Homepage/partner-logo5.png",
  "/Images/Homepage/partner-logo6.png",
  "/Images/Homepage/partner-logo7.png",
  "/Images/Homepage/partner-logo8.png",
  "/Images/Homepage/partner-logo9.png",
  "/Images/Homepage/partner-logo10.png",
  "/Images/Homepage/partner-logo11.png",
  "/Images/Homepage/partner-logo12.png",
];

export default function OurPartners() {
  return (
    <section className="py-16 md:py-24">
      <h3 className="text-center font-bold text-3xl sm:text-4xl text-black mb-12 sm:leading-[3.75rem]">
        Our Partners
      </h3>
      <div className="flex overflow-hidden">
        <div className="flex gap-2 animate-scroll">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-8 min-w-[7.5rem]"
            >
              <Image
                src={logo}
                alt="img"
                width={120}
                height={120}
                className="h-24 w-auto object-contain"
                priority={i < 3} // Prioritize loading first 3 images
              />
            </div>
          ))}
        </div>
        <div className="flex gap-2 animate-scroll">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-8 min-w-[7.5rem]"
            >
              <Image
                src={logo}
                alt="img"
                width={120}
                height={120}
                className="h-24 w-auto object-contain"
       
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
