import Image from "next/image";

const News = () => {
  return (
    <main className="bg-[#FBFAFA] w-full font-montserrat py-9">
      <h1 className="font-bold text-2xl text-center pb-5">PUBLICATIONS</h1>
      <div className="flex flex-col lg:flex-row w-full md:w-[100%] gap-14 px-6 md:px-16">
        <div className="space-y-4 w-full lg:w-[60%] pt-20">
          <div>
            <h1 className="font-bold text-base">Journals</h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 p-9 lg:p-2 border bg-[#FFFFFFCC] rounded-[12.91px]">
            <div>
              <Image src="/Images/Homepage/Books.png" alt="Books" width={216.26} height={216.26} className="rounded-2xl" />
            </div>
            <div className="space-y-4">
              <h1 className="font-normal text-[21px]">ARCN JOURNAL.</h1>
              <p className="font-normal text-base lg:text-sm text-[#999999]">
                ARCN plays a pivotal role in the dissemination of cutting-edge
                research through its <br />published journals. These journals serve as
                a platform for researchers from diverse fields and various
                institutes to share their findings, insights, and innovations
                with the <br />global academic community.
              </p>
              <div className="font-medium text-[13px] py-2 text-[#30A85F]">
                <button className="border-0 py-2 px-4 bg-[#0C513F0D]">
                  Check Journals
                </button>
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-normal text-[16.41px] text-[#1315175C]"><span className="font-medium text-[#131517] text-[16.95px]">Jun 8</span> Saturday</h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 p-9 lg:p-2 border bg-[#FFFFFFCC] rounded-[12.91px] ">
            <div className="space-y-4">
              <h1 className="font-normal text-[21px]">ARCN NEWSLETTER</h1>
              <p className="font-normal text-base lg:text-sm text-[#999999]">
                We are delighted to bring you the latest updates and highlights
                from ARCN, where groundbreaking research meets global
                collaboration. Our newsletters serve as a <br />conduit for sharing
                cutting-edge discoveries and insights that shape the future
                of science, technology, and beyond.
              </p>
              <div className="font-medium text-sm lg:text-[13px] py-2 text-[#30A85F]">
                <button className="border-0 py-2 px-4 bg-[#0C513F0D]">
                  Check Newsletters
                </button>
              </div>
            </div>
            <div>
              <Image
                src="/Images/Homepage/Overlay.png"
                alt="Overlay"
                width={216}
                height={216}
              />
            </div>
          </div>
        </div>

        <div className="space-y-3 lg:w-[40%] h-fit">
          <h1 className="font-bold text-2xl text-[#333333]">News Alert</h1>

          <div className="space-y-4">
            <div>
              <Image src="/Images/Homepage/Horizontal.png" alt="Horizontal" width={574} height={298.96} />
            </div>
            <div className="w-fit space-y-3">
              <p className="font-semibold text-lg lg:text-[32px] border-b-2 w-fit">
                Nature-positive farms on remote hillsides in India show the future
                of resilient farming
              </p>
              <div className="space-y-2">
                <p className="font-medium text-sm lg:text-[21px] border-b-2">
                  Nature-positive farms on remote hillsides in India show the future
                  of resilient farming
                </p>
                <p className="font-medium text-sm lg:text-[21px]">
                  Nature-positive farms on remote hillsides in India show the future
                  of resilient farming
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default News;
