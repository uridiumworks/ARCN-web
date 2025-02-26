import CustomContainer from "@/components/CustomContainer";
import Journal from "@/components/Shared/Journal";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardSharp } from "react-icons/io5";
import ResearchInstitueBreadcrumbsV1 from "../../_components/ResearchInstitueBreadcrumbsv1";

const College = () => {
  return (
    <section className="pb-14 md:pb-24">
      <CustomContainer>
        <div className="flex flex-col gap-12 sm:gap-16">
          <div className="flex flex-col gap-6">
            <ResearchInstitueBreadcrumbsV1 text="Federal College of Agricultures" />
            <div className="flex flex-col gap-8">
              <h2 className="font-bold text-4xl">
                Federal College of Agricultures
              </h2>
              <p className="font-medium text-base">
                <span className="text-[15.88px] font-medium text-[#2D7636]">
                  ARCN Research Institutes
                </span>{" "}
                are non-profit research organizations conducting innovative{" "}
                <br />
                research. Home to more than 9,000 scientists, researchers,
                technicians and staff, the
                <br />
                Centers work to transform food, land and water systems in a
                climate crisis. Click on a
                <br />
                Center below to learn more.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-[100%] sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div className="">
                  <Image
                    src="/Images/Icons/ibandan.png"
                    alt="ibadan"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base">
                    Federal College of Agriculture, Ibadan
                  </h2>
                  <p className="font-normal text-sm">
                    Federal College of Agriculture, Ibadan (formerly called
                    School of Agriculture) is Nigeria&apos;s premier
                    agricultural institution, established in 1921.
                  </p>
                </div>

                <Link
                  href={"/mandate/training/test/institute"}
                  className="self-start"
                >
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg ">
                <div className="">
                  <Image
                    src="/Images/Icons/kano.png"
                    alt="kano"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base">
                    Federal College of Agricultural Produce Technology, Kano
                  </h2>
                  <p className="font-normal text-sm">
                    Federal College of Agricultural Produce Technology, Kano is
                    the training arm of the Nigerian Stored Produce Research
                    Institute (NSPRI). Established in 1975 as School of Food
                    Storage Technology, it has evolved into a comprehensive
                    agricultural technology institution
                  </p>
                </div>
                <Link
                  href={"/mandate/training/test/institute"}
                  className="self-start"
                >
                  <div className="p-4 border rounded-full grid place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg ">
                <div>
                  <Image
                    src="/Images/Icons/Ishiagu.png"
                    alt="Ishiagu"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base">
                    Federal College of Agriculture, Ishiagu
                  </h2>
                  <p className="font-normal text-sm">
                    The National Horticultural Research Institute (Headquarter);
                    located in Ibadan was established in 1975 with the
                    assistance of United Nations Development Programme in
                    conjunction with food and Agricultural Organization as
                    fruits and vegetables research and demonstration centre.
                  </p>
                </div>

                <Link
                  href={"/mandate/training/test/institute"}
                  className="self-start"
                >
                  <div className="p-4 border rounded-full grid place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-[100%] sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/Moor.png"
                    alt="Moor"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base">
                    Federal College of Animal Health and production, moor
                    plantation, Ibadan
                  </h2>
                  <p className="font-normal text-sm">
                    Nigerian Stored Products Research Institute (NSPRI) was
                    established in 1948 as West African Stored Products Research
                    Unit (WASPRU) to assess the quality of exportable crops from
                    Nigeria, Ghana, Sierra Leone, and Gambia to United Kingdom
                    during the colonial era. It became Nigerian Stored Products
                    Research Institute after the independence in 1960.
                  </p>
                </div>

                <Link
                  href={"/mandate/training/test/institute"}
                  className="self-start"
                >
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/kaduna.png"
                    alt="kaduna"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base">
                    Federal Cooperative College, kaduna
                  </h2>
                  <p className="font-normal text-sm">
                    Rubber research institute of Nigeria is the only Federal
                    Government agency in Nigeria that has the mandate to conduct
                    research and development on rubber and other latex producing
                    plants of economic importance. 
                  </p>
                </div>

                <Link
                  href={"/mandate/training/test/institute"}
                  className="self-start"
                >
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/Health.png"
                    alt="Health"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base">
                    Federal College of Animal Health and production, Vom
                  </h2>
                  <p className="font-normal text-sm">
                    The National Horticultural Research Institute (Headquarter);
                    located in Ibadan was established in 1975 with the
                    assistance of United Nations Development Programme in
                    conjunction with food and Agricultural Organization as
                    fruits and vegetables research and demonstration centre.
                  </p>
                </div>

                <Link
                  href={"/mandate/training/test/institute"}
                  className="self-start"
                >
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-[100%] sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/Akure.png"
                    alt="Akure"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base">
                    Federal College of Agriculture, Akure
                  </h2>
                  <p className="font-normal text-sm">
                    Cocoa Research Institute of Nigeria (CRIN) was established
                    in Ibadan, Oyo State on 1st December, 1964 as a successor
                    autonomous research organization to the Nigerian Substation
                    of the defunct West African Cocoa Research Institute (WACRI)
                    by Nigeria Statute, Act No. 6 of 1950.
                  </p>
                </div>

                <Link href={"/mandate/training/test/institute"} className="self-start">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/Technology.png"
                    alt="Cereals"
                    width={42}
                    height={42}
                  />
                </div>

                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base">
                  Federal College of Fisheries and Marine Technology, Lagos
                  </h2>
                  <p className="font-normal text-sm">
                    Rubber research institute of Nigeria is the only Federal
                    Government agency in Nigeria that has the mandate to conduct
                    research and development on rubber and other latex producing
                    plants of economic importance. 
                  </p>
                </div>

                <Link href={"/mandate/training/test/institute"} className="self-start">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/Baga.png"
                    alt="Baga"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base">
                  Federal College Of Freshwater Fisheries Technology, Baga.
                  </h2>
                  <p className="font-normal text-sm">
                  The National Horticultural Research Institute (Headquarter); located in Ibadan was established in 1975 with the assistance of United Nations Development Programme in conjunction with food and Agricultural Organization as fruits and vegetables research and demonstration centre.
                  </p>
                </div>

                <Link href={"/mandate/nigeria"} className="self-start">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-[100%] sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/Marine.png"
                    alt="Roots"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base">
                    Nigerian Institute For Oceanography And Marine Research
                  </h2>
                  <p className="font-normal text-sm">
                    Cocoa Research Institute of Nigeria (CRIN) was established
                    in Ibadan, Oyo State on 1st December, 1964 as a successor
                    autonomous research organization to the Nigerian Substation
                    of the defunct West African Cocoa Research Institute (WACRI)
                    by Nigeria Statute, Act No. 6 of 1950.
                  </p>
                </div>

                <Link href={"/mandate/nigeria"} className="self-start">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/OilPalm.png"
                    alt="Cereals"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base">
                    Nigerian Institute For Oil Palm Research
                  </h2>
                  <p className="font-normal text-sm">
                    Rubber research institute of Nigeria is the only Federal
                    Government agency in Nigeria that has the mandate to conduct
                    research and development on rubber and other latex producing
                    plants of economic importance. 
                  </p>
                </div>

                <Link href={"/mandate/nigeria"} className="self-start">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/Products.png"
                    alt="cocoa"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base">
                    Nigerian Stored Products Research Institute
                  </h2>
                  <p className="font-normal text-sm">
                    Cocoa Research Institute of Nigeria (CRIN) was established
                    in Ibadan, Oyo State on 1st December, 1964 as a successor
                    autonomous research organization to the Nigerian Substation
                    of the defunct West African Cocoa Research Institute (WACRI)
                    by Nigeria Statute, Act No. 6 of 1950.
                  </p>
                </div>

                <Link href={"/mandate/nigeria"} className="self-start">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-[100%] sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg ">
                <div>
                  <Image
                    src="/Images/Icons/Training.png"
                    alt="Roots"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base">
                    Institute Of Agricultural Research And Training
                  </h2>
                  <p className="font-normal text-sm">
                    Cocoa Research Institute of Nigeria (CRIN) was established
                    in Ibadan, Oyo State on 1st December, 1964 as a successor
                    autonomous research organization to the Nigerian Substation
                    of the defunct West African Cocoa Research Institute (WACRI)
                    by Nigeria Statute, Act No. 6 of 1950.
                  </p>
                </div>

                <Link href={"/mandate/nigeria"} className="self-start">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg ">
                <div>
                  <Image
                    src="/Images/Icons/Agricultural.png"
                    alt="Cereals"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base">
                    Institute For Agricultural Research, Zaria
                  </h2>
                  <p className="font-normal text-sm">
                    Rubber research institute of Nigeria is the only Federal
                    Government agency in Nigeria that has the mandate to conduct
                    research and development on rubber and other latex producing
                    plants of economic importance. 
                  </p>
                </div>

                <Link href={"/mandate/nigeria"} className="self-start">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg ">
                <div>
                  <Image
                    src="/Images/Icons/LakeChad.png"
                    alt="cocoa"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base">
                    Lake Chad Research Institute
                  </h2>
                  <p className="font-normal text-sm">
                    Cocoa Research Institute of Nigeria (CRIN) was established
                    in Ibadan, Oyo State on 1st December, 1964 as a successor
                    autonomous research organization to the Nigerian Substation
                    of the defunct West African Cocoa Research Institute (WACRI)
                    by Nigeria Statute, Act No. 6 of 1950.
                  </p>
                </div>

                <Link href={"/mandate/nigeria"} className="self-start">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-[100%] sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="hidden md:block"></div>
              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg ">
                <div>
                  <Image
                    src="/Images/Icons/Mechanization.png"
                    alt="cocoa"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base">
                    National Centre For Agricultural Mechanization
                  </h2>
                  <p className="font-normal text-sm">
                    The National Horticultural Research Institute (Headquarter);
                    located in Ibadan was established in 1975 with the
                    assistance of United Nations Development Programme in
                    conjunction with food and Agricultural Organization as
                    fruits and vegetables research and demonstration centre.
                  </p>
                </div>

                <Link href={"/mandate/nigeria"} className="self-start">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>
              <div className="hidden md:block"></div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default College;
