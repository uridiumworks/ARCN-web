"use client";
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
  AfaasIcon
} from "@/assets/icons";
import CustomContainer from "@/components/CustomContainer";

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
    title: "IFPRI - International Food Policy Research Institute",
    content:
      "Country lead of BioRAPP; Active engagement in development of policy capacity including strategic planning, MEL; Policy Communications; Extension Policy Development; Policy Performance Assessment, etc.",
    icon: <IfpriIcon />,
  },
  {
    title: "IITA - International Institute of Tropical Agriculture",
    content: "IITA",
    icon: <IitaIcon />,
  },
  {
    title: "ICRISAT -International Crops Research Institute for the Semi-Arid Tropics",
    content: "International Crops Research Institute for the Semi-Arid Tropics",
    icon: <IcrisatIcon />,
  },
  {
    title: "WorldFish - International Center for Living Aquatic Resources Management",
    content: "International Center for Living Aquatic Resources Management",
    icon: <WorldfishIcon />,
  },
  {
    title: "ILRI -International Livestock Research Institute",
    content: "International Livestock Research Institute",
    icon: <IlriIcon />,
  },
  {
    title: "Africa Rice Center",
    content: "",
    icon: <AfricariceIcon />,
  },
  {
    title: "Africa Forum for Agricultural Advisory Services (AFAAS)",
    content: "International Center for Living Aquatic Resources Management",
    icon: <AfaasIcon />,
  },

  {
    title: "Global Research Alliance for Greenhouse Gases Emissions (GRA)",
    content:
      "Member representing Nigeria; Building institutional capacity to mitigate the impact of climate change.",
    icon: <GraIcon />,
  },

  {
    title: "Global Alliance For Improved Nutrition",
    content: "",
    icon: <GainIcon />,
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
  
];

export default function InternationalEngagement() {
  return (
    <section className="bg-white py-12 md:py-20">
      <CustomContainer>
        <div className="flex flex-col gap-10">
          <h2 className="text-[#0A1425] font-bold text-center text-3xl sm:text-4xl leading-[2.25rem]">
            International Engagements
          </h2>
          <div className="grid grid-cols-engagement-res gap-12">
            {data.map((el, i) => (
              <div key={i} className="flex flex-col gap-3 px-3 py-4 border border-[#EBEBEB] rounded-lg">
                {el.icon}{" "}
                <div className="flex flex-col gap-2.5 ">
                  <h3 className="font-semibold text-base sm:leading-[2rem] text-[#0A1425]">
                    {el.title}
                  </h3>
                  {/* <p className="text-sm sm:text-base font-normal text-[#495057]">
                {el.content}
              </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
