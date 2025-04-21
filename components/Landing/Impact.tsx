import CustomContainer from "../CustomContainer";

const Impact = () => {
  return (
    <section className="">
      <div className="min-h-[30rem] bg-impact-static-bg bg-fixed bg-cover bg-center bg-no-repeat relative flex items-center py-12 md:py-20">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#011610] bg-opacity-[.85]"></div>
        <CustomContainer>
          <div className="text-center space-y-9 relative z-10">
            <h2 className="text-[#E6E9E7] text-3xl sm:text-4xl font-semibold leading-[2.25rem]">
              Impacts Based On Numbers
            </h2>

            <div className="flex flex-col md:flex-row  mx-auto justify-start gap-6 ">
              <div className="  w-full md:w-[14.0625rem] h-[7.5625rem] rounded-lg text-center flex flex-col justify-start">
                <h1 className="text-[#FBBA03] text-xl sm:text-3xl font-semibold">
                435+
                </h1>
                <p className="text-[#FFFFFF] text-sm font-normal text-opacity-85">
                Agricultural  <br />
                Innovations and <br/>
                improved technologies
                </p>
              </div>

              <div className="  w-full md:w-[14.0625rem] h-[7.5625rem] rounded-lg text-center flex flex-col justify-start">
                <h1 className="text-[#FBBA03] text-xl sm:text-3xl font-semibold">
                  2500+
                </h1>
                <p className="text-[#FFFFFF] text-sm font-normal text-opacity-85">
                Middle Level  <br /> Manpower Trained
                </p>
              </div>

              <div className="  w-full md:w-[21.6875rem] h-[7.5625rem] rounded-lg text-center flex flex-col justify-start">
                <h1 className="text-[#FBBA03] text-xl sm:text-3xl font-semibold">
                578
                </h1>
                <p className="text-[#FFFFFF] text-sm font-normal text-opacity-85">
                Adopted villages & <br />
                Adopted schools -  <br />
                Agricultural Research  <br />
                Outreach Centres <br />
                (AROC)
                </p>
              </div>

              <div className="  w-full md:w-[14.0625rem] h-[7.5625rem] rounded-lg text-center flex flex-col justify-start">
                <h1 className="text-[#FBBA03] text-xl sm:text-3xl font-semibold">
                3000+
                </h1>
                <p className="text-[#FFFFFF] text-sm font-normal text-opacity-85">
                 Professionals in <br /> our Research and  <br />Academia Network 
                </p>
              </div>
            </div>

            <div className="px-4 lg:px-0">
              <p className="text-[#E6E9E7] text-base font-normal text-opacity-[92%]">
              Managing research, extension, and training activities across Nigeria’s NARS has driven significant 
              <br className="hidden md:block" /> agricultural growth. These efforts have boosted production and improved livelihoods, strengthening food 
              <br className="hidden md:block" /> security and economic development nationwide.
                
              </p>
            </div>
          </div>
        </CustomContainer>
      </div>
    </section>
  );
};

export default Impact;
