import Institutes from "@/components/Mandate/Mandate/Institutes";
import Maps from "@/components/Mandate/Mandate/Maps";
import Report from "@/components/Mandate/Mandate/Report";
import Research from "@/components/Mandate/Mandate/Research";
import Technolody from "@/components/Mandate/Mandate/Technology";


const Mandate = () => {
  return (
    <section>
      <Research />
      <Institutes />
      <Maps />
      <Report />
      <Technolody />
    </section>
  );
};

export default Mandate;
