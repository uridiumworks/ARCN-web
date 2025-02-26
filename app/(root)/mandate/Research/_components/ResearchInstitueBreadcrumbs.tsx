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
import { WhiteHomeIcon } from "@/assets/icons";

type Props = {
  text: string;
};

export default function ResearchInstitueBreadcrumbs({ text }: Props) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="flex items-center gap-1">
            <div>
              <WhiteHomeIcon />
            </div>
            <Link
              href="/"
              className="font-medium text-sm text-white hover:text-[#30A85F] transition"
            >
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator color="#fff" />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link
              href="/mandate"
              className="font-medium text-sm text-white hover:text-[#30A85F] transition"
            >
              Research
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator color="#fff" />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link
              href="/mandate/Research"
              className="font-medium text-sm text-white hover:text-[#30A85F] transition"
            >
              Research Institutes
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator color="#fff" />
        <BreadcrumbItem>
          <BreadcrumbPage className="font-medium text-sm text-[#30A85F]">
            {text}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
