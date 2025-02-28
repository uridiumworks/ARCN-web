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
};

export default function CustomBreadcrumbs({ text }: Props) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="flex items-center gap-1">
            <div>
              <HomeIcon className="" />
            </div>
            <Link
              href="/"
              className="font-medium text-sm text-[#A5ACBA] hover:text-[#2E7636] transition"
            >
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[#2E3545]" />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link
              href="/newsandevents"
              className="font-medium text-sm text-[#A5ACBA] hover:text-[#2E7636] transition"
            >
              News & Events
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[#2E3545]" />
       
        <BreadcrumbItem>
          <BreadcrumbPage className="font-medium text-sm text-[#2E7636]">
            {text}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
