import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "extension and socio economic | Technical Department",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}