"use client"

import React, { useEffect, useState } from 'react'
import { Entreprenuershipcolumns } from './_components/table/columns'
import EntreprenuershipTable from './_components/table/EntreprenuershipTable'
import EntreprenuershipForm from './_components/forms/EntreprenuershipForm'
import { useEntrepreneurshipsData } from '@/hooks/Entrepreneurships.hooks'

const Entreprenuership = () => {
  const [createEntreprenuership, setCreateEntreprenuership] = useState<boolean>(false)
  const [token, setToken] = useState<string | null>(null)
  const [entrepreneurshipArray, setEntrepreneurshipArray] = useState<any[]>([])
  const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false)
  const {loading, entrepreneurships, error} = useEntrepreneurshipsData(token, triggerRefetch)

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken)
},[])

useEffect(() => {
  if(entrepreneurships?.length > 0){
    setEntrepreneurshipArray(entrepreneurships)
  }
},[entrepreneurships])
if (loading && entrepreneurships?.length < 1) return <p>Loading....</p>

  return (
    <div className='w-full min-h-screen bg-[#f9fafb] p-10'>
    <div className='w-full min-h-[70vh]'>
    { createEntreprenuership ? <EntreprenuershipForm setCreateEntreprenuership={setCreateEntreprenuership}/> :  <>
        <div>
            <p className='text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]'>Entrepreneurship Programs</p>
            <p className='text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]'>Here’s a list of all programs created</p>
        </div>
        <div className='w-full min-h-[70vh] bg-white rounded-md mt-5'>
           <EntreprenuershipTable columns={Entreprenuershipcolumns} data={entrepreneurshipArray ?? []} setCreateEntreprenuership={setCreateEntreprenuership}/>
        </div>
      </>}
    </div>
</div>
  )
}

export default Entreprenuership