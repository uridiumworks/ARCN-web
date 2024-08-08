import Damilola from "/Images/Homepage/damilola.png";
import Haneefah from "/Images/Homepage/Haneefah.png";
import Fuad from "/Images/Homepage/fuad.png";
import Image from "next/image";

const Review = () => {
  return (
    <main className="flex flex-col mx-auto lg:flex-row w-[1300px] py-10">
      <div>
        <h1 className="font-bold text-[40px]">Reveiws By Research Institutes</h1>
      </div>

      <div className="grid grid-cols-3 space-y- gap-5">

        <div className="border rounded-md h-[600px] bg-[#96E3E1] p-8 ">
          <Image
            src={Damilola}
            alt="Damilola"
            width={86}
          />
          <p className="font-medium text-xl">
            “Lorem ipsum dolor sit <br />amet consectetur. Nec id sem velit in
            facilisi <br />adipiscing. Tincidunt in <br />morbi sed sollicitudin dolor
            <br />dictum ipsum rhoncus. Sodales amet tincidunt sed <br />sed ipsum           
            ullamcorper sapien.”
          </p>
          <p className="font-medium text-sm pt-7 pb-7">Damilola O.
          <span className="font-normal text-[#7C8B98] text-sm"><br />M.D, Cocoa Research Institute of Nigeria</span></p>
        </div>

        <div className="border rounded-md h-[600px] text-black bg-[#BCF5C5] p-8  ">
          <Image
            src={Haneefah}
            alt="Haneefah"
           
          />
          <p className="font-medium text-xl">
            “Lorem ipsum dolor sit <br />amet consectetur. Nec id sem velit in
            facilisi adipiscing. <br />Tincidunt in morbi sed sollicitudin dolor
            dictum <br />ipsum rhoncus. Sodales <br />amet tincidunt sed sed <br />ipsum           
            ullamcorper sapien.”
          </p>
          <p className="font-medium text-sm pt-7 pb-7">Haneefah A.
          <span className="font-normal text-[#7C8B98] text-sm"><br />M.D, Rubber Research Institute of Nigeria</span></p>
        </div>

        <div className="border rounded-mdh-[600px] text-black bg-[#96E3E1] p-8  ">
          <Image
            src={Fuad}
            alt="Avatar"
           width={86}
          />
          <p className="font-medium text-xl">
            “Lorem ipsum dolor sit <br />amet consectetur. Nec id <br />sem velit in
            facilisi <br />adipiscing. Tincidunt in <br />morbi sed sollicitudin dolor
            <br />dictum ipsum rhoncus. <br />Sodales amet tincidunt sed <br />sed ipsum           
            ullamcorper sapien.”
          </p>
          <p className="font-medium text-sm pt-7 pb-7">Fu'ad L.
          <span className="font-normal text-[#7C8B98] text-sm"><br />National Horticultural Research Institue</span></p>
        </div>
      </div>
    </main>
  );
};

export default Review;
