import Journal from "@/components/Shared/Journal";
import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";

const College = () => {
  return (
    <main>
      <div>
        <div className="lg:px-20 px-2 py-10 space-y-8">
          <h1 className="font-bold text-4xl">Federal College of Agriculture</h1>
          <p className="font-medium text-base">
            <span className="text-[15.88px] font-medium text-[#2D7636]">
              ARCN Research Institutes
            </span>{" "}
            are non-profit research organizations conducting innovative <br />
            research. Home to more than 9,000 scientists, researchers,
            technicians and staff, the
            <br />
            Centers work to transform food, land and water systems in a climate
            crisis. Click on a
            <br />
            Center below to learn more.
          </p>
        </div>

        <div className="lg:w-[1200px] mx-auto space-y-5 lg:pb-48 pb-9">
          <div className="grid lg:grid-cols-3 gap-8 lg:w-[1/2]">
            <div className="border-[0.59px] space-y-2 py-1.5 px-3 bg-[#FFFFFF] text-black rounded-lg lg:h-[276px] ">
              <div className="space-y-2 items-center flex gap-2">
                <Image
                  src="/Images/Icons/Akure.png"
                  alt="cocoa"
                  width={42}
                  height={42}
                />
              </div>
              <h1 className="font-semibold text-sm">
                Federal College of Agriculture, Akure
              </h1>
              <p className="font-normal grid grid-cols-1 gap-3.5 text-[13px]">
                Cocoa Research Institute of Nigeria (CRIN) was established in
                Ibadan, Oyo State on 1st December, 1964 as a successor
                autonomous research organization to the Nigerian Substation of
                the defunct West African Cocoa Research Institute (WACRI) by
                Nigeria Statute, Act No. 6 of 1950.
              </p>
              <div className="w-[41.86px] h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
                <IoArrowForwardSharp className="text-xl" />
              </div>
            </div>

            <div className="border-[0.59px] space-y-8 py-1.5 px-3 bg-[#FFFFFF] text-black rounded-lg lg:h-[276px] ">
              <div className="space-y-2 items-center flex gap-2">
                <Image
                  src="/Images/Icons/Ibandan.png"
                  alt="Rubber"
                  width={42}
                  height={42}
                />
              </div>
              <div>
                <h1 className="font-semibold text-sm">
                    Federal College of Agriculture, Ibadan
                </h1>
                <p className="font-normal grid grid-cols-1 gap-3.5 text-[13px]">
                  Rubber research institute of Nigeria is the only Federal
                  Government agency in Nigeria that has the mandate to conduct
                  research and development on rubber and other latex producing
                  plants of economic importance. 
                </p>
              </div>

              <div className="w-[41.86px] h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
                <IoArrowForwardSharp className="text-xl" />
              </div>
            </div>

            <div className="border-[0.59px] space-y-2 py-1.5 px-3 bg-[#FFFFFF] text-black rounded-lg lg:h-[276px] ">
              <div className="space-y-2 items-center flex gap-2">
                <Image
                  src="/Images/Icons/Ishiagu.png"
                  alt="National"
                  width={42}
                  height={42}
                />
              </div>
              <h1 className="font-semibold text-sm">
                Federal College of Agriculture, Ishiagu
              </h1>
              <p className="font-normal grid grid-cols-1 gap-3.5 text-[13px]">
                The National Horticultural Research Institute (Headquarter);
                located in Ibadan was established in 1975 with the assistance of
                United Nations Development Programme in conjunction with food
                and Agricultural Organization as fruits and vegetables research
                and demonstration centre.
              </p>
              <div className="w-[41.86px] h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
                <IoArrowForwardSharp className="text-xl" />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 w-full lg:w-[1/2]">
            <div className="border-[0.59px] space-y-3 py-1.5 px-3 bg-[#FFFFFF] text-black rounded-lg lg:h-[276px] ">
              <div className="space-y-2 items-center flex gap-2">
                <Image
                  src="/Images/Icons/Moor.png"
                  alt="Roots"
                  width={42}
                  height={42}
                />
              </div>
              <h1 className="font-semibold text-sm">
                Federal College of Animal Health and production, moor plantation, Ibadan
              </h1>
              <p className="font-normal grid grid-cols-1 gap-3.5 text-[13px]">
                Nigerian Stored Products Research Institute (NSPRI) was
                established in 1948 as West African Stored Products Research
                Unit (WASPRU) to assess the quality of exportable crops from
                Nigeria, Ghana, Sierra Leone, and Gambia to United Kingdom
                during the colonial era. 
              </p>
              <div className="w-[41.86px] h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
                <IoArrowForwardSharp className="text-xl" />
              </div>
            </div>

            <div className="border-[0.59px] space-y-5 py-1.5 px-3 bg-[#FFFFFF] text-black rounded-lg lg:h-[276px] ">
              <div className="space-y-2 items-center flex gap-2">
                <Image
                  src="/Images/Icons/kaduna.png"
                  alt="Cereals"
                  width={42}
                  height={42}
                />
              </div>
              <h1 className="font-semibold text-sm">
              Federal Cooperative College, kaduna
              </h1>
              <p className="font-normal grid grid-cols-1 gap-3.5 text-[13px]">
                Rubber research institute of Nigeria is the only Federal
                Government agency in Nigeria that has the mandate to conduct
                research and development on rubber and other latex producing
                plants of economic importance.
              </p>
              <div className="w-[41.86px]  h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
                <IoArrowForwardSharp className="text-xl" />
              </div>
            </div>

            <div className="border-[0.59px] space-y-1.5 py-1.5 px-3 bg-[#FFFFFF] text-black rounded-lg lg:h-[276px] ">
              <div className="space-y-2 items-center flex gap-2">
                <Image
                  src="/Images/Icons/Health.png"
                  alt="cocoa"
                  width={42}
                  height={42}
                />
              </div>
              <h1 className="font-semibold text-sm">
              Federal College of Animal Health and production, Vom
              </h1>
              <p className="font-normal grid grid-cols-1 gap-3.5 text-[13px]">
                The National Horticultural Research Institute (Headquarter);
                located in Ibadan was established in 1975 with the assistance of
                United Nations Development Programme in conjunction with food
                and Agricultural Organization as fruits and vegetables research
                and demonstration centre.
              </p>
              <div className="w-[41.86px] h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
                <IoArrowForwardSharp className="text-xl" />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 w-full lg:w-[1/2]">
            <div className="border-[0.59px] space-y-1.5 py-1.5 px-3 bg-[#FFFFFF] text-black rounded-lg lg:h-[276px] ">
              <div className="space-y-2 items-center flex gap-2">
                <Image
                  src="/Images/Icons/Kano.png"
                  alt="Roots"
                  width={42}
                  height={42}
                />
              </div>
              <h1 className="font-semibold text-sm">
              Federal College of Agricultural Produce Technology, Kano
              </h1>
              <p className="font-normal grid grid-cols-1 gap-3.5 text-[13px]">
                Nigerian Stored Products Research Institute (NSPRI) was
                established in 1948 as West African Stored Products Research
                Unit (WASPRU) to assess the quality of exportable crops from
                Nigeria, Ghana, Sierra Leone, and Gambia to United Kingdom
                during the colonial era.
              </p>
              <div className="w-[41.86px] h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
                <IoArrowForwardSharp className="text-xl" />
              </div>
            </div>

            <div className="border-[0.59px] space-y-3.5 py-1.5 px-3 bg-[#FFFFFF] text-black rounded-lg lg:h-[276px] ">
              <div className="space-y-2 items-center flex gap-2">
                <Image
                  src="/Images/Icons/Technology.png"
                  alt="Cereals"
                  width={42}
                  height={42}
                />
              </div>
              <h1 className="font-semibold text-sm">
              Federal College of Fisheries and Marine Technology, Lagos
              </h1>
              <p className="font-normal grid grid-cols-1 gap-3.5 text-[13px]">
                Rubber research institute of Nigeria is the only Federal
                Government agency in Nigeria that has the mandate to conduct
                research and development on rubber and other latex producing
                plants of economic importance. 
              </p>
              <div className="w-[41.86px] h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
                <IoArrowForwardSharp className="text-xl" />
              </div>
            </div>

            <div className="border-[0.59px] space-y-1.5 py-1.5 px-3 bg-[#FFFFFF] text-black rounded-lg lg:h-[276px] ">
              <div className="space-y-2 items-center flex gap-2">
                <Image
                  src="/Images/Icons/Baga.png"
                  alt="cocoa"
                  width={42}
                  height={42}
                />
              </div>
              <h1 className="font-semibold text-sm">
              Federal College Of Freshwater Fisheries Technology, Baga.
              </h1>
              <p className="font-normal grid grid-cols-1 gap-3.5 text-[13px]">
                Cocoa Research Institute of Nigeria (CRIN) was established in
                Ibadan, Oyo State on 1st December, 1964 as a successor
                autonomous research organization to the Nigerian Substation of
                the defunct West African Cocoa Research Institute (WACRI) by
                Nigeria Statute, Act No. 6 of 1950.
              </p>
              <div className="w-[41.86px] h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
                <IoArrowForwardSharp className="text-xl" />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 w-full lg:w-[1/2]">
            <div className="border-[0.59px] space-y-1.5 py-1.5 px-3 bg-[#FFFFFF] text-black rounded-lg lg:h-[276px] ">
              <div className="space-y-2 items-center flex gap-2">
                <Image
                  src="/Images/Icons/NewBussa.png"
                  alt="Roots"
                  width={42}
                  height={42}
                />
              </div>
              <h1 className="font-semibold text-sm">
              Federal College Of Freshwater Fisheries Technology, New Bussa.
              </h1>
              <p className="font-normal grid grid-cols-1 gap-3.5 text-[13px]">
                Cocoa Research Institute of Nigeria (CRIN) was established in
                Ibadan, Oyo State on 1st December, 1964 as a successor
                autonomous research organization to the Nigerian Substation of
                the defunct West African Cocoa Research Institute (WACRI) by
                Nigeria Statute, Act No. 6 of 1950.
              </p>
              <div className="w-[41.86px] h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
                <IoArrowForwardSharp className="text-xl" />
              </div>
            </div>

            <div className="border-[0.59px] space-y-5 py-1.5 px-3 bg-[#FFFFFF] text-black rounded-lg lg:h-[276px] ">
              <div className="space-y-2 items-center flex gap-2">
                <Image
                  src="/Images/Icons/gombe.png"
                  alt="Cereals"
                  width={42}
                  height={42}
                />
              </div>
              <h1 className="font-semibold text-sm">
              Federal College of Horticultural Technology, Dadinkowa, gombe
              </h1>
              <p className="font-normal grid grid-cols-1 gap-3.5 text-[13px]">
                Rubber research institute of Nigeria is the only Federal
                Government agency in Nigeria that has the mandate to conduct
                research and development on rubber and other latex producing
                plants of economic importance. 
              </p>
              <div className="w-[41.86px] h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
                <IoArrowForwardSharp className="text-xl" />
              </div>
            </div>

            <div className="border-[0.59px] space-y-1.5 py-1.5 px-3 bg-[#FFFFFF] text-black rounded-lg lg:h-[276px] ">
              <div className="space-y-2 items-center flex gap-2">
                <Image
                  src="/Images/Icons/Medical.png"
                  alt="cocoa"
                  width={42}
                  height={42}
                />
              </div>
              <h1 className="font-semibold text-sm">
              Federal College of Veterinary and Medical Laboratory Technology, vom
              </h1>
              <p className="font-normal grid grid-cols-1 gap-3.5 text-[13px]">
                Cocoa Research Institute of Nigeria (CRIN) was established in
                Ibadan, Oyo State on 1st December, 1964 as a successor
                autonomous research organization to the Nigerian Substation of
                the defunct West African Cocoa Research Institute (WACRI) by
                Nigeria Statute, Act No. 6 of 1950.
              </p>
              <div className="w-[41.86px] h-[41.86px] border rounded-full grid place-content-center bg-[#F4F4F4]">
                <IoArrowForwardSharp className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Journal />
    </main>
  );
};

export default College;
