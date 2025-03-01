"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import GovernanceMotto from "./_components/governance-motto"

interface LayoutType {
  children: React.ReactNode
}

export default function LayoutProvider({ children }: LayoutType) {
  const currentRoute = usePathname()
  // const param = useParams()

  const slugPath = `/governance/department/service-department/administration-department`
  const extension = `/governance/department/technical-department/extension-and-socio-economic`
  const livestock = `/governance/department/technical-department/livestock-department`
  const fisheries = `/governance/department/technical-department/fisheries-and-aquaculture`
  const plant = `/governance/department/technical-department/plant-resources-department`
  const knowledge = `/governance/department/technical-department/knowledge-mgt-and-communication`
  const planning = `/governance/department/technical-department/planning-research-and-statistics`

  const NoLayout = 
  currentRoute !== slugPath && 
  currentRoute !== extension &&
  currentRoute !== livestock &&
  currentRoute !== plant &&
  currentRoute !== knowledge &&
  currentRoute !== planning &&
  currentRoute !== fisheries;

  const AccountSettingsTab = [
    {
      name: "Management",
      status: "active",
      url: "/governance",
    },
    {
      name: "Department",
      status: "active",
      url: "/governance/department",
    },
    {
      name: "ES Office",
      status: "active",
      url: "/governance/account-settings/security",
    },
  ]

  const isTabActive = (tabUrl: string) => {
    if (currentRoute === tabUrl) return true
    if (tabUrl === "/governance/department" && currentRoute.startsWith("/governance/department/")) {
      return true
    }

    return false
  }

  return (
    <div className="w-full min-h-screen">
      <div className="">
        <div className="w-full">
          {NoLayout && (
            <div className="w-full whitespace-nowrap">
              <ul className="flex text-sm lg:text-lg gap-4 border-b dark:border-gray-600 -mb-px py-4 md:px-10 justify-center md:justify-start max-w-full">
                {AccountSettingsTab.map(({ name, status, url }, index) => {
                  const activeTab = cn(
                    isTabActive(url) ? "font-bold font-semibold text-[#2E7636]" : "border-0 text-black font-medium", "inline-block rounded py-2 uppercase bg-[#F7F7F7] px-3.5 text-xs font-Hind",
                  )

                  return (
                    <li key={index}>
                      {status === "active" && (
                        <Link href={url} className={activeTab}>{name}</Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {NoLayout && <GovernanceMotto />}
          <div className="w-full">{children}</div>
        </div>

        <div className="w-full min-h-[300px] md:h-[371px] grid place-content-center bg-[#F7F7F7] space-y-8 px-4">
          <div className="text-center space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-[40px] font-medium">
              Journal of Applied Agricultural Research (JAAR)
            </h1>
            <p className="text-[#111111]/70 text-base sm:text-lg">
              CALL FOR PAPERS AND SUBMISSION OF MANUSCRIPTS
            </p>
          </div>

          <Button className="bg-[#71C348] w-fit mx-auto rounded-[48px] font-bold text-base sm:text-lg px-6 sm:px-9 py-4 sm:py-7">Submit Now</Button>
        </div>

      </div>
    </div>
  )
}

