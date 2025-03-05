import React from "react";
import Hero from "../../_components/Hero";
import Overview from "../_components/Overview";
import Values from "../_components/Values";
import Leadership from "../_components/Leadership";

export default function TrainingFecaInstituePage() {
  return (
    <section>
      <Hero
        logo="/Images/Mandatepage/feca-logo.png"
        accroymn="FECA"
        email="provost@fecaakure.edu.ng"
        phoneNumber="08038048723, 08033559984"
        location="Along Ado-Owo Road, Opposite Housing Corporation, Akure, Ondo State, Nigeria"
        title="Federal College of Agriculture, Akure <br /> (FECA)"
        website="www.feca.edu.ng"
      />
      <Overview />
      <Values />
      <Leadership
        website="www.feca.edu.ng"
        phoneNumber="08038048723, 08033559984"
        email="provost@fecaakure.edu.ng"
        location="Along Ado-Owo Road, Opposite Housing Corporation, Akure, Ondo State, Nigeria"
      />
    </section>
  );
}
