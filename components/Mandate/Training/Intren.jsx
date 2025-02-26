"use client";
import CustomContainer from "@/components/CustomContainer";
import { useClientEntrepreneurshipsData } from "@/hooks/Entrepreneurships.hooks";
import Image from "next/image";
import { MapPin, Clock } from "lucide-react";

const data = [
  {
    title: "E-Learning Programs",
    description: "Our land. Our future. We are #GenerationRestoration.",
    location: "Live-streamed event via Zoom",
    dateString: "12th - 16th July, 2024",
  },
  {
    title: "E-Learning Programs",
    description: "Our land. Our future. We are #GenerationRestoration.",
    location: "Live-streamed event via Zoom",
    dateString: "12th - 16th July, 2024",
  },
];

const Intern = () => {
  // const { loading, entrepreneurships, error } =
  //   useClientEntrepreneurshipsData();

  // console.log(entrepreneurships);

  return (
    <section className="flex flex-col gap-10 py-14 md:py-20">
      <CustomContainer>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-bold text-3xl text-[#0A1425] sm:text-4xl">
            Enterpreneurship
          </h2>
          <p className="font-normal text-base text-[#64728F] sm:text-xl">
            Lorem ipsum dolor sit amet consectetur. Nunc pharetra a felis nibh.
            Id <br />
            ullamcorper nec leo porta. Enim nunc lacinia dui vehicula
            pellentesque morbi. <br />
            Magna nulla consequat.
          </p>
        </div>
      </CustomContainer>

      <CustomContainer>
        <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-14">
          {data?.length > 0 && (
            <>
              {data?.slice(0, 4)?.map((el, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row justify-between lg:items-center gap-10 bg-white border border-[#E8E8E8] rounded-xl p-5"
                >
                  <div className="flex flex-col gap-3 items-start order-2 lg:order-1">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl text-[#131517] font-medium">
                        {el.title}
                      </h3>
                      <p className="font-normal text-[#464646] text-sm">
                        {el.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <div>
                          <MapPin size={20} color="#1315175C" />
                        </div>
                        <p className="text-[0.9375rem] font-normal text-[#1315175C]">
                          {el.location}
                        </p>
                      </div>

                      <div className="flex gap-2 items-center">
                        <div>
                          <Clock size={20} color="#000000" />
                        </div>
                        <p className="text-[0.9375rem] font-normal text-[#1315175C]">
                          {el.dateString}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[9.375rem] h-[9.375rem] shrink-0  rounded-xl overflow-hidden order-1 lg:order-2 ">
                    <Image
                      src="/Images/Homepage/event-imgholder.png"
                      alt="event-imgholder"
                      className="object-cover"
                      width={150}
                      height={150}
                      priority
                    />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </CustomContainer>
    </section>
  );
};

export default Intern;
