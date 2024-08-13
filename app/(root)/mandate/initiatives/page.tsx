import Banner from "@/components/Mandate/Initiatives/Banner";
import AROCs from "@/components/Mandate/Initiatives/AROCs";
import Services from "@/components/Mandate/Initiatives/Services";
import Journal from "@/components/Shared/Journal";

const Initiatives = () => {

    return ( 
        <main>
            <Banner />
            <AROCs />
            <Services/>
            <Journal />
        </main>
    );
}
 
export default Initiatives;