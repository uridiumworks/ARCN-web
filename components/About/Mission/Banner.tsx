
import "./style.css";
const Banner = () => {
  return (
    <section className="w-full picker h-[30rem] lg:h-[19rem] place-content-center text-left overflow-hidden">
      <div className="w-full md:w-[1100px] text-white flex flex-col gap-2 px-56">
        <h2 className="font-bold text-3xl sm:text-[2.5rem] sm:leading-[3.25rem]">ABOUT US</h2>
        <p className="font-normal text-sm">
          What you need to know about Agricultural Research Council of Nigeria
        </p>
      </div>
    </section>
  );
};

export default Banner;
