import Journal from "@/components/Shared/Journal";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardSharp } from "react-icons/io5";
import CustomContainer from "@/components/CustomContainer";
import ResearchInstitueBreadcrumbsV1 from "../_components/ResearchInstitueBreadcrumbsv1";

const Research = () => {
  return (
    <section className="pb-12 md:pb-20 pt-6">
      <CustomContainer>
        <div className="flex flex-col gap-12 sm:gap-16">
          <div className="flex flex-col gap-6">
            <ResearchInstitueBreadcrumbsV1 text="Research Institutes" />
            <div className="flex flex-col gap-6">
              <h2 className="font-bold  text-3xl sm:text-4xl leading-[2.25rem]">Research Institutes</h2>
              <p className="font-medium text-sm leading-[1.5rem]">
                <span className="text-[15.88px] font-medium text-[#2D7636]">
                  ARCN Research Institutes
                </span>{" "}
                are non-profit research organizations conducting innovative{" "}
                <br className="hidden md:block" />
                research. Home to more than 9,000 scientists, researchers,
                technicians and staff, the
                <br className="hidden md:block" />
                Centers work to transform food, land and water systems in a
                climate crisis. Click on a
                <br className="hidden md:block" />
                Center below to learn more.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-[100%] sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div className="">
                  <Image
                    src="/Images/Icons/crin-logo.svg"
                    alt="cocoa"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Cocoa Research Institute of Nigeria
                  </h2>
                  <p className="font-normal text-xs leading-[1.349375rem]">
                    The Cocoa Research Institute of Nigeria (CRIN) is
                    Nigeria&apos;s premier research institution dedicated to the
                    development and improvement of cocoa and other tree crops.
                    Established in 1964, CRIN applies science and technology to
                    increase productivity, improve quality, and add value to its
                    mandate crops while disseminating research findings through
                    extension services and capacity building.
                  </p>
                </div>

                <Link
                  href={"/mandate/research/crin/institute"}
                  className="self-start mt-auto"
                >
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg ">
                <div className="">
                  <Image
                    src="/Images/Icons/rrin-logo.svg"
                    alt="Rubber"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Rubber Research Institute of Nigeria
                  </h2>
                 <p className="font-normal text-xs leading-[1.349375rem]">
                    Rubber research institute of Nigeria is the only Federal
                    Government agency in Nigeria that has the mandate to conduct
                    research and development on rubber and other latex producing
                    plants of economic importance.
                  </p>
                </div>
                <Link href={"/mandate/research"} className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg ">
                <div>
                  <Image
                    src="/Images/Icons/nihort-logo.svg"
                    alt="National"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                <h2 className="font-semibold text-base leading-[1.726875rem]">
                    National Horticultural Research Institute
                  </h2>
                 <p className="font-normal text-xs leading-[1.349375rem]">
                    The National Horticultural Research Institute (Headquarter);
                    located in Ibadan was established in 1975 with the
                    assistance of United Nations Development Programme in
                    conjunction with food and Agricultural Organization as
                    fruits and vegetables research and demonstration centre.
                  </p>
                </div>

                <Link
                  href={"/mandate/research/nihort/institute"}
                 className="self-start mt-auto"
                >
                  <div className="p-4 border rounded-full grid place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/nrcri-logo.svg"
                    alt="Roots"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                <h2 className="font-semibold text-base leading-[1.726875rem]">
                    National Root Crops Research Institute
                  </h2>
                 <p className="font-normal text-xs leading-[1.349375rem]">
                    Nigerian Stored Products Research Institute (NSPRI) was
                    established in 1948 as West African Stored Products Research
                    Unit (WASPRU) to assess the quality of exportable crops from
                    Nigeria, Ghana, Sierra Leone, and Gambia to United Kingdom
                    during the colonial era. It became Nigerian Stored Products
                    Research Institute after the independence in 1960.
                  </p>
                </div>

                <Link
                  href={"/mandate/research/nrcri/institute"}
                 className="self-start mt-auto"
                >
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/ncri-logo.svg"
                    alt="Cereals"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                <h2 className="font-semibold text-base leading-[1.726875rem]">
                    National Cereals Research Institute
                  </h2>
                 <p className="font-normal text-xs leading-[1.349375rem]">
                    Rubber research institute of Nigeria is the only Federal
                    Government agency in Nigeria that has the mandate to conduct
                    research and development on rubber and other latex producing
                    plants of economic importance.
                  </p>
                </div>

                <Link href={"/mandate/research"}className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/napri-logo.svg"
                    alt="cocoa"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                <h2 className="font-semibold text-base leading-[1.726875rem]">
                    National Animal Production And Research Institute
                  </h2>
                 <p className="font-normal text-xs leading-[1.349375rem]">
                    The National Animal Production Research Institute (NAPRI)
                    originated from the Shika Cattle Stud farm established in
                    1928. Initially focused on selecting indigenous breeds of
                    bulls for breeding native herds, the institute evolved
                    through various stages before being established as an
                    autonomous research institute
                  </p>
                </div>

                <Link
                  href={"/mandate/research/napri/institute"}
                 className="self-start mt-auto"
                >
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>
              {/* <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/niffr-logo.svg"
                    alt="Roots"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                <h2 className="font-semibold text-base leading-[1.726875rem]">
                    National Institute For Fresh Fisheries Research
                  </h2>
                 <p className="font-normal text-xs leading-[1.349375rem]">
                    Nigerian Stored Products Research Institute (NSPRI) was
                    established in 1948 as West African Stored Products Research
                    Unit (WASPRU) to assess the quality of exportable crops from
                    Nigeria, Ghana, Sierra Leone, and Gambia to United Kingdom
                    during the colonial era. It became Nigerian Stored Products
                    Research Institute after the independence in 1960.
                  </p>
                </div>

                <Link href={"/mandate/research"}className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div> */}

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/naerls-logo.svg"
                    alt="Cereals"
                    width={60}
                    height={60}
                  />
                </div>

                <div className="flex flex-col gap-2.5">
                <h2 className="font-semibold text-base leading-[1.726875rem]">
                    National Agricultural Extension Research Liason Services
                  </h2>
                 <p className="font-normal text-xs leading-[1.349375rem]">
                    Rubber research institute of Nigeria is the only Federal
                    Government agency in Nigeria that has the mandate to conduct
                    research and development on rubber and other latex producing
                    plants of economic importance. 
                  </p>
                </div>

                <Link href={"/mandate/research"}className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/nvri-logo.svg"
                    alt="cocoa"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                <h2 className="font-semibold text-base leading-[1.726875rem]">
                    National Veterinary Research Institute
                  </h2>
                 <p className="font-normal text-xs leading-[1.349375rem]">
                    The National Veterinary Research Institute (NVRI) is
                    Nigeria&apos;s premier institute for veterinary research and
                    vaccine production. Established in 1924 as a Veterinary
                    Laboratory in Vom, following devastating Rinderpest
                    outbreaks that decimated cattle populations in West Africa.
                  </p>
                </div>

                <Link
                  href={"/mandate/research/nvri/institute"}
                 className="self-start mt-auto"
                >
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              {/* <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/niomr-logo.svg"
                    alt="Roots"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Nigerian Institute For Oceanography And Marine Research
                  </h2>
                 <p className="font-normal text-xs leading-[1.349375rem]">
                    Nigerian Stored Products Research Institute (NSPRI) was
                    established in 1948 as West African Stored Products Research
                    Unit (WASPRU) to assess the quality of exportable crops from
                    Nigeria, Ghana, Sierra Leone, and Gambia to United Kingdom
                    during the colonial era. It became Nigerian Stored Products
                    Research Institute after the independence in 1960.
                  </p>
                </div>

                <Link href={"/mandate/research"}className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div> */}

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/niopr-logo.svg"
                    alt="Cereals"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Nigerian Institute For Oil Palm Research
                  </h2>
                 <p className="font-normal text-xs leading-[1.349375rem]">
                    Rubber research institute of Nigeria is the only Federal
                    Government agency in Nigeria that has the mandate to conduct
                    research and development on rubber and other latex producing
                    plants of economic importance. 
                  </p>
                </div>

                <Link href={"/mandate/research"}className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/nspri-logo.svg"
                    alt="cocoa"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Nigerian Stored Products Research Institute
                  </h2>
                 <p className="font-normal text-xs leading-[1.349375rem]">
                    The Nigerian Stored Products Research Institute (NSPRI)
                    focuses on research into bulk storage problems of export
                    commodities and local food crops. Established in 1948 as the
                    West African Stored Products Research Unit (WASPRU), it
                    became NSPRI after Nigeria&apos;s independence in 1960. The
                    institute specializes in improving and maintaining the
                    quality of bulk commodity crops and local food crops.
                  </p>
                </div>

                <Link
                  href={"/mandate/research/nspri/institute"}
                 className="self-start mt-auto"
                >
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg ">
                <div>
                  <Image
                    src="/Images/Icons/iart-logo.svg"
                    alt="Roots"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Institute Of Agricultural Research And Training
                  </h2>
                 <p className="font-normal text-xs leading-[1.349375rem]">
                    Nigerian Stored Products Research Institute (NSPRI) was
                    established in 1948 as West African Stored Products Research
                    Unit (WASPRU) to assess the quality of exportable crops from
                    Nigeria, Ghana, Sierra Leone, and Gambia to United Kingdom
                    during the colonial era. It became Nigerian Stored Products
                    Research Institute after the independence in 1960.
                  </p>
                </div>

                <Link href={"/mandate/research"}className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg ">
                <div>
                  <Image
                    src="/Images/Icons/iar-zaria-logo.svg"
                    alt="Cereals"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Institute For Agricultural Research, Zaria
                  </h2>
                 <p className="font-normal text-xs leading-[1.349375rem]">
                    Rubber research institute of Nigeria is the only Federal
                    Government agency in Nigeria that has the mandate to conduct
                    research and development on rubber and other latex producing
                    plants of economic importance. 
                  </p>
                </div>

                <Link href={"/mandate/research"}className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg ">
                <div>
                  <Image
                    src="/Images/Icons/lcri-logo.svg"
                    alt="cocoa"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Lake Chad Research Institute
                  </h2>
                 <p className="font-normal text-xs leading-[1.349375rem]">
                    The National Horticultural Research Institute (Headquarter);
                    located in Ibadan was established in 1975 with the
                    assistance of United Nations Development Programme in
                    conjunction with food and Agricultural Organization as
                    fruits and vegetables research and demonstration centre.
                  </p>
                </div>

                <Link href={"/mandate/research"}className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg ">
                <div>
                  <Image
                    src="/Images/Icons/ncam-logo.svg"
                    alt="cocoa"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                <h2 className="font-semibold text-base leading-[1.726875rem]">
                    National Centre For Agricultural Mechanization
                  </h2>
                 <p className="font-normal text-xs leading-[1.349375rem]">
                    The National Centre for Agricultural Mechanization (NCAM) is
                    Nigeria&apos;s premier institution dedicated to accelerating
                    agricultural mechanization in the country. Established
                    through Decree No. 35 of 1990 and later amended in the
                    Agricultural Research Council of Nigeria (ARCN) 2021 Act,
                    NCAM serves as a hub for developing and promoting
                    agricultural mechanization
                  </p>
                </div>

                <Link href={"/mandate/research"}className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              {/* <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg ">
                <div>
                  <Image
                    src="/Images/Icons/ncam-logo.svg"
                    alt="cocoa"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                <h2 className="font-semibold text-base leading-[1.726875rem]">
                    National Centre For Agricultural Mechanization
                  </h2>
                 <p className="font-normal text-xs leading-[1.349375rem]">
                    The National Centre for Agricultural Mechanization (NCAM) is
                    Nigeria&apos;s premier institution dedicated to accelerating
                    agricultural mechanization in the country. Established
                    through Decree No. 35 of 1990 and later amended in the
                    Agricultural Research Council of Nigeria (ARCN) 2021 Act,
                    NCAM serves as a hub for developing and promoting
                    agricultural mechanization
                  </p>
                </div>

                <Link
                  href={"/mandate/research/ncam/institute"}
                 className="self-start mt-auto"
                >
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div> */}
            </div>

            {/* <div className="grid grid-cols-[100%] sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="hidden sm:block"></div>
              
              <div className="hidden sm:block"></div>
            </div> */}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Research;
