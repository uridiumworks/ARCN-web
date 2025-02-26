import CustomContainer from "@/components/CustomContainer";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="flex flex-col gap-10 bg-[#070A08] px-8 pt-4 pb-12 md:pb-24">
      <CustomContainer>
        <div className="flex flex-col gap-4 text-center text-white">
          <h2 className="font-bold text-5xl md:text-[3.75rem] md:leading-[5rem]">
            Training
          </h2>
          <p className="font-normal text-lg sm:text-xl">
            Transforming Food, Land, and Water Systems in a Climate Crisis
          </p>
        </div>
      </CustomContainer>
      <div>
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
