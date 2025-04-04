import CustomContainer from "@/components/CustomContainer";
import Image from "next/image";
import "./stylefile.css";
const Banner = () => {
  return (
    <section className="flex flex-col gap-4 h-[19rem] px-4 relative  place-content-center sm:gap-10 banner  pt-4 pb-4 md:pb-24">
      <div className="absolute inset-0 lg:h-[19rem] bg-[#2e2e2e] bg-opacity-[.40]"></div>
      <CustomContainer>
        <div className="flex flex-col relative z-10 sm:gap-3.5 px-5 lg:px-10 text-left text-white">
          <h2 className="font-bold text-4xl sm:text-5xl leading-[5.28125rem]">
            Training
          </h2>
          <p className="font-normal text-sm leading-[1.5rem] ">
            Transforming Food, Land, and Water Systems in a Climate Crisis
          </p>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Banner;
