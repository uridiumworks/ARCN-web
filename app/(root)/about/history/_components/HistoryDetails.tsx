"use client";
import CustomContainer from "@/components/CustomContainer";
import React, { useState } from "react";

export default function HistoryDetails() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-white pb-16 py-5 md:pb-24 md:pt-12">
      <CustomContainer>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h2 className="text-[#0A1425] font-bold text-center text-3xl sm:text-[2.5rem] sm:leading-[2.25rem]">
              Our History
            </h2>
          </div>

          <div className="flex flex-col gap-6 sm:px-6">
            <p className="text-[#64728F] font-normal text-sm leading-[1.5rem]">
              Although agricultural research in Nigeria started in the late 19
              century with the establishment of a botanical garden in Lagos,
              there was always a problem with the coordination of the research
              centres and institutes. The botanical garden was part of a network
              of gardens established under British rule, focusing on the
              introduction of new crops. In 1903 the Forestry and Botanical
              Department (renamed Agricultural Department) for southern Nigeria
              was created. In 1912 this was divided into two regional
              departments resulting in the establishment of a Department of
              Agriculture for northern Nigeria. Then in 1914, with
              Nigeria&apos;s unification, the two departments were merged to
              form a new Department of Agriculture.
            </p>
            <p className="text-[#64728F] font-normal text-base  sm:leading-[2rem]">
              Progress was made in terms of infrastructure and human resources
              resulting in new research stations, more research personnel, and a
              more technical research program that included plant. breeding and
              plant pathology. Research continued to focus, however, on export
              crops like oil palm, rubber, cotton and cocoa. The Forestry and
              Veterinary Departments were also established in 1914, but only
              began undertaking research activities in 1920. Fishery research
              came much later, in 1941, with the establishment of the Fisheries
              Development Branch by the Department of Agriculture.
            </p>
            {showAll && (
              <>
                <p className="text-[#64728F] font-normal text-base  sm:leading-[2rem]">
                  Agricultural research was largely the domain of the local
                  colonial government until World War Il, when the British
                  government sought a more active role in the promotion of
                  science and technology in its colonies, which led to the
                  creation of several regional agricultural research
                  organizations in West Africa that complemented or partially
                  replaced existing facilities and which were part of the West
                  African Inter-territorial Research Organisation (WAIFRO).
                  Three of these: the West African Institute for Oil palm
                  Research (WAIFOR), the West Africa Institute for
                  Trypanosomiasis Research (WAITR), and the West African Stored
                  Products Research Unit (WASPRU) were located in Nigeria. With
                  independence in 1960, the regional institutes were
                  nationalized and the Nigerian Institute for oil palm Research
                  (NIFOR), Nigerian Institute for Trypanosomiasis Research
                  (NITR), Nigerian Stored Products Research Institute (NSPRI)
                  and Cocoa Research Institute of Nigeria (CRIN) came on board.
                </p>
                <p className="text-[#64728F] font-normal text-base  sm:leading-[2rem]">
                  With regional governments formed after Nigeria achieved
                  independence in 1960, research activities were regionalized,
                  which eliminated federal government involvement. The&apos;
                  regional efforts, however, did not yield the expected results
                  prompting the federal government to once again intervene in
                  the 1960s. This was followed by major reorganization and
                  expansion of research institutes in the 1970s and the
                  Agricultural Research Council of Nigeria first came on board
                  under Decree 25 of 1971. The first ARCN along with other
                  sectoral councils were abolished in 1977 and a Nigerian
                  Science and Technology Development Agency established in their
                  place. Further changes came in with the Research Institutes
                  Establishment Order in 1980, under which many research
                  stations and departments were upgraded to national institutes.
                </p>
                <p className="text-[#64728F] font-normal text-base  sm:leading-[2rem]">
                  The research institutes underwent further significant
                  reorganization, including review of their mandates as part of
                  the green revolution programme of the early 1980s. The changes
                  in coordination continued under the military regimes. The
                  Agricultural Sciences Department (ASD) Although agricultural
                  research in Nigeria started in the late 19 century with the
                  establishment of a botanical garden in Lagos, there was always
                  a problem with the coordination of the research centres and
                  institutes. The botanical garden was part of a network of
                  gardens established under British rule, focusing on the
                  introduction of new crops. In 1903 the Forestry and Botanical
                  Department (renamed Agricultural Department) for southern
                  Nigeria was created. In 1912 this was divided into two
                  regional departments resulting in the establishment of a
                  Department of Agriculture for northern Nigeria. Then in 1914,
                  with Nigeria&apos;s unification, the two departments were
                  merged to form a new Department of Agriculture.
                </p>
                <p className="text-[#64728F] font-normal text-base  leading-[2rem]">
                  Progress was made in terms of infrastructure and human
                  resources resulting in new research stations, more research
                  personnel, and a more technical research program that included
                  plant. breeding and plant pathology. Research continued to
                  focus, however, on export crops like oil palm, rubber, cotton
                  and cocoa. The Forestry and Veterinary Departments were also
                  established in 1914, but only began undertaking research
                  activities in 1920. Fishery research came much later, in 1941,
                  with the establishment of the Fisheries Development Branch by
                  the Department of Agriculture.
                </p>
                <p className="text-[#64728F] font-normal text-base  leading-[2rem]">
                  Agricultural research was largely the domain of the local
                  colonial government until World War Il, when the British
                  government sought a more active role in the promotion of
                  science and technology in its colonies, which led to the
                  creation of several regional agricultural research
                  organizations in West Africa that complemented or partially
                  replaced existing facilities and which were part of the West
                  African Inter-territorial Research Organisation (WAIFRO).
                  Three of these: the West African Institute for Oil palm
                  Research (WAIFOR), the West Africa Institute for
                  Trypanosomiasis Research (WAITR), and the West African Stored
                  Products Research Unit (WASPRU) were located in Nigeria. With
                  independence in 1960, the regional institutes were
                  nationalized and the Nigerian Institute for oil palm Research
                  (NIFOR), Nigerian Institute for Trypanosomiasis Research
                  (NITR), Nigerian Stored Products Research Institute (NSPRI)
                  and Cocoa Research Institute of Nigeria (CRIN) came on board.
                </p>
                <p className="text-[#64728F] font-normal text-sm leading-[1.5rem]">
                  With regional governments formed after Nigeria achieved
                  independence in 1960, research activities were regionalized,
                  which eliminated federal government involvement. The&apos;
                  regional efforts, however, did not yield the expected results
                  prompting the federal government to once again intervene in
                  the 1960s. This was followed by major reorganization and
                  expansion of research institutes in the 1970s and the
                  Agricultural Research Council of Nigeria first came on board
                  under Decree 25 of 1971. The first ARCN along with other
                  sectoral councils were abolished in 1977 and a Nigerian
                  Science and Technology Development Agency established in their
                  place. Further changes came in with the Research Institutes
                  Establishment Order in 1980, under which many research
                  stations and departments were upgraded to national institutes.
                </p>
                <p className="text-[#64728F] font-normal text-base  sm:leading-[2rem]">
                  The research institutes underwent further significant
                  reorganization, including review of their mandates as part of
                  the green revolution programme of the early 1980s. The changes
                  in coordination continued under the military regimes. The
                  Agricultural Sciences Department (ASD) which was under the
                  Federal Ministry of Science and Technology was transferred to
                  the National Agency for Science and Engineering Infrastructure
                  (NASENI). But in 1992, the need to re-align agricultural
                  research to the Federal Ministry of Agriculture was accepted
                  by government and the Agricultural Sciences Department along
                  with fifteen Agricultural Research Institutes were formally
                  returned to be fully integrated into their sector. The ASD
                  however could not carry out the coordination functions
                  effectively due to the bureaucratic nature of civil service.
                  Hence, the research system had many challenges. The need for a
                  central body that is not part of the Civil Service to
                  coordinate the NARIs has long been recognised by the
                  government
                </p>
                <p>
                  In 1999 the Federal Military Government signed the
                  Agricultural Research Council of Nigeria decree No 44 of May
                  26, 1999. There was a lull in the take-off activity as
                  government focused its priorities in the implementation of the
                  various Presidential Initiatives and the National Special
                  Programme on Food Security. However, during the Presidential
                  Retreat on Agriculture and Food Security held at Kaduna in
                  December 2005, weak linkages between research and agricultural
                  production were identified as a major constraint. This led to
                  the setting up of a Presidential Advisory Committee (PAC) on
                  Improving Linkages between Research and Production. The PAC
                  has the following Terms of Reference (TOR):
                </p>
              </>
            )}

            <button
              className="self-center bg-[#0C513F0D] rounded-md px-7 py-2 leading-[1.595rem] font-sans font-medium text-sm text-[#0C513F]"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
