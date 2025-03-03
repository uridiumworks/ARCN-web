import React from "react";
import Banner from "@/components/About/Mission/Banner";
import Journal from "@/components/Shared/Journal";
import Partners from "@/components/Shared/Parther";
import HistoryDetails from "./_components/HistoryDetails";
import InternationalEngagement from "./_components/InternationalEngagement";
export default function HistoryPage() {
  return (
    <section>
      <Banner />
      <HistoryDetails />
      <InternationalEngagement />
      {/* <Partners /> */}
      <Journal />
    </section>
  );
}
