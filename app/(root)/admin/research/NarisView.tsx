"use client"
import React, { useState } from 'react'
import NarisTable from './_components/table/NarisTable'
import { Nariscolumns } from './_components/table/column'
import NarisForm from './_components/forms/NarisForm'

const NarisView = () => {
  const [createNewInstitute, setCreateNewInstitute] = useState<boolean>(false)

  return (
    <div className='w-full min-h-screen bg-[#f9fafb] p-10'>
            <div className='w-full min-h-[70vh]'>
             {createNewInstitute ? <NarisForm setCreateNewInstitute={setCreateNewInstitute}/> :<>
                <div>
                    <p className='text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]'>Research Institutes</p>
                    <p className='text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]'>Here’s a list of all your research institutes </p>
                </div>
                <div className='w-full min-h-[70vh] bg-white rounded-md mt-5'>
                   <NarisTable columns={Nariscolumns} data={[]} setCreateNewInstitute={setCreateNewInstitute}/>
                </div>
              </>}
            </div>
        </div>
  )
}

export default NarisView