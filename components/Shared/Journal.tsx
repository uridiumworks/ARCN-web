import Link from "next/link";
import CustomContainer from "../CustomContainer";

const Journal = () => {
  return (
    <section className="py-4 md:py-8 bg-[#F7F7F7]">
      <CustomContainer>
        <div className="flex flex-col items-center gap-4">
          <div className="text-center flex flex-col gap-4">
            <h2 className="text-3xl sm:text-4xl leading-[2.25rem] font-medium text-[#111111]">
              Journal of Applied Agricultural Research (JAAR)
            </h2>
            <p className="text-sm leading-[1.531875rem] font-normal text-[#111111]">
              CALL FOR PAPERS AND SUBMISSION OF MANUSCRIPTS
            </p>
          </div>

          <Link
            href="https://jaarbox.com/site/home"
            target="_blank"
            className="bg-[#71C348] text-white text-base sm:text-base capitalize leading-[0.9625rem] py-2.5 px-4 rounded-full font-sans font-bold"
          >
            Submit Now
          </Link>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Journal;
