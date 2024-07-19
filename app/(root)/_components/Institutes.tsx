import Image from "next/image";

const Institutes = () => {
    return (
      <main>
        <div className="text-center">
          <h1 className="font-medium text-[46px]">Our Research Institutes</h1>
          <p className="font-normal text-lg">
            Explore our network of research institutes dedicated to advancing
            agricultural innovation and sustainability across Nigeria.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="border">
              <Image src="/assets/Icons/cocoa.svg" width={58} height={58} alt="cocoa" className="w-[58px] h[58px]" />
            <h1>Cocoa Research Institute of Nigeria</h1>
            <p>
              Cocoa Research Institute of Nigeria (CRIN) was established in
              Ibadan, Oyo State on 1st December, 1964 as a successor autonomous
              research organization to the Nigerian Substation of the defunct West
              African Cocoa Research Institute (WACRI) by Nigeria Statute, Act No.
              6 of 1950.
            </p>
          </div>
          <div className="border">
              <Image src="/assets/Icons/rubber.svg" width={58} height={58} alt="rubber" className="w-[58px] h[58px]" /> 
            <h1>Rubber Research Institute of Nigeria</h1>
            <p>
              Rubber research institute of Nigeria is the only Federal Government
              agency in Nigeria that has the mandate to conduct research and
              development on rubber and other latex producing plants of economic
              importance. 
            </p>
          </div>
          <div className="border">
           <Image src="/assets/Icons/national.svg" width={58} height={58} alt="national" className="w-[58px] h[58px]" />  
            <h1>National Horticultural Research Institute</h1>
            <p>
              The National Horticultural Research Institute (Headquarter); located
              in Ibadan was established in 1975 with the assistance of United
              Nations Development Programme in conjunction with food and
              Agricultural Organization as fruits and vegetables research and
              demonstration centre.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="border-2 py-2 px-8 font-Rubik rounded-sm font-normal text-xl md:text-base text-white focus:outline-none border-white "
        >VIEW ALL</button>
      </main>
    );
  };
  
  export default Institutes;