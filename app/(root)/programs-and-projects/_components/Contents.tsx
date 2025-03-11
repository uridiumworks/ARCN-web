import CustomContainer from '@/components/CustomContainer'
import CustomBreadcrumbs from "./Breadcrumbs";
import React from 'react'
import Image from 'next/image';

export default function Contents() {
  return (
    <section>
      <CustomContainer>
        <div className='py-6'>
          <CustomBreadcrumbs text="FASA" />
          <div className='text-[#111827] space-y-11 py-20 lg:px-24'>
            <div className='md:w-11/12 md:mx-auto w-fit'>
              <Image src="/Images/News and Events/fishing.png" alt="programsandprojects" width={1920} height={1080} />
            </div>

            <div className='space-y-7'>
              <p className='font-normal text-base'>The FASA project aims to develop affordable, nutritious fish feeds using innovative local ingredients. The project will enable 5,000 smallholder fish farmers across Nigeria, Kenya, and Zambia to test and adopt these feeds, resulting in increased income, improved food security, and reduced environmental impact.</p>
              <div className=''>
                <p className='font-bold text-base'>Project Duration: <span className='font-normal text-base'>July 2022 - June 2027</span></p>
                <p className='font-bold text-base'>Budget: <span className='font-normal text-base'>80 million Norwegian Krone (NOK)</span></p>
                <p className='font-bold text-base'>Funding Partner: <span className='font-normal text-base'> Norwegian Agency for Development Cooperation (NORAD)</span></p>
              </div>
            </div>

            <div className='space-y-7'>
              <h1 className='font-bold text-3xl md:text-3xl'>Project Partners</h1>
              <div>
                <h1 className='flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <p className='font-bold text-lg'>Lead Organization: <span className='font-normal text-base'>WorldFish</span></p>
                </h1>
                <h1 className='font-bold text-lg flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span>Collaborating Partners:</span>
                </h1>
                <ul>
                  <li className='font-normal text-base flex items-start px-5 gap-2'>
                    <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                    <span> Swedish University of Agricultural Sciences (SLU)</span>
                  </li>
                  <li className='font-normal text-base  flex items-start px-5 gap-2'>
                    <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                    <span> International Centre of Insect Physiology and Ecology (ICIPE)</span>
                  </li>
                  <li className='font-normal text-base flex items-start px-5 gap-2'>
                    <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                    <span>Aller Aqua Africa</span>
                  </li>
                  <li className='font-normal text-base flex items-start px-5 gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span>West and Central African Council for Agricultural Research (CORAF)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h1 className='font-normal text-lg'>In Nigeria, CORAF coordinates the project through the Agricultural Research Council of Nigeria (ARCN), working with:</h1>
                <ul >
                  <li className='font-normal text-base  flex items-start px-5 gap-2'>
                    <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                    <span>Nigerian Institute for Oceanography and Marine Research (NIOMR), Lagos</span>
                  </li>
                  <li className='font-normal text-base  flex items-start px-5 gap-2'>
                    <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                    <span>National Institute for Freshwater Fisheries Research, New Bussa</span>
                  </li>
                  <li className='font-normal text-base  flex items-start px-5 gap-2'>
                    <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                    <span>Agricultural Development Programmes (ADPs) in participating states</span>
                  </li>
                  <li className='font-normal text-base  flex items-start px-5 gap-2'>
                    <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                    <span>Fish farmer associations, feed millers, and ingredient producers</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='space-y-7'>
              <h1 className='font-bold text-3xl md:text-3xl'>Project Goals and Expected Outcomes</h1>
              <div className='space-y-7'>
                <h1 className='flex items-start gap-2'>
                  <p className='font-bold text-lg'>Outcome 1: Enhanced Stakeholder Capacity</p>
                </h1>
                <div>
                  <p>Enhanced capacity of at least two stakeholder groups in the three target countries to integrate best practices toward a more sustainable feed sector and to improve their capacity and to adopt new knowledge on the nutrient requirements of multiple improved strains of tilapia and African catfish.</p>
                  <h4 className='flex items-start px-4 gap-2'>
                    <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                    <p className='font-bold text-base'>Output 1.1: <span className='font-normal text-base'>New knowledge on the type, price and seasonality of local ingredients used in animal (fish) feeds produced in the three focal countries and made available within and outside them.</span></p>
                  </h4>
                  <h4 className='flex items-start px-4 gap-2'>
                    <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                    <p className='font-bold text-base'>Output 1.2: <span className='font-normal text-base'>Viable opportunities and pathways for women and youths to be more integrated into the fish feed sectors identified in three focal countries and made widely available, with a focus on feeds derived from (novel) local ingredients.</span></p>
                  </h4>
                  <h4 className='flex items-start px-4 gap-2'>
                    <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                    <p className='font-bold text-base'>Output 1.3: <span className='font-normal text-base'>Strategies and opportunities to increase environmental sustainability and climate resilience in the fish feed landscape of the three focal countries identified and made widely available, with a focus on feeds derived from (novel) local ingredients</span></p>
                  </h4>
                  <h4 className='flex items-start px-4 gap-2'>
                    <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                    <p className='font-bold text-base'>Output 1.4: <span className='font-normal text-base'>New knowledge on market trends and the commercial viability of feeds derived from (novel) local ingredients produced in the three focal countries and made widely available.</span></p>
                  </h4>
                  <h4 className='flex items-start px-4 gap-2'>
                    <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                    <p className='font-bold text-base'>Output 1.5: <span className='font-normal text-base'>New knowledge and data on the nutrient requirements of improved strains of tilapia and African catfish produced, validated and made widely available</span></p>
                  </h4>
                </div>
              </div>

              <div className='space-y-7'>
                <h1 className='flex items-start gap-2'>
                  <p className='font-bold text-lg'>Outcome 2: Improved Local Ingredients</p>
                </h1>
                <div className='space-y-1'>
                  <p>The quality of at least 15 local ingredients has been improved through various processing techniques, and the ingredients are used by stakeholders in the 3 target countries, including local millers and farmers, to produce at least 27 improved cost-efficient feed formulations to improve aquaculture productivity and resilience:</p>
                  <h4 className='flex items-start px-4 gap-2'>
                    <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                    <p className='font-bold text-base'>Output 2.1: <span className='font-normal text-base'> New data and knowledge on local ingredients generated, used in the formulation of novel fish feeds and made widely available.</span></p>
                  </h4>
                  <h4 className='flex items-start px-4 gap-2'>
                    <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                    <p className='font-bold text-base'>Output 2.2: <span className='font-normal text-base'>Databases and digital solutions developed for use by farmers to formulate and adapt new local feeds on a “real-time” basis</span></p>
                  </h4>
                  <h4 className='flex items-start px-4 gap-2'>
                    <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                    <p className='font-bold text-base'>Output 2.3: <span className='font-normal text-base'>Improved knowledge and capacity of millers, farmers and other stakeholders to use novel ingredients to create the most affordable, highest quality fish feeds that take into account context specific circumstances and needs.</span></p>
                  </h4>
                </div>
              </div>

              <div className='space-y-7'>
                <h1 className='flex items-start gap-2'>
                  <p className='font-bold text-lg'>Outcome 3: Widespread Adoption of Solutions</p>
                </h1>
                <div className='space-y-1'>
                  <p>A total of 5000 farmers directly or indirectly linked to the project access, test and use novel fish feeds and feed solutions using the knowledge and innovations developed by the project, with support of a range of strategic scaling partners and other stakeholders.</p>
                  <h4 className='flex items-start px-4 gap-2'>
                    <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                    <p className='font-bold text-base'>Output 3.1: <span className='font-normal text-base'>Integrated knowledge for enabling the scaling environment (including exploring barriers and bottlenecks to scaling) strategies for scaling up the use of novel feeds and feed management approaches in the three target countries codeveloped with stakeholders and used to guide the selection of country scaling strategies (23).</span></p>
                  </h4>
                  <h4 className='flex items-start px-4 gap-2'>
                    <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                    <p className='font-bold text-base'>Output 3.2: <span className='font-normal text-base'>Strategic partnerships for scaling the use of the projects innovations and knowledge built and made operational with a range of partners in the focal countries (3000 farmers).</span></p>
                  </h4>
                  <h4 className='flex items-start px-4 gap-2'>
                    <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                    <p className='font-bold text-base'>Output 3.3 <span className='font-normal text-base'>Strategic capacity development and public awareness campaigns delivered to widely disseminate knowledge, innovations and tools developed by the project (6000 end-users).</span></p>
                  </h4>
                </div>
              </div>

              <div className='leading-8 text-base font-normal'>
                <ol>
                  <h1>The FASA is a 5-year project that seeks to develop low-cost, highly nutritious fish feeds based on novel ingredients and enable 5,000 small holder fish farmers in three African countries- Nigeria, Kenya and Zambia to test and adopt these ingredients and feeds, leading to growth of the aquaculture industry especially with net benefit of increased household income and food security, and reduced waste and pollution.</h1>
                  <h2>The project is intervening in 3 major areas of aquaculture in Nigeria:</h2>
                  <li className='flex items-start px-4 gap-2'>
                    <span className="mt-2 flex-shrink-0" />
                    <span>1. A scoping study of feed ingredients was conducted in 23 states across the country including the FCT. A total of 65 LGAs were surveyed, where 976 respondents in the categories of fish farmer, feed millers, feed ingredient producers and feed ingredient sellers were interview, to collect data which gave us information on the various types price, seasonality, abundance and sources of various feed ingredients in the country.</span>
                  </li>
                </ol>
                <ol>
                  <h1>Through this study we were able to collect about 15 different low cost, sustainable, local ingredients and forward to the WorldFish Headquarters in Malaysia and Swedish University of Agricultural Sciences for chemical and digestibility analyses, and for best processing techniques which could applied to these ingredients to formulate the desired low-cost, nutritious, sustainable feeds with cheap locally available ingredients</h1>
                  <li className='flex items-start px-4 gap-2'>
                    <span className="mt-2  flex-shrink-0" />
                    <span>1. Research has shown that one of the reasons for low aquaculture production is lack of knowledge of the nutrient requirement of improved species or hybrids of fish. Research has also revealed that improved species have higher nutrient requirement than the parental stock. Over the years, there has been a lot of work on the fish species improvement which, sometimes, leads to development of new strains of fish species. But the improved species are fed the same diet of their parents. This leads to low productivity.</span>
                  </li>
                  <h2>So, FASA project is funding the investigation of nutrient requirement of improved species of African catfish and tilapia. This is the experiment that is being carried out in NIOMR. The findings of this work would help the fish farmers and feed miller know the right diet to feed the improved species of fish, so as to increase productivity and household income.
                  FASA is also working with gender and scaling experts who have been involved in training stakeholders in agriculture. So far, a total of 120 staff have been trained in the Agricultural Research Council of Nigeria, National Agricultural Research Institutes, Federal Colleges of Agriculture, Agricultural Development Projects and fish farmer organizations.</h2>
                </ol>
              </div>
            </div>

            <div className='space-y-7'>
              <h1 className='font-bold text-2xl md:text-3xl'>RESEARCH AREA</h1>
              <div>
                <h1 className='flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span className='font-normal text-base'>Fish Feeds and Nutrition</span>
                </h1>
                <h1 className='flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span className='font-normal text-base'>Gender and Social Inclusion</span>
                </h1>
                <h1 className='flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span className='font-normal text-base'>Climate Change and Environmental Assessment</span>
                </h1>
              </div>
            </div>

            <div className='space-y-7'>
              <h1 className='font-bold text-3xl md:text-3xl'>Progress to Date</h1>
              <div>
                <h1 className='flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span className='font-normal text-base'>Nigeria has completed ingredient scoping study across 23 states and FCT, surveying 976 respondents including fish farmers, feed millers, and ingredient producers</span>
                </h1>
                <h1 className='flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span className='font-normal text-base'>Collected 15 different sustainable, locally available ingredients for analysis at WorldFish Headquarters and the Swedish University of Agricultural Sciences</span>
                </h1>
                <h1 className='flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span className='font-normal text-base'>Completed 2 of 8 planned experiments investigating nutrient requirements of improved fish species</span>
                </h1>
                <h1 className='flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span className='font-normal text-base'>Trained 120 researchers, extension officers, fish farmers, and feed millers on sustainable aquaculture practices</span>
                </h1>
              </div>
            </div>

            <div className='space-y-7'>
              <h1 className='font-bold text-3xl md:text-3xl'>Upcoming Activities</h1>
              <div>
                <h1 className='flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span className='font-normal text-base'>Complete remaining nutrient requirement experiments (November 2024 - December 2025)</span>
                </h1>
                <h1 className='flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span className='font-normal text-base'>Disseminate research findings through on-farm demonstrations, media outreach, bulletins, and other channels (2026)</span>
                </h1>
              </div>
            </div>

            <div className='space-y-9'>
              <h1 className='font-bold text-3xl md:text-3xl'>Impact on Food Security</h1>
              <div className='space-y-7'>
                <h1 className='flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span className='font-normal text-base'>The FASA project contributes directly to Nigeria`s food security goals by transforming food, land, and water systems through science and innovation. By developing sustainable aquatic food systems, the project helps advance the nation`s efforts to end hunger and achieve sustainable development by 2030.</span>
                </h1>
                <h1 className='flex items-start gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-black flex-shrink-0" />
                  <span className='font-normal text-base'>In Nigeria, the project is coordinated by CORAF through the Agricultural Research Council of Nigeria (ARCN). The ARCN is working with research institutes, namely, the Nigerian Institute for Oceanography and Marine Research (NIOMR) in Lagos and the National Institute for Freshwater Fisheries Research, New Bussa to execute the project. Other partners in Nigeria are the Agricultural Development Programme (ADPs) in the states, fish farmer groups, feed millers, ingredient producers and sellers.</span>
                </h1>
              </div>
            </div>

            <div className='space-y-4'>
              <hr className="border-[0.5] border-black my-2" />
              <h2>For more information about the FASA project, contact: The Agricultural Research Council of Nigeria <br />[es@arcn.gov.ng | info@arcn.gov.ng]Related Resources:</h2>
              <div className=' space-y-1 '>
                <h1 className='font-normal text-base flex items-start px-5 gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-slate-900 flex-shrink-0"/>
                  <span className='text-[#2850a5] underline underline-offset-2'>WorldFish Official Website</span>
                </h1>
                <h1 className='font-normal text-base flex items-start px-5 gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-slate-900 flex-shrink-0"/>
                  <span className='text-[#2850a5] underline underline-offset-2'>NORAD Development Cooperation</span>
                </h1>
                <h1 className='font-normal text-base  flex items-start px-5 gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-slate-900 flex-shrink-0"/>
                  <span className='text-[#2850a5] underline underline-offset-2'>CORAF Regional Agricultural Research</span>
                </h1>
                <h1 className='font-normal text-base flex items-start px-5 gap-2'>
                  <span className="mt-2 h-1 w-1 rounded-full bg-slate-900 flex-shrink-0"/>
                  <span className='text-[#2850a5] underline underline-offset-2'>Agricultural Research Council of Nigeria</span>
                </h1>
              </div>
            </div>
            
          </div>
        </div>
      </CustomContainer>
    </section>
  )
}
