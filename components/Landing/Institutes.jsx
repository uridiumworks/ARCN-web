import Image from "next/image";
import Cocoa from "../../public/Images/Icons/cocoa.png";
import Rubber from "../../public/Images/Icons/rubber.png";
import National from "../../public/Images/Icons/nationl.png";
import Roots from "@/public/Images/Icons/Root.png";
import Cereals from "@/public/Images/Icons/Cereals.png";
import Akure from "@/public/Images/Icons/Akure.png";
import Ibandan from "@/public/Images/Icons/Ibandan.png";
import Ishiagu from "@/public/Images/Icons/Ishiagu.png";
import Kaduna from "@/public/Images/Icons/kaduna.png";
import Moor from "@/public/Images/Icons/Moor.png";

const Institutes = () => {
  return (
    <main className=" w-full space-y-4 mx-auto py-10">

      <div className="space-y-6">
        <div className="text-center space-y-4 place-content-center">
          <h1 className="font-medium text-[48px]">Our Institutions</h1>
          <p className="font-normal space-y-3 text-lg">
            Explore our network of research institutes dedicated to advancing
            <br />agricultural innovation and sustainability across Nigeria.
          </p>
        </div>

        <div className="border-2 p-10 rounded-xl w-full lg:w-[1200px] mx-auto space-y-6 bg-[#E5E5E5]  ">

          <div className="border-[0.59px] py-1.5 px-3 w-full lg:w-[468.72px] bg-[#0C513F0D] rounded-lg h-[60px] ">
            <div className="place-content-center p-1">
              <h1 className="font-semibold text-2xl text-[#0C513F] text-center">Research Institutes</h1>
            </div>
          </div>

          <div className="border rounded-lg space-y-7 lg:h-[234px] p-10 bg-[#F9F9F9]">
            <div className="grid lg:grid-cols-3 gap-4 w-full lg:w-[1/2]  ">
              <div className="border-[0.59px] py-1.5 px-3 bg-[#FFFFFF] rounded-lg lg:h-[60px] ">
                <div className="space-y-2 items-center flex gap-2">
                  <Image src={Cocoa} alt="cocoa" width={42} height={42} />
                  <h1 className="font-semibold text-sm">Cocoa Research Institute of Nigeria</h1>
                </div>

                {/* <p  className="font-normal grid grid-cols-1 gap-3.5 text-[13px]">
                  Cocoa Research Institute of Nigeria (CRIN) was established in
                  Ibadan, Oyo State on 1st December, 1964 as a successor autonomous
                  research organization to the Nigerian Substation of the defunct West
                  African Cocoa Research Institute (WACRI) by Nigeria Statute, Act No.
                  6 of 1950.
                </p>
                <div className="w-[41.86px] h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
                  <IoArrowForwardSharp className="text-xl"/>
                </div> */}
              </div>

              <div className="border-[0.59px] py-1.5 px-3 bg-[#FFFFFF] rounded-lg gap-3.5 lg:h-[60px] ">
                <div className="space-y-2 items-center flex gap-2">
                  <Image src={Rubber} alt="Rubber" width={42} height={42} />
                  <h1 className="font-semibold text-sm">Rubber Research Institute of Nigeria</h1>
                </div>


                {/* <div className=" grid grid-cols-1 space-y-2">
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
                </div> */}
              </div>

              <div className="border py-1.5 px-3 rounded-lg bg-[#FFFFFF] gap-3.5 lg:h-[60px] ">
                <div className="space-y-2 items-center flex gap-2">
                  <Image src={National} alt="national" width={42} height={42} />
                  <h1 className="font-semibold text-[12.9px]">National Horticultural Research Institute</h1>
                </div>



                {/* <div className="grid grid-cols-1 space-y-2">
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
                </div> */}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-4 w-full lg:w-[1/2]  ">
              <div className="border-[0.59px] py-1.5 px-3 bg-[#FFFFFF] rounded-lg lg:h-[60px] ">
                <div className="space-y-2 items-center flex gap-2">
                  <Image src={Roots} alt="Roots" width={42} height={42} />
                  <h1 className="font-semibold text-sm">Cocoa Research Institute of Nigeria</h1>
                </div>

                {/* <p  className="font-normal grid grid-cols-1 gap-3.5 text-[13px]">
                  Cocoa Research Institute of Nigeria (CRIN) was established in
                  Ibadan, Oyo State on 1st December, 1964 as a successor autonomous
                  research organization to the Nigerian Substation of the defunct West
                  African Cocoa Research Institute (WACRI) by Nigeria Statute, Act No.
                  6 of 1950.
                </p>
                <div className="w-[41.86px] h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
                  <IoArrowForwardSharp className="text-xl"/>
                </div> */}
              </div>

              <div className="border-[0.59px] py-1.5 px-3 bg-[#FFFFFF] rounded-lg gap-3.5 lg:h-[60px] ">
                <div className="space-y-2 items-center flex gap-2">
                  <Image src={Cereals} alt="Cereals" width={42} height={42} />
                  <h1 className="font-semibold text-sm">Rubber Research Institute of Nigeria</h1>
                </div>


                {/* <div className=" grid grid-cols-1 space-y-2">
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
                </div> */}
              </div>

              <div className="border border-[#2E7636] py-0.5 px-3 rounded-[9px] text-center place-content-center lg:h-[60px] ">
                <button className="font-medium text-[16px] text-[#2E7636]">See All Reseach Institutes</button>
              </div>
            </div>
          </div>

        </div>


        <div className="border-2 p-10 rounded-xl w-full lg:w-[1200px] mx-auto space-y-6 bg-[#E5E5E5] ">
          <div className="border-[0.59px] py-1.5 px-3 w-full lg:w-[468.72px] bg-[#0C513F0D] rounded-lg h-[89px] lg:h-[60px] ">
            <div className="place-content-center p-1">
              <h1 className="font-semibold text-2xl text-[#0C513F] text-center">Federal Colleges of Agriculture </h1>
            </div>
          </div>

          <div className="border rounded-lg space-y-7 lg:h-[234px] p-10 bg-[#F9F9F9]">
            <div className="grid lg:grid-cols-3 gap-4 w-full lg:w-[1/2]  ">
              <div className="border-[0.59px] py-1.5 px-3 bg-[#FFFFFF] rounded-lg lg:h-[60px] ">
                <div className="space-y-2 flex items-center gap-2">
                  <Image src={Akure} alt="Akure" width={42} height={42} />
                  <h1 className="font-semibold text-sm">Federal College of Agriculture, Akure</h1>
                </div>

                {/* <p  className="font-normal grid grid-cols-1 gap-3.5 text-[13px]">
                  Cocoa Research Institute of Nigeria (CRIN) was established in
                  Ibadan, Oyo State on 1st December, 1964 as a successor autonomous
                  research organization to the Nigerian Substation of the defunct West
                  African Cocoa Research Institute (WACRI) by Nigeria Statute, Act No.
                  6 of 1950.
                </p>
                <div className="w-[41.86px] h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
                  <IoArrowForwardSharp className="text-xl"/>
                </div> */}
              </div>

              <div className="border-[0.59px] py-1.5 px-3 bg-[#FFFFFF] rounded-lg gap-3.5 lg:h-[60px] ">
                <div className="space-y-2 items-center flex gap-2">
                  <Image src={Ibandan} alt="Ibandan" width={42} height={42} />
                  <h1 className="font-semibold text-sm">Federal College of Agriculture, Ibadan</h1>
                </div>


                {/* <div className=" grid grid-cols-1 space-y-2">
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
                </div> */}
              </div>

              <div className="border py-1.5 px-3 rounded-lg bg-[#FFFFFF] gap-3.5 lg:h-[60px] ">
                <div className="space-y-2 items-center flex gap-2">
                  <Image src={Ishiagu} alt="Ishiagu" width={42} height={42} />
                  <h1 className="font-semibold text-[13.67px]">Federal College of Agriculture, Ishiagu</h1>
                </div>



                {/* <div className="grid grid-cols-1 space-y-2">
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
                </div> */}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-4 w-full lg:w-[1/2]  ">
              <div className="border-[0.59px] py-1.5 px-3 bg-[#FFFFFF] rounded-lg lg:h-[60px] ">
                <div className="space-y-2 flex gap-2">
                  <Image src={Moor} alt="Moor" width={42} height={42} />
                  <h1 className="font-semibold text-xs">Federal College of Animal Health and production, moor plantation, Ibadan</h1>
                </div>

                {/* <p  className="font-normal grid grid-cols-1 gap-3.5 text-[13px]">
                  Cocoa Research Institute of Nigeria (CRIN) was established in
                  Ibadan, Oyo State on 1st December, 1964 as a successor autonomous
                  research organization to the Nigerian Substation of the defunct West
                  African Cocoa Research Institute (WACRI) by Nigeria Statute, Act No.
                  6 of 1950.
                </p>
                <div className="w-[41.86px] h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
                  <IoArrowForwardSharp className="text-xl"/>
                </div> */}
              </div>

              <div className="border-[0.59px] py-1.5 px-3 bg-[#FFFFFF] rounded-lg gap-3.5 lg:h-[60px] ">
                <div className="space-y-2 flex gap-2">
                  <Image src={Kaduna} alt="Kaduna" width={42} height={42} />
                  <h1 className="font-semibold text-sm">Federal Cooperative College, kaduna</h1>
                </div>


                {/* <div className=" grid grid-cols-1 space-y-2">
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
                </div> */}
              </div>

              <div className="border border-[#2E7636] py-0.5 px-3 rounded-[9px] text-center place-content-center gap-3.5 lg:h-[60px] ">
                <button className="font-medium text-[16px] text-[#2E7636]">See All Reseach Institutes</button>
              </div>
            </div>
          </div>

        </div>



       
      </div>
    </main>
  );
};

export default Institutes;
