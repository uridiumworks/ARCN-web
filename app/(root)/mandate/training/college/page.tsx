import CustomContainer from "@/components/CustomContainer";
import Journal from "@/components/Shared/Journal";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardSharp } from "react-icons/io5";
import ResearchInstitueBreadcrumbsV1 from "../../_components/ResearchInstitueBreadcrumbsv1";

const College = () => {
  return (
    <section className="pb-14 md:pb-24 pt-6">
      <CustomContainer>
        <div className="flex flex-col gap-12 sm:gap-16">
          <div className="flex flex-col gap-6">
            <ResearchInstitueBreadcrumbsV1
              text="Federal College of Agricultures"
              secondaryText="Training"
              secondaryUrl="/mandate/training"
            />
            <div className="flex flex-col gap-8">
              <h2 className="font-bold text-3xl sm:text-4xl sm:leading-[2.75rem]">
                Federal College of Agricultures
              </h2>
              <p className="font-medium text-base leading-[1.75rem]">
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
                    src="/Images/Icons/fca-ibadan-logo.svg"
                    alt="ibadan"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Federal College of Agriculture, Ibadan
                  </h2>
                  <p className="font-normal text-xs leading-[1.349375rem]">
                    Federal College of Agriculture, Ibadan (formerly called
                    School of Agriculture) is Nigeria&apos;s premier
                    agricultural institution, established in 1921.
                  </p>
                </div>

                <Link
                  href={"/mandate/training/fca-ibadan/institute"}
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
                    src="/Images/Icons/fca-kano-logo.svg"
                    alt="kano"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Federal College of Agricultural Produce Technology, Kano
                  </h2>
                  <p className="font-normal text-xs leading-[1.349375rem]">
                    Federal College of Agricultural Produce Technology, Kano is
                    the training arm of the Nigerian Stored Produce Research
                    Institute (NSPRI). Established in 1975 as School of Food
                    Storage Technology, it has evolved into a comprehensive
                    agricultural technology institution
                  </p>
                </div>
                <Link
                  href={"/mandate/training/fca-kano/institute"}
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
                    src="/Images/Icons/fcahpt-logo.svg"
                    alt="Health"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Federal College of Animal Health and production, Vom
                  </h2>
                  <p className="font-normal text-xs leading-[1.349375rem]">
                    Federal College of Animal Health and Production Technology,
                    Vom is a pioneering institution in veterinary education in
                    West Africa. Established in 1941 as Veterinary School Vom,
                    it has evolved into a leading institution for training
                    middle-level manpower in animal health and production
                    technology.
                  </p>
                </div>

                <Link
                  href={"/mandate/training/fcahpt/institute"}
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
                    src="/Images/Icons/fcahp-moor-logo.svg"
                    alt="Moor"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Federal College of Animal Health and production, moor
                    plantation, Ibadan
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

                <Link href={"/mandate/training"} className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/fcc-kaduna-logo.svg"
                    alt="kaduna"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Federal Cooperative College, kaduna
                  </h2>
                  <p className="font-normal text-xs leading-[1.349375rem]">
                    Rubber research institute of Nigeria is the only Federal
                    Government agency in Nigeria that has the mandate to conduct
                    research and development on rubber and other latex producing
                    plants of economic importance. 
                  </p>
                </div>

                <Link href={"/mandate/training"} className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg ">
                <div>
                  <Image
                    src="/Images/Icons/fca-ishiagu-logo.svg"
                    alt="Ishiagu"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Federal College of Agriculture, Ishiagu
                  </h2>
                  <p className="font-normal text-xs leading-[1.349375rem]">
                    The Federal College of Agriculture, Ishiagu is a premier
                    agricultural institution that offers both National Diploma
                    (ND) and Higher National Diploma (HND) programs. The
                    institution stands as a center of excellence for
                    agricultural education and training, focusing on developing
                    skilled agricultural technologists and promoting sustainable
                    agricultural practices in Nigeria.
                  </p>
                </div>

                <Link
                  href={"/mandate/training/fca-ishiagu/institute"}
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
                    src="/Images/Icons/feca-logo.svg"
                    alt="Akure"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Federal College of Agriculture, Akure
                  </h2>
                  <p className="font-normal text-xs leading-[1.349375rem]">
                    The Federal College of Agriculture, Akure is a premier
                    agricultural training institution established on January 10,
                    1957. Originally known as the School of Agriculture, Akure,
                    it has evolved into a comprehensive agricultural training
                    center offering both National Diploma (ND) and Higher
                    National Diploma (HND) programs in various agricultural
                    fields.
                  </p>
                </div>

                <Link
                  href={"/mandate/training/feca/institute"}
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
                    src="/Images/Icons/fcfmt-logo.svg"
                    alt="Cereals"
                    width={60}
                    height={60}
                  />
                </div>

                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Federal College of Fisheries and Marine Technology, Lagos
                  </h2>
                  <p className="font-normal text-xs leading-[1.349375rem]">
                    Rubber research institute of Nigeria is the only Federal
                    Government agency in Nigeria that has the mandate to conduct
                    research and development on rubber and other latex producing
                    plants of economic importance. 
                  </p>
                </div>

                <Link href={"/mandate/training"} className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/fcfft-logo.svg"
                    alt="Baga"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Federal College Of Freshwater Fisheries Technology, Baga.
                  </h2>
                  <p className="font-normal text-xs leading-[1.349375rem]">
                    The National Horticultural Research Institute (Headquarter);
                    located in Ibadan was established in 1975 with the
                    assistance of United Nations Development Programme in
                    conjunction with food and Agricultural Organization as
                    fruits and vegetables research and demonstration centre.
                  </p>
                </div>

                <Link href={"/mandate/training"} className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/fcfft-bussa-logo.svg"
                    alt="NewBussa"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Federal College Of Freshwater Fisheries Technology, New
                    Bussa.
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

                <Link href={"/mandate/training"} className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/fcht-gombe-logo.svg"
                    alt="Gombe"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Federal College of Horticultural Technology, Dadinkowa,
                    gombe
                  </h2>
                  <p className="font-normal text-xs leading-[1.349375rem]">
                    Rubber research institute of Nigeria is the only Federal
                    Government agency in Nigeria that has the mandate to conduct
                    research and development on rubber and other latex producing
                    plants of economic importance. 
                  </p>
                </div>

                <Link href={"/mandate/training"} className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg">
                <div>
                  <Image
                    src="/Images/Icons/fcvmlt-logo.svg"
                    alt="cocoa"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Federal College of Veterinary and Medical Laboratory
                    Technology, vom
                  </h2>
                  <p className="font-normal text-xs leading-[1.349375rem]">
                    The Federal College of Veterinary and Medical Laboratory
                    Technology (FCVMLT) is a premier institution dedicated to
                    veterinary and medical laboratory technology education in
                    Nigeria.
                  </p>
                </div>

                <Link
                  href={"/mandate/training/fcvmlt/institute"}
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
                    src="/Images/Icons/fclrt-logo.svg"
                    alt="Kuru"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Federal College Of Land Resources Technology, Kuru.
                  </h2>
                  <p className="font-normal text-xs leading-[1.349375rem]">
                    The Federal College of Land Resources Technology, Kuru-Jos
                    (formerly known as the Federal Soil Conservation School) was
                    established in 1968 by Decree 12. It was initially sited at
                    Katsina, but later moved to Jos due to the prominence of
                    mining activities on the Plateau, which was rapidly
                    degrading the land.
                  </p>
                </div>

                <Link
                  href={"/mandate/training/fcvmlt/institute"}
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
                    src="/Images/Icons/fcc-ibadan-logo.svg"
                    alt="gombe"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Federal Cooperative College, Ibadan
                  </h2>
                  <p className="font-normal text-xs leading-[1.349375rem]">
                    The history of Federal Co-operative College Ibadan is
                    situated on a tripod; the first of the tripod reflects the
                    pre-independence era; the second covers the
                    post-independence; and the last marks the era when the
                    college was taken over by the Federal Government up to date.
                  </p>
                </div>

                <Link href={"/mandate/training"} className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg ">
                <div>
                  <Image
                    src="/Images/Icons/fcc-river-logo.svg"
                    alt="river"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Federal Cooperative College, Oji River
                  </h2>
                  <p className="font-normal text-xs leading-[1.349375rem]">
                    Established in 1976 under the auspices of General Olusegun
                    Obasanjo’s military government, FCCO has emerged as a
                    premier Co-operative College in Nigeria. As a beacon of
                    excellence in the South-east and South-South geopolitical
                    zones, our institution takes pride in empowering individuals
                    with cutting-edge knowledge and skills.
                  </p>
                </div>

                <Link href={"/mandate/training"} className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div>

              {/* <div className="border-[0.86px] border-[#e7e7e7] flex flex-col gap-4 p-4 sm:p-6 bg-[#FFFFFF] text-[#111111] rounded-lg ">
                <div>
                  <Image
                    src="/Images/Icons/fcc-river-logo.svg"
                    alt="Baga"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="font-semibold text-base leading-[1.726875rem]">
                    Federal College of Freshwater Fisheries, Baga
                  </h2>
                  <p className="font-normal text-xs leading-[1.349375rem]">
                    The Federal College of Freshwater Fisheries Technology, Baga
                    was established by the Federal Government of Nigeria under
                    Lake Chad Research Institute in 1977 as a monotechnic
                    institution to provide middle level manpower in Fisheries.
                    The College was established by the proxy of the Research
                    Institute order of 1975
                  </p>
                </div>

                <Link href={"/mandate/training"} className="self-start mt-auto">
                  <div className="p-4 border rounded-full grid  place-content-center bg-[#F4F4F4]">
                    <IoArrowForwardSharp className="text-xl" />
                  </div>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default College;
