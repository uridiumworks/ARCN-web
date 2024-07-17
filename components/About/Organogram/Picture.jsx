import Image from "next/image";
import Diagram from "../../../public/Images/Aboutpage/Diagram.png";

const Picture = () => {
    return (
        <main className="w-full">
            <div className="">
                <Image src={Diagram} alt="Diagram" />
            </div>
        </main>
    )
}

export default Picture;