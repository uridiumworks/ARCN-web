import Institutes from "@/components/Mandate/Mandate/Institutes";
import Maps from "@/components/Mandate/Mandate/Maps";
import Report from "@/components/Mandate/Mandate/Report";
import Research from "@/components/Mandate/Mandate/Research";
import Technolody from "@/components/Mandate/Mandate/Technology";
import Journal from "@/components/Shared/Journal";

const Mandate = () => {

    return ( 
        <main>
            <Research />
            <Institutes />
            <Maps />
            <Report />
            <Technolody />
            <Journal />
        </main>
    );
}
 
export default Mandate;