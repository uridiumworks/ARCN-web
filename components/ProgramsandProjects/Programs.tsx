"use client";

import { useClientProgramsData } from "@/hooks/Programs.hooks";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { LuClock5 } from "react-icons/lu";

const Programs = () => {
  const { loading, programs, error } = useClientProgramsData();

  return (
    <main>
      <div className="text-center space-y-6 py-10">
        <h1 className="font-bold text-[40px]">Programs</h1>
        <p className="font-normal text-xl">
          Lorem ipsum dolor sit amet consectetur. Nunc pharetra a felis nibh. Id{" "}
          <br />
          ullamcorper nec leo porta. Enim nunc lacinia dui vehicula pellentesque
          morbi. <br />
          Magna nulla consequat.
        </p>
      </div>

      <div className="p-10 justify-center w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {programs?.length > 0 && (
          <>
            {programs?.slice(0, 8)?.map((p: any, index: number) => (
              <div key={index} className="border p-4 shadow-xl rounded-xl flex flex-row-reverse gap-2">
                <div>
                  <Image
                    src={p?.bannerUrl || "/Images/Homepage/World.png"}
                    alt={p?.subject}
                    width={201}
                    height={201}
                    className="rounded-md"
                  />
                </div>

                <div className="space-y-4">
                  <h1 className="font-normal text-[15.5px] text-[#1315175C]">
                    6:00 PM ·{" "}
                    <span className="font-normal text-[15.5px] text-[#D19D20]">
                      7:00 PM GMT+2
                    </span>
                  </h1>
                  <p className="font-medium text-xl">{p?.subject}</p>
                  <p className="font-normal text-sm text-[#464646]">
                    {p?.description}
                  </p>
                  <div className="flex gap-1 items-center text-[#1315175C]">
                    <LuMapPin />
                    <p className="font-normal text-[15.25px]">
                      Live-streamed event via Zoom
                    </p>
                  </div>

                  <div className="flex gap-1 items-center">
                    <LuClock5 />
                    <p className="font-normal text-[15.25px] text-[#1315175C] ">
                      {p?.eventStartDate} - {p?.eventEndDate}
                      {/* 12th - 16th July, 2024 */}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        {/* <div className="space-y-8">
          <div className="border p-4 shadow-xl rounded-xl flex flex-row-reverse gap-2">
            <div>
              <Image
                src="/Images/Homepage/World.png"
                alt="Overlay"
                width={201}
                height={201}
                className="rounded-md"
              />
            </div>

            <div className="space-y-4">
              <h1 className="font-normal text-[15.5px] text-[#1315175C]">
                6:00 PM ·{" "}
                <span className="font-normal text-[15.5px] text-[#D19D20]">
                  7:00 PM GMT+2
                </span>
              </h1>
              <p className="font-medium text-xl">E-Learning Programs</p>
              <p className="font-normal text-sm text-[#464646]">
                Our land. Our future. We are #GenerationRestoration.
              </p>
              <div className="flex gap-1 items-center text-[#1315175C]">
                <LuMapPin />
                <p className="font-normal text-[15.25px]">
                  Live-streamed event via Zoom
                </p>
              </div>

              <div className="flex gap-1 items-center">
                <LuClock5 />
                <p className="font-normal text-[15.25px] text-[#1315175C] ">
                  12th - 16th July, 2024
                </p>
              </div>
            </div>
          </div>

          <div className="border shadow-xl p-4 rounded-xl flex flex-row-reverse gap-2">
            <div>
              <Image
                src="/Images/Homepage/World.png"
                alt="Overlay"
                width={201}
                height={201}
                className="rounded-md"
              />
            </div>

            <div className="space-y-4">
              <h1 className="font-normal text-[15.5px] text-[#1315175C]">
                6:00 PM ·{" "}
                <span className="font-normal text-[15.5px] text-[#D19D20]">
                  7:00 PM GMT+2
                </span>
              </h1>
              <p className="font-medium text-xl">E-Learning Programs</p>
              <p className="font-normal text-sm text-[#464646]">
                Our land. Our future. We are #GenerationRestoration.
              </p>
              <div className="flex gap-1 items-center  text-[#1315175C]">
                <LuMapPin />
                <p className="font-normal text-[15.25px]">
                  Live-streamed event via Zoom
                </p>
              </div>

              <div className="flex gap-1 items-center">
                <LuClock5 />
                <p className="font-normal text-[15.25px] text-[#1315175C] ">
                  12th - 16th July, 2024
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="border shadow-xl p-4 rounded-xl flex flex-row-reverse gap-2">
            <div>
              <Image
                src="/Images/Homepage/World.png"
                alt="Overlay"
                width={201}
                height={201}
                className="rounded-md"
              />
            </div>

            <div className="space-y-4">
              <h1 className="font-normal text-[15.5px] text-[#1315175C]">
                6:00 PM ·{" "}
                <span className="font-normal text-[15.5px] text-[#D19D20]">
                  7:00 PM GMT+2
                </span>
              </h1>
              <p className="font-medium text-xl">E-Learning Programs</p>
              <p className="font-normal text-sm text-[#464646]">
                Our land. Our future. We are #GenerationRestoration.
              </p>
              <div className="flex gap-1 items-center text-[#1315175C]">
                <LuMapPin />
                <p className="font-normal text-[15.25px]">
                  Live-streamed event via Zoom
                </p>
              </div>

              <div className="flex gap-1 items-center">
                <LuClock5 />
                <p className="font-normal text-[15.25px] text-[#1315175C] ">
                  12th - 16th July, 2024
                </p>
              </div>
            </div>
          </div>

          <div className="border shadow-xl p-4 rounded-xl flex flex-row-reverse gap-2">
            <div>
              <Image
                src="/Images/Homepage/World.png"
                alt="Overlay"
                width={201}
                height={201}
                className="rounded-md"
              />
            </div>

            <div className="space-y-4">
              <h1 className="font-normal text-[15.5px] text-[#1315175C]">
                6:00 PM ·{" "}
                <span className="font-normal text-[15.5px] text-[#D19D20]">
                  7:00 PM GMT+2
                </span>
              </h1>
              <p className="font-medium text-xl">E-Learning Programs</p>
              <p className="font-normal text-sm text-[#464646]">
                Our land. Our future. We are #GenerationRestoration.
              </p>
              <div className="flex items-center gap-1 text-[#1315175C]">
                <LuMapPin />
                <p className="font-normal text-[15.25px]">
                  Live-streamed event via Zoom
                </p>
              </div>

              <div className="flex gap-1 items-center ">
                <LuClock5 />
                <p className="font-normal text-[15.25px] text-[#1315175C] ">
                  12th - 16th July, 2024
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default Programs;
