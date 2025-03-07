import Image from "next/image";

const Picture = () => {
  return (
    <section className="py-4 px-6">
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-[#2E7636] text-2xl sm:text-4xl lg:leading-[2.25rem] text-center self-center px-6">
          ARCN ORGANOGRAM
        </h2>
        <div className="mx-auto items-center px-0 sm:px-6">
          <Image
            src="/Images/Aboutpage/Diagram.svg"
            alt="Diagram"
            width={1250}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};

export default Picture;
