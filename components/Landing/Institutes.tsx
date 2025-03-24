"use client";
// import { useClientFCAsData } from "@/hooks/FCAs.hooks";
// import { useClientNarissData } from "@/hooks/Naris.hooks";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { LocationOutlineIcon, WebIcon } from "@/assets/icons";
import CustomContainer from "../CustomContainer";

const tabs = ["Research Institutes", "Fed Colleges of Agric"];

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

const data1 = [
  {
    title: "Federal College of Agriculture, Akure",
    location: "Federal College of Agriculture, Akure",
    webUrl: "fecaakure.edu.ng",
    imgUrl: "/Images/Homepage/feca-logo.png",
  },
  {
    title: "Federal College of Agriculture, Ibadan",
    location: "Ibadan, Oyo State",
    webUrl: "fcaib.edu.ng",
    imgUrl: "/Images/Homepage/fca-ibadan-logo.png",
  },
  {
    title: "Federal College of Agriculture, Ishiagu",
    location: "Ishiagu in Ivo LGA of Ebonyi State",
    webUrl: "fcaishiagu.edu.ng",
    imgUrl: "/Images/Homepage/fca-ishiagu-logo.png",
  },
  {
    title: "Federal College of Animal Health and production, Vom",
    location: "Vom",
    webUrl: "portal.fcahptvom.edu.ng",
    imgUrl: "/Images/Homepage/fap-vom-logo.png",
  },
  {
    title: "Federal Cooperative College, kaduna",
    location: "Kaduna",
    webUrl: "fcck.edu.ng",
    imgUrl: "/Images/Homepage/fcc-kaduna-logo.png",
  },
  {
    title: "Federal Cooperative College, Oji River",
    location: "Industrial Layout, Oji River, Enugu",
    webUrl: "fccojiriver.edu.ng",
    imgUrl: "/Images/Homepage/fcc-river-logo.png",
  },
];
const TabOne = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="grid grid-cols-[100%] lg:grid-cols-2 gap-6">
        {data.map((el, i) => (
          <div
            key={i}
            className="flex gap-5 flex-col sm:flex-row items-start lg:items-center border-[0.59px] border-[#e7e7e772] rounded-lg py-5 px-2.5 bg-white shadow-sm shadow-[#0000000D]"
          >
            <div className="object-contain h-auto w-auto shrink-0">
              <Image
                width={120}
                height={120}
                alt=""
                src={el.imgUrl}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-base leading-[1.18375rem] text-[#111111]">
                {el.title}
              </h3>
              <div className="flex items-center gap-3">
                <div>
                  {" "}
                  <LocationOutlineIcon />
                </div>{" "}
                <p className="font-normal text-sm leading-[1.4rem] text-[#111111]">
                  {el.location}
                </p>
              </div>
              {/* <div className="flex items-center gap-3">
                <div>
                  <WebIcon />
                </div>{" "}
                <Link
                  href={`https://www.${el.webUrl}`}
                  target="_blank"
                  className="text-[#30A85F] font-normal text-sm leading-[1.4rem]"
                >
                  {el.webUrl}
                </Link>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/mandate/research"
        className="self-center text-center font-sans font-medium text-base rounded-lg px-10 md:px-24 py-4 bg-transparent border border-[#2E7636] text-[#2E7636]"
      >
        See All Reseach Institutes
      </Link>
    </div>
  );
};

const TabTwo = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="grid grid-cols-[100%] lg:grid-cols-2 gap-6">
        {data1.map((el, i) => (
          <div
            key={i}
            className="flex  gap-4 flex-col sm:flex-row items-start lg:items-center border-[0.59px] border-[#e7e7e772] rounded-lg py-5 px-2.5 bg-white shadow-sm shadow-[#0000000D]"
          >
            <div className="object-contain h-auto w-auto">
              <Image
                width={120}
                height={120}
                alt=""
                src={el.imgUrl}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-base leading-[1.18375rem] text-[#111111]">
                {el.title}
              </h3>
              <div className="flex items-center gap-3">
                <LocationOutlineIcon />{" "}
                <p className="font-normal text-sm leading-[1.4rem] text-[#111111]">
                  {el.location}
                </p>
              </div>
              {/* <div className="flex items-center gap-3">
                <WebIcon />{" "}
                <Link
                  href={`https://www.${el.webUrl}`}
                  target="_blank"
                  className="text-[#30A85F] leading-[1.4rem] font-normal text-sm"
                >
                  {el.webUrl}
                </Link>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/mandate/training/college"
        className="self-center text-center font-sans font-medium text-base rounded-lg px-10 md:px-24 py-4 bg-transparent border border-[#2E7636] text-[#2E7636]"
      >
        See all Colleges
      </Link>
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
    <section className="py-12 md:py-20">
      <CustomContainer>
        <div className="flex flex-col gap-10">
          <div className="self-center text-center flex flex-col gap-4">
            <h2 className="font-bold text-[#171717] text-3xl sm:text-4xl leading-[2.25rem]">
             Institutions
            </h2>
            <p className="text-[#111111] text-opacity-[90%] text-sm leading-[1.5rem]">
              Explore our network of research institutes and Federal Colleges of
              Agriculture dedicated to <br className="hidden md:block" />{" "}
              advancing agricultural innovation and sustainability across
              Nigeria.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            {/* tab */}
            <div className="self-center bg-[#F2F2F2] rounded-[2rem] p-1 flex flex-row sm:justify-between gap-3 sm:gap-5">
              {tabs.map((el, i) => (
                <div
                  key={el}
                  className={`font-medium text-[0.75rem] sm:text-sm leading-[1.5rem] transition text-center rounded-full p-3 sm:p-5 cursor-pointer ${
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
