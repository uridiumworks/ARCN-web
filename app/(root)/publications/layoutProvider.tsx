"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import PublicationsMotto from "./_components/PublicationsMotto"
import Journal from "@/components/Shared/Journal"
import CustomContainer from "@/components/CustomContainer"

interface LayoutType {
  children: React.ReactNode
}

export default function LayoutProvider({ children }: LayoutType) {
  const currentRoute = usePathname()
  // const param = useParams()

  const slugPath = `/publications/journals`
  const institute = `/publications/newsletters/arcn-meets-research-institute`

  const NoLayout = 
  currentRoute !== slugPath && 
  currentRoute !== institute;

  const AccountSettingsTab = [
    {
      name: "research papers/journals",
      status: "active",
      url: "/publications",
    },
    {
      name: "newsletters",
      status: "active",
      url: "/publications/newsletters",
    },
    {
      name: "reports",
      status: "active",
      url: "/publications/reports",
    },
  ]

  const isTabActive = (tabUrl: string) => {
    if (currentRoute === tabUrl) return true
    if (tabUrl === "/publications/newsletters" && currentRoute.startsWith("/publications/newsletters/")) {
      return true
    }

    return false
  }

  return (
    <div className="w-full min-h-screen">
      <div className="">
        <div className="w-full">
          {NoLayout && (
            <CustomContainer>

            <div className="w-full whitespace-nowrap">
              <ul className="flex text-sm lg:text-lg gap-4 border-b dark:border-gray-600 -mb-px py-4  justify-center md:justify-start max-w-full">
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
            </CustomContainer>
          )}

          {NoLayout && <PublicationsMotto />}
          <div className="w-full">{children}</div>
        </div>

       <Journal />
      </div>
    </div>
  )
}

