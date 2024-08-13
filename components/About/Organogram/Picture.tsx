import Image from "next/image";

const Picture = () => {
    return (
        <main className="w-full ">
            <div className="mx-auto items-center px-52">
                <Image src="/Images/Aboutpage/Diagram.png" alt="Diagram" width={900} height={700} />
            </div>
        </main>
    )
}

export default Picture;