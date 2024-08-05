"use client";

import Navbar from "@/components/navbar";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "./_components/Sidebar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  const adminText = pathname.split("/")[1];


  if (adminText !== "admin") {
    return (
      <main>
        <Navbar />
        <div>
          {children}
        </div>
      </main>
    );
  }
  return (
    <main>
      <div className="max-w-full h-auto bg-[#e6e6e6] flex justify-start">
        <div className="">
          <Sidebar />
        </div>
        <div className="w-full h-auto">
          <Navbar />
          {children}
        </div>
      </div>

    </main>
  );
}
