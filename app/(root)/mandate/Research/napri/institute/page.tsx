import React from "react";
import Hero from "../../_components/Hero";
import Overview from "../_components/Overview";
import Values from "../_components/Values";
import Focus from "../_components/Focus";
import Leadership from "../_components/Leadership";

export default function ResearchNapriInstitutePage() {
  return (
    <section>
      <Hero
        logo="/Images/Mandatepage/napri-logo.png"
        accroymn="NAPRI"
        email="info@napri.gov.ng"
        phoneNumber="+2348062853385"
        location="P.M.B 1096, Shika, Zaria, Kaduna State, Nigeria"
        title="National Animal Production Research Institute <br /> (NAPRI)"
        website="https://www.napri.gov.ng"
      />
      <Overview />
      <Values />
      <Focus />
      <Leadership
        email="info@napri.gov.ng"
        location="P.M.B 1096, Shika, Zaria, Kaduna State, Nigeria"
        phoneNumber="+2348062853385"
        website="https://www.napri.gov.ng"
      />
    </section>
  );
}
