
import Image from "next/image";

const News = () => {
  return (
    <main className="bg-[#FBFAFA] p-10">
      <h1 className="font-bold text-2xl text-center">PUBLICATIONS</h1>

      <div  className=" flex flex-col lg:w-[1200px] lg:flex-row gap-20">
        <div className="space-y-10 pt-20">
          <h1 className="font-bold text-base">Journals</h1>
          <div className="flex flex-col lg:flex-row gap-2 border border-[1.08] border-[#E8E8E8] p-3 bg-[#FFFFFFCC] rounded-[12.91px]">

            <div className="flex flex-row-reverse">
              <div>
                <Image src="/Images/Homepage/Books.png" alt="Books" width={216.26} height={216.26} className="rounded-2xl" />
              </div>
              <div>
                <h1 className="font-normal text-[21px]">ARCN JOURNAL.</h1>
                <p className="font-normal text-sm text-[#999999]">
                  ARCN plays a pivotal role in the dissemination of cutting-edge
                  <br />research through its <br />published journals. These journals serve as
                  a platform for researchers  <br />from diverse fields and various
                  institutes to share their findings, insights, and innovations
                  with the global academic community.
                </p>
                <div className="font-medium text-[13px] py-4 text-[#30A85F]">
                  <button className="border py-2 px-5 bg-[#0C513F0D]">
                    Check Journals
                  </button>
                </div>
              </div>
            </div>

          </div>
        <div>
          <div className="flex flex-col lg:flex-row border border-[1.08] border-[#E8E8E8] bg-[#FFFFFFCC] rounded-[12.91px] p-3 gap-2">
            <div>
              <h1 className="font-normal text-[21px]">ARCN NEWSLETTER</h1>
              <p className="font-normal text-sm text-[#999999]">
                We are delighted to bring you the latest updates and highlights
                from ARCN, where
                groundbreaking research meets global collaboration. Our
                newsletters serve as a conduit for sharing cutting-edge
                discoveries and insights that shape the future of science,
                technology, and beyond.
              </p>
              <div className="font-medium text-[13px] py-4 text-[#30A85F]">
                <button className="border py-2 px-5 bg-[#0C513F0D]">
                  Check Journals
                </button>
              </div>
            </div>
              <div className="">
                <Image src="/Images/Homepage/Overlay.png" alt="Overlay" width={216.26} height={216.26} />
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[1000px] space-y-3 h-fit">
          <h1 className="font-bold text-2xl text-[#333333]">News Alert</h1>
          <div>
            <div>
              <Image src="/Images/Homepage/Horizontal.png" alt="Horizontal" width={574} height={298.96} />
            </div>
            <p className="font-semibold text-[32px] border-b-2 w-fit">
              Nature-positive farms on remote hillsides in India show the future
              of resilient farming
            </p>
            <div className="w-fit">
              <p className="font-medium text-[21px] border-b-2">
                Nature-positive farms on remote hillsides in India show the future
                of resilient farming
              </p>
              <p className="font-medium text-[21px]">
                Nature-positive farms on remote hillsides in India show the future
                of resilient farming
              </p>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};

export default News;
