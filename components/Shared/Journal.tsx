import CustomContainer from "../CustomContainer";

const Journal = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F7F7F7]">
      <CustomContainer>
        <div className="text-center flex flex-col gap-7">
          <h1 className="text-3xl sm:text-4xl font-medium text-[#111111]">
            Journal of Applied Agricultural Research (JAAR)
          </h1>
          <p className="text-base font-normal text-[#111111]">
            CALL FOR PAPERS AND SUBMISSION OF MANUSCRIPTS
          </p>
          <button className="bg-[#71C348] text-white py-4 px-8 rounded-full self-center font-sans font-bold">
            Submit Now
          </button>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Journal;
