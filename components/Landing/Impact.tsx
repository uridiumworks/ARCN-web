import CustomContainer from "../CustomContainer";

const Impact = () => {
  return (
    <section className="">
      <div className="min-h-[30rem] bg-impact-static-bg bg-fixed bg-cover bg-center bg-no-repeat relative flex items-center py-12 md:py-20">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#011610] bg-opacity-[.65]"></div>
        <CustomContainer>
          <div className="text-center space-y-9 relative z-10">
            <h2 className="text-[#E6E9E7] text-3xl sm:text-4xl font-semibold leading-[2.25rem]">
              Impacts Based On Numbers
            </h2>

            <div className="flex flex-col md:flex-row  mx-auto justify-center gap-6 ">
              <div className="  w-full  sm:w-[11.9375rem] h-[7.5625rem] rounded-lg text-center place-content-center">
                <h1 className="text-[#FBBA03] text-xl sm:text-3xl font-semibold">
                  638
                </h1>
                <p className="text-[#FFFFFF] text-sm font-normal text-opacity-85">
                  Agricultural <br />
                  Innovations
                </p>
              </div>

              <div className="  w-full md:w-[14.0625rem] h-[7.5625rem] rounded-lg text-center flex flex-col justify-center">
                <h1 className="text-[#FBBA03] text-xl sm:text-3xl font-semibold">
                  105
                </h1>
                <p className="text-[#FFFFFF] text-sm font-normal text-opacity-85">
                  Improved Agricultural <br /> Technologies
                </p>
              </div>

              <div className="  w-full md:w-[21.6875rem] h-[7.5625rem] rounded-lg text-center flex flex-col justify-center">
                <h1 className="text-[#FBBA03] text-xl sm:text-3xl font-semibold">
                  132
                </h1>
                <p className="text-[#FFFFFF] text-sm font-normal text-opacity-85">
                  Small and medium sized <br /> enterprises (SMEs) supported
                </p>
              </div>

              <div className="  w-full md:w-[14.0625rem] h-[7.5625rem] rounded-lg text-center flex flex-col justify-center">
                <h1 className="text-[#FBBA03] text-xl sm:text-3xl font-semibold">
                  2791
                </h1>
                <p className="text-[#FFFFFF] text-sm font-normal text-opacity-85">
                  Students trained in <br /> Masters and PhD
                </p>
              </div>
            </div>

            <div className="px-4 lg:px-0">
              <p className="text-[#E6E9E7] text-base font-normal text-opacity-[92%]">
                The results of research activities coordinated by ARCN have
                significantly improved agricultural
                <br className="hidden md:block" /> production and productivity,
                increased incomes and enriched the livelihoods of millions of
                farmers and
                <br className="hidden md:block" /> entrepreneurs in Nigeria.
              </p>
            </div>
          </div>
        </CustomContainer>
      </div>
    </section>
  );
};

export default Impact;
