import { CircleCheck, House } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link";
import { cn } from "@/lib/utils";

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
            <div className="h-[380px] w-full bg-[#B3C4C7]">
                <div className="w-[1250px] ml-32 space-y-8 pt-16">
                    <h1 className="text-[40px] font-semibold">Knowledge Management & Communication</h1>
                    <p className="text-lg">
                        The Knowledge Management and Communication Department enhances learning, innovation, and collaboration within NARS<br />  by developing
                        systems for information sharing, research dissemination, and database management. It supports agricultural research<br /> 
                        through a national science library, publications, and global visibility efforts while promoting communication among scientists and stakeholders.
                    </p>
                </div>
            </div>

            <div className="w-[1250px] mx-auto py-5">
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

                <div className='py-14'>
                    <h2 className='font-semibold text-[32px]'>Functions</h2>

                    <div className='font-normal py-6 '>
                        {FunctionData?.map((item, index) => {
                            return (
                                <div key={index} className='flex items-center gap-2 justify-start' >
                                    <div>
                                    <CircleCheck className="w-5 h-5" />

                                    </div>
                                    <p className='py-4 text-base'>{item}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="space-y-5">
                    <h1 className="text-[38px] font-semibold">Knowledge Management & Communication Divisions</h1>
                    
                    <div className="space-y-7">
                        {AdminDepartmentData?.map(({description, descriptionList, title}, index) => {
                            return (
                                <div key={index} className={cn(index === 0 && "bg-[#FFC74E] text-black", index === 1 && "bg-[#2E7636] text-white", index === 2 && 'bg-black text-white', index === 3 && 'bg-[#75CDFD] text-black', index === 4 && 'bg-[#011843] text-white', " rounded-[16.17px] py-6 px-7 space-y-4 w-[94%]")}>
                                    <h1 className="text-2xl font-bold">{title}</h1>
                                    <div>
                                        {description && <p>{description}</p>}
                                        <ul className="font text-base list-disc list-inside">
                                            {descriptionList?.map((item, index) => {
                                                return <li key={index}>{item}</li>
                                            })}
                                            
                                        </ul>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default TechnicalDepartmentDetails;