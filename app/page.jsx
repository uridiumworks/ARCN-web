import Events from "@/components/Landing/Events";
import Institutes from "@/components/Landing/Institutes";
import Intro from "@/components/Landing/Intro";
import News from "@/components/Landing/News";
import Research from "@/components/Landing/Research";
import Review from "@/components/Landing/Review";
import MainLayout from "@/components/Shared/MainLayout";
import Partners from "@/components/Shared/Parther";

export default function Home() {
  return (
    <MainLayout>
      <div>
        <Intro />
        <Research />
        <Institutes />
        <News />
        <Review />
        <Events />
        <Partners />
      </div>
    </MainLayout>
    
  );
}
