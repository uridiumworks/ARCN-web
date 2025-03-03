import Banner from "@/components/About/Mission/Banner";
import Function from "@/components/About/Mission/Function";
import Ourmandate from "@/components/About/Mission/Ourmandate";
import Value from "@/components/About/Mission/Value";
import Journal from "@/components/Shared/Journal";
// import Partners from "@/components/Shared/Parther";

export default function Missionpage() {
    return ( 
        <section>
            <Banner />
            <Ourmandate />
            <Function />
            <Value />
            {/* <Partners /> */}
            <Journal />
        </section>
     );
}
