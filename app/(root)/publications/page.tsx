import React from 'react'
import PublicationsMotto from './_components/PublicationsMotto'
import Journals from './_components/Journals'
import Newsletter from './_components/Newsletter'
import Reports from './_components/reports'


const Page = () => {
  return (
    <div>
      <PublicationsMotto/>
      <Journals/>
      <Newsletter/>
      <Reports/>
    </div>
  )
}

export default Page
