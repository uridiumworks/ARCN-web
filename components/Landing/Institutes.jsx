import Image from "next/image";
import Cocoa from "../../public/Images/Icons/cocoa.png";
import Rubber from "../../public/Images/Icons/rubber.png";
import National from "../../public/Images/Icons/nationl.png";
import { IoArrowForwardSharp } from "react-icons/io5";

const Institutes = () => {
  return (
    <main className=" w-full space-y-4 mx-auto py-7">
      <div className="space-y-6">
        <div className="text-center space-y-4 place-content-center">
          <h1 className="font-medium text-[48px]">Our Research Institutes</h1>
          <p className="font-normal space-y-3 text-lg">
            Explore our network of research institutes dedicated to advancing
            <br />agricultural innovation and sustainability across Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 mx-auto w-[1200px] ">

          <div className="border py-3 px-5 rounded-xl grid grid-cols-1 gap-3.5 h-[299.46px] ">
            <div className="space-y-2">
              <Image src={Cocoa} alt="cocoa" width={58} height={58} />
              <h1 className="font-semibold text-xl">Cocoa Research Institute of Nigeria</h1>
              <p  className="font-normal text-[13px]">
                Cocoa Research Institute of Nigeria (CRIN) was established in
                Ibadan, Oyo State on 1st December, 1964 as a successor autonomous
                research organization to the Nigerian Substation of the defunct West
                African Cocoa Research Institute (WACRI) by Nigeria Statute, Act No.
                6 of 1950.
              </p>
            </div>

            <div className="w-[41.86px] h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
              <IoArrowForwardSharp className="text-xl"/>
            </div>
          </div>

          <div className="border py-3 px-5 rounded-xl grid grid-cols-1 gap-3.5 h-[299.46px] ">
            <div className="space-y-2">
              <Image src={Rubber} alt="rubber" width={58} height={58} />
              <h1 className="font-semibold text-xl">Cocoa Research Institute of Nigeria</h1>
              <p  className="font-normal text-[13px]">
              Rubber research institute of Nigeria is the only Federal Government
              agency in Nigeria that has the mandate to conduct research and
              development on rubber and other latex producing plants of economic
              importance.
              </p>
            </div>

            <div className="w-[41.86px] h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
              <IoArrowForwardSharp className="text-xl"/>
            </div>
          </div>

          <div className="border py-3 px-5 rounded-xl grid grid-cols-1 gap-3.5 h-[299.46px] ">
            <div className="space-y-2">
              <Image src={National} alt="national" width={58} height={58} />
              <h1 className="font-semibold text-xl">Cocoa Research Institute of Nigeria</h1>
              <p  className="font-normal text-[13px]">
              The National Horticultural Research Institute (Headquarter); located
              in Ibadan was established in 1975 with the assistance of United
              Nations Development Programme in conjunction with food and
              Agricultural Organization as fruits and vegetables research and
              demonstration centre.
              </p>
            </div>

            <div className="w-[41.86px] h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
              <IoArrowForwardSharp className="text-xl"/>
            </div>
          </div>

        </div>
        <div className="place-content-center text-center pt-6">
          <button
            type="button"
            className="py-2 px-8 font-Rubik rounded-[4px] font-bold text-xl md:text-base text-black focus:outline-none border"
          >VIEW ALL</button>
        </div>
        
      </div>
    </main>
  );
};

export default Institutes;
