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
  "Update and advise the Council on national policies and priorities in fisheries and aquaculture.",
  "Prepare the annual budget and periodic master plans for fisheries and aquaculture research, training, and extension, ensuring implementation of the approved budget and master plans by the appropriate institutes, universities, and other bodies under the aegis of ARCN.",
  "Maintain an up-to-date record of all existing facilities in fisheries and aquaculture research, advising the Council on their adequacy and efficient utilization.",
  "Collaborate with the National Agricultural Research Systems (NARS) to improve aquaculture techniques, breed new fish varieties, develop sustainable practices, and enhance overall fisheries productivity.",
  "Collaborate with the department of extension services in providing education, training, and technical assistance to fish farmers, anglers, and other stakeholders in the fisheries and aquaculture sector to promote best practices and ensure compliance with regulations.",
  "Support marketing initiatives to promote fish products, both domestically and internationally, and foster economic growth within the sector.",
  "Promote national and international collaborations with other government agencies, research institutions, industry stakeholders, and community groups to address common challenges and achieve shared goals in fisheries and aquaculture management.",
];

const AdminDepartmentData = [
  {
    title: "Freshwater Fisheries and Aquaculture",
    description:
      "The function of this division is to manage, develop, and promote freshwater fisheries and aquaculture activities. The division is involved in, monitoring and assessment of freshwater fish production, promoting sustainable aquaculture practices,, regulating fishing and aquaculture activities, providing technical assistance to stakeholders.",
    descriptionList: [],
  },
  {
    title: "Brackish and Marine Fisheries and Aquaculture",
    description:
      "The division is  tasked with managing, developing, and promoting fisheries and aquaculture activities in brackish and marine environments. Responsibilities include, promoting sustainable aquaculture practices adapted to saline environments and  providing technical support to fishermen and aquaculturists.",
    descriptionList: [],
  },
  {
    title: "Fish Value Addition and Marketing",
    description:
      "The functions of this division revolves around adding value to fish products through processing and other value-added activities. Responsibilities include, promoting modern fish processing techniques to improve product quality and safety, enhancing the value of fish products through processing, packaging, and branding, supporting the establishment and management of fish processing facilities, ensuring compliance with food safety and quality standards, providing training and capacity building in fish processing and value addition.",
    descriptionList: [],
  },
  {
    title: "Fish and Aquatic Animals health management",
    description:
      "The functions of the Fish and Aquatic Animal Diseases division under a fisheries department  encompasses a range of responsibilities aimed at safeguarding the health of fish and other aquatic animals. Its responsibilities include; Educating and training fish farmers, hatchery operators, and other stakeholders on best practices in fish health management and also Disseminating information on disease prevention, control measures, and bio-security protocols.",
    descriptionList: [],
  },
] as const;

const ServiceDepartmentDetails = () => {
  return (
    <section className="w-full">
      <HeaderComp
        bgColor="bg-[#DBECC1]"
        title="Fisheries & Aquaculture"
        description={
          <>
            The mandate of the department of fisheries and aquaculture in ARCN
            is to coordinate, supervise and regulate fisheries and
            <br className="hidden md:block" />
            aquaculture research and training activities in the National
            Agricultural Research Institutes (NARIs) and Federal Colleges of
            <br className="hidden md:block" />
            Agriculture (FCAs) mandated to be in charge of fisheries and
            aquaculture development in Nigeria. The department is also
            <br className="hidden md:block" />
            mandated to collaborate and partner with industry stakeholders and
            international organizations to address common
            <br className="hidden md:block" />
            challenges to achieve shared goals in fisheries and aquaculture
            development.
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
                  Fisheries & Aquaculture
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <FunctionalComp title="Functions" FunctionData={FunctionData} />

          <ContentComp
            title="Fisheries and Aquaculture Divisions"
            AdminDepartmentData={AdminDepartmentData}
            listType="list-disc"
          />
        </div>
      </CustomContainer>
    </section>
  );
};

export default ServiceDepartmentDetails;
