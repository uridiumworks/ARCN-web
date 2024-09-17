import React from 'react'
import PublicationsMotto from './_components/PublicationsMotto'
import Journals from './_components/Journals'
import Reports from './_components/reports'
import Newsletter from './_components/Newsletter'


const page = () => {
  return (
    <div>
      <PublicationsMotto/>
      <Journals/>
      <Reports/>
      <Newsletter/>
    </div>
  )
}

export default page
