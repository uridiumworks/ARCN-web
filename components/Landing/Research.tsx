"use client";
import { FlowerHandIcon, FarmerForkIcon, TractorIcon } from "@/assets/icons";
import CustomContainer from "../CustomContainer";

const data = [
  {
    title: "Agricultural Research",
    content:
      "Lorem ipsum dolor sit amet consectetur. Faucibus id sed eget nec quisque eu vitae cum quam. Ornare sed commodo arcu feugiat nisl ut vivamus. Suscipit euismod mi malesuada dignissim. Ornare quam non nascetur turpis.Ut in sed et interdum dui fermentum id nisi. Et.",
    icon: <FlowerHandIcon />,
  },
  {
    title: "Agricultural Training",
    content:
      "Lorem ipsum dolor sit amet consectetur. Faucibus id sed eget nec quisque eu vitae cum quam. Ornare sed commodo arcu feugiat nisl ut vivamus. Suscipit euismod mi malesuada dignissim. Ornare quam non nascetur turpis.Ut in sed et interdum dui fermentum id nisi. Et.",
    icon: <FarmerForkIcon />,
  },
  {
    title: "Extension Services",
    content:
      "Lorem ipsum dolor sit amet consectetur. Faucibus id sed eget nec quisque eu vitae cum quam. Ornare sed commodo arcu feugiat nisl ut vivamus. Suscipit euismod mi malesuada dignissim. Ornare quam non nascetur turpis.Ut in sed et interdum dui fermentum id nisi. Et.",
    icon: <TractorIcon />,
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
          <h2 className="text-center font-medium text-3xl sm:text-5xl text-[#111111]">
            Our Core Mandates
          </h2>

          <div className="grid grid-cols-home-research-res gap-10">
            {data.map((el, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div> {el.icon}</div>
                <div className="flex flex-col gap-4  -mt-1">
                  <h3 className="font-medium text-[#1B222B] text-[1.74rem]">
                    {el.title}
                  </h3>
                  <p className="text-sm font-normal text-[#1B222B]">
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
