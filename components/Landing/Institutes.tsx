"use client";
import { useClientFCAsData } from "@/hooks/FCAs.hooks";
import { useClientNarissData } from "@/hooks/Naris.hooks";
import Image from "next/image";
import Link from "next/link";

const Institutes = () => {
  const { loading, nariss, error } = useClientNarissData();
  const { loading: fcasLoading, fcas, error: fcasError } = useClientFCAsData();

  return (
    <main className="w-full space-y-8 px-4 py-10 mx-auto font-montserrat">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h1 className="font-medium text-3xl lg:text-4xl xl:text-[48px]">
            Our Institutions
          </h1>
          <p className="font-normal text-base lg:text-lg">
            Explore our network of research institutes dedicated to advancing
            <br />
            agricultural innovation and sustainability across Nigeria.
          </p>
        </div>

        <div className="border-[1.5] p-6 lg:p-10 rounded-xl bg-[#f5f2f2] space-y-6 w-full md:w-[100%]">
          <div className="border-[0.59px] py-2 px-4 lg:w-[468px] bg-[#0C513F0D] rounded-lg text-center">
            <h1 className="font-semibold text-xl lg:text-2xl text-[#0C513F]">
              Research Institutes
            </h1>
          </div>

          <div className="border rounded-lg p-6 lg:p-10 bg-[#F9F9F9] space-y-4 lg:space-y-7">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <>
                {nariss?.length > 0 &&
                  nariss?.slice(0, 4)?.map((naris: any, index: number) => (
                    <div
                      key={index}
                      className="border-[0.59px] py-2 px-3 bg-white rounded-lg flex items-center gap-3"
                    >
                      <Image
                        src="/Images/Icons/Cocoa.png"
                        alt="Cocoa"
                        width={42}
                        height={42}
                      />
                      <h1 className="font-semibold text-sm lg:text-base">
                        {naris?.institutionName}
                      </h1>
                    </div>
                  ))}
              </>
              <Link href={"/mandate/Research"}>
              <div className="border border-[#2E7636] py-2 px-3 rounded-lg flex justify-center items-center">
                <button className="font-medium text-base text-[#2E7636]">
                  See All Research Institutes
                </button>
              </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-[1.5] p-6 lg:p-10 rounded-xl bg-[#F9F9F9] space-y-6 mx-auto w-full md:w-[100%]">
          <div className="border-[0.59px] py-2 px-4 lg:w-[468px] bg-[#0C513F0D] rounded-lg text-center">
            <h1 className="font-semibold text-xl lg:text-2xl text-[#0C513F]">
              Federal Colleges of Agriculture
            </h1>
          </div>

          <div className="border rounded-lg p-6 lg:p-10 bg-[#F9F9F9] space-y-4 lg:space-y-7">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <>
              {fcas?.length > 0 && fcas?.slice(0, 4)?.map((fca:any, index: number) => (
                 <div key={index} className="border-[0.59px] py-2 px-3 bg-white rounded-lg flex items-center gap-3">
                 <Image
                   src="/Images/Icons/Ibandan.png"
                   alt="Ibandan"
                   width={42}
                   height={42}
                 />
                 <h1 className="font-semibold text-sm lg:text-base">
                   {fca?.institutionName}
                 </h1>
               </div>
              ))}
             
              </>
              <div className="border border-[#2E7636] py-2 px-3 rounded-lg flex justify-center items-center">
              <button className="font-medium text-base text-[#2E7636]">
                See All Research Institutes
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Institutes;
