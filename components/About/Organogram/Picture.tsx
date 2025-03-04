import Image from "next/image";

const Picture = () => {
  return (
    <section className="">
      <div className="flex flex-col">
        {/* <h2 className="font-bold text-[#2E7636] text-5xl lg:text-6xl lg:leading-[4.895rem] text-center">
          ARCN ORGANOGRAM
        </h2> */}
        <div className="mx-auto items-center px-6">
          <Image
            src="/Images/Aboutpage/Diagram.png"
            alt="Diagram"
            width={1200}
            height={700}
          />
        </div>
      </div>
    </section>
  );
};

export default Picture;
