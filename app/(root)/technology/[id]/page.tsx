"use client";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { House } from "lucide-react";
import CustomContainer from "@/components/CustomContainer";
import { useParams } from "next/navigation";
import { useContextSelector } from "@/hooks/use-context-selector";
import { useEffect } from "react";
import { TechSubCategory } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

const TechnologyCategoryId = () => {
  const params = useParams();
  const { id } = params;

  const fetchOurTechs = useContextSelector((context) => context.fetchTechnologySubCategory);
  const ourTechs = useContextSelector((context) => context.techSubCategory);
  const isLoadingOurTechs = useContextSelector((context) => context.isLoadingOurTechs);

  const fetchTechDetails = useContextSelector((context) => context.fetchTechnologyCategoryDetails);
  const techDetails = useContextSelector((context) => context.techCategoryItem);
  const isLoading = useContextSelector((context) => context.isLoadingReports);

  useEffect(() => {
    fetchOurTechs(id as string);
  }, [fetchOurTechs]);

  useEffect(() => {
    fetchTechDetails(id as string);
  }, [fetchTechDetails]);


  const renderContent = () => {
    if (isLoadingOurTechs) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Skeleton key={idx} className="h-[80px] w-full rounded-[12px]" />
          ))}
        </div>
      );
    }

    if (!ourTechs || (ourTechs as TechSubCategory[]).length === 0) {
      return (
        <div className="text-gray-500 text-sm italic">
          No data available for this technology category.
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full font-bold text-sm">
        {(ourTechs as TechSubCategory[]).map((item) => (
          <Link
            key={item.id}
            href={`/technology/item/${item.documentId}`}
            className="rounded-[12px] shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              className="p-4 rounded-[12px]"
              style={{ backgroundColor: item.color || "#f0f0f0" }}
            >
              <h2 className="text-black font-bold mb-1">{item.name}</h2>
              <p className="text-gray-700 font-normal text-sm">
                {item.technologies.count} Technologies
              </p>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full px-2.5 py-4">
      <CustomContainer>
        {!isLoading && techDetails && <Breadcrumb>
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
              <BreadcrumbPage className=" hover:text-[#30A85F] font-medium">
              <Link href="/mandate">Mandate</Link>
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#30A85F] font-medium">
                {techDetails.name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>}

        <div className="py-10 space-y-10">
          <div>
          {!isLoading && techDetails &&  <h1 className="text-3xl sm:text-4xl leading-[2.25rem] font-bold text-[#1B222B]">
              {techDetails.name}
            </h1>}
            <p className="text-sm leading-[1.5rem] text-gray-700 mt-4 max-w-2xl">
              Explore technologies by tree crop type. Click a category to see
              its research-backed innovations.
            </p>
          </div>

          {renderContent()}
        </div>
      </CustomContainer>
    </section>
  );
};

export default TechnologyCategoryId;
