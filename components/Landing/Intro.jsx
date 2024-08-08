import plants from "@/assets/Images/Homepage/plants.png";
import Image from "next/image";

const Intro = () => {
  return (
    <main className="w-full">

      <div className="w-[80%] flex flex-col lg:flex-row space-y-9 items-start gap-3 mx-auto">
       
        <Image src={plants} alt="plants" width={426} height={431.16} />

        <div className="space-y-7">
          <h1 className="font-bold text-4xl">Introducing ARCN</h1>
          <p className="text-base">
            The Agricultural Research Council of Nigeria dedicates itself to
            achieving significant improvements in agricultural productivity,
            marketing and competitiveness by generating appropriate technologies
            and policy options, promoting innovation, establishing a knowledge
            management capacity and strengthening the agricultural research
            system. 
          </p>
          <p className="text-base">
            Agricultural research in Nigeria started formally with the
            establishment of a botanical garden in Lagos during the late 19th
            century. This garden was part of a network of gardens established
            under British rule, focusing on the introduction of new crops. In 1903
            the Forestry and Botanical Department (renamed Agricultural
            Department) for southern Nigeria was created. In 1912 this was divided
            into two regional departments resulting in the establishment of a
            Department of Agriculture for northern Nigeria.Then in 1914, with
            Nigeria&aposs unification, the two departments were merged to form a new
            Department of Agriculture.
          </p>

          <button className="px-5 py-2 border w-[271.94px] h-[52px] rounded-lg ">READ MORE</button>
        </div>
      </div>
    </main>
  );
};

export default Intro;
