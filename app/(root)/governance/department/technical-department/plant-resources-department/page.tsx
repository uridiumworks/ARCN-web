import { CircleCheck, House } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link";
import { cn } from "@/lib/utils";

  const FunctionData: string[] = [
    "Organic and inorganic agricultural systems.",
    "Agroecology and irrigation system.",
    "Crop genetic improvement and agronomic management.",
    "Germplasm conservation, plant biotechnology, and biosafety.",
    "Plan research focus on seed production for the NARIs.",
    "Organize research focus on climate resilience and crop nutrition enhancement.",
    "Plan research focus on pest and disease management.",
    "Formulate research focus for all the crop-based research NARIs.",
    "Monitor and evaluate research programs in the NARIs.",
    "Regularly provide technical advice to the Council on crop research aspects."
  ];
  
  
  
const AdminDepartmentData = [
    {
        title: "Arable Crops Research",
        description: "",
        descriptionList: [
            "Monitoring and evaluation of cereals pules oil seeds and fiber crops in the NARIs.",
            "Update the department with recent research outcomes from national and international with regard to their mandate crops.",
            "Provide research gains on their mandate crop, genetics gains, fertilizer applicate rate, pesticides and herbicides application.",
            "Monitor organic and inorganic agricultural system's research in the NARIs.",
            "Monitor cereal crop irrigation system research in the NARIs.",
            "Monitor cereals, pulse, oil seeds and fibre genetic improvement in the NARIs",
            "Monitor research focus and seed production, climate resilient and pest and disease management.",
        ]
    },
    {
        title: "Tree Crops Research",
        description: "",
        descriptionList: [
            "Monitoring and evaluation of tree crops in the NARIs.",
            "Update the department with national and international research outcome on tree crops.",
            "Provides research gains on tree crops genetics gains, fertilizer application, pesticides and herbicides.",
            "Monitor focus on Tree crop's agro-ecological research.",
            "Monitor research focus on Tree crop's seedling production, climate resilience and pest and diseases.",
            "Monitor research focus on Tree crops improvement.",
        ]
    },
    {
        title: "Roots, Tubers & Horticultural Crops Research",
        description: "",
        descriptionList: [
            "Monitoring and evaluation of root tuber and horticultural crops in the NARIs.",
            "Update the department with national and international research outcomes on roots, tuber and horticultural crops.",
            "Provides research gains on roots, tuber and horticultural crops Genetic improvement, fertilizer, pesticides and herbicides application.",
            "Monitor organic and inorganic agricultural systems research on root, tuber and horticultural crops in the NARIs.",
            "Monitor research on horticultural irrigation system in the NARIs.",
            "Monitor research focus on genetic improvement on root, tuber and horticultural crops.",
            "Monitor seed production, climate resilience and pest and diseases management on root, tuber and horticultural crops."
        ]
    },
    {
        title: "Plant Genetics Resources & Biotechnology Research",
        description: "",
        descriptionList: [
            "Monitoring and evaluation of crop germplasm resources in the NARIs.",
            "Update the department with national and international research outcome on biotechnology tools and research on crop improvement.",
            "Provides research gains from biotechnology tools.",
            "Develop and maintain records of genetic materials reposited in NARIs.",
            "Monitor research focus on plant physiological and biochemical processes to understand their growth, development, responses to environmental factors and effect on humans.",
            "Formulate research focus for pest and disease management and crop genetic modification",
        ]
    },
] as const;

const ServiceDepartmentDetails = () => {
    return (
        <section className="w-full">
            <div className="h-[380px] w-full bg-[#FFDEE3]">
                <div className="w-[1250px] ml-32 space-y-8 pt-16">
                    <h1 className="text-[40px] font-semibold">Plant Resources Department</h1>
                    <p className="text-lg">
                        Plant resource department is organized into divisions which are framed to monitor production of solutions in research<br /> 
                        development and innovation and also organize research
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
                            <BreadcrumbPage className="text-[#30A85F] font-medium">Plant Resources Department</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className='py-14'>
                    <h2 className='font-semibold text-[32px]'>Research Focus</h2>

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
                    <h1 className="text-[38px] font-semibold">Plant Resources Divisions</h1>
                    
                    <div className="space-y-7">
                        {AdminDepartmentData?.map(({description, descriptionList, title}, index) => {
                            return (
                                <div key={index} className={cn(index === 0 && "bg-[#FFC74E] text-black", index === 1 && "bg-[#2E7636] text-white", index === 2 && 'bg-black text-white', index === 3 && 'bg-[#75CDFD] text-black', index === 4 && 'bg-[#011843] text-white', " rounded-[16.17px] py-6 px-7 space-y-4 w-[94%]")}>
                                    <h1 className="text-2xl font-bold">{title}</h1>
                                    <div>
                                        {description && <p>{description}</p>}
                                        <ul className="font text-base list-decimal list-inside">
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