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
        <BreadcrumbSeparator className="text-white" />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link
              href="/mandate/training"
              className="font-medium text-sm text-white hover:text-[#30A85F] transition"
            >
              Training
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-white" />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link
              href="/mandate/training/college"
              className="font-medium text-sm text-white hover:text-[#30A85F] transition"
            >
              Training Institutes
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-white" />
        <BreadcrumbItem>
          <BreadcrumbPage className="font-medium text-sm text-[#30A85F]">
            {text}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
