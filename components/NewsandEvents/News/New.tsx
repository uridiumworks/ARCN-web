"use client";
import { useClientNewsLettersData } from "@/hooks/NewsLetters.hooks";
import Image from "next/image";

const New = () => {
  const { loading, newsLetters, error } = useClientNewsLettersData();

  function convertToReadableDate(isoDateStr: any) {
    const date = new Date(isoDateStr);

    // Options for formatting
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    // Convert to a readable format
    return date.toLocaleDateString('en-US', options as any);
}

  return (
    <main>
      <div className="font-montserrat mx-auto">
        <div className="w-full h-full mx-auto">
          <h1 className="font-semibold text-4xl text-center pt-20">News</h1>
        </div>
        <div className="w-full h-full">
          <div className="gap-8 px-10 lg:h-[591.59px] flex flex-col md:flex-row space-y-4">
            {newsLetters?.length > 0 && (
              <>
                {newsLetters?.slice(0, 4)?.map((n: any, index: number) => (
                  <div key={index} className="space-y-3">
                    <div>
                      <Image
                        src={n?.bannerUrl || "/Images/News and Events/Place.png"}
                        alt={n?.category}
                        width={395}
                        height={268.59}
                        className="shadow-lg"
                        style={{height: "auto", maxHeight: 268.59}}
                      />
                    </div>
                    <div className="space-y-2">
                      <h1 className="font-semibold text-[23px]">
                        {n?.title}
                      </h1>
                      <p className="font-normal text-base" style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                        {n?.description}
                      </p>
                      <p className="font-bold text-lg text-[#15271C] ">
                        <span className="font-normal text-lg text-[#999999]">
                            {convertToReadableDate(n?.publishDate)}
                        </span>
                        <br /> 
                        <span className="cursor-pointer hover:underline">Read more</span>
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="gap-5 px-10 lg:h-[591.59px] flex flex-col md:flex-row">
          {newsLetters?.length > 0 && (
              <>
                {newsLetters?.slice(4, 8)?.map((n: any, index: number) => (
                  <div key={index} className="space-y-3">
                    <div>
                      <Image
                        src={n?.bannerUrl || "/Images/News and Events/Place.png"}
                        alt={n?.category}
                        width={395}
                        height={268.59}
                        className="shadow-lg"
                        style={{height: "auto", maxHeight: 268.59}}
                      />
                    </div>
                    <div className="space-y-2">
                      <h1 className="font-semibold text-[23px]">
                        {n?.title}
                      </h1>
                      <p className="font-normal text-base" style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                        {n?.description}
                      </p>
                      <p className="font-bold text-lg text-[#15271C] ">
                        <span className="font-normal text-lg text-[#999999]">
                            {convertToReadableDate(n?.publishDate)}
                        </span>
                        <br /> 
                        <span className="cursor-pointer hover:underline">Read more</span>
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
            {/* <div>
              <div>
                <Image
                  src="/Images/News and Events/Place.png"
                  alt="Place"
                  width={395}
                  height={268.59}
                />
              </div>
              <div>
                <h1 className="font-semibold text-[23px]">
                  Nature-positive farms on remote hillsides in India show the
                  future of resilient farming
                </h1>
                <p className="font-normal text-base">
                  Monsoons are a mixed blessing for rain- dependent farmers in
                  remote mountain villages: the deluges br…
                </p>
                <p className="font-bold text-lg text-[#15271C] ">
                  <span className="font-normal text-lg text-[#999999]">
                    Friday, June 17 2022
                  </span>{" "}
                  Read more
                </p>
              </div>
            </div>

            <div>
              <div>
                <Image
                  src="/Images/News and Events/wheat.png"
                  alt="Wheat"
                  width={395}
                  height={268.59}
                />
              </div>
              <div>
                <h1 className="font-semibold text-[23px]">
                  Maximizing Wheat Productivity with Supplemental Irrigation
                </h1>
                <p className="font-normal text-base">
                  A new ICARDA study shows how applying key agri- innovations
                  can strengthen dryland rainfed production…
                </p>
                <p className="font-bold text-lg text-[#15271C] ">
                  <span className="font-normal text-lg text-[#999999]">
                    Friday, June 17 2022
                  </span>{" "}
                  Read more
                </p>
              </div>
            </div>

            <div>
              <div>
                <Image
                  src="/Images/News and Events/Borancow.png"
                  alt="Borancow"
                  width={395}
                  height={268.59}
                />
              </div>
              <div>
                <h1 className="font-semibold text-[23px]">
                  First drone-based measurement of ruminant methane emissions in
                  Africa
                </h1>
                <p className="font-normal text-base">
                  Flying a mere nine metres above the grasslands at Kapiti, the
                  International Livestock Research Insti…
                </p>
                <p className="font-bold text-lg text-[#15271C] ">
                  <span className="font-normal text-lg text-[#999999]">
                    Friday, June 17 2022
                  </span>{" "}
                  Read more
                </p>
              </div>
            </div>

            <div>
              <div>
                <Image
                  src="/Images/News and Events/Borancow.png"
                  alt="Borancow"
                  width={395}
                  height={268.59}
                />
              </div>
              <div>
                <h1 className="font-semibold text-[23px]">
                  First drone-based measurement of ruminant methane emissions in
                  Africa
                </h1>
                <p className="font-normal text-base">
                  Flying a mere nine metres above the grasslands at Kapiti, the
                  International Livestock Research Insti…
                </p>
                <p className="font-bold text-lg text-[#15271C] ">
                  <span className="font-normal text-lg text-[#999999]">
                    Friday, June 17 2022
                  </span>{" "}
                  Read more
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default New;
