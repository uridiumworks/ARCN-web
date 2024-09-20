import Image from 'next/image'
import React from 'react'
import SidebarList from './SidebarList'

const Sidebar = () => {
  return (
    <>
    <div
      className={`max-h-screen h-auto sticky bottom-0 top-0 w-72 flex flex-col justify-between font-[500] bg-[#000000] overflow-y-auto`}
      style={{scrollbarWidth: "thin"}}
    >
         <div className="flex justify-center items-center mb-3">
         <Image src="/Images/logo.png" width={150} height={71} alt="" />
        </div>
        <div className='w-full h-screen'>
            <SidebarList/>
        </div>
    </div>
    </>
  )
}

export default Sidebar