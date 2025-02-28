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
        accroymn="FCAHPT"
        email="fcahptvomvet@gmail.com"
        phoneNumber="08053153651"
        location="National Veterinary Research Institute, Vom (NVRI), P.M.B 05, Jos-South L.G.A, Jos, Plateau, Nigeria"
        title="Federal College of Animal Health and Production Technology, Vom (FCAHPT)"
        website="https://www.fcahptvom.gov.ng"
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
