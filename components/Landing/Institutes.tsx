"use client";
import { useClientFCAsData } from "@/hooks/FCAs.hooks";
import { useClientNarissData } from "@/hooks/Naris.hooks";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { LocationOutlineIcon, WebIcon } from "@/assets/icons";
import CustomContainer from "../CustomContainer";

const InstitutesOld = () => {
  const { loading, nariss, error } = useClientNarissData();
  const { loading: fcasLoading, fcas, error: fcasError } = useClientFCAsData();

  return (
    <main className="w-full space-y-8 px-4 py-10 mx-auto font-montserrat">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h1 className="font-medium text-3xl lg:text-4xl xl:text-[48px]">
            Our Institutions
          </h1>
          <p className="font-normal text-base lg:text-lg">
            Explore our network of research institutes dedicated to advancing
            <br />
            agricultural innovation and sustainability across Nigeria.
          </p>
        </div>

        <div className="border-[1.5] p-6 lg:p-10 rounded-xl bg-[#f5f2f2] space-y-6 w-full md:w-[100%]">
          <div className="border-[0.59px] py-2 px-4 lg:w-[468px] bg-[#0C513F0D] rounded-lg text-center">
            <h1 className="font-semibold text-xl lg:text-2xl text-[#0C513F]">
              Research Institutes
            </h1>
          </div>

          <div className="border rounded-lg p-6 lg:p-10 bg-[#F9F9F9] space-y-4 lg:space-y-7">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <>
                {nariss?.length > 0 &&
                  nariss?.slice(0, 4)?.map((naris: any, index: number) => (
                    <div
                      key={index}
                      className="border-[0.59px] py-2 px-3 bg-white rounded-lg flex items-center gap-3"
                    >
                      <Image
                        src="/Images/Icons/Cocoa.png"
                        alt="Cocoa"
                        width={42}
                        height={42}
                      />
                      <h1 className="font-semibold text-sm lg:text-base">
                        {naris?.institutionName}
                      </h1>
                    </div>
                  ))}
              </>
              <Link href={"/mandate/Research"}>
                <div className="border border-[#2E7636] py-2 px-3 rounded-lg flex justify-center items-center">
                  <button className="font-medium text-base text-[#2E7636]">
                    See All Research Institutes
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-[1.5] p-6 lg:p-10 rounded-xl bg-[#F9F9F9] space-y-6 mx-auto w-full md:w-[100%]">
          <div className="border-[0.59px] py-2 px-4 lg:w-[468px] bg-[#0C513F0D] rounded-lg text-center">
            <h1 className="font-semibold text-xl lg:text-2xl text-[#0C513F]">
              Federal Colleges of Agriculture
            </h1>
          </div>

          <div className="border rounded-lg p-6 lg:p-10 bg-[#F9F9F9] space-y-4 lg:space-y-7">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <>
                {fcas?.length > 0 &&
                  fcas?.slice(0, 4)?.map((fca: any, index: number) => (
                    <div
                      key={index}
                      className="border-[0.59px] py-2 px-3 bg-white rounded-lg flex items-center gap-3"
                    >
                      <Image
                        src="/Images/Icons/Ibandan.png"
                        alt="Ibandan"
                        width={42}
                        height={42}
                      />
                      <h1 className="font-semibold text-sm lg:text-base">
                        {fca?.institutionName}
                      </h1>
                    </div>
                  ))}
              </>
              <Link href={"/mandate/training/college"}>
                <div className="border border-[#2E7636] py-2 px-3 rounded-lg flex justify-center items-center">
                  <button className="font-medium text-base text-[#2E7636]">
                    See All Research Institutes
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const tabs = ["Our Research Institutes", "Federal Colleges of Agriculture "];

const data = [
  {
    title: "National Horticultural Research Institute",
    location: "Jericho Reservation Area, Ibadan, Nigeria.",
    webUrl: "nihort.gov.ng",
    imgUrl: "/Images/Homepage/nhri-img.png",
  },
  {
    title: "Cocoa Research Institute of Nigeria",
    location: "Idi-Ayunre Oluyole Local Govt. Area Ibadan,Oyo State",
    webUrl: "crin.gov.ng",
    imgUrl: "/Images/Homepage/plcholder-img.png",
  },
  {
    title: "Rubber Research Institute of Nigeria",
    location: "Km 19, Benin-Sapele High Way, Benin City.",
    webUrl: "rrin.gov.ng",
    imgUrl: "/Images/Homepage/rrin-img.png",
  },
  {
    title: "National Root Crops Research Institute",
    location: "Km 8 Umuahia-Ikot Ekpene Road Umuahia, Abia State",
    webUrl: "nrcri.gov.ng",
    imgUrl: "/Images/Homepage/nrcri-img.png",
  },
  {
    title: "National Cereals Research Institute",
    location: "National Cereals Research Institute (NCRI),Badeggi, Niger",
    webUrl: "ncribadeggi.org.ng",
    imgUrl: "/Images/Homepage/ncri-img.png",
  },
  {
    title: "National Animal Production And Research  Institute",
    location: "No 2, Sokoto Road , Shika Zaria, kaduna",
    webUrl: "napri.gov.ng",
    imgUrl: "/Images/Homepage/napri-img.png",
  },
];

const TabOne = () => {
  return (
    <div className="flex flex-col gap-14">
      <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-6">
        {data.map((el, i) => (
          <div
            key={i}
            className="flex gap-4 flex-col sm:flex-row items-start lg:items-center border-[0.59px] border-[#e7e7e772] rounded-lg py-5 px-2.5 bg-white shadow-sm shadow-[#0000000D]"
          >
            <div className="object-contain shrink-0">
              <Image
                width={35}
                height={35}
                alt=""
                src={el.imgUrl}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-base text-[#111111]">
                {el.title}
              </h3>
              <div className="flex items-center gap-3">
                <div>
                  {" "}
                  <LocationOutlineIcon />
                </div>{" "}
                <p className="font-normal text-sm text-[#111111]">
                  {el.location}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <WebIcon />
                </div>{" "}
                <Link
                  href={el.webUrl}
                  className="text-[#30A85F] font-normal text-sm"
                >
                  {el.webUrl}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="self-center text-center font-sans font-medium text-base rounded-lg px-8 py-4 bg-transparent border border-[#2E7636] text-[#2E7636]">
        See All Reseach Institutes
      </button>
    </div>
  );
};

const TabTwo = () => {
  return (
    <div className="flex flex-col gap-14 ">
      <div className="grid grid-cols-[100%] sm:grid-cols-2 gap-6">
        {data.map((el, i) => (
          <div
            key={i}
            className="flex  gap-4 flex-col sm:flex-row items-start lg:items-center border-[0.59px] border-[#e7e7e772] rounded-lg py-5 px-2.5 bg-white shadow-sm shadow-[#0000000D]"
          >
            <div className="object-contain">
              <Image
                width={35}
                height={35}
                alt=""
                src={el.imgUrl}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-base text-[#111111]">
                {el.title}
              </h3>
              <div className="flex items-center gap-3">
                <LocationOutlineIcon />{" "}
                <p className="font-normal text-sm text-[#111111]">
                  {el.location}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <WebIcon />{" "}
                <Link
                  href={el.webUrl}
                  className="text-[#30A85F] font-normal text-sm"
                >
                  {el.webUrl}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="self-center text-center font-sans font-medium text-base rounded-lg px-10 py-4 bg-transparent border border-[#2E7636] text-[#2E7636]">
        See All Reseach Institutes
      </button>
    </div>
  );
};

const Institutes = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const loadContent = useCallback(() => {
    if (currentTab === 0) {
      return <TabOne />;
    } else {
      return <TabTwo />;
    }
  }, [currentTab]);

  return (
    <section className="py-16 md:py-24">
      <CustomContainer>
        <div className="flex flex-col gap-12">
          <div className="self-center text-center flex flex-col gap-8">
            <h2 className="font-medium text-3xl sm:text-5xl text-[#111111]">
              Our Institutions
            </h2>
            <p className="text-[#111111] text-opacity-[90%] text-base sm:text-xl">
              Explore our network of research institutes and Federal Colleges of
              Agriculture dedicated to advancing agricultural innovation and
              sustainability across Nigeria.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            {/* tab */}
            <div className="sm:self-center bg-[#F2F2F2] rounded-[2rem] p-1 flex flex-row sm:justify-between gap-3 sm:gap-5">
              {tabs.map((el, i) => (
                <div
                  key={el}
                  className={`font-medium text-[0.75rem] sm:text-sm transition text-center rounded-full p-3 sm:p-5 cursor-pointer ${
                    currentTab === i
                      ? "bg-[#30A85F] text-white"
                      : "bg-transparent text-[#111111]"
                  }`}
                  onClick={() => setCurrentTab(i)}
                >
                  {el}
                </div>
              ))}
            </div>
            {/* content */}
            <div className="px-0 sm:px-12">{loadContent()}</div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Institutes;
