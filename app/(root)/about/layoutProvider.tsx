"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Tabs = [
  {
    name: "History",
    status: "active",
    url: "/about/history",
  },
  {
    name: "Mission & Vision",
    status: "active",
    url: "/about/mission",
  },
  {
    name: "Management",
    status: "active",
    url: "/about/management",
  },
  {
    name: "Organogram",
    status: "active",
    url: "/about/organogram",
  },
];

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const currentRoute = usePathname();

  return (
    <div className="w-full min-h-screen">
      <div className="border-[#B4BDBD33] dark:border-[#57585833] rounded">
        <div className="w-full">
          <div className="w-full sm:fixed z-10 sm:top-[6.5rem] bg-white">
            <ul className="flex flex-col gap-3 sm:flex-row text-sm justify-center text-center py-3 sm:text-lg sm:gap-8">
              {Tabs.map(({ name, status, url }, index) => {
                const activeTab = cn(
                  currentRoute === url
                    ? "text-[#30A85F] bg-[#F2F2F2] rounded-sm"
                    : " text-[#444444]",
                  "inline-block py-4 px-3.5 text-sm font-medium transition hover:text-[#30A85F]"
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
};

export default LayoutProvider;
