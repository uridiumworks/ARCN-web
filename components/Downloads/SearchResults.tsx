"use client";

import { useEffect, useState } from "react";
import { Grid, House, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomContainer from "../CustomContainer";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContextSelector } from "@/hooks/use-context-selector";
import { Skeleton } from "@/components/ui/skeleton";
import MultimediaCategory from "./MultimediaCategory";

const SearchResults = () => {
  const params = useParams();
  const { id } = params;

  const fetchDownloads = useContextSelector(
    (context) => context.fetchDownloads
  );
  const isLoading = useContextSelector(
    (context) => context.isLoadingReports
  );
  const fetchDownloadCategory = useContextSelector(
    (context) => context.fetchDownloadCategory
  );
  const downloads = useContextSelector((context) => context.downloadData);
  const downloadCategory = useContextSelector((context) => context.techCategory);
  const isLoadingCategory = useContextSelector(
    (context) => context.isLoadingOurTechs
  );
  const [viewType, setViewType] = useState<"list" | "grid">("list");

  useEffect(() => {
    fetchDownloads(id as string);
  }, [fetchDownloads, id]);

  useEffect(() => {
    fetchDownloadCategory();
  }, [fetchDownloadCategory]);

  const downloadItems = downloads?.data ?? [];

  return (
    <CustomContainer>
      <Breadcrumb className="mt-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="flex items-center gap-3">
              <House className="w-3.5 h-3.5" />
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="hover:text-[#30A85F] font-medium">
              <Link href="/downloads">Downloads</Link>
            </BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {!isLoadingCategory && downloadCategory && downloadCategory.length  > 0 && <BreadcrumbItem>
            <BreadcrumbPage className="text-[#30A85F] font-medium">
              {downloadCategory.find(x=>x.documentId == id)?.name}
            </BreadcrumbPage>
          </BreadcrumbItem>}
        </BreadcrumbList>
      </Breadcrumb>

      {downloadCategory && downloadCategory.find(x=>x.documentId == id)?.isMultimedia? <MultimediaCategory/> : <section className="w-full my-10 px-4 py-6 space-y-6">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <p className="text-lg font-semibold">
            {isLoading ? "Loading..." : `${downloadItems.length} results`}
          </p>
          <div className="flex items-center gap-4">
            {/* <Select>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Most relevant" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevant">Most relevant</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectContent>
            </Select> */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewType === "list" ? "default" : "outline"}
                size="icon"
                className="bg-green-700"
                onClick={() => setViewType("list")}
              >
                <List className="w-4 h-4" />
              </Button>
              <Button
                variant={viewType === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewType("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* === Loading State === */}
        {isLoading && (
          <div
            className={`${
              viewType === "list"
                ? "space-y-6"
                : "grid grid-cols-1 sm:grid-cols-2 gap-6"
            }`}
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-white border p-4 rounded-md shadow-sm space-y-3"
              >
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        )}

        {/* === Empty State === */}
        {!isLoading && downloadItems.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            <p>No results found.</p>
          </div>
        )}

        {/* === Data View === */}
        {!isLoading && downloadItems.length > 0 && (
          <div
            className={`${
              viewType === "list"
                ? "space-y-6"
                : "grid grid-cols-1 sm:grid-cols-2 gap-6"
            }`}
          >
            {downloadItems.map((item: any) => (
              <div
                key={item.id}
                className="bg-white border p-4 rounded-md shadow-sm"
              >
                <h3 className="text-green-700 font-semibold text-base hover:underline cursor-pointer">
                  <a href={item.link}>{item.title}</a> 
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {item.download_category?.name ?? "Unknown type"} •{" "}
                  {new Date(item.datePublished).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <p className="text-sm text-gray-700 mt-2">{item.excerpt}...</p>
              </div>
            ))}
          </div>
        )}
      </section>}
    </CustomContainer>
  );
};

export default SearchResults;
