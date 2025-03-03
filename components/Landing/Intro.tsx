import Image from "next/image";
import CustomContainer from "../CustomContainer";

const Intro = () => {
  return (
    <section className="pt-16 md:pt-24">
      <CustomContainer>
        <div className="flex flex-col items-start lg:flex-row sm:items-center lg:items-start gap-12">
          <div className="shrink lg:shrink-0  object-contain relative h-[31.25rem] overflow-hidden rounded-lg">
            <div className="absolute flex flex-col gap-1 py-4 justify-center text-center bg-[#00000061] bottom-0 left-0 w-full">
              <h3 className="text-white font-bold text-base">
                Prof. Garba Hamidu Sharubutu
              </h3>
              <p className="text-white text-opacity-[90%] text-sm leading-[1.5rem] font-medium">
                Executive Secretary 
              </p>
            </div>
            <Image
              src="/Images/Homepage/maleperson-img.png"
              alt="plants"
              width={375}
              height={500}
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-[#171717] text-3xl sm:text-4xl sm:leading-[2.25rem]">
              Welcome to ARCN
            </h2>
            <div className="flex flex-col">
              <p className="text-sm leading-[1.5rem]  text-[#000] font-normal">
                Welcome to the Agricultural Research Council of Nigeria (ARCN),
                Nigeria’s apex organization for coordinating agricultural
                research, training, and extension services. Established by
                Decree 44 of 1999 (now an Act), ARCN leads efforts in
                agricultural innovation and development.
              </p>
              <p className="text-sm leading-[1.5rem]  text-[#000] font-normal">
                Our journey began in the late 19th century with a botanical
                garden in Lagos. Today, we manage a network of National
                Agricultural Research Institutes and Federal Colleges of
                Agriculture nationwide, exemplifying Nigeria’s commitment to
                agricultural excellence.
              </p>
              <p className="text-sm  leading-[1.5rem]  text-[#000] font-normal">
                ARCN seeks to advance food security, economic growth, and rural
                development through research, planning, coordination, and
                regulation. By partnering with researchers, farmers,
                policymakers, and industry stakeholders, we ensure practical
                solutions for Nigerian agriculture.
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-sm  leading-[1.5rem] text-[#000] font-normal">
                  Our focus areas include:
                </p>
                <ul className="flex flex-col gap-2 list-disc ml-6">
                  <li className="text-sm leading-[1.5rem]  text-[#000] font-normal">
                    Advancing evidence-based agricultural policies
                  </li>
                  <li className="text-sm  leading-[1.5rem] text-[#000] font-normal">
                    Promoting innovation and technology in agriculture
                  </li>
                  <li className="text-sm leading-[1.5rem]  text-[#000] font-normal">
                    Building capacity in the agricultural sector
                  </li>
                  <li className="text-sm leading-[1.5rem]  text-[#000] font-normal">
                    Encouraging collaboration with global agricultural
                    scientists
                  </li>
                  <li className="text-sm leading-[1.5rem]  text-[#000] font-normal">
                    Facilitating knowledge transfer from research to practice
                  </li>
                </ul>
              </div>
              <p className="text-sm mt-1 leading-[1.5rem] text-[#000] font-normal">
                Whether you are a researcher, farmer, student, or policymaker,
                ARCN is your partner in transforming Nigerian agriculture.
                Explore our programs and join us in creating a food-secure and
                prosperous Nigeria.
              </p>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Intro;
