"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { HomeIcon } from "@/assets/icons";

type Props = {
  text: string;
  secondaryText?: string;
  secondaryUrl?: string;
};

export default function ResearchInstitueBreadcrumbsV1({
  secondaryText = "Research",
  secondaryUrl = "/mandate",
  text,
}: Props) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="flex items-center gap-1">
            <div>
              <HomeIcon />
            </div>
            <Link
              href="/"
              className="font-medium text-sm text-[#A5ACBA] hover:text-[#30A85F] transition"
            >
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[#2E3545]" />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link
              href={secondaryUrl}
              className="font-medium text-sm text-[#A5ACBA] hover:text-[#30A85F] transition"
            >
              {secondaryText}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[#2E3545]" />
        <BreadcrumbItem>
          <BreadcrumbPage className="font-medium text-sm text-[#30A85F]">
            {text}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
