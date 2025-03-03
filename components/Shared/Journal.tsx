import CustomContainer from "../CustomContainer";

const Journal = () => {
  return (
    <section className="py-12 md:py-20 bg-[#F7F7F7]">
      <CustomContainer>
        <div className="flex flex-col items-center gap-10">
          <div className="text-center flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl sm:leading-[3.656875rem] font-medium text-[#111111]">
              Journal of Applied Agricultural Research (JAAR)
            </h2>
            <p className="text-base leading-[1.531875rem] font-normal text-[#111111]">
              CALL FOR PAPERS AND SUBMISSION OF MANUSCRIPTS
            </p>
          </div>

          <button className="bg-[#71C348] text-white text-base sm:text-lg leading-[0.9625rem] py-4 px-8 rounded-full font-sans font-bold">
            Submit Now
          </button>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Journal;
