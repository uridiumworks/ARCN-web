"use client";
import { useClientNarissData } from "@/hooks/Naris.hooks";
import Image from "next/image";
import { Loader, LoaderOptions } from "google-maps";
import Link from "next/link";
import CustomContainer from "@/components/CustomContainer";

// const MapsOld = () => {
//   const { loading, nariss, error } = useClientNarissData();

//   return (
//     <main className="bg-[#F6F6F6] font-montserrat">
//       <div>
//         <div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-10 font-semibold text-[20px]  lg:text-[15px] ">
//             {nariss?.length > 0 && (
//               <>
//                 {nariss?.slice(0, 10)?.map((n: any, index: number) => (
//                   <div key={index}>
//                     <p>{n.institutionName}</p>
//                   </div>
//                 ))}
//               </>
//             )}
//           </div>
//           <Link href={"/mandate/Research"}>
//             <div className="text-center">
//               <button className="bg-[#30A85F] border py-3 px-10 text-white rounded-md">
//                 Detailed view
//               </button>
//             </div>
//           </Link>
//         </div>
//         <div className="mx-auto w-full lg:w-[939px] py-10 ">
//           <Image
//             src="/Images/Mandatepage/maps.png"
//             alt="maps"
//             width={600}
//             height={400}
//           />
//         </div>
//       </div>
//     </main>
//   );
// };

const Maps = () => {
  const { loading, nariss, error } = useClientNarissData();
  return (
    <section className="py-16 md:py-24 bg-[#F6F6F6]">
      <CustomContainer>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-[100%] sm:grid-cols-2 sm:justify-around gap-8">
            {nariss?.length > 0 && (
              <>
                {nariss?.slice(0, 10)?.map((n: any, index: number) => (
                  <p
                    key={index}
                    className="text-[#2D3657] font-semibold text-sm"
                  >
                    {n.institutionName}
                  </p>
                ))}
              </>
            )}
          </div>
          {/* button */}
          <Link
            href="/mandate/Research"
            className="self-center bg-[#30A85F] text-white rounded-sm border border-[#E6E6E6] font-sans text-sm px-8 py-4"
          >
            Detailed view
          </Link>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Maps;
