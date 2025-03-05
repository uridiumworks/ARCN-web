import React from "react";
import Hero from "../../_components/Hero";
import Overview from "../_components/Overview";
import Values from "../_components/Values";
import Focus from "../_components/Focus";
import Leadership from "../_components/Leadership";

export default function ResearchCrinInstitutePage() {
  return (
    <section>
      <Hero
        logo="/Images/Mandatepage/crin-logo.png"
        accroymn="CRIN"
        email="info@crin.gov.ng"
        location="Idi-Ayunre, Oluyole Local Government Area, Ibadan, Oyo State, Nigeria"
        title="Cocoa Research Institute of Nigeria (CRIN)"
        website="https://www.crin.gov.ng"
      />
      <Overview />
      <Values />
      <Focus />
      <Leadership
        website="https://www.crin.gov.ng"
        email="info@crin.gov.ng"
        location="Idi-Ayunre, Oluyole Local Government Area, Ibadan, Oyo State, Nigeria "
      />
    </section>
  );
}
