import { LuChevronRight } from "react-icons/lu";

const Research = () => {
  return (
    <main className="gap-4 w-full flex flex-col lg:flex-row mx-auto lg:w-[900px]">
      <div className="lg:w-1/2 space-y-3">
        <div className="p-3">
          <h1 className="font-semibold text-[30px] md:text-[50px]">Why Research Institutes Trust Us</h1>
          <p className="font-normal text-lg">
            Lorem ipsum dolor sit amet consectetur. Egestas luctus augue
            faucibus nullam rutrum sed. Nibh eu adipiscing lectus diam magna.
            Nulla gravida dolor magnis faucibus purus. Tortor tortor interdum in
            risus ut sodales ultrices id sodales. Id hac eu sed neque sapien. Id
            commodo sed hac interdum sit. Mauris.
          </p>
        </div>

        <div className="border w-full h-[596px] rounded-xl px-6 bg-[#36A879] text-white ">
          <h1 className="font-bold py-7 text-xl">Periodoic Research</h1>
          <p className="font-light text-2xl">
            Prepare periodic master plans for at research , training and
            extension and advise the Federal Government on the financial
            requirements for the implementation of such plans
          </p>
          <div className='flex pt-72 items-center text-white font-medium text-[16px]'>
            <p>Learn more</p>
            <LuChevronRight />
          </div>
        </div>

        <div className="border grid grid-cols-1 w-full h-[596px] rounded-xl px-6  bg-[#B3DC77] text-white">
          <h1 className="font-bold py-7 text-xl">Budget</h1>
          <p className="font-light place-self-start text-2xl">
            Prepare annual budget for the agricultural research , training and
            extension programmed of the institute under it aegis and receive
            grants for allocation to the institutes for the implementation of
            the annual programmes and to universities and other bodies for
            special research or training projects
          </p>
          <div className='flex place-self-start items-center text-white font-medium text-[16px]'>
            <p>Learn more</p>
            <LuChevronRight />
          </div>
        </div>

      </div>

      <div className='gap-3 lg:w-1/2 pt-28 space-y-3'>
        <div className="border w-full h-[596px] rounded-xl px-6 bg-[#5CC4B0] text-white">
          <h1 className="font-bold py-7 text-xl">National policies</h1>
          <p className="font-light text-2xl">
            Advise the Federal Government on national policies and priorities in
            agricultural research, training and extension activities;
          </p>
          <div className='flex items-center pt-80 text-white font-medium text-[16px]'>
            <p>Learn more</p>
            <LuChevronRight />
          </div>
        </div>

        <div className="border w-full h-[596px] rounded-xl px-6 bg-[#99C6D6] text-white">
          <h1 className="font-bold py-7 text-xl">Collaboration</h1>
          <p className="font-light text-2xl">
            Promote collaboration between scientists and engaged in research in
            the agricultural sciences in Nigeria and their counterparts in other
            countries or international bodies
          </p>
          <div className='flex items-center pt-72 text-white font-medium text-[16px]'>
            <p>Learn more</p>
            <LuChevronRight />
          </div>
        </div>

      </div>
    </main>
  );
};

export default Research;
