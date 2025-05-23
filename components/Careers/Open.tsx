import { LuArrowRight } from "react-icons/lu";
import CustomContainer from "../CustomContainer";

const Open = () => {
  return (
    <section className="py-12 md:py-20">
      <CustomContainer>
        <div className="flex flex-col items-stretch sm:items-center gap-10">
          <div className="text-[#000000] text-center flex flex-col gap-4">
            <h2 className="font-bold text-3xl sm:text-4xl leading-[2.25rem]">
              Open Opportunities
            </h2>
            <p className="font-normal text-sm leading-[1.5rem]">
              If you&lsquo;re the owner of an active brain, interesting
              thoughts, and a good soul, we would{" "}
              <br className="hidden md:block" />
              like to hear from you.
            </p>
          </div>

          <div className="flex flex-col gap-8 px-3.5 justify-center items-center">
            <div className="border rounded-2xl py-4 px-5  gap-3 md:items-center flex flex-col md:flex-row items-start md:justify-between w-full lg:w-[60%] h-[30%]">
              <div className="font-montserrat space-y-3">
                <h2 className="font-bold text-base">
                  Marketing & Sales Development
                </h2>
                <p className="font-normal text-sm">Demand Generation Manager</p>
                <p className="font-normal text-sm">Nigeria • Full-time</p>
              </div>
              <div className="flex items-center gap-3 bg-[#30A85F] md:w-[150px] md:h-[50px] text-white rounded-full py-1.5 px-4">
                <button className="md:text-sm text-xs font-semibold">
                  Learn More{" "}
                </button>
                <LuArrowRight size={19} />
              </div>
            </div>

            <div className="border rounded-2xl gap-3  py-4 px-5 md:items-center items-start flex flex-col md:flex-row justify-between w-full lg:w-[60%] h-[30%]">
              <div className="font-montserrat space-y-3">
                <h2 className="font-bold text-base">General</h2>
                <p className="font-normal text-sm">General Applications</p>
                <p className="font-normal text-sm">
                  Remote • Full-time - Remote
                </p>
              </div>
              <div className="flex items-center gap-3 bg-[#30A85F] md:w-[150px] md:h-[50px] text-white rounded-full py-1.5 px-4">
                <button className="lg:text-sm text-xs font-semibold">
                  Learn More{" "}
                </button>
                <LuArrowRight size={19} />
              </div>
            </div>

            <div className="border rounded-2xl gap-3 py-4 px-5 md:items-center items-start flex flex-col md:flex-row justify-between w-full lg:w-[60%] h-[30%]">
              <div className="font-montserrat space-y-3">
                <h2 className="font-bold text-base">Technology</h2>
                <p className="font-normal text-sm">Head of Engineering</p>
                <p className="font-normal text-sm">Remote • Full-time</p>
              </div>
              <div className="flex items-center gap-3 bg-[#30A85F] md:w-[150px] md:h-[50px] text-white rounded-full py-1.5 px-4">
                <button className="lg:text-sm text-xs font-semibold">
                  Learn More{" "}
                </button>
                <LuArrowRight size={19} />
              </div>
            </div>

            <div className="border rounded-2xl gap-3 py-4 px-5  md:items-center items-start flex flex-col md:flex-row justify-between w-full lg:w-[60%] h-[30%]">
              <div className="font-montserrat space-y-3">
                <h2 className="font-bold text-base">Technology</h2>
                <p className="font-normal text-sm">Farm Machine Handler</p>
                <p className="font-normal text-sm">Toronto • Full-time</p>
              </div>
              <div className="flex items-center gap-3 bg-[#30A85F] md:w-[150px] md:h-[50px] text-white rounded-full py-1.5 px-4">
                <button className="lg:text-sm text-xs font-semibold">
                  Learn More{" "}
                </button>
                <LuArrowRight size={19} />
              </div>
            </div>

            <div className="bg-[#30A85F] border lg:w-[60%] rounded-2xl px-4 py-4 space-y-4 text-white items-center">
              <h1 className="font-bold text-3xl">
                Don&lsquo;t see a position you&lsquo;re interested in but
                <br className="hidden md:block" />
                you&lsquo;d still like to apply?
              </h1>
              <p className="font-normal text-base">{`We welcome anyone to apply by sending submitting their resume and telling us why they're interested in
                        joining our #paid team!`}</p>

              <div className="flex items-center gap-3 bg-[#000000] w-[154px] h-[50px] text-white rounded-full py-1.5 px-5">
                <button className="text-sm font-semibold">Learn More </button>
                <LuArrowRight size={19} />
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Open;
