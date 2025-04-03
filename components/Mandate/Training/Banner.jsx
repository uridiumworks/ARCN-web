import CustomContainer from "@/components/CustomContainer";
import Image from "next/image";
import "./stylefile.css";
const Banner = () => {
  return (
    <section className="flex flex-col gap-4 h-[19rem] opacity-[.95] sm:gap-10 banner  px-8 pt-4 pb-4 md:pb-24">
      <CustomContainer>
        <div className="flex flex-col sm:gap-3.5 px-5 lg:px-10 text-left text-white">
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
