import React from "react";
import Hero from "../../_components/Hero";
import Overview from "../_components/Overview";

export default function TrainingFCAIshiaguInstituePage() {
  return (
    <section>
      <Hero
        logo="/Images/Mandatepage/fca-ishiagu-logo.png"
        accroymn="FCA ISHIAGU"
        email="okoronkwo98@gmail.com"
        phoneNumber="08064086398"
        location="PMB 7008, Ishiagu, Ivo L.G.A., Ebonyi State, Nigeria"
        title="Federal College of Agriculture (FCA), Ishiagu"
        website="www.fcaishiagu.edu.ng"
      />
      <Overview />
    </section>
  );
}
