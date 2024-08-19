import Image from "next/image";

const News = () => {
  return (
    <main className="bg-[#FBFAFA] p-4 sm:p-6 lg:p-10">
      <h1 className="font-bold text-2xl text-center mb-8">PUBLICATIONS</h1>

      <div className="flex flex-col lg:flex-row lg:w-[1200px] gap-10 lg:gap-20 mx-auto">
        <div className="space-y-8 lg:space-y-10 pt-10 lg:pt-20">
          <h1 className="font-bold text-base">Journals</h1>
          <div className="flex flex-col lg:flex-row items-center justify-center border border-[#E8E8E8] p-4 bg-[#FFFFFFCC] rounded-[12.91px]">
            <div className="lg:w-1/2">
              <Image
                src="/Images/Homepage/Books.png"
                alt="Books"
                width={216}
                height={216}
                className="rounded-2xl"
              />
            </div>
            <div className="lg:w-1/2 space-y-4 lg:space-y-2 text-center lg:text-left">
              <h1 className="font-normal text-xl lg:text-[21px]">ARCN JOURNAL.</h1>
              <p className="font-normal text-sm text-[#999999]">
                ARCN plays a pivotal role in the dissemination of cutting-edge
                research through its published journals. These journals serve
                as a platform for researchers from diverse fields and various
                institutes to share their findings, insights, and innovations
                with the global academic community.
              </p>
              <div className="font-medium text-sm lg:text-[13px] py-4 text-[#30A85F]">
                <button className="border py-2 px-5 bg-[#0C513F0D]">
                  Check Journals
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row border border-[#E8E8E8] bg-[#FFFFFFCC] rounded-[12.91px] p-4 gap-4 lg:gap-2">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="font-normal text-xl lg:text-[21px]">ARCN NEWSLETTER</h1>
              <p className="font-normal text-sm text-[#999999]">
                We are delighted to bring you the latest updates and highlights
                from ARCN, where groundbreaking research meets global
                collaboration. Our newsletters serve as a conduit for sharing
                cutting-edge discoveries and insights that shape the future
                of science, technology, and beyond.
              </p>
              <div className="font-medium text-sm lg:text-[13px] py-4 text-[#30A85F]">
                <button className="border py-2 px-5 bg-[#0C513F0D]">
                  Check Newsletters
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/Images/Homepage/Overlay.png"
                alt="Overlay"
                width={216}
                height={216}
                className="mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[1000px] space-y-4 lg:space-y-3 h-fit">
          <h1 className="font-bold text-xl lg:text-2xl text-[#333333]">News Alert</h1>
          <div className="space-y-4">
            <div className="w-full">
              <Image
                src="/Images/Homepage/Horizontal.png"
                alt="Horizontal"
                width={574}
                height={298.96}
                className="w-full"
              />
            </div>
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
    </main>
  );
};

export default News;
