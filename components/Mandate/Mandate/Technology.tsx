"use client"
import { useClientProjectsData } from "@/hooks/Projects.hooks";
import Image from "next/image";

const Technolody = () => {
  const { loading, projects, error } = useClientProjectsData();

  return (
    <main>
      <div>
        <div className="place-content-center text-center p-9 space-y-4 font-montserrat">
          <h1 className="font-bold text-4xl">Our Technologies</h1>
          <p className="font-normal text-base">
            Lorem ipsum dolor sit amet consectetur. Elementum ullamcorper quis
            etiam euismod quisque <br />
            montes arcu risus. Magnis posuere tincidunt elit ultrices tortor.
            Sit semper cras sed duis tortor <br />
            tempor amet gravida. Rhoncus quis nisl etiam tortor.
          </p>
        </div>

        <div className="p-3 lg:w-[100%] mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
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
                  <div className="absolute w-full bg-[#000000CC] bottom-0 text-white p-2">
                    <h1 className="font-medium text-[15.52px]">{p?.title}</h1>
                    <p className="font-normal text-[10.35px]">
                      {p?.description}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="p-9 text-center">
          <button
            type="button"
            className="border py-2 px-9 font-bold text-sm rounded-[4px] text-[#15271C] w-full md:w-[152px] h-[52px]"
          >
            VIEW ALL
          </button>
        </div>
      </div>
    </main>
  );
};

export default Technolody;
