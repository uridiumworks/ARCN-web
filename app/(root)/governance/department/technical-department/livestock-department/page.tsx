import { CircleCheck, House } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link";
import { cn } from "@/lib/utils";


  const FunctionData: string[] = [
    "Update and advise the Council on National policies and priorities in Livestock and Animal Health related activities.",
    "Formulate research focus on livestock research, policy, and extension activities in NARIs.",
    "Interface with livestock feed (pasture, fodder, concentrates, etc.) and farming systems (pastoral, commercial, ranching, RUGA, etc.) research policy and extension activities.",
    "Maintain an up-to-date record of all existing facilities in livestock research, advising the Council on their adequacy and efficient utilization.",
    "Collaborate with NARIs to improve livestock production techniques, farming systems, improve indigenous livestock breeds, develop sustainable practices, and enhance overall livestock productivity.",
    "Collaborate with the department of extension services in providing training and technical assistance to livestock farmers, anglers, and other stakeholders in the livestock sector to promote best practices and ensure compliance with regulations.",
    "Support marketing initiatives to promote livestock products, both domestically and internationally, and foster economic growth within the sector.",
    "Promote national and international collaborations with research institutions, industry stakeholders, and community groups to address common challenges and achieve shared goals in livestock management."
  ];
  
const AdminDepartmentData = [
    {
        title: "Ruminant and Non- Ruminant Division",
        description: "The functions of this division are to:",
        descriptionList: [
            "Develop, manage and promote Ruminant and Non-Ruminant research activities within the NARIs and FCA.",
            "Monitoring and assessment of Ruminant and Non- Ruminant research and promoting sustainable ruminant and non-ruminant farming practices in NARIs and FCAs",
            "Regulating Ruminant and Non- Ruminant research activities as well as providing technical assistance to stakeholders.",
        ]
    },
    {
        title: "Public Health Division.",
        description: "The functions of this division are:",
        descriptionList: [
            "Develop, manage and promote public health research activities in in NARIs and FCAs.",
            "Monitor and supervise researches concerning the wellbeing of animals.",
            "Promote and coordinate issues concerning animal and zoonotic disease research, policy and extension activities",
        ]
    },
    {
        title: "Livestock Nutrition and Farming System Division",
        description: "The functions of this division are:",
        descriptionList: [
            "Ruminant Nutrition: Develop and monitor research on pasture, fodder, concentrates etc.",
            "Monogastric Nutrition: Help to develop policy for research on alternative feed for monogastric animal",
            "Farming System: The division helps in developing research on pastoral, commercial, RUGA etc.",
        ]
    },
] as const;

const ServiceDepartmentDetails = () => {
    return (
        <section className="w-full">
            <div className="h-[380px] w-full bg-[#BFCDFF]">
                <div className="w-[1250px] ml-32 space-y-8 pt-16">
                    <h1 className="text-[40px] font-semibold">Livestock Department</h1>
                    <p className="text-lg">
                        The mandate of Livestock department in ARCN is to coordinate, supervise and regulate Livestock research and training<br /> activities in the National Agricultural Research Institutes (NARIs) and Federal Colleges of Agriculture (FCAs).
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
                            <BreadcrumbPage className="text-[#30A85F] font-medium">Livestock Department</BreadcrumbPage>
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
                    <h1 className="text-[38px] font-semibold">Livestock Divisions</h1>
                    
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