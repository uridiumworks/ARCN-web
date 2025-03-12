"use client";
import { useClientNewsLettersData } from "@/hooks/NewsLetters.hooks";
import Image from "next/image";
import Link from "next/link";

const New = () => {
  const { loading, newsLetters, error } = useClientNewsLettersData();

  function convertToReadableDate(isoDateStr: any) {
    const date = new Date(isoDateStr);

    // Options for formatting
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    // Convert to a readable format
    return date.toLocaleDateString('en-US', options as any);
}
console.log(newsLetters)
  return (
    <section className="w-full">
      <div className="">
        <div className="w-full mx-auto">
          <h1 className="font-semibold font-montserrat text-3xl md:text-4xl text-center pt-20 pb-8">News</h1>
        </div>

        <div className="lg:w-9/12 lg:mx-auto px-3 space-y-7">
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-7 ">
            {newsLetters?.length > 0 && (
              <>
                {newsLetters?.slice(0, 6)?.map((n: any, index: number) => (
                  <div key={index} className="space-y-3">
                    <div className="relative w-full h-[268.59px]">
                      <Image
                        src={n?.bannerUrl || "/Placeholder.png"}
                        alt="special image"
                        className="object-cover rounded-t-md w-full"
                        priority
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <div className="space-y-4">
                      <h1 className="font-semibold text-base">
                       Nature-positive farms on remote hillsides in India show the future of resilient farming
                      </h1>
                      <p className="font-normal text-sm" style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                       Monsoons are a mixed blessing for rain-dependent farmers in remote mountain villages the deluges br…
                      </p>
                      <div className="flex flex-row">
                        <p className="font-bold flex gap-2 text-sm text-[#15271C] ">
                          <span className="font-normal text-sm text-[#999999]">
                            {convertToReadableDate(n?.publishDate)}
                          </span>
                          <br /> 
                          <Link href={`/news-and-events/news`} passHref>
                            <span className="cursor-pointer hover:underline">Read more</span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-5 ">
            {newsLetters?.length > 0 && (
              <>
                {newsLetters?.slice(0,3)?.map((n: any, index: number) => (
                  <div key={index} className="space-y-3">
                     <div className="relative w-full h-[268.59px]">
                      <Image
                        src={n?.bannerUrl || "/Placeholder.png"}
                        alt="special image"
                        className="object-cover rounded-t-md w-full"
                        priority
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <div className="space-y-4">
                      <h1 className="font-semibold text-base">
                        Nature-positive farms on remote hillsides in India show the future of resilient farming
                      </h1>
                      <p className="font-normal text-sm" style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                      Monsoons are a mixed blessing for rain-dependent farmers in remote mountain villages the deluges br…a
                      </p>
                      <p className="font-bold flex gap-2 text-sm text-[#15271C] ">
                        <span className="font-normal text-sm text-[#999999]">
                            {convertToReadableDate(n?.publishDate)}
                        </span>
                        <br /> 
                        <Link href={`/news-and-events/news`} passHref>
                          <span className="cursor-pointer hover:underline">Read more</span>
                        </Link>
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default New;
