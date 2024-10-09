"use client";

import Navbar from "@/components/navbar";
import { usePathname } from "next/navigation";
import Sidebar from "./_components/Sidebar";
import AdminNavbar from "./admin/_components/AdminNavbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  // Extract the first part of the pathname
  const adminText = pathname.split("/")[1];

  // Debugging log to check the pathname and extracted adminText
  console.log("Current pathname:", pathname);
  console.log("Extracted adminText:", adminText);

  // Render based on the extracted adminText
  if (adminText !== "admin") {
    return (
      <main>
          <Navbar />
        <div>
          {children}
        </div>
        <Footer />
        <Toaster />
      </main>
    );
  }

  return (
    <main>
      <div className="max-w-full h-auto bg-[#e6e6e6] flex justify-start">
        <div>
          <Sidebar />
        </div>
        <div className="w-full h-auto">
          <AdminNavbar />
          {children}
        </div>
      </div>
      <Toaster />
    </main>
  );
}
