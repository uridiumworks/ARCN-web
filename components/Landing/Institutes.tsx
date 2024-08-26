import Image from "next/image";

const Institutes = () => {
  return (
    <main className="w-full space-y-8 px-4 py-10 mx-auto font-montserrat">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h1 className="font-medium text-3xl lg:text-4xl xl:text-[48px]">
            Our Institutions
          </h1>
          <p className="font-normal text-base lg:text-lg">
            Explore our network of research institutes dedicated to advancing<br />
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
              <div className="border-[0.59px] py-2 px-3 bg-white rounded-lg flex items-center gap-3">
                <Image
                  src="/Image/Icons/Cocoa.png"
                  alt="Cocoa"
                  width={42}
                  height={42}
                />
                <h1 className="font-semibold text-sm lg:text-base">
                  Cocoa Research Institute of Nigeria
                </h1>
              </div>

              <div className="border-[0.59px] py-2 px-3 bg-white rounded-lg flex items-center gap-3">
                <Image
                  src="/Image/Icons/Rubber.png"
                  alt="Rubber"
                  width={42}
                  height={42}
                />
                <h1 className="font-semibold text-sm lg:text-base">
                  Rubber Research Institute of Nigeria
                </h1>
              </div>

              <div className="border-[0.59px] py-2 px-3 bg-white rounded-lg flex items-center gap-3">
                <Image
                  src="/Image/Icons/National.png"
                  alt="National"
                  width={42}
                  height={42}
                />
                <h1 className="font-semibold text-sm lg:text-base">
                  National Horticultural Research Institute
                </h1>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="border-[0.59px] py-2 px-3 bg-white rounded-lg flex items-center gap-3">
                <Image
                  src="/Image/Icons/Roots.png"
                  alt="Roots"
                  width={42}
                  height={42}
                />
                <h1 className="font-semibold text-sm lg:text-base">
                  Cocoa Research Institute of Nigeria
                </h1>
              </div>

              <div className="border-[0.59px] py-2 px-3 bg-white rounded-lg flex items-center gap-3">
                <Image
                  src="/Image/Icons/Cereals.png"
                  alt="Cereals"
                  width={42}
                  height={42}
                />
                <h1 className="font-semibold text-sm lg:text-base">
                  Rubber Research Institute of Nigeria
                </h1>
              </div>

              <div className="border border-[#2E7636] py-2 px-3 rounded-lg flex justify-center items-center">
                <button className="font-medium text-base text-[#2E7636]">
                  See All Research Institutes
                </button>
              </div>
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
              <div className="border-[0.59px] py-2 px-3 bg-white rounded-lg flex items-center gap-3">
                <Image
                  src="/Image/Icons/Akure.png"
                  alt="Akure"
                  width={42}
                  height={42}
                />
                <h1 className="font-semibold text-sm lg:text-base">
                  Cocoa Research Institute of Nigeria
                </h1>
              </div>

              <div className="border-[0.59px] py-2 px-3 bg-white rounded-lg flex items-center gap-3">
                <Image
                  src="/Image/Icons/Ibandan.png"
                  alt="Ibandan"
                  width={42}
                  height={42}
                />
                <h1 className="font-semibold text-sm lg:text-base">
                  Rubber Research Institute of Nigeria
                </h1>
              </div>

              <div className="border-[0.59px] py-2 px-3 bg-white rounded-lg flex items-center gap-3">
                <Image
                  src="/Image/Icons/Ishiagu.png"
                  alt="Ishiagu"
                  width={42}
                  height={42}
                />
                <h1 className="font-semibold text-sm lg:text-base">
                  National Horticultural Research Institute
                </h1>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="border-[0.59px] py-2 px-3 bg-white rounded-lg flex items-center gap-3">
                <Image
                  src="/Image/Icons/Moor.png"
                  alt="Moor"
                  width={42}
                  height={42}
                />
                <h1 className="font-semibold text-sm lg:text-base">
                  Cocoa Research Institute of Nigeria
                </h1>
              </div>

              <div className="border-[0.59px] py-2 px-3 bg-white rounded-lg flex items-center gap-3">
                <Image
                  src="/Image/Icons/Kaduna.png"
                  alt="Kaduna"
                  width={42}
                  height={42}
                />
                <h1 className="font-semibold text-sm lg:text-base">
                  Rubber Research Institute of Nigeria
                </h1>
              </div>

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
