import CustomContainer from "@/components/CustomContainer";

const Ourmandate = () => {
  return (
    <section className="py-16 md:py-24">
      <CustomContainer>
        <div className="flex flex-col gap-8 sm:px-14">
          <div className="grid grid-cols-[100%] lg:grid-cols-2 gap-10">
            <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                Our Vision
              </h3>

              <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#464646] ">
                To reduce poverty and increase food security by contributing to
                the establishment of sustainable agricultural growth and
                development in Nigeria
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
              <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                Our Mission
              </h3>

              <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#464646]  hidden lg:flex lg:flex-col lg:gap-1 ">
                <span>To achieve significant improvements in</span>
                <span> agricultural productivity, marketing</span>
                <span> and competitiveness by generating appropriate</span>
                <span>technologies and policy options, promoting</span>
                <span> innovation, establishing a knowledgeable</span>
                <span>Management capacity and strengthening the </span>
                <span> agricultural research system.</span>
              </p>

              <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#464646] block lg:hidden">
                To achieve significant improvements in agricultural
                productivity, marketing and competitiveness by generating
                appropriate technologies and policy options, promoting
                innovation, establishing a knowledgeable Management capacity and
                strengthening the agricultural research system.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[100%] rounded-xl pt-5 pb-5 sm:pb-14 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-xl sm:text-2xl sm:leading-[1.61375rem] text-[#131517]">
                Our Mandate
              </h3>

              <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#464646] hidden lg:flex lg:flex-col lg:gap-1 ">
                <span>
                  {" "}
                  The mandate of ARCN is to coordinate, supervise and regulate
                  agricultural research,training and
                </span>
                <span>
                  extension in the National Agricultural Research Institutes
                  (NARIs) and Federal Colleges of Agriculture
                </span>
                <span> (FCAs)</span>
              </p>
              <p className="font-normal text-sm sm:text-lg sm:leading-[1.61375rem] text-[#464646] block lg:hidden">
                The mandate of ARCN is to coordinate, supervise and regulate
                agricultural research,training and extension in the National
                Agricultural Research Institutes (NARIs) and Federal Colleges of
                Agriculture (FCAs)
              </p>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Ourmandate;
