import { CircleCheck, House } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link";
import { cn } from "@/lib/utils";
import CustomContainer from "@/components/CustomContainer";

const FunctionData: string[] = [
    "Participate through a consultative process in the appointment of ED and Provosts of NARIs and FCAs respectively.", 
    "Intervene in areas of crises management within the National Agricultural Research system.",
    "Handles all issues that relates to Appointment, Promotion and Discipline (APD) across the NARIs as the case may be.",
    "Responsible for all pension related activities of all council staff.",
    "Responsible for matters concerning staff training and manpower development.",
    "Responsible for staff housing issues through National Housing Fund (NHF) as well as matters of National Health Insurance Scheme (NHIS).",
    "It is also the responsibility of the Admin Department to design the organogram of the council and that of NARIs.",
    "Composition and inauguration of committees in the council formulated by the department."
]

const AdminDepartmentData = [
    {
        title: "The Registry Unit",
        description: "",
        descriptionList: [
            "Responsible for receiving, recording, keeping and dispatching of both internal and external correspondences across NARIs.",
            "Ensuring the safety and confidentiality of all documents that comes to the council",
        ]
    },
    {
        title: "Transport Unit",
        description: "Deals with all matters concerning transportation within and outside the NARIs such as;",
        descriptionList: [
            "Ensuring the safety and maintenance of all vehicles.",
            "Ensuring periodic training of drivers on safety tips.",
            "Help procure customized number plates for all NARS.",
        ]
    },
    {
        title: "Maintenance Unit",
        description: "",
        descriptionList: [
            "Supervision of all infrastructural projects within and outside the council.",
            "Ensure prompt payment of utility bills.",
            "Ensure the cleanliness of the office environment at all times",
        ]
    },
    {
        title: "Welfare Unit",
        description: "",
        descriptionList: [
            "It is a secretariat of the welfare committee.",
        ]
    },
    {
        title: "Store Unit",
        description: "",
        descriptionList: [
            "Responsible for receiving and confirming the genuineness of goods that comes into the council.",
            "Involves in the auctioning of scrap or dilapidated items.",
        ]
    },
] as const;
const ServiceDepartmentDetails = () => {
    return (
        <section className="w-full">
            <div className="sm:py-[5rem] py-[3.5rem] w-full bg-[#FCF8C6]">
                <CustomContainer>
                <div className="w-full p-3 flex flex-col gap-3">
                    <h1 className="text-3xl sm:text-4xl leading-[2.25rem] font-semibold">Administration Department</h1>
                    <p className="text-sm leading-[1.5rem]">The Administrative Department as the secretariat of ARCN covers broad areas of the council&apos;s<br className='hidden md:block' /> 
                    mandate as well as the NARS. It is responsible for managing and overseeing various administrative<br className='hidden md:block' /> activities for the smooth running of the council.</p>
                </div>
</CustomContainer>
            </div>
            <CustomContainer>


            <div className="w-full px-2.5 py-5">
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
                                <Link href="/governance/department/service-department">Service Department</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />

                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-[#30A85F] font-medium">Administration Department</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className='py-7 md:py-14'>
                    <h2 className='font-semibold text-3xl'>Functions</h2>

                    <div className='font-normal py-6'>
                        {FunctionData?.map((item, index) => {
                            return (
                                <div key={index} className='flex items-center gap-2 justify-start' >
                                    <CircleCheck size={18} />
                                    <p className='py-4 text-sm md:text-sm'>{item}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="space-y-5">
                    <h1 className="text-3xl md:text-4xl font-semibold">Administration Department Divisions</h1>
                    
                    <div className="space-y-7">
                        {AdminDepartmentData?.map(({description, descriptionList, title}, index) => {
                            return (
                                <div key={index} className={cn(index === 0 && "bg-[#FFC74E] text-black", index === 1 && "bg-[#2E7636] text-white", index === 2 && 'bg-black text-white', index === 3 && 'bg-[#75CDFD] text-black', index === 4 && 'bg-[#011843] text-white', " rounded-[16.17px] py-4 md:py-6 px-4 md:px-7 space-y-4 w-full")}>
                                    <h1 className="text-base font-bold">{title}</h1>

                                    <div>
                                        {description !== "" && <p>{description}</p>}
                                        <ul className="font text-sm leading-7 list-decimal list-inside">
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
            </CustomContainer>
            
        </section>
    );
}
 
export default ServiceDepartmentDetails;