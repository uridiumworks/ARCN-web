import { CircleCheck, House } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ContentComp, FunctionalComp, HeaderComp } from "../../../_components/externalComp";

const FunctionData: string[] = [
    "Knowledge Management has a training function that crosscuts with the Extension Department, thus it develops and deploys a Knowledge Management system that promotes learning and innovation for NARIs.",
    "Maintain database management and information system for NARIs.",
    "Take inventories of all existing facilities in NARIs.",
    "Facilitate the establishment and maintenance of the National Agricultural Science Library and Documentation Center.",
    "Produce publications that showcase Agricultural research innovation and technologies as well as general activities of the Council.",
    "Facilitate the coordination and dissemination of research results and promote the adoption of innovative technologies for global visibility.",
    "Promote communication and collaboration among Agricultural Scientists both locally and internationally.",
    "Promote communication and collaboration within the Council and NARIs in general.",
    "Develop and oversee the implementation of a comprehensive knowledge management and communication strategy/policy for NARIs.",
    "Carry out any other duties as may be assigned by the ES and Chief Executive of ARCN.",
];
  
const AdminDepartmentData = [
    {
        title: "Information and Communication Technology (ICT/MIS) Division",
        description: "",
        descriptionList: [
            "Develop a comprehensive information technology strategy for NARS.",
            "Develop necessary and appropriate platforms for Communication and Collaboration amongst Agricultural Scientist within the NARS and other stakeholders.",
            "Develop and maintain a Knowledge Management and Information System that promotes learning, inventory management and as well, serve as a decision support system for NARS.",
            "Facilitate the coordination and dissemination of research results and promote the adoption of innovative technologies for global visibility through appropriate platforms.",
        ]
    },
    {
        title: "Agricultural Publication and Communication Division",
        description: "",
        descriptionList: [
            "Develop a communication strategy for dissemination of agricultural innovative technologies to end users.",
            "Produce Publications that showcase agricultural research innovation and technologies as well as general activities of the Council.",
            "Promote the global visibility of agricultural innovative technology through mass media.",
            "Build capacity on international languages to enhance communication and collaboration with international stakeholders.",
        ]
    },
    {
        title: "National Agricultural Science Library and Documentation Division",
        description: "",
        descriptionList: [
            "Manage and maintain National Agricultural Science Library and Documentation Center.",
            "Develop and Maintain National Agricultural Science e-library for NARS.",
            "Maintain an Agricultural Museum that preserves Agricultural History and Heritage through collection, exhibition, conservation, research for education of the public.",
            "Develop strategy on how to support the improvement of the quality of education, research and extension services within NARS.",
        ]
    },
] as const;

const TechnicalDepartmentDetails = () => {
    return (
        <section className="w-full">
            <HeaderComp
                bgColor="bg-[#B3C4C7]"
                title="Knowledge Management & Communication"
                description={<>The Knowledge Management and Communication Department enhances learning, innovation, and collaboration within NARS<br className='hidden md:block' />  by developing
                    systems for information sharing, research dissemination, and database management. It supports agricultural research<br className='hidden md:block' /> 
                    through a national science library, publications, and global visibility efforts while promoting communication among scientists and stakeholders.
                </>}
            />


            <div className="w-full md:w-[1250px] mx-auto px-2.5 py-5">
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
                            <BreadcrumbLink>
                                <Link href="/governance/department/technical-department">Technical Department</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />

                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-[#30A85F] font-medium">Knowledge Management & Communication</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <FunctionalComp
                    title="Functions"
                    FunctionData={FunctionData}
                />

                <ContentComp
                    title="Knowledge Management & Communication Divisions"
                    AdminDepartmentData={AdminDepartmentData}
                    listType="list-disc"
                />
            </div>
        </section>
    );
}
 
export default TechnicalDepartmentDetails;