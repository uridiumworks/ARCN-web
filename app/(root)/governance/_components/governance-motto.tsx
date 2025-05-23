import React from 'react';
import "./style.css";

const GovernanceMotto = () => {
    return (
        <div className="w-full plant text-white relative  bg-cover font-montserrat bg-black text-left flex flex-col place-content-center h-[19rem] px-4 md:px-56">
            <div className="absolute inset-0 lg:h-[19rem] bg-[#000] bg-opacity-[.65]"></div>
            <div className='relative z-10 w-full max-w-[1100px] mx-auto px-4'>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                    Governance
                </h1>
                <p className="text-sm md:text-lg mt-4 leading-relaxed">
                   ARCN is a corporate body with perpetual succession established as a grade &apos;A&apos; parastatal of the Federal Ministry of Agriculture and Food Security. It has a Governing Board answerable to the Minister of Agriculture and Food Security. It has a chairman, members from public and private sectors covering key stakeholder groups. The Executive Secretary is the CEO, with seven directorates.</p>
               

            </div>
        </div>

    );
 
};

export default GovernanceMotto;
