"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import PublicationsMotto from "./_components/PublicationsMotto"

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

          {NoLayout && <PublicationsMotto />}
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

