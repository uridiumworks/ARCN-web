"use client";
import React from "react";
import Image from "next/image";

import CustomContainer from "@/components/CustomContainer";
import CustomBreadcrumbs from "./Breadcrumbs";
import { NewsData } from "@/types";
import MarkdownRenderer from "@/components/Shared/MarkdownRenderer";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URLS;

interface Props {
  news: NewsData | undefined;
}

export default function Contents({ news }: Props) {
  if (!news) return null;

  return (
    <section className="pb-12 md:pb-20 pt-4">
      <CustomContainer>
        <div className="flex flex-col gap-8 sm:gap-14">
          <CustomBreadcrumbs text="News" />

          <div className="flex flex-col gap-10">
            {news.cover?.url && (
              <div className="shrink-0 rounded-3xl overflow-hidden w-full h-auto">
                <Image
                  className="w-full h-auto object-cover"
                  src={BASE_URL + news.cover.url}
                  alt={news.title}
                  height={360}
                  width={750}
                />
                <p className="italic pl-4 text-xs">{news.cover.caption || ""}</p>
              </div>
            )}

            <div className="px-0  space-y-4 flex flex-col gap-8">
              <div className="flex flex-col space-y-5 gap-4">
                <div className="prose max-w-none inner-content">
                  <MarkdownRenderer content={news.description} />
                </div>
              </div>
            </div>

            {/* Optional: keep these sections for static or additional content if needed */}

          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
