import CustomContainer from "@/components/CustomContainer";

const Ourmandate = () => {
  return (
    <section className="py-16 md:py-24">
      <CustomContainer>
        <div className="flex flex-col gap-8 px-6">
          <div className="grid grid-cols-about-mandate-res gap-10">
            <div className="flex flex-col gap-10 text-center">
              <h3 className="font-medium text-2xl sm:text-3xl text-[#0A1425]">
                OUR MANDATE
              </h3>

              <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                The mandate of ARCN is to coordinate, supervise and regulate
                agricultural research,training and extension in the National
                Agricultural Research Institutes (NARIs) and Federal Colleges of
                Agriculture (FCAs)
              </p>
            </div>
            <div className="flex flex-col gap-10 text-center">
              <h3 className="font-medium text-2xl sm:text-3xl text-[#0A1425]">
                OUR MISSION
              </h3>

              <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                To achieve significant improvements in agricultural
                productivity, marketing and competitiveness by generating
                appropriate technologies and policy options, promoting
                innovation, establishing a knowledgeable Management capacity and
                strengthening the agricultural research system.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[100%] sm:grid-cols-[50%] sm:justify-center">
            <div className="flex flex-col gap-10 text-center">
              <h3 className="font-medium text-2xl sm:text-3xl text-[#0A1425]">
                OUR VISION
              </h3>

              <p className="font-normal text-sm sm:text-lg text-[#64728F] ">
                To reduce poverty and increase food security by contributing to
                the establishment of sustainable agricultural growth and
                development in Nigeria
              </p>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Ourmandate;
