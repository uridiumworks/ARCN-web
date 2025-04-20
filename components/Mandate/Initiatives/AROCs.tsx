"use client";
import CustomContainer from "@/components/CustomContainer";
import { useClientNarissData } from "@/hooks/Naris.hooks";
import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";

const AROCs = () => {
  const { loading, nariss, error } = useClientNarissData();
  const extensionActivities = [
    {
      title: "Overview of Extension Activities",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      color: "bg-white"
    },
    {
      title: "Adopted Research Outreach Centers (AROCs)",
      subtitle: "Bridging Research and Farmers for Sustainable Agriculture",
      content: `The Adopted Research Outreach Centers (AROCs) initiative, spearheaded by the Agricultural Research Council of Nigeria (ARCN), 
      is a transformative model for disseminating improved agricultural technologies to smallholder farmers and schools. 
      By fostering direct collaboration between researchers, extension agents, and farming communities, AROCs enhance food security, 
      empower farmers, and inspire youth engagement in agriculture.`,
      highlights: [
        "Technology Transfer: Distribution of high-yield seeds (e.g., SAMMAZ 37 maize, TME 419 cassava) and farm inputs.",
        "Farmer Training: Hands-on demonstrations in adopted villages and schools.",
        "Impact: Over 3,200 farmers reached across 6 centres in FCT and 100,000+ farming families reached Nationally.",
        "Innovation: Biogas plants for clean energy and modern agronomic practices.",
      ],
      challenges: "Challenges Addressed: Late funding, herder encroachment, and infrastructure gaps.",
      color: "bg-slate-100",
      link: "/mandate/initiatives/extension",
      linkText: "Detailed view"

    }
  ];

  return (
    <section className="">
      
      <div className="space-y-10">
      {extensionActivities.map((section, index) => (
       
        <div
          key={index}
          className={index == 0?  `${section.color} rounded-2xl space-y-4 transition py-20 ` :`${section.color} rounded-2xl space-y-4 transition py-20`}
        >
           <CustomContainer>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-5">{section.title}</h2>

          {section.subtitle && (
            <h3 className="text-lg md:text-xl font-semibold text-gray-600">
              {section.subtitle}
            </h3>
          )}

          <p className="text-gray-700 leading-relaxed">
            {section.content}
          </p>

          {section.highlights && (
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2 text-primary">Key Highlights</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {section.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          {section.challenges && (
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2 text-primary">Challenges Addressed</h4>
              <p className="text-gray-700">{section.challenges}</p>
            </div>
          )}
           {section.link && (
             <Link
             href={section.link}
             className=" inline-block mt-5 sm:self-center self-stretch text-center bg-[#30A85F] text-white rounded-sm border border-[#E6E6E6] font-sans text-sm leading-[2rem] px-10 py-2.5"
           >
             {section.linkText}
           </Link>
          )}
          </CustomContainer>
        </div>
      ))}
    </div>
      

     
    </section>
  );
};

export default AROCs;
