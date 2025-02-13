import { LuChevronRight } from "react-icons/lu";
import { FaCaretRight } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Research = () => {
  return (
    <main className="flex flex-col gap-4 font-montserrat p-5 w-full lg:flex-row mx-auto lg:w-[900px]">
      {/* Left Column */}
      <div className="lg:w-1/2 space-y-8">
        <div className="p-3">
          <h1 className="font-semibold text-[28px] md:text-[40px] lg:text-[50px]">
          Our Mandate
          </h1>
          <p className="font-normal text-base md:text-lg">
          The Council’s core mandate is to plan, manage, coordinate, supervise, and regulate agricultural research, training, and extension activities in the National Agricultural Research Institutes (NARIs) and Federal Colleges of Agriculture (FCAs).The Council’s core mandate is to plan, manage, coordinate, supervise, and regulate agricultural research, training, and extension activities in the National Agricultural Research Institutes (NARIs) and Federal Colleges of Agriculture (FCAs).
          </p>
        </div>

        <div className="relative w-full px-3 md:px-5">
          <Image
            src="/Images/Homepage/Search.png"
            alt="Search"
            width={568}
            height={596}
            className="w-full h-auto object-cover"
          />
          <Link href={"/mandate"}>
            <div className="flex border border-hidden font-montserrat py-2 px-4 md:px-5 rounded-[88px] bg-[#000000B2] absolute bottom-5 items-center text-white font-medium text-sm md:text-[16px]">
              <p>Agricultural Research</p>
              <FaCaretRight className="ml-2" />
            </div>  
          </Link>
        </div>

        <div className="relative w-full px-3 md:px-5">
          <Image
            src="/Images/Homepage/Planting.png"
            alt="Planting"
            width={568}
            height={596}
            className="w-full h-auto object-cover"
          />
          <Link href={"/mandate/initiatives"}>
            <div className="flex border border-hidden py-2 px-4 md:px-5 rounded-[88px] bg-[#000000B2] absolute bottom-5 items-center text-white font-medium text-sm md:text-[16px]">
              <p>Extension Services</p>
              <FaCaretRight className="ml-2" />
            </div>
          </Link>
          
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:w-1/2 pt-14 space-y-8">
        <div className="relative w-full px-3 md:px-5">
          <Image
            src="/Images/Homepage/Discuss.png"
            alt="Discuss"
            width={568}
            height={596}
            className="w-full h-auto object-cover"
          />
          <Link href={"/mandate/training"}>
            <div className="flex border border-hidden py-2 px-4 md:px-5 rounded-[88px] bg-[#000000B2] absolute bottom-5 items-center text-white font-medium text-sm md:text-[16px]">
              <p>Agricultural Training</p>
              <FaCaretRight className="ml-2" />
            </div>
          </Link>
          
        </div>

        <div className="relative w-full px-3 md:px-5">
          <Image
            src="/Images/Homepage/Record.png"
            alt="Record"
            width={568}
            height={596}
            className="w-full h-auto object-cover"
          />
          <Link href={"/programsandprojects"}>
            <div className="flex border border-hidden py-2 px-4 md:px-5 rounded-[88px] bg-[#000000B2] absolute bottom-5 items-center text-white font-medium text-sm md:text-[16px]">
              <p>Agricultural Innovations</p>
              <FaCaretRight className="ml-2" />
            </div>
          </Link>
          
        </div>
      </div>
    </main>
  );
};

export default Research;
