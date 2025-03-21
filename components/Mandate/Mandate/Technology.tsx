"use client";
import CustomContainer from "@/components/CustomContainer";
import { useClientProjectsData } from "@/hooks/Projects.hooks";
import Image from "next/image";

const Technolody = () => {
  const { loading, projects, error } = useClientProjectsData();

  return (
    <section className="bg-white py-12 md:py-20">
      <CustomContainer>
        <div className="flex flex-col gap-6">
          <div className="place-content-center text-center p-9 space-y-4 font-montserrat">
            <h2 className="font-bold text-3xl sm:text-4xl leading-[2.25rem]">
              Our Technologies
            </h2>
            <p className="font-normal text-sm leading-[1.5rem]">
              Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper quis
              etiam euismod quisque <br className="hidden md:block" /> montes
              arcu risus. Magnis posuere tincidunt elit ultrices tortor. Sit
              semper cras sed duis tortor <br className="hidden md:block" />{" "}
              tempor amet gravida. Rhoncus quis nisl etiam tortor.
            </p>
          </div>

          <div className="grid grid-cols-mandate-research-technology gap-8">
            {projects?.length > 0 && (
              <>
                {projects?.slice(0, 4)?.map((p: any, index: number) => (
                  <div
                    key={index}
                    className="relative h-[17.5rem] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={p?.bannerUrl || "/Images/Mandatepage/Casava.png"}
                      alt={p?.title}
                      width={328}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute w-full bg-[#000000CC] bottom-0 flex flex-col  text-white px-2 py-2.5">
                      <h3 className="font-medium text-sm leading-[1.74625rem]">
                        {p?.title || "Calcium A Cassava"}
                      </h3>
                      <p className="font-normal text-[0.6875rem] leading-[1.2125rem]">
                        {p?.description ||
                          "Lorem ipsum dolor sit amet consectetur. Tellus varius fermentum nisi a quis tristique velit adipiscing magna."}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Technolody;
