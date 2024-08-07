import Institutes from "@/components/Mandate/Mandate/Institutes";
import Maps from "@/components/Mandate/Mandate/Maps";
import Report from "@/components/Mandate/Mandate/Report";
import Research from "@/components/Mandate/Mandate/Research";
import Technolody from "@/components/Mandate/Mandate/Technology";

const Mandate = () => {

    return ( 
        <main>
            <Research />
            <Institutes />
            <Maps />
            <Report />
            <Technolody />
        </main>
    );
}
 
export default Mandate;