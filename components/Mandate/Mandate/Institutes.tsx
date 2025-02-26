import CustomContainer from "@/components/CustomContainer";

const Institutes = () => {
  return (
    <section className="py-14 md:py-20">
      <CustomContainer>
        <div className="flex flex-col gap-8 sm:px-16">
          <h2 className="font-bold text-2xl sm:text-[2.25rem] sm:leading-10">
            Research Institutes
          </h2>
          <p className="font-normal text-base">
            <span className="font-normal text-[0.9925rem] text-[#2D7636]">
              ARCN Research Institutes
            </span>{" "}
            are non-profit research organizations conducting innovative <br />
            research. Home to more than 9,000 scientists, researchers,
            technicians and staff, the
            <br />
            Centers work to transform food, land and water systems in a climate
            crisis. Click on a
            <br /> Center below to learn more.
          </p>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Institutes;
