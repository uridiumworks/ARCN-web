import { useEffect, useState } from "react";
import CustomContainer from "../CustomContainer";
import "./styling.css";
import Image from "next/image";


const Bander = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error status

  
  useEffect(() => {
    fetch("http://92.205.63.251:81/api/home-slide?populate=images")
      .then(res => res.json())
      .then((data) => {
        setData(data?.data[0].attributes.images.data[0].attributes.url);
        console.log(data.data[0].attributes.images.data[0].attributes.url);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []); // Empty dependency array to run only once on mount
  if (loading) {
    return <div>...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (!data) {
    return <div>No data</div>;
  }
  console.log(data);
  console.log("data", data);
  console.log("loading", loading);  

  return (
    <section>
      {data && data.map((item: any) => (
        <>
        <div>
          <div>
            <Image src={item?.images[0]} alt={item.title} className="h-[250px] object-contain" />
          </div>
        </div>
        </>
      ))}
    </section>
    // <main className="md:h-auto banner bg-[#00000099]  text-black">
    //   <div className="h-full bg-[#00000099] flex flex-col gap-4 sm:gap-0">
    //     <div className="w-full sm:max-w-[77.5rem] sm:mx-auto px-8 md:pt-4 lg:pt-7">
    //       <div className="min-h-[80%] py-5 md:py-9 flex justify-center items-center">
    //         <div className="w-full text-white flex flex-col gap-4 lg:gap- text-center sm:py-4 px-4 md:px-0">
    //           <h1 className="font-bold text-2xl sm:text-3xl lg:text-[2.5rem] leading-[2.5rem] sm:leading-[2.875rem]" >
    //             ARCN and UNN introduce new  <br /> strategy agroecological sustainable
    //             farming
    //           </h1>
    //           <div className="flex flex-col gap-3">
    //             {" "}
    //             <p className="text-[#FFC84F] text-base md:text-[1.25rem] font-medium leading-8 lg:leading-[2.125rem]">
    //               Regional government and CGIAR partnership launch agroforestry
    //               <br className="hidden md:block" /> corridor to preserve
    //               biodiversity.
    //             </p>
    //             <button
    //               type="button"
    //               className="border-2 py-3 px-5 sm:px-8 rounded-sm self-center font-bold text-[0.75rem] sm:text-sm text-[#15271C] focus:outline-none font-sans border-white bg-white"
    //             >
    //               READ MORE
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="min-h-[10%] bg-[#000000B2] py-8">
    //       <CustomContainer>
    //         <div className="flex flex-col sm:flex-row sm:justify-between lg:justify-center items-center gap-8 sm:gap-14 lg:gap-24 ">
    //           <div  className="hidden lg:block lg:shrink-0">
    //             <Image
    //               src="/Images/Homepage/Newpaper.png"
    //               width={180}
    //               height={145}
    //               alt="paper"
    //             />
    //           </div>
    //           <div className=" text-center flex flex-col items-center gap-3.5">
    //             <h2 className="font-medium text-2xl lg:text-[2rem] lg:leading-[2.796875rem] text-white">
    //               Journal of Applied Agricultural Research (JAAR)
    //             </h2>
    //             <p className="font-normal text-base lg:text-[1.2rem] lg:leading-[1.303125rem] text-white text-opacity-[94%]">
    //               CALL FOR PAPERS AND SUBMISSION OF MANUSCRIPTS
    //             </p>
    //           </div>
    //           <div>
    //             <button
    //               type="button"
    //               className="py-2 px-16 flex items-center gap-1  font-sans rounded-sm font-bold text-sm lg:text-[0.75rem] lg:leading-[1.72125rem] text-white bg-[#04662A]"
    //             >
    //              <span>SUBMIT</span> <span> NOW</span>
    //             </button>
    //           </div>
    //         </div>
    //       </CustomContainer>
    //     </div>
    //   </div>
    // </main>
  );
};

export default Bander;
