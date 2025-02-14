import { LuChevronRight } from "react-icons/lu";
import Image from "next/image";
import CustomContainer from "../CustomContainer";

const Partners = () => {
  return (
    <section className="py-16 md:py-24">
      <CustomContainer>
        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h2 className="font-semibold text-3xl sm:text-5xl text-[#1B222B]">
            Partner with us to advance agricultural
              <br /> research training and extension in Nigeria
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 justify-center items-center lg:gap-20">
            <div className="flex-shrink-0">
              <Image
                src="/Images/Homepage/farmer.png"
                width={536}
                height={700}
                alt="farmer"
                className="w-full max-w-md lg:max-w-lg"
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="text-[#1B222B] font-normal text-base">
                We are committed to working with equally ambitious
                <br />
                Research Institutes and stakeholders to bridge the
                sustainability gap in Africa, ensuring smallholder farmers have
                everything they need to
                <br />
                succeed.
              </p>
              <div className="flex items-center cursor-pointer">
                <p className="text-[#669933] font-medium text-base">
                Get in touch
                </p>
                <LuChevronRight color="#669933" />
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Partners;
