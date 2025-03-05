"use client";
import CustomContainer from "@/components/CustomContainer";
import { useClientEntrepreneurshipsData } from "@/hooks/Entrepreneurships.hooks";
import Image from "next/image";
import { MapPin, Clock } from "lucide-react";
import moment from "moment";

function formatDate(eventStartDate, eventEndDate) {
  // Parse the dates using moment
  const startDate = moment(eventStartDate);
  const endDate = moment(eventEndDate);

  // Format to your desired output style
  // 'Do' gives day with ordinal (12th), 'MMMM' gives full month name, 'YYYY' gives 4-digit year
  const formattedStartDay = startDate.format("Do");
  const formattedEndDay = endDate.format("Do");
  const formattedMonth = endDate.format("MMMM");
  const formattedYear = endDate.format("YYYY");

  // Combine into final string
  return `${formattedStartDay} - ${formattedEndDay} ${formattedMonth}, ${formattedYear}`;
}

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
  const { loading, entrepreneurships, error } =
    useClientEntrepreneurshipsData();

  console.log(entrepreneurships);

  return (
    <section className="flex flex-col gap-10 py-14 md:py-20">
      <CustomContainer>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-bold text-3xl text-[#0A1425] sm:text-4xl sm:leading-[2.7rem]">
            Enterpreneurship
          </h2>
          <p className="font-normal text-sm text-[#64728F] sm:text-base sm:leading-[1.75rem]">
            Lorem ipsum dolor sit amet consectetur. Nunc pharetra a felis nibh.
            Id <br className="hidden md:block" />
            ullamcorper nec leo porta. Enim nunc lacinia dui vehicula
            pellentesque morbi. <br className="hidden md:block" />
            Magna nulla consequat.
          </p>
        </div>
      </CustomContainer>

      <CustomContainer>
        <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-14">
          {entrepreneurships?.length > 0 && (
            <>
              {entrepreneurships?.slice(0, 4)?.map((el, index) => (
                <div
                  key={el?.entrepreneurshipId}
                  className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 lg:gap-10 bg-white border border-[#E8E8E8] rounded-xl py-3 px-3.5 lg:px-2.5 lg:py-1.5"
                >
                  <div className="flex flex-col gap-1.5 lg:self-center items-start order-2 lg:order-1">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg leading-[1.5rem] text-[#131517] font-medium">
                        {el?.subject}
                      </h3>
                      <p className="font-normal text-[#464646] text-xs leading-[1.5rem]">
                        {el.description || "--"}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2 items-center">
                        <div>
                          <MapPin size={20} color="#1315175C" />
                        </div>
                        <p className="text-xs leading-[1.5rem] font-normal text-[#1315175C]">
                          {el?.venue}
                        </p>
                      </div>

                      {el?.eventStartDate && el?.eventEndDate && (
                        <div className="flex gap-2 items-center">
                          <div>
                            <Clock size={20} color="#000000" />
                          </div>

                          <p className="text-xs leading-[1.5rem] font-normal text-[#1315175C]">
                            {formatDate(el.eventStartDate, el.eventEndDate)}{" "}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="relative w-full sm:w-[9.375rem] h-[9.375rem] lg:h-full shrink-0  rounded-xl overflow-hidden order-1 lg:order-2 ">
                    <Image
                      src="/Images/Homepage/event-imgholder.png"
                      alt="event-imgholder"
                      className="object-cover h-full w-full"
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
