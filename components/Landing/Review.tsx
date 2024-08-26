import Image from "next/image";

const Review = () => {
  return (
    <main className="flex flex-col md:flex-row font-montserrat items-center space-y-8 lg:space-y-0 lg:space-x-8 w-[100%] h-[100%] py-10 px-4 lg:px-0">
      <div className="text-center lg:text-left">
        <h1 className="font-bold text-[28px] lg:text-[40px] px-5">
          Reviews By Research Institutes
        </h1>
      </div>

      <div className="grid grid-cols-1 w-[100%]  md:grid-cols-3 space-y- gap-5">

        <div className="border rounded-md h-[600px] bg-[#96E3E1] p-8 ">
          <Image
            src="/Images/Homepage/damilola.png"
            alt="Damilola"
            width={86}
            height={86}
            className="mx-auto lg:mx-0"
          />
          <p className="font-medium text-lg lg:text-xl mt-4">
            “Lorem ipsum dolor sit amet consectetur. Nec id sem velit in
            facilisi adipiscing. Tincidunt in morbi sed sollicitudin dolor
            dictum ipsum rhoncus. Sodales amet tincidunt sed sed ipsum
            ullamcorper sapien.”
          </p>
          <p className="font-medium text-sm pt-7 pb-7">
            Damilola O.
            <span className="font-normal text-[#7C8B98] text-sm">
              <br />
              M.D, Cocoa Research Institute of Nigeria
            </span>
          </p>
        </div>

        <div className="border rounded-md bg-[#BCF5C5] p-8">
          <Image
            src="/Images/Homepage/Haneefah.png"
            alt="Haneefah"
            width={86}
            height={86}
            className="mx-auto lg:mx-0"
          />
          <p className="font-medium text-lg lg:text-xl mt-4">
            “Lorem ipsum dolor sit amet consectetur. Nec id sem velit in
            facilisi adipiscing. Tincidunt in morbi sed sollicitudin dolor
            dictum ipsum rhoncus. Sodales amet tincidunt sed sed ipsum
            ullamcorper sapien.”
          </p>
          <p className="font-medium text-sm pt-7 pb-7">
            Haneefah A.
            <span className="font-normal text-[#7C8B98] text-sm">
              <br />
              M.D, Rubber Research Institute of Nigeria
            </span>
          </p>
        </div>

        <div className="border rounded-md bg-[#96E3E1] p-8">
          <Image
            src="/Images/Homepage/fuad.png"
            alt="Fuad"
            width={86}
            height={86}
            className="mx-auto lg:mx-0"
          />
          <p className="font-medium text-lg lg:text-xl mt-4">
            “Lorem ipsum dolor sit amet consectetur. Nec id sem velit in
            facilisi adipiscing. Tincidunt in morbi sed sollicitudin dolor
            dictum ipsum rhoncus. Sodales amet tincidunt sed sed ipsum
            ullamcorper sapien.”
          </p>
          <p className="font-medium text-sm pt-7 pb-7">
            Fu&apos;ad L.
            <span className="font-normal text-[#7C8B98] text-sm">
              <br />
              National Horticultural Research Institute
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Review;
