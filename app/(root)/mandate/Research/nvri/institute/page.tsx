import React from "react";
import Hero from "../../_components/Hero";
import Overview from "../_components/Overview";
import Values from "../_components/Values";
import Focus from "../_components/Focus";
import Leadership from "../_components/Leadership";

export default function ResearchNvriInstitutePage() {
  return (
    <section>
      <Hero
        logo="/Images/Mandatepage/nvri-logo.png"
        accroymn="NVRI"
        email="edvr@nvri.gov.ng"
        phoneNumber="+234 905 877 7764"
        location="P.M.B 01, Vom, Jos South, Plateau State, Nigeria"
        title="National Veterinary Research Institute (NVRI), Vom"
        website="https://www.nvri.gov.ng"
      />
      <Overview />
      <Values />
      <Focus />
      <Leadership
        website="https://www.nvri.gov.ng"
        phoneNumber="+234 905 877 7764"
        location="P.M.B 01, Vom, Jos South, Plateau State, Nigeria"
        email="edvr@nvri.gov.ng"
      />
    </section>
  );
}
