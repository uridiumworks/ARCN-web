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
    <section className="">
      <div className="font-montserrat mx-auto">
        <div className="w-full h-full mx-auto">
          <h1 className="font-semibold font-montserrat text-4xl text-center pt-20">News</h1>
        </div>

        <div className="w-full h-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-9 lg:mx-44 p-5 ">
            {newsLetters?.length > 0 && (
              <>
                {newsLetters?.slice(0, 3)?.map((n: any, index: number) => (
                  <div key={index} className="space-y-3">
                    <div>
                      <Image
                        // src={n?.bannerUrl || "/Images/News and Events/Place.png"}
                        src={"https://res.cloudinary.com/dvvpqxkhw/image/upload/v1728908904/profilepicture/Life%20insurance-1688565756271-612912741.png.png"}
                        alt={n?.category}
                        width={395}
                        height={268.59}
                        className="shadow-lg"
                        style={{height: "auto", maxHeight: 268.59}}
                      />
                    </div>

                    <div className="space-y-2">
                      <h1 className="font-semibold text-base">
                       Nature-positive farms on remote hillsides in India show the future of resilient farming
                      </h1>
                      <p className="font-normal text-base" style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                       Monsoons are a mixed blessing for rain-dependent farmers in remote mountain villages the deluges br…
                      </p>
                      <div className="flex flex-row">
                        <p className="font-bold text-lg text-[#15271C] ">
                          <span className="font-normal text-lg text-[#999999]">
                              {convertToReadableDate(n?.publishDate)}
                          </span>
                          <br /> 
                          <span className="cursor-pointer hover:underline">Read more</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-9 lg:mx-44 p-5 ">
            {newsLetters?.length > 0 && (
              <>
                {newsLetters?.slice(0,3)?.map((n: any, index: number) => (
                  <div key={index} className="space-y-3">
                    <div>
                      <Image
                        // src={n?.bannerUrl || "/Images/News and Events/Place.png"}
                        src={"https://res.cloudinary.com/dvvpqxkhw/image/upload/v1728908904/profilepicture/Life%20insurance-1688565756271-612912741.png.png"}
                        alt={n?.category}
                        width={395}
                        height={268.59}
                        className="shadow-lg"
                        style={{height: "auto", maxHeight: 268.59}}
                      />
                    </div>
                    <div className="space-y-2">
                      <h1 className="font-semibold text-base">
                        Nature-positive farms on remote hillsides in India show the future of resilient farming
                      </h1>
                      <p className="font-normal text-base" style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                      Monsoons are a mixed blessing for rain-dependent farmers in remote mountain villages the deluges br…a
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
        </div>
      </div>
    </section>
  );
};

export default New;
