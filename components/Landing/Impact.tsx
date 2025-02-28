import CustomContainer from "../CustomContainer";

const Impact = () => {
  return (
    <section className="">
      <div className="min-h-[36.5rem] bg-[#011610] flex items-center py-16 md:py-24">
        <CustomContainer>
          <div className="text-center space-y-9">
            <h1 className="text-[#E6E9E7] text-3xl sm:text-5xl font-semibold">
              Impacts Based On Numbers
            </h1>

            <div className="flex flex-col md:flex-row  mx-auto justify-center gap-6">
              <div className="border border-[#409A72] bg-[#409A72] w-full  sm:w-[11.9375rem] h-[7.5625rem] rounded-lg text-center place-content-center">
                <h1 className="text-[#FBBA03] text-2xl sm:text-4xl font-semibold">
                  638
                </h1>
                <p className="text-[#FFFFFF] text-base font-normal">
                  Agricultural <br />
                  Innovations
                </p>
              </div>

              <div className="border border-[#409A72] bg-[#409A72] w-full md:w-[14.0625rem] h-[7.5625rem] rounded-lg text-center flex flex-col justify-center">
                <h1 className="text-[#FBBA03] text-2xl sm:text-4xl font-semibold">
                  105
                </h1>
                <p className="text-[#FFFFFF] text-sm sm:text-base font-normal">
                  Improved Agricultural <br /> Technologies
                </p>
              </div>

              <div className="border border-[#409A72] bg-[#409A72] w-full md:w-[21.6875rem] h-[7.5625rem] rounded-lg text-center flex flex-col justify-center">
                <h1 className="text-[#FBBA03] text-2xl sm:text-4xl font-semibold">
                  132
                </h1>
                <p className="text-[#FFFFFF] text-sm sm:text-base font-normal">
                  Small and medium sized <br /> enterprises (SMEs) supported
                </p>
              </div>

              <div className="border border-[#409A72] bg-[#409A72] w-full md:w-[14.0625rem] h-[7.5625rem] rounded-lg text-center flex flex-col justify-center">
                <h1 className="text-[#FBBA03] text-2xl sm:text-4xl font-semibold">
                  2791
                </h1>
                <p className="text-[#FFFFFF] text-sm sm:text-base font-normal">
                  Students trained in <br /> Masters and PhD
                </p>
              </div>
            </div>

            <div className="px-4 lg:px-0">
              <p className="text-[#E6E9E7] text-base sm:text-lg font-normal text-opacity-[92%]">
                The results of research activities coordinated by ARCN have
                significantly improved agricultural
                <br /> production and productivity, increased incomes and
                enriched the livelihoods of millions of farmers and
                <br /> entrepreneurs in Nigeria.
              </p>
            </div>
          </div>
        </CustomContainer>
      </div>
    </section>
  );
};

export default Impact;
