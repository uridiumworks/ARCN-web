"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Tabs = [
  {
    name: "Mission & Vision",
    status: "active",
    url: "/about",
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

const LayoutProvider = ({ children }: {children: React.ReactNode}) => {
  const currentRoute = usePathname();

  return (
    <div className="w-full min-h-screen sticky z-0 top-0">
      <div className="border-[#B4BDBD33] dark:border-[#57585833] rounded">

        <div className="w-full">
          <div className="w-full whitespace-nowrap">
            <ul className="flex text-sm justify-center text-center lg:text-lg gap-4 border-b -mb-px">
              {Tabs.map(({ name, status, url }, index) => {
                const activeTab = cn(currentRoute === url ? "font-bold font-Satoshi_Bold border-b-2" : "border-b-0 text-[#667085] font-Satoshi_Medium", "inline-block py-4 px-3.5 text-sm");

                  return (
                    <li key={index}>
                      {status && (<Link href={url} className={activeTab}>{name}</Link>)}
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

export default LayoutProvider;
