import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extension and Socio Economic | Technical Department",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}