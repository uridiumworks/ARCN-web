import Image from "next/image";


const Institutes = () => {
  return (
    <main className=" w-full space-y-4 mx-auto py-10">

      <div className="space-y-6">
        <div className="text-center space-y-4 place-content-center">
          <h1 className="font-medium text-[48px]">Our Institutions</h1>
          <p className="font-normal space-y-3 text-lg">
            Explore our network of research institutes dedicated to advancing
            <br />agricultural innovation and sustainability across Nigeria.
          </p>
        </div>

        <div className="border-2 p-10 rounded-xl w-full lg:w-[1200px] mx-auto space-y-6 bg-[#E5E5E5]  ">

          <div className="border-[0.59px] py-1.5 px-3 w-full lg:w-[468.72px] bg-[#0C513F0D] rounded-lg h-[60px] ">
            <div className="place-content-center p-1">
              <h1 className="font-semibold text-2xl text-[#0C513F] text-center">Research Institutes</h1>
            </div>
          </div>

          <div className="border rounded-lg space-y-7 lg:h-[234px] p-10 bg-[#F9F9F9]">
            <div className="grid lg:grid-cols-3 gap-4 w-full lg:w-[1/2]  ">
              <div className="border-[0.59px] py-1.5 px-3 bg-[#FFFFFF] rounded-lg lg:h-[60px] ">
                <div className="space-y-2 flex gap-2">
                  <Image src="/Image/Icons/Cocoa.png" alt="cocoa" width={42} height={42} />
                  <h1 className="font-semibold text-[14.31]">Cocoa Research Institute of Nigeria</h1>
                </div>
              </div>

              <div className="border-[0.59px] py-1.5 px-3 bg-[#FFFFFF] rounded-lg gap-3.5 lg:h-[60px] ">
                <div className="space-y-2 flex gap-2">
                  <Image src="/Image/Icons/Rubber.png" alt="Rubber" width={42} height={42} />
                  <h1 className="font-semibold text-[15px]">Rubber Research Institute of Nigeria</h1>
                </div>
              </div>

              <div className="border py-1.5 px-3 rounded-lg bg-[#FFFFFF] gap-3.5 lg:h-[60px] ">
                <div className="space-y-2 flex gap-2">
                  <Image src="/Image/Icons/National.png" alt="national" width={42} height={42} />
                  <h1 className="font-semibold text-[14px]">National Horticultural Research Institute</h1>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-4 w-full lg:w-[1/2]  ">
              <div className="border-[0.59px] py-1.5 px-3 bg-[#FFFFFF] rounded-lg lg:h-[60px] ">
                <div className="space-y-2 flex gap-2">
                  <Image src="/Image/Icons/Roots.png" alt="Roots" width={42} height={42} />
                  <h1 className="font-semibold text-[14.31]">Cocoa Research Institute of Nigeria</h1>
                </div>
              </div>

              <div className="border-[0.59px] py-1.5 px-3 bg-[#FFFFFF] rounded-lg gap-3.5 lg:h-[60px] ">
                <div className="space-y-2 flex gap-2">
                  <Image src="/Image/Icons/Cereals.png" alt="Cereals" width={42} height={42} />
                  <h1 className="font-semibold text-[15px]">Rubber Research Institute of Nigeria</h1>
                </div>

              </div>

              <div className="border border-[#2E7636] py-0.5 px-3 rounded-[9px] text-center place-content-center lg:h-[60px] ">
                <button className="font-medium text-[16px] text-[#2E7636]">See All Reseach Institutes</button>
              </div>
            </div>
          </div>

        </div>


        <div className="border-2 p-10 rounded-xl w-full lg:w-[1200px] mx-auto space-y-6 bg-[#E5E5E5] ">
          <div className="border-[0.59px] py-1.5 px-3 w-full lg:w-[468.72px] bg-[#0C513F0D] rounded-lg h-[89px] lg:h-[60px] ">
            <div className="place-content-center p-1">
              <h1 className="font-semibold text-2xl text-[#0C513F] text-center">Federal Colleges of Agriculture </h1>
            </div>
          </div>

          <div className="border rounded-lg space-y-7 lg:h-[234px] p-10 bg-[#F9F9F9]">
            <div className="grid lg:grid-cols-3 gap-4 w-full lg:w-[1/2]  ">
              <div className="border-[0.59px] py-1.5 px-3 bg-[#FFFFFF] rounded-lg lg:h-[60px] ">
                <div className="space-y-2 flex gap-2">
                  <Image src="/Image/Icons/Akure.png" alt="Akure" width={42} height={42} />
                  <h1 className="font-semibold text-[14.31]">Cocoa Research Institute of Nigeria</h1>
                </div>
              </div>

              <div className="border-[0.59px] py-1.5 px-3 bg-[#FFFFFF] rounded-lg gap-3.5 lg:h-[60px] ">
                <div className="space-y-2 flex gap-2">
                  <Image src="/Image/Icons/Ibandan.png" alt="Ibandan" width={42} height={42} />
                  <h1 className="font-semibold text-[15px]">Rubber Research Institute of Nigeria</h1>
                </div>
              </div>

              <div className="border py-1.5 px-3 rounded-lg bg-[#FFFFFF] gap-3.5 lg:h-[60px] ">
                <div className="space-y-2 flex gap-2">
                  <Image src="/Image/Icons/Ishiagu.png" alt="Ishiagu" width={42} height={42} />
                  <h1 className="font-semibold text-[14px]">National Horticultural Research Institute</h1>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-4 w-full lg:w-[1/2]  ">
              <div className="border-[0.59px] py-1.5 px-3 bg-[#FFFFFF] rounded-lg lg:h-[60px] ">
                <div className="space-y-2 flex gap-2">
                  <Image src="/Image/Icons/Moor.png" alt="Moor" width={42} height={42} />
                  <h1 className="font-semibold text-[14.31]">Cocoa Research Institute of Nigeria</h1>
                </div>
              </div>

              <div className="border-[0.59px] py-1.5 px-3 bg-[#FFFFFF] rounded-lg gap-3.5 lg:h-[60px] ">
                <div className="space-y-2 flex gap-2">
                  <Image src="/Image/Icons/Kaduna.png" alt="Kaduna" width={42} height={42} />
                  <h1 className="font-semibold text-[15px]">Rubber Research Institute of Nigeria</h1>
                </div>
              </div>

              <div className="border border-[#2E7636] py-0.5 px-3 rounded-[9px] text-center place-content-center gap-3.5 lg:h-[60px] ">
                <button className="font-medium text-[16px] text-[#2E7636]">See All Reseach Institutes</button>
              </div>
            </div>
          </div>

        </div>



       
      </div>
    </main>
  );
};

export default Institutes;
