"use client";
import { FlowerHandIcon, FarmerForkIcon, TractorIcon } from "@/assets/icons";
import CustomContainer from "../CustomContainer";

const data = [
  {
    title: "Agricultural Research",
    content:
      "Driving innovation in Nigerian agriculture, we bring together brilliant minds to solve farming challenges. From developing better crop varieties to improving livestock production, our research shapes the future of agriculture. We connect Nigerian scientists with global experts, maintain a comprehensive agricultural library, and ensure research directly benefits farmers across the nation.",
    icon: <FlowerHandIcon className="scale-75" />,
  },
  {
    title: "Agricultural Training",
    content:
      "Growing tomorrow's agricultural leaders is our passion! Through our network of Federal Colleges of Agriculture, we equip the next generation with practical skills and knowledge they need to succeed. Whether you're interested in modern farming techniques, livestock management, or agribusiness, our training programs open doors to exciting opportunities in agriculture.",
    icon: <FarmerForkIcon className="scale-75" />,
  },
  {
    title: "Extension Services",
    content:
      "Bridging the gap between research and real-world farming! We work hard to ensure innovative agricultural solutions reach the farmers who need them most. Through workshops, training sessions, and direct community engagement, we're making modern agricultural knowledge accessible to everyone - from small-scale farmers to large agricultural enterprises, transforming research into results.",
    icon: <TractorIcon className="scale-75  " />,
  },
];

// const ResearchOld = () => {
//   return (
//     <main className="flex flex-col gap-4 font-montserrat p-5 w-full lg:flex-row mx-auto lg:w-[900px]">
//       {/* Left Column */}
//       <div className="lg:w-1/2 space-y-8">
//         <div className="p-3">
//           <h1 className="font-semibold text-[28px] md:text-[40px] lg:text-[50px]">
//             Our Mandate
//           </h1>
//           <p className="font-normal text-base md:text-lg">
//             The Council’s core mandate is to plan, manage, coordinate,
//             supervise, and regulate agricultural research, training, and
//             extension activities in the National Agricultural Research
//             Institutes (NARIs) and Federal Colleges of Agriculture (FCAs).The
//             Council’s core mandate is to plan, manage, coordinate, supervise,
//             and regulate agricultural research, training, and extension
//             activities in the National Agricultural Research Institutes (NARIs)
//             and Federal Colleges of Agriculture (FCAs).
//           </p>
//         </div>

//         <div className="relative w-full px-3 md:px-5">
//           <Image
//             src="/Images/Homepage/Search.png"
//             alt="Search"
//             width={568}
//             height={596}
//             className="w-full h-auto object-cover"
//           />
//           <div className="flex border border-hidden font-montserrat py-2 px-4 md:px-5 rounded-[88px] bg-[#000000B2] absolute bottom-5 items-center text-white font-medium text-sm md:text-[16px]">
//             <p>Agricultural Research</p>
//             <FaCaretRight className="ml-2" />
//           </div>
//         </div>

//         <div className="relative w-full px-3 md:px-5">
//           <Image
//             src="/Images/Homepage/Planting.png"
//             alt="Planting"
//             width={568}
//             height={596}
//             className="w-full h-auto object-cover"
//           />
//           <div className="flex border border-hidden py-2 px-4 md:px-5 rounded-[88px] bg-[#000000B2] absolute bottom-5 items-center text-white font-medium text-sm md:text-[16px]">
//             <p>Extension Services</p>
//             <FaCaretRight className="ml-2" />
//           </div>
//         </div>
//       </div>

//       {/* Right Column */}
//       <div className="lg:w-1/2 pt-14 space-y-8">
//         <div className="relative w-full px-3 md:px-5">
//           <Image
//             src="/Images/Homepage/Discuss.png"
//             alt="Discuss"
//             width={568}
//             height={596}
//             className="w-full h-auto object-cover"
//           />
//           <div className="flex border border-hidden py-2 px-4 md:px-5 rounded-[88px] bg-[#000000B2] absolute bottom-5 items-center text-white font-medium text-sm md:text-[16px]">
//             <p>Agricultural Training</p>
//             <FaCaretRight className="ml-2" />
//           </div>
//         </div>

//         <div className="relative w-full px-3 md:px-5">
//           <Image
//             src="/Images/Homepage/Record.png"
//             alt="Record"
//             width={568}
//             height={596}
//             className="w-full h-auto object-cover"
//           />
//           <div className="flex border border-hidden py-2 px-4 md:px-5 rounded-[88px] bg-[#000000B2] absolute bottom-5 items-center text-white font-medium text-sm md:text-[16px]">
//             <p>Agricultural Innovations</p>
//             <FaCaretRight className="ml-2" />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

const Research = () => {
  return (
    <section className="py-16 md:py-24">
      <CustomContainer>
        <div className="flex flex-col gap-12">
          <h2 className="text-center font-medium text-3xl sm:text-5xl sm:leading-[2.875rem] text-[#111111]">
            Our Core Mandates
          </h2>

          <div className="grid grid-cols-home-research-res gap-10">
            {data.map((el, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div> {el.icon}</div>
                <div className="flex flex-col gap-4 ">
                  <h3 className="font-medium text-[#1B222B] text-[1.74rem] leading-[1.74rem]">
                    {el.title}
                  </h3>
                  <p className="text-sm leading-[1.6rem] font-normal text-[#1B222B]">
                    {el.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Research;
