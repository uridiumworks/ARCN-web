import Events from "@/components/Landing/Events";
import Impact from "@/components/Landing/Impact";
import Institutes from "@/components/Landing/Institutes";
import Intro from "@/components/Landing/Intro";
import News from "@/components/Landing/News";
import Research from "@/components/Landing/Research";
import Review from "@/components/Landing/Review";
import Banner from "@/components/Landing/Banner";
import MainLayout from "@/components/Shared/MainLayout";
import Partners from "@/components/Shared/Parther";
import Journal from "@/components/Shared/Journal";

export default function Home() {
  return (
    <MainLayout>
      <div>
        <Banner />
        <Intro />
        <Institutes />
        <Impact />
        <Research />
        <News />
        <Events />
        <Review />
        <Partners />
        <Journal />
      </div>
    </MainLayout>
    
  );
}
