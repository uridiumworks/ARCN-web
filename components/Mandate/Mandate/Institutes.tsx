import CustomContainer from "@/components/CustomContainer";

const Institutes = () => {
  return (
    <section className="py-12 md:py-20">
      <CustomContainer>
        <div className="flex flex-col gap-8">
          <h2 className="text-[#171717] text-3xl sm:text-4xl font-bold leading-[2.25rem]">
            Research Institutes
          </h2>
          <p className="font-normal text-sm leading-[1.5rem] ">
          The 14 National Agricultural Research Institutes (NARIs) under the purview of the Council operate across Nigeria&apos;s diverse agro-ecological zones, each specializing in region-specific commodities and farming systems—from southern root crops to northern drought-resistant varieties—serving as the nation&apos;s primary centres for developing and distributing targeted agricultural technologies.
          <br />
          <br />
In line with the Council&apos;s mandate, these NARIs, established under the amended Council Act, are tasked with: Developing and transferring demand-driven technologies that address farmers/end-user needs; Maintaining accountability through client-responsive research; Providing extension support services to farmers and stakeholders; and Actively engaging end-users of the research system in shaping research agendas

          </p>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Institutes;
