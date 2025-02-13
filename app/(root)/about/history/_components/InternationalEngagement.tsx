'use client'
import React from "react";
import {
  AfricariceIcon,
  AatfIcon,
  CabiIcon,
  CgiarIcon,
  CorafIcon,
  FaraIcon,
  GraIcon,
  GainIcon,
  IlriIcon,
  IcrisatIcon,
  IfpriIcon,
  IitaIcon,
  SyngentaIcon,
  TheWorldBankIcon,
  WorldfishIcon,
} from "@/assets/icons";

const data = [
  {
    title: "CGIAR – Consultative Group on International Agricultural Research",
    content:
      "Member representing SSA on the System Council; Member of Transition Committee",
    icon: <CgiarIcon />,
  },
  {
    title: "AATF – African Agricultural Technology Foundation",
    content:
      "Member BoT; various initiatives for the development and commercialization of agricultural technologies using modern technologies",
    icon: <AatfIcon />,
  },
  {
    title: "Centre for Agriculture and Bioscience International",
    content: "Member representing Nigeria on the Board",
    icon: <CabiIcon />,
  },
  {
    title:
      "CORAF/WECARD – West and Central African Council for Agricultural Research and Development",
    content:
      "Member; Active participant in Scaling Up Climate-Resilience Rice production in West Africa (RICOWAS Project), Food Resilience Support Programme (FRSP), etc.",
    icon: <CorafIcon />,
  },
  {
    title: "FARA – Forum for Agricultural Research in Africa",
    content:
      "Country lead of Programme for Accompanying Research with Innovation alongside GTZ; CAADPXP4 alongside CORAF/WECARD; etc",
    icon: <FaraIcon />,
  },
  {
    title: "IFPRI",
    content:
      "Country lead of BioRAPP; Active engagement in development of policy capacity including strategic planning, MEL; Policy Communications; Extension Policy Development; Policy Performance Assessment, etc.",
    icon: <IfpriIcon />,
  },
  {
    title: "IITA",
    content: "IITA",
    icon: <IitaIcon />,
  },
  {
    title: "ICRISAT",
    content: "International Crops Research Institute for the Semi-Arid Tropics",
    icon: <IcrisatIcon />,
  },
  {
    title: "WorldFish",
    content: "International Center for Living Aquatic Resources Management",
    icon: <WorldfishIcon />,
  },
  {
    title: "ILRI",
    content: "International Livestock Research Institute",
    icon: <IlriIcon />,
  },
  {
    title: "Africa Rice Center",
    content: "",
    icon: <AfricariceIcon />,
  },
  {
    title: "WorldFish",
    content: "International Center for Living Aquatic Resources Management",
    icon: <WorldfishIcon />,
  },
  {
    title: "Global Research Alliance for Greenhouse Gases Emissions (GRA)",
    content:
      "Member representing Nigeria; Building institutional capacity to mitigate the impact of climate change.",
    icon: <GraIcon />,
  },
  {
    title:
      "Food and Agriculture Organization of the United Nations (FAO) in the African region",
    content: "",
    icon: <AfricariceIcon />,
  },
  {
    title: "Africa Forum for Agricultural Advisory Services (AFAAS)",
    content: "International Center for Living Aquatic Resources Management",
    icon: <WorldfishIcon />,
  },
  {
    title: "Syngenta",
    content: "",
    icon: <SyngentaIcon />,
  },
  {
    title: "The World Bank",
    content: "",
    icon: <TheWorldBankIcon />,
  },
  {
    title: "Global Alliance For Improved Nutrition",
    content: "",
    icon: <GainIcon />,
  },
];

export default function InternationalEngagement() {
  return (
    <div className="flex flex-col gap-8 px-6 pt-10">
      <h2 className="text-[#0A1425] font-bold text-center text-3xl sm:text-[2.5rem] sm:leading-[3.75rem]">
        International Engagements
      </h2>
      <div className="grid grid-cols-engagement-res gap-10">
        {data.map((el, i) => (
          <div key={i} className="flex flex-col gap-3">
            {el.icon}{" "}
            <div className="flex flex-col gap-2.5">
              <h3 className="font-bold text-base sm:text-xl text-[#0A1425]">
                {el.title}
              </h3>
              <p className="text-sm sm:text-base font-normal text-[#495057]">
                {el.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
