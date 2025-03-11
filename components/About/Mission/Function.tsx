"use client";
import CustomContainer from "@/components/CustomContainer";
import { CircleCheck } from "lucide-react";

const Function = () => {
  return (
    <section className="py-12 md:py-20">
      <CustomContainer>
        <div className="border-0 w-full py-14 px-6 sm:px-14 flex flex-col gap-16 rounded-xl bg-[#F9F9F9] mx-auto">
          <div className=" flex flex-col gap-4">
            <h2 className="font-bold text-center text-3xl sm:text-4xl leading-[2.25rem] text-[#111111]">
              Legal Provisions of ARCN
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-normal text-sm leading-[1.5rem] text-[#111111]">
                The Agricultural Research Council of Nigeria (ARCN) was
                established by Decree 44 of 1999, now an Act of the 
                National Assembly. The decree was published as Extra-ordinary
                Government Notice No. 78 of 26 May 1999, vol. 86.
              </p>
              <p className="font-normal text-sm leading-[1.5rem] text-[#111111]">
                In September 2021, the Council’s Principal Act,Cap. A12, under
                the Laws of the Federation of Nigeria, 2004, was  amended
                to reconstitute the board&apos;s membership and make provisions
                for the effective operation of the Council.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 sm:gap-12">
            <h3 className="text-[#111111] font-bold text-3xl sm:text-4xl leading-[2.25rem] text-center">
              Functions
            </h3>
            <div className="flex flex-col gap-8">
              <div className="grid  grid-cols-[100%] md:grid-cols-2 items-start gap-16">
                <div className="flex gap-2.5 items-start font-normal">
                  <CircleCheck />
                  <p className="text-[#171616] text-sm leading-[1.5rem]">
                    Advise the Federal Government on national <br />
                    policies and priorities in agricultural research, <br />
                    training and extension activities;
                  </p>
                </div>

                <div className="flex font-normal gap-2.5 items-start">
                  <CircleCheck />
                  <p className="text-[#171616] text-sm leading-[1.5rem]">
                    Prepare periodic master plans for at research , <br />
                    training and extension and advise the Federal <br />
                    Government on the financial requirements for <br />
                    the implementation of such plans
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[100%] md:grid-cols-2 items-tart gap-16">
                <div className="flex font-normal gap-2.5 items-start">
                  <CircleCheck />
                  <p className="text-[#171616] text-sm leading-[1.5rem]">
                    Ensure the implementation of the approved <br />
                    master plans by the appropriate research <br />
                    institutes, universities and other bodies;
                  </p>
                </div>

                <div className="flex font-normal gap-2.5 items-start">
                  <CircleCheck />
                  <p className="text-[#171616] text-sm leading-[1.5rem]">
                    Supervise and coordinate the research, training <br />
                    and extension activities of research institutes <br />
                    established under section 14 of the ARCN decree;
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[100%] md:grid-cols-2 items-start gap-16">
                <div className="flex font-normal gap-2.5 items-start">
                  <CircleCheck />
                  <p className="text-[#171616] text-sm leading-[1.5rem]">
                    Prepare annual budget for the agricultural <br />
                    research , training and extension programmed of <br />
                    the institute under it aegis and receive grants for <br />
                    allocation to the institutes for the <br />
                    implementation of the annual programmes and <br />
                    to universities and other bodies for special <br />
                    research or training projects;
                  </p>
                </div>

                <div className="flex font-normal gap-2.5 items-start">
                  <CircleCheck />
                  <p className="text-[#171616] text-sm leading-[1.5rem]">
                    Maintain an up-to-date record of all existing <br />
                    facilities for research, training and extension in <br />
                    the agricultural sciences in Nigeria and advise <br />
                    the Federal Government on their adequacy and <br />
                    efficient utilization;
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[100%] md:grid-cols-2 items-start gap-16">
                <div className="flex font-normal gap-2.5 items-start">
                  <CircleCheck />
                  <p className="text-[#171616] text-sm leading-[1.5rem]">
                    Advise the Federal government on the Re-
                    <br />
                    organization of existing institutes, including the <br />
                    creation of new ones , as are required to <br />
                    implement or further the efficiency of research , <br />
                    training and extension in the agricultural <br />
                    sciences;
                  </p>
                </div>

                <div className="flex font-normal gap-2.5 items-start">
                  <CircleCheck />
                  <p className="text-[#171616] text-sm leading-[1.5rem]">
                    Promote collaboration between scientists and <br />
                    engaged in research in the agricultural sciences <br />
                    in Nigeria and their counterparts in other <br />
                    countries or international bodies;
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[100%] md:grid-cols-2 items-start gap-16">
                <div className="flex font-normal gap-2.5 items-start">
                  <CircleCheck />
                  <p className="text-[#171616] text-sm leading-[1.5rem]">
                    Establish and maintain a National Agricultural <br />
                    sciences library and documentation center and <br />
                    publish or sponsor the publication of the <br />
                    research results in the agricultural sciences;
                  </p>
                </div>

                <div className="flex font-normal gap-2.5 items-start">
                  <CircleCheck />
                  <p className="text-[#171616] text-sm leading-[1.5rem]">
                    Carry out such activities as may, in the opinion of <br />
                    the council, further the advancement of <br />
                    research, training and extension in the <br />
                    agricultural sciences.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[100%] md:grid-cols-2 items-start gap-16">
                <div className="flex font-normal gap-2.5 items-start">
                  <CircleCheck />
                  <p className="text-[#171616] text-sm leading-[1.5rem]">
                    Plan, manage, conduct and promote research,
                    <br />
                    human resource development and technology
                    <br />
                    generation, assessment and adoption for the
                    <br />
                    advancement of all aspects of agriculture in <br /> Nigeria;
                  </p>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Function;
