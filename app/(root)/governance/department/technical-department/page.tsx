import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { House } from "lucide-react";
import { cn } from "@/lib/utils";
import CustomContainer from "@/components/CustomContainer";

const TechnicalDepartmentData = [
  {
    title: "Extension & Socio-Economic Department",
    description:
      "The Extension and Socio-economics Department of the Agricultural Research Council of Nigeria (ARCN) is charged with the management and supervision of research and extension activities of ARCN, NARIs and FCAs on behalf of the Council Management",
    descriptionList: [
      "Agricultural Policy & Socio-Economics",
      "Agricultural Extensions & Training",
      "Agricultural Business & Entrepreneurship",
    ],
    url: "/governance/department/technical-department/extension-and-socio-economic",
  },
  {
    title: "Livestock Department",
    description:
      "The mandate of Livestock department in ARCN is to coordinate, supervise and regulate Livestock research and training activities in the National Agricultural Research Institutes (NARIs) and Federal Colleges of Agriculture (FCAs).",
    descriptionList: [
      "Ruminant & Non-Ruminat Division",
      "Animal/Public Health Division",
      "Livestock Nutrition & Farming System",
    ],
    url: "/governance/department/technical-department/livestock-department",
  },
  {
    title: "Fisheries & Aquaculture",
    description:
      "The mandate of the department of fisheries and aquaculture in ARCN is to coordinate, supervise and regulate fisheries and aquaculture research and training activities in the National Agricultural Research Institutes (NARIs) and Federal Colleges of Agriculture (FCAs) mandated to be in charge of fisheries and aquaculture development in Nigeria. ",
    descriptionList: ["Fisheries & Aquaculture"],
    url: "/governance/department/technical-department/fisheries-and-aquaculture",
  },
  {
    title: "Plant Resources Department",
    description:
      "Plant resource department is organized into divisions which are framed to monitor production of solutions in research development and innovation and also organize research",
    descriptionList: [
      "Arable Crops Research",
      "Tree Crops Research",
      "Roots, Tubers & Horticultural Crops Research",
      "Plant Genetics Resources & Biotechnology Research",
    ],
    url: "/governance/department/technical-department/plant-resources-department",
  },
  {
    title: "Knowledge Management & Communication",
    description:
      "The Knowledge Management and Communication Department enhances learning, innovation, and collaboration within NARS by developing systems for information sharing, research dissemination, and database management. It supports agricultural research through a national science library, publications, and global visibility efforts while promoting communication among scientists and stakeholders.",
    descriptionList: [
      "Publication & Communication",
      "ICT/MIS",
      "Library & Documentation centre",
    ],
    url: "/governance/department/technical-department/knowledge-mgt-and-communication",
  },
  {
    title: "Planning Research & Statistics",
    description:
      "Plannig reseaech and statistics coordinate and review policies, priorities and strategies of agricultural research, training and extension for the council, National Agricultural Research Institutes (NARIs) and Federal College of Agriculture (FCAs) under the purview of the Council.",
    descriptionList: [
      "Planning, Monitoring & Evaluation Division",
      "Research & Statistics Divisio",
      "Collaboration & Partnership Division",
    ],
    url: "/governance/department/technical-department/planning-research-and-statistics",
  },
] as const;

const TechnicalDepartment = () => {
  return (
    <section className="w-full  px-2.5 py-4">
      <CustomContainer>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="flex items-center gap-3">
                <>
                  <House className="w-3.5 h-3.5" />
                  <Link href="/">Home</Link>
                </>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/governance">Governance</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/governance/department">Department</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#30A85F] font-medium">
                Technical Department
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="py-10 space-y-10">
          <div className="">
            <h1 className="text-3xl sm:text-4xl leading-[2.25rem] font-bold text-[#1B222B]">
              Technical Department{" "}
            </h1>
            <p className="text-sm leading-[1.5rem] text-gray pt-5">
              Lorem ipsum dolor sit amet consectetur. Vitae vestibulum morbi id
              in sed ipsum. Lectus placerat elementum duis scelerisque sit
              faucibus velit nisl dui. Rhoncus tellus sit et elementum. Tempus.
            </p>
          </div>

          {TechnicalDepartmentData?.map(
            ({ description, descriptionList, title, url }, index) => {
              return (
                <div
                  key={index}
                  className={cn(
                    index === 0 && "bg-[#F6E8414D]",
                    index === 1 && "bg-[#2A59FE4D]",
                    index === 2 && "bg-[#87C12F4D]",
                    index === 3 && "bg-[#FF91A04D]",
                    index === 4 && "bg-[#013B434D]",
                    index === 5 && "bg-[#BEE5ED4D]",
                    "md:grid-cols-2 w-full py-6 px-5 rounded-2xl  mx-auto"
                  )}
                >
                  <div className="md:py-5 md:px-8 space-y-5">
                    <div>
                      <h1 className="text-3xl sm:text-4xl leading-[2.25rem] text-black text-bold mb-5 font-bold">
                        {title}
                      </h1>
                      <p className="text-sm leading-[1.5rem] text-gray mt-4 py-3">
                        {description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-10 font-bold text-xl">
                      {descriptionList?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className={cn(
                              index === 0 && "bg-[#FFC74E] text-black",
                              index === 1 && "bg-[#2E7636] text-white",
                              index === 2 && "bg-black text-white",
                              index === 3 && "bg-[#75CDFD] text-black",
                              " h-[100px] p-8 flex items-center rounded-[16.17px] text-left"
                            )}
                          >
                            <h1 className="text-sm">{item}</h1>
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-10">
                      <Button
                        variant="ghost"
                        className="bg-[#FFFFFF] border-none rounded-full p-6 font-normal text-sm "
                      >
                        <Link href={url}>Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            }
          )}

          {/* <div className='md:grid-cols-2 w-full py-6 px-5 rounded-2xl bg-[#87C12F4D] mx-auto'>
                    <div className="md:py-5 md:px-8 space-y-5">
                        <div>
                            <h1 className="lg:text-[32px] text-xl text-black text-bold mb-5 font-bold">Finance And Account Department</h1>
                            <p className="text-base text-gray mt-4 py-3">Lorem ipsum dolor sit amet consectetur. Mi enim arcu vulputate ut at. Sagittis venenatis amet<br /> sagittis sit. In.</p>
                        </div>

                        <div className='grid grid-cols-3 gap-5 w-full h-[140px] mb-10 font-bold text-xl'>
                            <div className='bg-black text-white border p-8 flex items-center  rounded-[16.17px] text-left'>
                                <h1 className="">Finance And Account Unit</h1>
                            </div>
                        </div>

                        <div className="pt-10">
                            <Button variant='ghost' className='bg-[#FFFFFF] border-none rounded-full p-6  font-normal text-base '>
                                <Link href='/'>Learn More</Link>
                            </Button>
                        </div>
                    </div>
                </div> */}
        </div>
      </CustomContainer>
    </section>
  );
};

export default TechnicalDepartment;
