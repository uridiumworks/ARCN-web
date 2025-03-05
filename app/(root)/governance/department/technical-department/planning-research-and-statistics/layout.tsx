import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planning Research and Statistics | Technical Department",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}