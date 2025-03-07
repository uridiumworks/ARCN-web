"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Tabs = [
  {
    name: "Research",
    status: "active",
    url: "/mandate",
    subUrl: "/mandate/research",
  },
  {
    name: "Training",
    status: "active",
    url: "/mandate/training",
    subUrl: "/mandate/training/college",
  },
  // {
  //   name: "Extension",
  //   status: "active",
  //   url: "/mandate/initiatives",
  //   subUrl: "/mandate/initiatives/federal",
  // },
];

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const currentRoute = usePathname();

  if (
    currentRoute.endsWith("institute") ||
    currentRoute.includes("coordination-report") ||
    currentRoute.includes("supervision-report")
  ) {
    return <div className="w-full min-h-screen">{children}</div>;
  } else {
    return (
      <div className="w-full min-h-screen">
        <div className="border-[#B4BDBD33] dark:border-[#57585833] rounded">
          <div className="w-full">
            <div className="w-full sm:sticky sm:top-[6.2rem] lg:top-[6.82rem]  sm:z-50 bg-white sm:backdrop-blur sm:supports-[backdrop-filter]:bg-background/60">
              <ul className="flex flex-col gap-3 sm:flex-row text-sm justify-center text-center py-2 sm:text-lg sm:gap-8">
                {Tabs.map(({ name, status, url, subUrl }, index) => {
                  const activeTab = cn(
                    currentRoute === url || currentRoute === subUrl
                      ? "text-[#30A85F] bg-[#F2F2F2] rounded-sm"
                      : " text-[#444444]",
                    "inline-block py-2 px-3.5 text-sm font-medium transition hover:text-[#30A85F]"
                  );

                  return (
                    <li key={index}>
                      {status && (
                        <Link href={url} className={activeTab}>
                          {name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="w-full">{children}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default LayoutProvider;
