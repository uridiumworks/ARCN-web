import React from "react";
import Hero from "../../_components/Hero";
import Overview from "../_components/Overview";
import Focus from "../_components/Focus";

export default function NrcriPage() {
  return (
    <section>
      <Hero
        logo="/Images/Mandatepage/nihort-img.png"
        accroymn="NICRI"
        email="info@nrcri.gov.ng"
        phoneNumber="0816 387 9811"
        location="Km 8, Umuahia-Ikot Ekpene Road, P.M.B 7006, Umuahia, Abia State, Nigeria."
        title="National Root Crops Research Institute (NRCRI)"
        website="www.nrcri.gov.ng"
      />
      <Overview />
      <Focus />
    </section>
  );
}
