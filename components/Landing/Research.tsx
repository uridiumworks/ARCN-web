import { LuChevronRight } from "react-icons/lu";
import { FaCaretRight } from "react-icons/fa6";
import Image from "next/image";

const Research = () => {
  return (
    <main className="flex flex-col gap-4 p-5 w-full lg:flex-row mx-auto lg:w-[900px]">
      {/* Left Column */}
      <div className="lg:w-1/2 space-y-8">
        <div className="p-3">
          <h1 className="font-semibold text-[28px] md:text-[40px] lg:text-[50px]">
            Our Core Areas
          </h1>
          <p className="font-normal text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Egestas luctus augue
            faucibus nullam rutrum sed. Nibh eu adipiscing lectus diam magna.
            Nulla gravida dolor magnis faucibus purus. Tortor tortor interdum in
            risus ut sodales ultrices id sodales. Id hac eu sed neque sapien. Id
            commodo sed hac interdum sit. Mauris.
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
          <div className="flex border border-hidden py-2 px-4 md:px-5 rounded-[88px] bg-[#000000B2] absolute bottom-5 items-center text-white font-medium text-sm md:text-[16px]">
            <p>Agricultural Research</p>
            <FaCaretRight className="ml-2" />
          </div>
        </div>

        <div className="relative w-full px-3 md:px-5">
          <Image
            src="/Images/Homepage/Planting.png"
            alt="Planting"
            width={568}
            height={596}
            className="w-full h-auto object-cover"
          />
          <div className="flex border border-hidden py-2 px-4 md:px-5 rounded-[88px] bg-[#000000B2] absolute bottom-5 items-center text-white font-medium text-sm md:text-[16px]">
            <p>Extension Services</p>
            <FaCaretRight className="ml-2" />
          </div>
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
          <div className="flex border border-hidden py-2 px-4 md:px-5 rounded-[88px] bg-[#000000B2] absolute bottom-5 items-center text-white font-medium text-sm md:text-[16px]">
            <p>Agricultural Training</p>
            <FaCaretRight className="ml-2" />
          </div>
        </div>

        <div className="relative w-full px-3 md:px-5">
          <Image
            src="/Images/Homepage/Record.png"
            alt="Record"
            width={568}
            height={596}
            className="w-full h-auto object-cover"
          />
          <div className="flex border border-hidden py-2 px-4 md:px-5 rounded-[88px] bg-[#000000B2] absolute bottom-5 items-center text-white font-medium text-sm md:text-[16px]">
            <p>Agricultural Innovations</p>
            <FaCaretRight className="ml-2" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Research;
