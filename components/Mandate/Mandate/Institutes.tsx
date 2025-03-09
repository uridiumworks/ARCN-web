import CustomContainer from "@/components/CustomContainer";

const Institutes = () => {
  return (
    <section className="py-12 md:py-20">
      <CustomContainer>
        <div className="flex flex-col gap-8 sm:px-24">
          <h2 className="text-[#E6E9E7] text-3xl sm:text-4xl font-bold leading-[2.25rem]">
            Research Institutes
          </h2>
          <p className="font-normal text-sm leading-[1.5rem] ">
            <span className="font-normal text-[0.9925rem] text-[#2D7636]">
              ARCN Research Institutes
            </span>{" "}
            are non-profit research organizations conducting innovative <br className="hidden md:block" />
            research. Home to more than 9,000 scientists, researchers,
            technicians and staff, the
            <br className="hidden md:block" />
            Centers work to transform food, land and water systems in a climate
            crisis. Click on a
            <br className="hidden md:block" /> Center below to learn more.
          </p>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Institutes;
