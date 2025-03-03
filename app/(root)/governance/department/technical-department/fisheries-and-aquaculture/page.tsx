import { CircleCheck, House } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link";
import { cn } from "@/lib/utils";

  const FunctionData: string[] = [
    "Update and advise the Council on national policies and priorities in fisheries and aquaculture.",
    "Prepare the annual budget and periodic master plans for fisheries and aquaculture research, training, and extension, ensuring implementation of the approved budget and master plans by the appropriate institutes, universities, and other bodies under the aegis of ARCN.",
    "Maintain an up-to-date record of all existing facilities in fisheries and aquaculture research, advising the Council on their adequacy and efficient utilization.",
    "Collaborate with the National Agricultural Research Systems (NARS) to improve aquaculture techniques, breed new fish varieties, develop sustainable practices, and enhance overall fisheries productivity.",
    "Collaborate with the department of extension services in providing education, training, and technical assistance to fish farmers, anglers, and other stakeholders in the fisheries and aquaculture sector to promote best practices and ensure compliance with regulations.",
    "Support marketing initiatives to promote fish products, both domestically and internationally, and foster economic growth within the sector.",
    "Promote national and international collaborations with other government agencies, research institutions, industry stakeholders, and community groups to address common challenges and achieve shared goals in fisheries and aquaculture management."
  ];
  
  
const AdminDepartmentData = [
    {
        title: "Freshwater Fisheries and Aquaculture",
        description: "The function of this division is to manage, develop, and promote freshwater fisheries and aquaculture activities. The division is involved in, monitoring and assessment of freshwater fish production, promoting sustainable aquaculture practices,, regulating fishing and aquaculture activities, providing technical assistance to stakeholders.",
        descriptionList: []
    },
    {
        title: "Brackish and Marine Fisheries and Aquaculture",
        description: "The division is  tasked with managing, developing, and promoting fisheries and aquaculture activities in brackish and marine environments. Responsibilities include, promoting sustainable aquaculture practices adapted to saline environments and  providing technical support to fishermen and aquaculturists.",
        descriptionList: []
    },
    {
        title: "Fish Value Addition and Marketing",
        description: "The functions of this division revolves around adding value to fish products through processing and other value-added activities. Responsibilities include, promoting modern fish processing techniques to improve product quality and safety, enhancing the value of fish products through processing, packaging, and branding, supporting the establishment and management of fish processing facilities, ensuring compliance with food safety and quality standards, providing training and capacity building in fish processing and value addition.",
        descriptionList: []
    },
    {
        title: "Fish and Aquatic Animals health management",
        description: "The functions of the Fish and Aquatic Animal Diseases division under a fisheries department  encompasses a range of responsibilities aimed at safeguarding the health of fish and other aquatic animals. Its responsibilities include; Educating and training fish farmers, hatchery operators, and other stakeholders on best practices in fish health management and also Disseminating information on disease prevention, control measures, and bio-security protocols.",
        descriptionList: []
    },
] as const;

const ServiceDepartmentDetails = () => {
    return (
        <section className="w-full">
            <div className="h-[380px] w-full bg-[#DBECC1]">
                <div className="w-[1250px] ml-32 space-y-8 pt-16">
                    <h1 className="text-[40px] font-semibold">Fisheries & Aquaculture</h1>
                    <p className="text-lg">
                        The mandate of the department of fisheries and aquaculture in ARCN is to coordinate, supervise and regulate fisheries and<br /> 
                        aquaculture research and training activities in the National Agricultural Research Institutes (NARIs) and Federal Colleges of<br /> 
                        Agriculture (FCAs) mandated to be in charge of fisheries and aquaculture development in Nigeria. The department is also<br /> 
                        mandated to collaborate and partner with industry stakeholders and international organizations to address common<br /> 
                        challenges to achieve shared goals in fisheries and aquaculture development.
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
                            <BreadcrumbPage className="text-[#30A85F] font-medium">Fisheries & Aquaculture</BreadcrumbPage>
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
                    <h1 className="text-[38px] font-semibold">Fisheries and Aquaculture Divisions</h1>
                    
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
 
export default ServiceDepartmentDetails;