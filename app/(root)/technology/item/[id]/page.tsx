"use client";

import Image from "next/image";
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
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Head from "next/head";
import { ChevronDown } from "lucide-react"
import { TechnologyData } from "@/types";

const TechnologyDetails = () => {
  const params = useParams();
  const { id } = params;
  const [sortOption, setSortOption] = useState("Newest first")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const sortOptions = ["Newest first", "Oldest first", "Most recently updated", "A-Z"]
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URLS;
  const fetchSingleTechnology = useContextSelector(
    (context) => context.fetchOurTechs
  );
  const singleTechnology = useContextSelector(
    (context) => context.ourTechs
  );
  const isLoading = useContextSelector(
    (context) => context.isLoadingOurTechs
  );

  useEffect(() => {
    fetchSingleTechnology(id as string, 1, 10);
  }, [fetchSingleTechnology]);

 
  return (
    <section className="w-full px-2.5 py-4">
      <CustomContainer>
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
              <BreadcrumbPage className=" hover:text-[#30A85F] font-medium">
                <Link href="/mandate">Mandate</Link>
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            {singleTechnology && singleTechnology.length > 0 && <BreadcrumbPage className=" hover:text-[#30A85F] font-medium">
                <Link href={"/technology/" + (singleTechnology as  TechnologyData[])[0].technology_sub_category?.technology_category?.documentId}>{(singleTechnology as  TechnologyData[])[0].technology_sub_category?.technology_category?.name}</Link>
              </BreadcrumbPage> }
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            {singleTechnology && singleTechnology.length > 0 && <BreadcrumbPage className="text-[#30A85F] font-medium">
                {(singleTechnology as  TechnologyData[])[0].technology_sub_category?.name}
              </BreadcrumbPage>}
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mx-auto py-6 rounded-md">
      <div className="flex justify-between items-center mb-4">
        {singleTechnology && singleTechnology.length > 0 && <h1 className="text-3xl font-bold text-black"> {(singleTechnology as  TechnologyData[])[0].technology_sub_category?.name}</h1>}
        {/* <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-44 px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm"
          >
            <span>{sortOption}</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 w-44 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              {sortOptions.map((option) => (
                <div
                  key={option}
                  className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                    option === sortOption ? "bg-blue-600 text-white" : ""
                  }`}
                  onClick={() => {
                    setSortOption(option)
                    setIsDropdownOpen(false)
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div> */}
      </div>
      {isLoading ? (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Skeleton key={idx} className="h-[300px] w-full rounded-xl" />
        ))}
      </div>
    )  : !singleTechnology || singleTechnology.length === 0 ? (
      <div className="text-gray-500 italic text-sm">
        No technology data available.
      </div>
    ) :
    (
      <>
      {singleTechnology.map((tech) => (
          <div  key={tech.id} className="mb-6">
            <h2 className="text-xl font-bold mb-1"> {tech.Title}</h2>
            <div className="flex justify-between mb-2">
              <div>
                <span className="font-bold">Institution Responsible:</span> {tech.institutionResponsible} 
              </div>
              <div>
                <span className="font-bold">Year released:</span> {tech.yearReleased}
              </div>
              <div>
                <span className="font-bold">Adoption Rate:</span> {tech.adoptionRate}
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="max-w-[20%]  flex-shrink-0">
                <Image
                  src={BASE_URL + tech.Image.url}
                  alt={tech.Image.name || "Technology"}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold mb-1">Description:</h3>
                <p className="text-sm">
                  {tech.Description}
                </p>
              </div>
            </div>
           
           
          </div>
        ))}
      </>
    )}

      
    </div>
        
      </CustomContainer>
    </section>
  );
};

export default TechnologyDetails;
