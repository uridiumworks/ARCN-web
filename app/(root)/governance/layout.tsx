import React from "react";
import { Metadata } from "next";
import LayoutProvider from "./layoutProvider";

export const metadata: Metadata = {
  title: "Governance",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <LayoutProvider>{children}</LayoutProvider>;
}