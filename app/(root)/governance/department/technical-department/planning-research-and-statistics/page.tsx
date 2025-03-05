import { CircleCheck, House } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ContentComp, FunctionalComp, HeaderComp } from "../../../_components/externalComp";

const FunctionData: string[] = [
    "Coordinate and review policies, priorities, and strategies of agricultural research, training, and extension for the Council, National Agricultural Research Institutes (NARIs), and Federal College of Agriculture (FCA) under the purview of the Council.",
    "Initiate and coordinate the Council's international collaboration activities with relevant stakeholders.",
    "Coordinate ARCN's participation at National Council Meetings.",
    "Coordinate the monitoring and evaluation of Council's programs and projects in conjunction with relevant departments.",
    "Prepare quarterly, annual, and other Council's reports.",
    "Map sources for funds from local and international donors for the implementation of some of Council's programs and projects.",
    "Consult regularly with the Organized Private Sector and relevant government agencies to prepare and present timely analysis of the impact expected from policy changes at the Local, State, and Federal levels to support decision-making.",
    "Organize and coordinate Council's Project Review Committee (PRC) Meetings.",
    "Coordinate the collation of all position papers prepared by the various departments.",
    "Coordinate the preparation of the Council and PRS department's annual budget."
  ];
  
  
const AdminDepartmentData = [
    {
        title: "Planning, Monitoring & Evaluation Division",
        description: "",
        descriptionList: [
            "Coordinate all projects, budget, planning, and the Monitoring & Evaluation (M&E) sections in the division as relates to research activities in the Council.",
            "Supervises the development of result-based monitoring and evaluation tools and template of all research activities from planning to implementation in conjunction with relevant departments.",
            "Maintain/document an up-to-date record of all existing facilities for planning research, their adequacy and efficient utilization. Also ensures the generation and dissemination of information/data on annual basis to the Council.",
            "Coordinates the preparation of annual and quarterly reports on reviews.",
            "Contributes in the preparation of yearly budget for the department and prepares divisional budget proposal.",
            "Any other duties that may be assigned by the Director/HOD.",
        ]
    },
    {
        title: "Research & Statistics Division",
        description: "",
        descriptionList: [
            "To coordinate all research policy development and standardization as well as policy analysis in the Council.",
            "Ensures efficiency, standards and target setting based on global best practices within accepted limits & standards.",
            "Liaise with relevant stakeholders locally and internationally on data gathering/survey and analysis to promote research activities and agricultural Innovation.",
            "Collect, maintain and document an up-to-date record of all research facilities and analyze for planning purposes and efficient utilization.",
            "Ensures the generation and dissemination of policy briefs, information/data on annual basis to the Council and stakeholders.",
            "Coordinates the preparation of annual and quarterly reports on research policy reviews.",
            "Contributes in the preparation of yearly budget for the department and prepares divisional budget proposal.",
            "Any other duties that may be assigned by the Director/HOD",
        ]
    },
    {
        title: "Collaboration & Partnership Division",
        description: "",
        descriptionList: [
            "Liaise with International Agricultural Research Centers and with relevant stakeholders locally and internationally to promote joint activities and agricultural Innovation.",
            "Source funds from international donor agencies for the implementation of Council's programme and projects.",
            "Coordinates Council's participation in bilateral and multilateral programmes and represents the Council in meetings with partners.",
            "Oversees the establishment of linkages with international organizations related to the Council's mandate.",
            "Advises Management on the implications of various levels and types of international collaborations",
            "Oversees the sourcing of international capacity development programs.",
            "Provides cross-support to other divisions and departments of the Council on international collaborations",
            "Coordinates the preparation of annual and quarterly reports on collaborations.",
            "Contributes in the preparation of yearly budget for the division.",
            "Any other duties that may be assigned by the Director/HOD.",
        ]
    },
] as const;

const ServiceDepartmentDetails = () => {
    return (
        <section className="w-full">
            <HeaderComp
                bgColor="bg-[#ECF7FA]"
                title="Planning Research & Statistics"
                description={<>Plannig research and statistics coordinate and review policies, priorities and strategies of agricultural research, training and<br className='hidden md:block' /> 
                    extension for the council, National Agricultural Research Institutes (NARIs) and Federal College of Agriculture (FCAs)<br className='hidden md:block' /> 
                    under the purview of the Council.
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
                            <BreadcrumbPage className="text-[#30A85F] font-medium">Planning Research & Statistics</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <FunctionalComp
                    title="Mandate"
                    FunctionData={FunctionData}
                />

                <ContentComp
                    title="Planning Research & Statistics Divisions"
                    AdminDepartmentData={AdminDepartmentData}
                    listType="list-decimal"
                />
            </div>
        </section>
    );
}
 
export default ServiceDepartmentDetails;