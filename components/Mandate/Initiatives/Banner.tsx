import CustomContainer from "@/components/CustomContainer";
import Image from "next/image";
import "./stylefile.css";
const Banner = () => {
  return (
    <section className="flex flex-col gap-4 h-[19rem] max-sm:h-[30rem] px-4 relative  place-content-center sm:gap-10 banner  pt-4 pb-4 md:pb-24">
      <div className="absolute inset-0 lg:h-[19rem] bg-[#000] bg-opacity-[.65]"></div>
      <CustomContainer>
        <div className="flex flex-col relative z-10 sm:gap-3.5  text-left text-white">
          <h2 className="font-bold text-4xl sm:text-5xl leading-[5.28125rem]">
            Extension
          </h2>
          <p className="font-normal text-sm leading-[1.5rem] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Banner;
