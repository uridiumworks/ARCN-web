import Image from "next/image";
import CustomContainer from "../CustomContainer";

const Ours = () => {
  return (
    <section className="py-6 md:py-16">
      <CustomContainer>
        <div className="flex flex-col justify-center text-center gap-8">
          <h2 className="text-[#111827] text-3xl sm:text-4xl leading-[2.25rem] font-bold">
            Our Impacts in the Last 10 Years
          </h2>

          <div className=" flex flex-col items-center text-center place-content-center gap-7 px-5">
            <Image
              src="/Images/Homepage/Rectangle.png"
              alt="plants"
              width={846}
              height={385}
            />
            <p className="text-[#64728F] leading-[1.5rem] text-sm font-normal">
              Lorem ipsum dolor sit amet consectetur. Nunc pharetra a felis
              nibh. Id
              <br /> ullamcorper nec leo porta. Enim nunc lacinia dui vehicula
              pellentesque morbi.
              <br /> Magna nulla consequat.
            </p>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Ours;
