import { Divide } from "lucide-react";
import Image from "next/image";
import React from "react";

const logos = [
  "/Images/Homepage/aatf-icon.svg",
  "/Images/Homepage/afaas-icon.svg",
  "/Images/Homepage/africarice-icon.svg",
  "/Images/Homepage/cabi-icon.svg",
  "/Images/Homepage/cgiar-icon.svg",
  "/Images/Homepage/coraf-icon.svg",
  "/Images/Homepage/fara-icon.svg",
  "/Images/Homepage/gain-icon.svg",
  "/Images/Homepage/gra-icon.svg",
  "/Images/Homepage/icrisat-icon.svg",
  "/Images/Homepage/iita-icon.svg",
  "/Images/Homepage/ilri-icon.svg",
  "/Images/Homepage/theworldbank-icon.svg",
  "/Images/Homepage/worlffish-icon.svg",
  "/Images/Homepage/ifpri-icon.svg",
  "/Images/Homepage/syngenta-icon.svg",
];

export default function OurPartners() {
  return (
    <section className="py-12 md:py-20">
      <h3 className="text-center font-bold text-3xl sm:text-4xl text-black mb-12 leading-[2.25rem]">
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
