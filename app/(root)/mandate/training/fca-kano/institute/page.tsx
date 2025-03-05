import React from "react";
import Hero from "../../_components/Hero";
import Overview from "../_components/Overview";
import Values from "../_components/Values";
import Leadership from "../_components/Leadership";

export default function TrainingFCAKanoInstituePage() {
  return (
    <section>
      <Hero
        logo="/Images/Mandatepage/fca-kano-2x.png"
        accroymn="FCA Kano"
        email="admin@fcapt.edu.ng"
        phoneNumber="+234 (0)8065531545"
        location="CBN Quarters Road, Hotoro GRA., Kwanar Sabo, Off Maiduguri Road, Adjacent Ahmad Musa Sport Complex, Tarauni, Kano, Nigeria"
        title="Federal College of Agricultural <br /> Produce Technology, Kano"
        website="https://www.fcapt.edu.ng"
      />
      <Overview />
      <Values />
      <Leadership
        website="https://www.fcapt.edu.ng"
        location="CBN Quarters Road, Hotoro GRA., Kwanar Sabo, Off Maiduguri Road, Adjacent Ahmad Musa Sport Complex, Tarauni, Kano, Nigeria"
        phoneNumber="+234 (0)8065531545"
        email="admin@fcapt.edu.ng"
      />
    </section>
  );
}
