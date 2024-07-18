import Image from "next/image";

const Review = () => {
    return (
      <main className="flex flex-col lg:flex-row">
        <div>
          <h1 className="font-bold text-[40px]">Reveiws By Research Institutes</h1>
        </div>
        <div>
          <div className="border rounded-md w-[347px] bg-[#96E3E1] ">
            <Image
              src="/Images/Homepage/damilola.png"
              alt="damilola"
              className="w-[86px]"
              width={86}
              height={86}
            />
            <p className="font-medium text-xl">
              “Lorem ipsum dolor sit amet consectetur. Nec id sem velit in
              facilisi adipiscing. Tincidunt in morbi sed sollicitudin dolor
              dictum ipsum rhoncus. Sodales amet tincidunt sed sed ipsum           
              ullamcorper sapien.”
            </p>
            <p className="font-medium text-sm">Damilola O.
            <span className="font-normal text-[#7C8B98] text-sm">M.D, Cocoa Research Institute of Nigeria</span></p>
          </div>
  
          <div className="border rounded-md w-[347px] text-black bg-[#BCF5C5] ">
            <Image
              src="/Images/Homepage/Haneefah.png"
              alt="Haneefah"
              className="w-[86px]"
              width={86}
              height={86}
            />
            <p className="font-medium text-xl">
              “Lorem ipsum dolor sit amet consectetur. Nec id sem velit in
              facilisi adipiscing. Tincidunt in morbi sed sollicitudin dolor
              dictum ipsum rhoncus. Sodales amet tincidunt sed sed ipsum           
              ullamcorper sapien.”
            </p>
            <p className="font-medium text-sm">Haneefah A.
            <span className="font-normal text-[#7C8B98] text-sm">M.D, Rubber Research Institute of Nigeria</span></p>
          </div>
  
          <div className="border rounded-md w-[347px] text-black bg-[#96E3E1] ">
            <Image
              src="/Images/Homepage/Avatar.png"
              alt="Avatar"
              className="w-[86px]"
              width={86}
              height={86}
            />
            <p className="font-medium text-xl">
              “Lorem ipsum dolor sit amet consectetur. Nec id sem velit in
              facilisi adipiscing. Tincidunt in morbi sed sollicitudin dolor
              dictum ipsum rhoncus. Sodales amet tincidunt sed sed ipsum           
              ullamcorper sapien.”
            </p>
            <p className="font-medium text-sm">Fu&apos;ad L.
            <span className="font-normal text-[#7C8B98] text-sm">National Horticultural Research Institue</span></p>
          </div>
        </div>
      </main>
    );
  };
  
  export default Review;