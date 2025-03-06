import CustomContainer from "@/components/CustomContainer";
import Banner from "@/components/ProgramsandProjects/Banner";
import Programs from "@/components/ProgramsandProjects/Programs";
import Projects from "@/components/ProgramsandProjects/Projects";
import Journal from "@/components/Shared/Journal";

export default function Home() {
    return (
      <main>
        <Banner />
        <Projects />
        <Programs />
        <Journal />
      </main>
      
    );
  }