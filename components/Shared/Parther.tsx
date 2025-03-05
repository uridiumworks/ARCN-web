import { LuChevronRight } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import CustomContainer from "../CustomContainer";

const Partners = () => {
  return (
    <section className="py-16 md:py-24">
      <CustomContainer>
        <div className="flex flex-col items-center px-0 sm:px-16  gap-12">
          
            <h2 className="font-semibold text-3xl text-center sm:text-4xl sm:leading-[3rem] text-[#1B222B]">
            Partner with us to advance agricultural <br className="hidden lg:block" /> research training and extension in Nigeria
            </h2>
       
          <div className="flex flex-col lg:flex-row gap-10  justify-center items-center lg:gap-20">
            <div className="shrink-0 w-full sm:w-[75%] lg:w-[25%]">
              <Image
                src="/Images/Homepage/farmer.png"
                width={836}
                height={700}
                alt="farmer"
                className="w-full"
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="text-[#1B222B] font-normal text-base leading-[1.75rem]">
                We are committed to working with equally ambitious
                <br />
                Research Institutes and stakeholders to bridge the
                sustainability gap in Africa, ensuring smallholder farmers have
                everything they need to
                <br />
                succeed.
              </p>
              <Link href={"/contact"}>
              <div className="flex items-center cursor-pointer">
                <p className="text-[#669933] font-medium text-base">
                Get in touch
                </p>
                <LuChevronRight color="#669933" size={24} />
              </div>
              </Link>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Partners;
