import { LuChevronRight } from "react-icons/lu";
import { FaCaretRight } from "react-icons/fa6";
import Image from "next/image";

const Research = () => {
  return (
    <main className="gap-1.5 p-5 w-full flex flex-col lg:flex-row mx-auto lg:w-[900px]">
      <div className="lg:w-1/2 space-y-4">
        <div className="p-3">
          <h1 className="font-semibold text-[30px] md:text-[50px]">Our Core Areas</h1>
          <p className="font-normal text-lg">
            Lorem ipsum dolor sit amet consectetur. Egestas luctus augue
            faucibus nullam rutrum sed. Nibh eu adipiscing lectus diam magna.
            Nulla gravida dolor magnis faucibus purus. Tortor tortor interdum in
            risus ut sodales ultrices id sodales. Id hac eu sed neque sapien. Id
            commodo sed hac interdum sit. Mauris.
          </p>
        </div>

        <div className="relative w-full px-5 ">
          <Image src="/Images/Homepage/Search.png" alt="Search" width={568} height={596} />
          <div className='flex border border-hidden py-2 px-5 rounded-[88px] bg-[#000000B2] absolute bottom-5 items-center text-white font-medium text-[16px]'>
            <p>Agricultural Research</p>
            <FaCaretRight />
          </div>
        </div>

        <div className="relative w-full px-5 ">
          <Image src="/Images/Homepage/Planting.png" alt="Planting" />
          <div className='flex border border-hidden absolute bottom-5 rounded-[88px] py-2 px-5 bg-[#000000B2] place-self-start items-center text-white font-medium text-[16px]'>
            <p>Extension Services</p>
            <FaCaretRight />
          </div>
        </div>

      </div>

      <div className='lg:w-1/2 pt-28 space-y-4'>
        <div className="relative w-full px-5 ">
          <Image src="/Images/Homepage/Discuss.png" alt="Discuss" />
          <div className='flex border border-hidden absolute bottom-5 rounded-[88px] py-2 px-5 bg-[#000000B2] place-self-start items-center text-white font-medium text-[16px]'>
            <p>Agricultural Training</p>
            <FaCaretRight />
          </div>  
        </div>

        <div className="relative w-full px-5 ">
          <Image src="/Images/Homepage/Record.png" alt="Record" />
          <div className='flex border border-hidden absolute bottom-5 rounded-[88px] py-2 px-5 bg-[#000000B2] place-self-start items-center text-white font-medium text-[16px]'>
            <p>Agricultural Innovations</p>
            <FaCaretRight />
          </div>
        </div>

      </div>
    </main>
  );
};

export default Research;
