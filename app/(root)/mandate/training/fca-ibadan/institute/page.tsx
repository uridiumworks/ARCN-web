import React from "react";
import Hero from "../../_components/Hero";
import Overview from "../_components/Overview";
import Values from "../_components/Values";
import Leadership from "../_components/Leadership";

export default function TrainingFCAAkureInstituePage() {
  return (
    <section>
      <Hero
        logo="/Images/Mandatepage/fca-akure-2x.png"
        accroymn="FCA Akure"
        email="support@fcaib.edu.ng"
        phoneNumber="+234 802 344 4165"
        location="Federal College of Agriculture, Moor Plantation, Apata, Ibadan, Oyo State, Nigeria"
        title="FEDERAL COLLEGE OF AGRICULTURE, IBADAN, OYO STATE, NIGERIA."
        website="https://fcaib.edu.ng"
      />

      <Overview />
      <Values />
      <Leadership
        email="support@fcaib.edu.ng"
        location="Federal College of Agriculture, Moor Plantation, Apata, Ibadan, Oyo State, Nigeria"
        phoneNumber=""
        website=" +234 802 344 4165"
      />
    </section>
  );
}
