import React from "react";
import Hero from "../../_components/Hero";
import Overview from "../_components/Overview";
import Values from "../_components/Values";
import Focus from "../_components/Focus";
import Leadership from "../_components/Leadership";

export default function ResearchNspriInstitutePage() {
  return (
    <section>
      <Hero
        logo="/Images/Mandatepage/nspri-logo.png"
        accroymn="NSPRI"
        email="nspriinfo@nspri.gov.ng"
        phoneNumber="08117767204"
        location="Km 3 Asa Dam Road, PMB 1489, Ilorin, Kwara State, Nigeria"
        title="Nigerian Stored Products Research Institute <br /> (NSPRI)"
        website="www.nspri.gov.ng"
      />
      <Overview />
      <Values />
      <Focus />
      <Leadership
        website="www.nspri.gov.ng"
        location="Km 3 Asa Dam Road, PMB 1489, Ilorin, Kwara State, Nigeria"
        email="nspriinfo@nspri.gov.ng"
        phoneNumber="08117767204"
      />
    </section>
  );
}
