import Sands from "../../public/Images/Homepage/sands.png";
import Avatar from "../../public/Images/Homepage/Avatar.png";
import Image from "next/image";

const News = () => {
  return (
    <main className="py-8 flex flex-col lg:flex-row">

      <div className="p-20 space-y-4 ">
        <h1 className="font-bold text-2xl">Journals</h1>
        <div>
          <div className="flex flex-col lg:flex-row gap-2">
            <div>
              <Image src={Sands} alt="Sands" width={230} height={168} />
            </div>
            <div>
              <h1 className="font-normal text-[21px]">
                Soil fertility enhancement through organic amendments and cover
                crops.
              </h1>
              <p className="font-normal text-sm text-[#999999]">
                Soil fertility enhancement through organic amendments and cover
                crops is a critical aspect of sustainable agriculture..{" "}
                <span className="font-medium text-[13.45px] text-[#30A85F]">
                <br />
                Read more
                </span>
              </p>
              <div className="flex flex-col lg:flex-row">
                <div>
                  <Image
                  src={Avatar}
                  alt="Avatar"
                  width={25.47}
                  />
                </div>
                  <div>
                    <h1 className="font-semibold text-[9.55px]">Andrew Meller</h1>
                    <p className="font-medium text-[8.92px]">
                    Dynamic Intranet Officer
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col lg:flex-row gap-2">
            <div>
              <Image src={Sands} alt="sands" width={230} />
            </div>
            <div>
              <h1 className="font-normal text-[21px]">
                Soil fertility enhancement through organic amendments and cover
                crops.
              </h1>
              <p className="font-normal text-sm text-[#999999]">
                Soil fertility enhancement through organic amendments and cover
                crops is a critical aspect of sustainable agriculture..{" "}
                <span className="font-medium text-[13px] text-[#30A85F]">
                <br />
                Read more
                </span>
              </p>  
              <div className="flex flex-col lg:flex-row gap-1">
                <div>
                  <Image
                  src={Avatar}
                  alt="Avatar"
                  width={25.47}
                  />  
                </div>
                <div>
                  <h1 className="font-semibold text-[9.55px]">Andrew Meller</h1>
                  <p className="font-medium text-[8.92px]">
                    Dynamic Intranet Officer
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div>
          <div className="flex flex-col lg:flex-row gap-2">
            <div>
              <Image src={Sands} alt="sands" width={230} />
            </div>
            <div>
              <h1 className="font-normal text-[21px]">
              Soil fertility enhancement through organic amendments and cover
              crops.
              </h1>
              <p className="font-normal text-sm text-[#999999]">
                Soil fertility enhancement through organic amendments and cover
                crops is a critical aspect of sustainable agriculture..{" "}
                <span className="font-medium text-[13px] text-[#30A85F]">
                <br />
                Read more
                </span>
              </p>
              <div className="flex flex-col lg:flex-row">
                <div>
                  <Image
                  src={Avatar}
                  alt="Avatar"
                  width={25.47}
                  />
                </div>
                <div>
                  <h1 className="font-semibold text-[9.55px]">Andrew Meller</h1>
                  <p className="font-medium text-[8.92px]">
                  Dynamic Intranet Officer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-[1000px] space-y-9 bg-[#F7F7F7] p-20 h-fit">
        <h1 className="font-bold text-2xl">News Articles</h1>
        <div>
          <p className="font-medium text-[23px]">
            Nature-positive farms on remote hillsides in India show the future
            of resilient farming
          </p>
          <p className="font-bold text-lg text-[#999999]">
            Friday, June 17 2022{" "}
            <span className="font-bold text-lg text-[#30A85F]">
              <br />
              Read more
            </span>
          </p>
        </div>
        <div>
          <p className="font-medium text-[23px]">
            Nature-positive farms on remote hillsides in India show the future
            of resilient farming
          </p>
          <p className="font-bold text-lg text-[#999999]">
            Friday, June 17 2022{" "}
            <span className="font-bold text-lg text-[#30A85F]">
              <br />
              Read more
            </span>
          </p>
        </div>
        <div>
          <p className="font-medium text-[23px]">
            Nature-positive farms on remote hillsides in India show the future
            of resilient farming
          </p>
          <p className="font-bold text-lg text-[#999999">
            Friday, June 17 2022{" "}
            <span className="font-bold text-lg text-[#30A85F]">
              <br />
              Read more
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default News;
