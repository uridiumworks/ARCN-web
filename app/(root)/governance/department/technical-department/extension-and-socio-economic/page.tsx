import { CircleCheck, House } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link";
import { cn } from "@/lib/utils";

const FunctionData: string[] = [
    "Provide expert advice to the Federal Government on national policies and priorities related to Agricultural Research, Training, and Extension activities, with a focus on extension and socio-economic impacts.",
    "Plan, manage, conduct, and promote research initiatives, human resources development, and technology generation. Assess and promote the adoption of technologies aimed at advancing the extension and socio-economic aspects of agriculture in Nigeria.",
    "Develop and periodically update comprehensive master plans for Agricultural Research, Training, and Extension. Advise the Federal Government on the financial requirements for implementing these plans, ensuring they include extension and socio-economic development components.",
    "Ensure that approved master plans are effectively implemented by relevant research institutes, universities, and other bodies, particularly those focusing on socio-economic outcomes.",
    "Participate in the consultative process for the appointment of Directors of agricultural research institutions, ensuring they have a strong understanding and commitment to research and extension.",
    "Prescribe and provide policy direction to Federal Colleges of Agriculture, focusing on enhancing their overall management, training, and extension activities to improve the middle and high-level agricultural scientists in the field of extension.",
    "Supervise and coordinate the research, training, and extension activities of research institutes, emphasizing socio-economic research and outreach programs.",
    "Maintain an up-to-date record of all existing facilities in agricultural research, training, and extension institutions and advise the Federal Government on their adequacy and efficient utilization, with a focus on agricultural benefits.",
    "Advise the Federal Government on the reorganization of existing institutes and the creation of new ones to enhance the efficiency of extension and training activities in agricultural technologies.",
    "Promote collaboration between Nigerian scientists engaged in agricultural research and their counterparts in other countries or international bodies to foster knowledge exchange and innovation.",
    "Establish and maintain a National Agricultural Sciences Library and Documentation Center. Support the publication of research results in extension and socio-economic aspects of agriculture to ensure widespread dissemination of knowledge.",
    "Undertake any activities deemed necessary by the Council to further the advancement of socio-economic research, training, and extension in agricultural sciences."
  ];
  
const AdminDepartmentData = [
    {
        title: "Agric Policy and Socio-Economic Division",
        description: "",
        descriptionList: [
            "Conduct Assessment of household's food security status and evaluation on Nigeria's food security programme",
            "Conduct Socio-economic and environmental assessment of technologies generated by the NARs",
            "Conduct analysis of the level of agricultural productivity in Nigeria, etc.",
        ]
    },
    {
        title: "Agric Extension and Training Division",
        description: "",
        descriptionList: [
            "Establishment and operation of agricultural research outreach centers, adopted villages, innovation platforms and commodity consortia",
            "Strengthening of REFILS",
            "Agricultural research week and fair. Etc.",

        ]
    },
    {
        title: "Agric Business and Entrepreneurship Division",
        description: "",
        descriptionList: [
            "Supervision of all infrastructural projects within and outside the council.",
            "Ensure prompt payment of utility bills.",
            "Ensure the cleanliness of the office environment at all times",
        ]
    },
] as const;
const ServiceDepartmentDetails = () => {
    return (
        <section className="w-full">
            <div className="h-[380px] w-full bg-[#FFC74E]">
                <div className="w-[1250px] ml-32 space-y-8 pt-16">
                    <h1 className="text-[40px] font-semibold">Extension & Socio-Economic Department</h1>
                    <p className="text-lg">
                        The Extension and Socio-economics Department of the Agricultural Research Council of Nigeria<br /> 
                        (ARCN) is charged with the management and supervision of research and extension activities of<br /> 
                        ARCN, NARIs and FCAs on behalf of the Council Management
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
                            <BreadcrumbPage className="text-[#30A85F] font-medium">Extension & Socio-Economic Department</BreadcrumbPage>
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
                    <h1 className="text-[38px] font-semibold">Extension & Socio-Economic Divisions</h1>
                    
                    <div className="space-y-7">
                        {AdminDepartmentData?.map(({description, descriptionList, title}, index) => {
                            return (
                                <div key={index} className={cn(index === 0 && "bg-[#FFC74E] text-black", index === 1 && "bg-[#2E7636] text-white", index === 2 && 'bg-black text-white', index === 3 && 'bg-[#75CDFD] text-black', index === 4 && 'bg-[#011843] text-white', " rounded-[16.17px] py-6 px-7 space-y-4 w-[94%]")}>
                                    <h1 className="text-2xl font-bold">{title}</h1>
                                    <div>
                                        {description !== "" && <p>{description}</p>}
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