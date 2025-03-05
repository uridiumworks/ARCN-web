import React from "react";
import Hero from "../../_components/Hero";
import Overview from "../_components/Overview";
import Values from "../_components/Values";
import Leadership from "../_components/Leadership";

export default function TrainingFcvmltInstituePage() {
  return (
    <section>
      <Hero
        logo="/Images/Mandatepage/fcvmlt-logo.png"
        accroymn="FCVMLT"
        email="contact@fcvmlt.edu.ng"
        phoneNumber="+2348114655118"
        location="PMB 02 Vom, Jos South LGA, Jos, Plateau State, Nigeria"
        title="Federal College of Veterinary and Medical <br /> Laboratory Technology (FCVMLT), Vom"
        website="www.fcvmlt.edu.ng"
      />
      <Overview />
      <Values />
      <Leadership
        website="www.fcvmlt.edu.ng"
        email="contact@fcvmlt.edu.ng"
        location="PMB 02 Vom, Jos South LGA, Jos, Plateau State, Nigeria"
        phoneNumber="+2348114655118"
      />
    </section>
  );
}
