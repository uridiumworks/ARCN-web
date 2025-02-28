"use client";
import CustomContainer from "@/components/CustomContainer";
import { useClientProjectsData } from "@/hooks/Projects.hooks";
import Image from "next/image";

const Technolody = () => {
  const { loading, projects, error } = useClientProjectsData();

  return (
    <section className="bg-white py-16 md:py-24">
      <CustomContainer>
        <div className="flex flex-col gap-6">
          <div className="place-content-center text-center p-9 space-y-4 font-montserrat">
            <h2 className="font-bold text-3xl sm:text-4xl">Our Technologies</h2>
            <p className="font-normal text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper quis
              etiam euismod quisque montes arcu risus. Magnis posuere tincidunt
              elit ultrices tortor. Sit semper cras sed duis tortor tempor amet
              gravida. Rhoncus quis nisl etiam tortor.
            </p>
          </div>

          <div className="p-3 lg:w-[100%] mx-auto grid grid-cols-[100%] lg:grid-cols-4 sm:grid-cols-2 gap-5">
            {projects?.length > 0 && (
              <>
                {projects?.slice(0, 4)?.map((p: any, index: number) => (
                  <div key={index} className="relative">
                    <Image
                      src={p?.bannerUrl || "/Images/Mandatepage/Casava.png"}
                      alt={p?.title}
                      width={368}
                      height={200}
                    />
                    <div className="absolute w-full bg-[#000000CC] bottom-0 flex flex-col gap-1 text-white px-2 pt-2 pb-3">
                      <h3 className="font-medium text-[0.9375rem]">
                        {p?.title || "Calcium A Cassava"}
                      </h3>
                      <p className="font-normal text-xs">
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
