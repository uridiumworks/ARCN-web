import React from "react";
import Hero from "../../_components/Hero";
import Overview from "../_components/Overview";
import Values from "../_components/Values";
import Focus from "../_components/Focus";
import Leadership from "../_components/Leadership";

export default function ResearchNcamInstitutePage() {
  return (
    <section>
      <Hero
        logo="/Images/Mandatepage/ncam-logo.png"
        accroymn="NCAM"
        email="ncamcontact@yahoo.com"
        phoneNumber="08033649168"
        location="Km 20, Ilorin-Lokoja Highway, Ilorin, Kwara State, Nigeria"
        title="National Centre for Agricultural Mechanization <br /> (NCAM)"
        website="www.ncam.gov.ng"
      />
      <Overview />
      <Values />
      <Focus />
      <Leadership
        website="www.ncam.gov.ng"
        email="ncamcontact@yahoo.com"
        location="Km 20, Ilorin-Lokoja Highway, Ilorin, Kwara State, Nigeria Website:"
        phoneNumber="08033649168"
      />
    </section>
  );
}
