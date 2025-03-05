import React from "react";
import Hero from "../../_components/Hero";
import Overview from "../_components/Overview";
import Values from "../_components/Values";
import Leadership from "../_components/Leadership";

export default function TrainingFCAIshiaguInstituePage() {
  return (
    <section>
      <Hero
        logo="/Images/Mandatepage/fca-ishiagu-logo.png"
        accroymn="FCA ISHIAGU"
        email="okoronkwo98@gmail.com"
        phoneNumber="08064086398"
        location="PMB 7008, Ishiagu, Ivo L.G.A., Ebonyi State, Nigeria"
        title="Federal College of Agriculture (FCA), <br /> Ishiagu"
        website="https://www.fcaishiagu.edu.ng"
      />
      <Overview />
      <Values />
      <Leadership
        website="https://www.fcaishiagu.edu.ng"
        email="okoronkwo98@gmail.com"
        location="PMB 7008, Ishiagu, Ivo L.G.A., Ebonyi State, Nigeria"
        phoneNumber="08064086398"
      />
    </section>
  );
}
