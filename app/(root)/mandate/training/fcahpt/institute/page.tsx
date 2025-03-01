import React from "react";
import Hero from "../../_components/Hero";
import Overview from "../_components/Overview";
import Historical from "../_components/Historical";
import Leadership from "../_components/Leadership";

export default function TrainingFcahptInstituePage() {
  return (
    <section>
      <Hero
        logo="/Images/Mandatepage/fcahpt-logo.png"
        accroymn="FCAHPT"
        email="fcahptvomvet@gmail.com"
        phoneNumber="08053153651"
        location="National Veterinary Research Institute, Vom (NVRI), P.M.B 05, Jos-South L.G.A, Jos, Plateau, Nigeria"
        title="Federal College of Animal Health and Production Technology, Vom (FCAHPT)"
        website="https://www.fcahptvom.gov.ng"
      />
      <Overview />
      <Historical />
      <Leadership
        website=" https://www.fcahptvom.gov.ng"
        email=" https://www.fcahptvom.gov.ng"
        phoneNumber="08053153651"
        location="National Veterinary Research Institute, Vom (NVRI), P.M.B 05, Jos-South L.G.A, Jos, Plateau, Nigeria"
      />
    </section>
  );
}
