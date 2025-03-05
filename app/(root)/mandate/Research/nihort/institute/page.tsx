import React from "react";
import Hero from "../../_components/Hero";
import Overview from "../_components/Overview";
import Focus from "../_components/Focus";
import Leadership from "../_components/Leadership";

export default function ResearchNihortInstitutePage() {
  return (
    <section>
      <Hero
        logo="/Images/Mandatepage/nihort-img.png"
        accroymn="NIHORT"
        email="info@nihort.gov.ng"
        phoneNumber="08022255504"
        location="P.M.B. 5432, Idi-Ishin, Jericho Reservation Area, Ibadan, Oyo State, Nigeria"
        title="NATIONAL HORTICULTURAL <br /> RESEARCH INSTITUTE"
        website="nihort.gov.ng"
      />
      <Overview />
      <Focus />
      <Leadership
        phoneNumber="08022255504"
        location="P.M.B. 5432, Idi-Ishin, Jericho Reservation Area, Ibadan, Oyo State, Nigeria"
        email="info@nihort.gov.ng"
        website="nihort.gov.ng"
      />
    </section>
  );
}
