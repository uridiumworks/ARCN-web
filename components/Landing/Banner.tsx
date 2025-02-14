import CustomContainer from "../CustomContainer";
import "./styling.css";
import Image from "next/image";

const Bander = () => {
  return (
    <main className="md:h-auto banner bg-[#00000099]  text-black">
      <div className="h-full bg-[#00000099] flex flex-col gap-4 sm:gap-0">
        <div className="w-full sm:max-w-[77.5rem] sm:mx-auto px-8">
          <div className="min-h-[80%] py-5 md:py-9 flex justify-center items-center">
            <div className="w-full text-white flex flex-col gap-4 lg:gap-8 text-center sm:py-4 px-4 md:px-0">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-[2.5rem] leading-[2.5rem] sm:leading-[4rem]" >
                ARCN and UNN introduce new strategy agroecological sustainable
                farming
              </h1>
              <div className="flex flex-col gap-3">
                {" "}
                <p className="text-[#FFC84F] text-base md:text-[1.25rem] font-medium leading-8 lg:leading-10">
                  Regional government and CGIAR partnership launch agroforestry
                  <br className="hidden md:block" /> corridor to preserve
                  biodiversity.
                </p>
                <button
                  type="button"
                  className="border-2 py-3.5 px-5 sm:px-8 rounded-sm self-center font-bold text-[0.75rem] sm:text-sm text-[#15271C] focus:outline-none font-sans border-white bg-white"
                >
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-[10%]  bg-[#000000B2] p-5">
          <CustomContainer>
            <div className=" flex flex-col sm:flex-row sm:justify-between lg:justify-center items-center gap-8 sm:gap-14 lg:gap-24">
              <div  className="hidden lg:block">
                <Image
                  src="/Images/Homepage/Newpaper.png"
                  width={220.3}
                  height={148.78}
                  alt="paper"
                />
              </div>
              <div className=" text-center flex flex-col items-center gap-4">
                <h1 className="font-medium text-2xl lg:text-[2.125rem] text-white">
                  Journal of Applied Agricultural Research (JAAR)
                </h1>
                <p className="font-normal text-base lg:text-[1.290625rem] text-white text-opacity-[85%]">
                  CALL FOR PAPERS AND SUBMISSION OF MANUSCRIPTS
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="py-3.5 px-8 flex items-center gap-1  font-sans rounded-sm font-bold text-sm lg:text-[0.75rem] text-white bg-[#04662A]"
                >
                 <span>SUBMIT</span> <span> NOW</span>
                </button>
              </div>
            </div>
          </CustomContainer>
        </div>
      </div>
    </main>
  );
};

export default Bander;
