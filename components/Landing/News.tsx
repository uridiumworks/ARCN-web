"use client";
import Image from "next/image";
import CustomContainer from "../CustomContainer";
import { useClientNewsLettersData } from "@/hooks/NewsLetters.hooks";

const data = [
  {
    type: "ARCN JOURNAL",
    imgs: [
      "/Images/Homepage/journal-img-1.png",
      "/Images/Homepage/journal-img-2.png",
    ],
    subject: "Journal Title",
    content:
      "ARCN plays a pivotal role in the dissemination of cutting-edge research through its published journals. These journals serve as a platform for researchers from diverse fields and various institutes to share their findings, insights, and innovations with the global academic community.",
    id: 1,
  },
  {
    type: "NEWSLETTER",
    imgs: [
      "/Images/Homepage/newsletter-img-1.png",
      "/Images/Homepage/newsletter-img-2.png",
    ],
    subject: "Journal Title",
    content:
      "ARCN plays a pivotal role in the dissemination of cutting-edge research through its published journals. These journals serve as a platform for researchers from diverse fields and various institutes to share their findings, insights, and innovations with the global academic community.",
    id: 2,
  },
];

const News = () => {
  // const { newsLetters } = useClientNewsLettersData();
  // console.log(newsLetters);
  return (
    <section className="py-16 md:py-24 bg-[#FBFAFA]">
      <CustomContainer>
        <div className="flex flex-col gap-12">
          <h2 className="uppercase font-semibold text-[#171717] text-3xl sm:text-4xl sm:leading-[2.7rem] text-center">
            Publications
          </h2>
          <div className="grid grid-cols-home-publication-res gap-6">
            {data.map((el, i) => (
              <div key={i} className="flex flex-col gap-3.5">
                <h3 className="font-medium text-[#131517] text-xl sm:text-2xl leading-[1.46625rem] text-opacity-85 ">
                  {el.type}
                </h3>
                <div className="grid grid-rows-[min_content_auto] gap-8">
                  <div className="flex gap-4 justify-start">
                    {el.imgs.map((img, i) => (
                      <div
                        className="relative  overflow-hidden rounded-md"
                        key={i}
                      >
                        <Image
                          width={200}
                          height={350}
                          src={img}
                          alt="img"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col items-start gap-2.5">
                    <h4 className="font-medium text-base sm:text-lg sm:leading-[1.28625rem] text-[#131517]">
                      {el.subject}
                    </h4>
                    <p className="text-[#464646] font-normal text-sm leading-[1.5rem]">
                      {el.content}
                    </p>
                    <div className="bg-[#0C513F0D] rounded-sm text-[#0C513F] font-medium text-[0.75rem] leading-[1.5625rem] py-1 px-4 cursor-pointer">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-col  gap-3.5  col-span-1 sm:col-span-full lg:col-span-1">
              <h3 className="font-medium text-[#131517] text-xl sm:text-2xl leading-[1.46625rem] text-opacity-85">
                NEWS ALERTS
              </h3>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-6">
                <div className="flex flex-col gap-3 items-start rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                  <h4 className="text-[#131517] text-[1.345rem] leading-[1.5625rem] font-medium">
                    News Title
                  </h4>
                  <p className="font-normal text-[0.75rem] text-[#464646] leading-[1.28625rem] text-left">
                  ARCN plays a pivotal role in the dissemination of cutting-edge research through its published journals. These journals serve as a platform for researchers from diverse fields and various institutes to share their findings, insights, and innovations with the global academic community.
                  </p>
                  <div className="bg-[#0C513F0D] rounded-sm text-[#0C513F] font-medium text-[0.75rem] leading-[1.5625rem] py-1 px-4 cursor-pointer">
                    Read More
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-start rounded-xl py-5 px-7 border-[1.08px] border-[#E8E8E8] bg-white">
                  <h4 className="text-[#131517] text-[1.345rem] font-medium leading-[1.5625rem]">
                    News Title
                  </h4>
                  <p className="font-normal text-[0.75rem] text-[#464646] leading-[1.28625rem] text-left">
                    We are delighted to bring you the latest updates and
                    highlights from ARCN, where groundbreaking research meets
                    global collaboration.
                  </p>
                  <div className="bg-[#0C513F0D] rounded-sm text-[#0C513F] font-medium text-[0.75rem] leading-[1.5625rem] py-1 px-4 cursor-pointer">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default News;
