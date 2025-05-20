import CustomContainer from "@/components/CustomContainer";
import "./stylefile.css";
const Banner = () => {
  return (
    <section className="flex flex-col gap-4 h-[19rem]  px-4 relative  place-content-center sm:gap-10 banner  pt-4 pb-4 md:pb-24">
      <div className="absolute inset-0 lg:h-[19rem] bg-[#000] bg-opacity-[.65]"></div>
      <CustomContainer>
        <div className="flex flex-col relative z-10 sm:gap-3.5  text-left text-white">
          <h2 className="font-bold text-4xl">
          Adopted Research Outreach Centers (AROCs)   
          </h2>
         
        </div>
      </CustomContainer>
    </section>
  );
};

export default Banner;
