import CustomContainer from "@/components/CustomContainer";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="flex flex-col gap-4 sm:gap-10 bg-[#070A08] px-8 pt-4 pb-4 md:pb-24">
      <CustomContainer>
        <div className="flex flex-col sm:gap-3.5 text-left text-white">
          <h2 className="font-bold text-4xl sm:text-5xl leading-[5.28125rem]">
            Training
          </h2>
          <p className="font-normal text-sm leading-[1.5rem] ">
            Transforming Food, Land, and Water Systems in a Climate Crisis
          </p>
        </div>
      </CustomContainer>
      <div className="hidden sm:block">
        <Image
          src="/Images/Mandatepage/Worker.png"
          alt="worker"
          width={1849}
          height={281}
        />
      </div>
    </section>
  );
};

export default Banner;
