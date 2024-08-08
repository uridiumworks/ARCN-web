import Image from "next/image";
import Enviroment from "/Images/News and Events/Enviroment.png";

const Banner = () => {

    return ( 
        <main>
            <Image src={Enviroment} alt="Enviroment" />
        </main>
    );
}
 
export default Banner;