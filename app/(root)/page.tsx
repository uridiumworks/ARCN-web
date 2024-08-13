import Journal from "@/components/Shared/Journal";
import Bander from "./_components/Bander";
import Events from "./_components/Events";
import Institutes from "./_components/Institutes";
import Intro from "./_components/Intro";
import News from "./_components/News";
import Partners from "./_components/Partners";
import Research from "./_components/Research";
import Review from "./_components/Review";


export default function Home() {
  return (
    <main>
      <Bander />
      <Intro />
      <Research />
      <Institutes/>
      <News />
      <Review />
      <Events />
      <Partners />
      <Journal />
    </main>
  );
}