import CustomContainer from "@/components/CustomContainer";
import Image from "next/image";

const Meet = () => {
  return (
    <section className="py-16 md:py-24">
      <CustomContainer>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 text-center">
            <h2 className="text-3xl sm:text-5xl text-[#1B222B] font-semibold">
              Governance of ARCN
            </h2>
            <p className="font-normal text-lg text-[#1B222B]">
              ARCN is a corporate body with perpetual succession established as
              a grade &apos;A&apos; parastatal of the Federal Ministry of
              Agriculture and Food Security. It has a Governing Board answerable
              to the Minister of Agriculture and Food Security. It has a
              chairman, members from public and private sectors covering key
              stakeholder groups. The Executive Secretary is the CEO, with seven
              directorates.
            </p>
          </div>

          <div className="flex flex-col text-center gap-8">
            <h3 className="font-semibold text-2xl sm:text-4xl">
              The Management Of The Council
            </h3>

            <div className="flex flex-col gap-10">
              <div className="mt-8 text-center sm:self-center">
                <Image
                  src="/images/image 75.png"
                  alt=""
                  width={250}
                  height={280}
                  className="rounded-full"
                />
                <p className="font-[700] text-[14px] mt-3">
                  Prof. Garba Hamidu Sharubutu
                </p>
                <p className="text-[11px] font-[400] text-[#3D4852]">
                  Executive Secretary 
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 items-center justify-center mt-8">
                <div className="text-center mx-auto">
                  <Image
                    src="/images/image 75 (1).png"
                    alt=""
                    width={170}
                    height={170}
                    className="mx-auto rounded-full"
                  />
                  <p className="font-[700] text-[14px] mt-3">
                    Prof. Bello Zaki Abubakar
                  </p>
                  <p className="text-[11px] font-[400] text-[#3D4852]">
                    Director Extension and Social – Economic Department
                  </p>
                </div>
                <div className="text-center mx-auto">
                  <Image
                    src="/images/image 75 (2).png"
                    alt=""
                    width={170}
                    height={170}
                    className="mx-auto rounded-full"
                  />
                  <p className="font-[700] text-[14px] mt-3">
                    Dr. Kidda Danjuma
                  </p>
                  <p className="text-[11px] font-[400] text-[#3D4852]">
                    Director, Livestock Department.
                  </p>
                </div>
                <div className="text-center mx-auto">
                  <Image
                    src="/images/image 75 (3).png"
                    alt=""
                    width={170}
                    height={170}
                    className="mx-auto rounded-full"
                  />
                  <p className="font-[700] text-[14px] mt-3">Dr. Nuhu Yusuf</p>
                  <p className="text-[11px] font-[400] text-[#3D4852]">
                    Director Knowledge Management and <br></br>
                    Communication Department.
                  </p>
                </div>
                <div className="text-center mx-auto">
                  <Image
                    src="/images/image 75 (4).png"
                    alt=""
                    width={170}
                    height={170}
                    className="mx-auto rounded-full"
                  />
                  <p className="font-[700] text-[14px] mt-3">
                    Dr. Oluwafemi Salako
                  </p>
                  <p className="text-[11px] font-[400] text-[#3D4852]">
                    Director Plant Resources Department.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 items-center text-center justify-center mt-8">
                <div className="text center mx-auto">
                  <Image
                    src="/images/image 75 (5).png"
                    alt=""
                    width={170}
                    height={170}
                    className="mx-auto rounded-full"
                  />
                  <p className="font-[700] text-[14px] mt-3">
                    Kayode I. Aiyedogbon
                  </p>
                  <p className="text-[11px] font-[400] text-[#3D4852]">
                    Ag. Director Administration Department.
                  </p>
                </div>
                <div className="">
                  <Image
                    src="/images/image 75 (6).png"
                    alt=""
                    width={170}
                    height={170}
                    className="mx-auto rounded-full"
                  />
                  <p className="font-[700] text-[14px] mt-3">
                    Woru Adamu Kerenji
                  </p>
                  <p className="text-[11px] font-[400] text-[#3D4852]">
                    Assistant Director Finance and <br></br>
                    Account
                  </p>
                </div>
                <div className="">
                  <Image
                    src="/images/image 75 (7).png"
                    alt=""
                    width={170}
                    height={170}
                    className="mx-auto rounded-full"
                  />
                  <p className="font-[700] text-[14px] mt-3">
                    Dr. Charity Obetta
                  </p>
                  <p className="text-[11px] font-[400] text-[#3D4852]">
                    Ag. Head, Fisheries and Aquaculture <br></br>
                    Department
                  </p>
                </div>
                <div className="">
                  <Image
                    src="/images/image 76.png"
                    alt=""
                    width={170}
                    height={170}
                    className="mx-auto rounded-full"
                  />
                  <p className="font-[700] text-[14px] mt-3">
                    Barr. Shehu Aliyu
                  </p>
                  <p className="text-[11px] font-[400] text-[#3D4852]">
                    AD (Legal) / Legal Advisor. <br></br>
                    LLB. LLM.
                  </p>
                </div>
                <div className="">
                  <Image
                    src="/images/image 75 (8).png"
                    alt=""
                    width={170}
                    height={170}
                    className="mx-auto rounded-full"
                  />
                  <p className="font-[700] text-[14px] mt-3">
                    Dr. Aliyu Shuaibu Madugu
                  </p>
                  <p className="text-[11px] font-[400] text-[#3D4852]">
                    Head of Department Planning Research <br></br>and
                    Statistics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Meet;
