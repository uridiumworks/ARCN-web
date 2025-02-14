import Image from "next/image";
import "./style.css";
const Banner = () => {
  return (
    <section className="w-full picker h-[30rem] lg:h-[34.375rem] place-content-center text-center overflow-hidden">
      <div className="w-full text-white flex flex-col gap-2">
        <h1 className="font-bold  text-[2.5rem]">ABOUT US</h1>
        <p className="font-normal text-lg">
          What you need to know about Agricultural Research Council of Nigeria
        </p>
      </div>
    </section>
  );
};

export default Banner;
