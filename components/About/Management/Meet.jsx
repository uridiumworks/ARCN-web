import Image from "next/image";
import Organ from "/Images/Aboutpage/Organ.png";

const Meet = () => {
    return (
        <main className="w-full place-content-center text-center space-y-7 p-4 ">
            <div className="space-y-4">
                <h1 className="font-semibold text-[54px]">Meet The Management</h1>
                <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur. Et aliquam ullamcorper <br />eget vitae adipiscing tortor varius habitant. Urna elit ut enim nec <br />quis sit id eget auctor. Adipiscing vestibulum vel sit netus platea. <br />Nunc a vitae blandit pulvinar. Tincidunt.</p>
            </div>
            <div className="w-[900px] mx-auto">
                <Image src={Organ} alt="Organ" />
            </div>
        </main>
    )
}

export default Meet;