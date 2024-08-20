"use client"

import Bander from "./_components/Bander";
import Events from "./_components/Events";
import Institutes from "./_components/Institutes";
import Intro from "./_components/Intro";
import News from "./_components/News";
import Partners from "./_components/Partners";
import Research from "./_components/Research";
import Review from "./_components/Review";
import React, { useState } from 'react';
import GovernanceMotto from "./governance/_components/governance-motto";

const Governance = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='py
    -10 px-8 md:px-24'>
      <GovernanceMotto/>
    </div>
  );
};

// Ensure only one default export
// export default Governance; // Commenting this out to fix the issue

export default function Home() {
  return (
    <main>
      <Bander />
      <Intro />
      <Research />
      <Institutes />
      <News />
      <Review />
      <Events />
      <Partners />
      <Governance/> Include Governance component if needed
    </main>
  );
}
