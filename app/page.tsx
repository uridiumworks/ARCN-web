import Events from "@/components/Landing/Events";
import Impact from "@/components/Landing/Impact";
import Institutes from "@/components/Landing/Institutes";
import Intro from "@/components/Landing/Intro";
import News from "@/components/Landing/News";
import Research from "@/components/Landing/Research";
import Banner from "@/components/Landing/Banner";
import MainLayout from "@/components/Shared/MainLayout";
import Partners from "@/components/Shared/Parther";
import Journal from "@/components/Shared/Journal";
import OurPartners from "@/components/Landing/OurPartners";
import CarouselHeroSection from "@/components/Landing/CarouselHeroSection";

export default function Home() {
  return (
    <MainLayout>
      <div>
        {/* <Banner /> */}
        <CarouselHeroSection />
        <Intro />
        <Institutes />
        <Impact />
        <Research />
        <News />
        <Events />
        <OurPartners />
        <Partners />
        <Journal />
      </div>
    </MainLayout>
  );
}
