import { CircleCheck, House } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  ContentComp,
  FunctionalComp,
  HeaderComp,
} from "../../../_components/externalComp";
import CustomContainer from "@/components/CustomContainer";

const FunctionData: string[] = [
  "Update and advise the Council on National policies and priorities in Livestock and Animal Health related activities.",
  "Formulate research focus on livestock research, policy, and extension activities in NARIs.",
  "Interface with livestock feed (pasture, fodder, concentrates, etc.) and farming systems (pastoral, commercial, ranching, RUGA, etc.) research policy and extension activities.",
  "Maintain an up-to-date record of all existing facilities in livestock research, advising the Council on their adequacy and efficient utilization.",
  "Collaborate with NARIs to improve livestock production techniques, farming systems, improve indigenous livestock breeds, develop sustainable practices, and enhance overall livestock productivity.",
  "Collaborate with the department of extension services in providing training and technical assistance to livestock farmers, anglers, and other stakeholders in the livestock sector to promote best practices and ensure compliance with regulations.",
  "Support marketing initiatives to promote livestock products, both domestically and internationally, and foster economic growth within the sector.",
  "Promote national and international collaborations with research institutions, industry stakeholders, and community groups to address common challenges and achieve shared goals in livestock management.",
];

const AdminDepartmentData = [
  {
    title: "Ruminant and Non- Ruminant Division",
    description: "The functions of this division are to:",
    descriptionList: [
      "Develop, manage and promote Ruminant and Non-Ruminant research activities within the NARIs and FCA.",
      "Monitoring and assessment of Ruminant and Non- Ruminant research and promoting sustainable ruminant and non-ruminant farming practices in NARIs and FCAs",
      "Regulating Ruminant and Non- Ruminant research activities as well as providing technical assistance to stakeholders.",
    ],
  },
  {
    title: "Public Health Division.",
    description: "The functions of this division are:",
    descriptionList: [
      "Develop, manage and promote public health research activities in in NARIs and FCAs.",
      "Monitor and supervise researches concerning the wellbeing of animals.",
      "Promote and coordinate issues concerning animal and zoonotic disease research, policy and extension activities",
    ],
  },
  {
    title: "Livestock Nutrition and Farming System Division",
    description: "The functions of this division are:",
    descriptionList: [
      "Ruminant Nutrition: Develop and monitor research on pasture, fodder, concentrates etc.",
      "Monogastric Nutrition: Help to develop policy for research on alternative feed for monogastric animal",
      "Farming System: The division helps in developing research on pastoral, commercial, RUGA etc.",
    ],
  },
] as const;

const ServiceDepartmentDetails = () => {
  return (
    <section className="w-full">
      <HeaderComp
        bgColor="bg-[#BFCDFF]"
        title="Livestock Department"
        description={
          <>
            The mandate of Livestock department in ARCN is to coordinate,
            supervise and regulate Livestock research and training
            <br className="hidden md:block" /> activities in the National
            Agricultural Research Institutes (NARIs) and Federal Colleges of
            Agriculture (FCAs).
          </>
        }
      />

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
                  <Link href="/governance/department/technical-department">
                    Technical Department
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#30A85F] font-medium">
                  Livestock Department
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <FunctionalComp title="Functions" FunctionData={FunctionData} />

          <ContentComp
            title="Livestock Divisions"
            AdminDepartmentData={AdminDepartmentData}
            listType="list-disc"
          />
        </div>
      </CustomContainer>
    </section>
  );
};

export default ServiceDepartmentDetails;
