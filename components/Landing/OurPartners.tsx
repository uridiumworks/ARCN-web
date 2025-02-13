import { Divide } from "lucide-react";
import Image from "next/image";
import React from "react";

const logos = [
  "/images/Homepage/partner-logo2.png",
  "/images/Homepage/partner-logo3.png",
  "/images/Homepage/partner-logo4.png",
  "/images/Homepage/partner-logo5.png",
  "/images/Homepage/partner-logo6.png",
  "/images/Homepage/partner-logo7.png",
  "/images/Homepage/partner-logo8.png",
  "/images/Homepage/partner-logo9.png",
  "/images/Homepage/partner-logo10.png",
  "/images/Homepage/partner-logo11.png",
  "/images/Homepage/partner-logo12.png",
];

export default function OurPartners() {
  return (
    <section className="py-16 md:py-24">
      <h3 className="text-center font-bold text-4xl text-black mb-20">
        Our Partners
      </h3>
      <div className="flex overflow-hidden">
        <div className="flex gap-6 animate-scroll">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-8 min-w-[9.375rem]"
            >
              <Image
                src={logo}
                alt="img"
                width={150}
                height={150}
                className="h-12 w-auto object-contain"
                priority={i < 3} // Prioritize loading first 3 images
              />
            </div>
          ))}
        </div>
        <div className="flex gap-6 animate-scroll">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-8 min-w-[9.375rem]"
            >
              <Image
                src={logo}
                alt="img"
                width={150}
                height={150}
                className="h-12 w-auto object-contain"
       
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
