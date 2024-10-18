"use client"

import React, { useState } from 'react'
import PublicationsMotto from './_components/PublicationsMotto'
import Journals from './_components/Journals'
import Newsletter from './_components/Newsletter'
import Reports from './_components/reports'
import FundingMotto from './_components/fundingMotto'
import JournalsMotto from './_components/journals-motto'
import Soil from './_components/Soil'
import Text from './_components/text'


const Publications = () => {
  const [tab, setTab] = useState(1)
  const TabComponent = () => {
    switch (tab) {
      case 1:
        return <>
      <Journals/>
        </>;
      case 2:
        return <>
      <Newsletter/>
      </>;
      case 3:
        return <>
        <Reports/>
        </>;
      default:
        return;
    }
  };

  return (
  <div>
    <PublicationsMotto/>
    <div>
      <ul className='m-2 p-2 w-fit flex justify-start items-center gap-3'>
        <li onClick={() => setTab(1)} className='bg-[#F7F7F7] cursor-pointer hover:text-[#2E7636]'>
          RESEARCH PAPERS/JOURNALS
        </li>
        <li onClick={() => setTab(2)} className='bg-[#F7F7F7] cursor-pointer hover:text-[#2E7636]'>
          NEWLETTERS
        </li>
        <li onClick={() => setTab(3)} className='bg-[#F7F7F7] cursor-pointer hover:text-[#2E7636]'>
          REPORTS
        </li>
      </ul>
    </div>

      {TabComponent()}
      {/* <FundingMotto />
      <JournalsMotto />
      <Journals />
      <Newsletter />
      <PublicationsMotto />
      <Reports />
      <Soil />
      <Text /> */}

    
     </div>
  )
}

export default Publications 



// const Page = () => {
//   return (
//     <div>
//       <PublicationsMotto/>
//       <Journals/>
//       <Newsletter/>
//       <Reports/>
//     </div>
//   )
// }

// export default Page
