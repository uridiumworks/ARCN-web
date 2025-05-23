import CustomContainer from "@/components/CustomContainer";
import Image from "next/image";

const Picture = () => {
  return (
    <section className="py-4">
      <CustomContainer>

      <div className="flex flex-col gap-8">
        <h2 className="font-bold text-[#2E7636] text-2xl sm:text-4xl leading-[2.25rem] text-center self-center px-6">
          ARCN ORGANOGRAM
        </h2>
        <div className="mx-auto items-center px-0 sm:px-6">
          <Image
            src="/Images/Aboutpage/revised_arcn_organogram.drawio.png"
            alt="Diagram"
            width={1550}
            height={800}
          />
        </div>
      </div>
      </CustomContainer>
     
    </section>
  );
};

export default Picture;
