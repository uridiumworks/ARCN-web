"use client"

import React, { useState } from 'react'
import GovernanceMotto from './_components/governance-motto'
import MeetManagement from './_components/meet-management'
import Department from './_components/department'
import ServiceDepartment from './_components/service-department'
import FinanceDepartment from './_components/finance-department'
import TransportUnit from './_components/transport-unit'
import RecordsUnit from './_components/records-unit'
import MaintenanceUnit from './_components/maintenance-unit'
import SecurityUnit from './_components/security-unit'
import AccountUnit from './_components/account-unit'
import TechnicalDepartment from './_components/technical-department'
import PlantDepartment from './_components/plant-department'
import AgriculturalPolicy from './_components/agricultural-policy'
import AgriculturalExtensions from './_components/agricultural-extensions'
import AgriculturalBusiness from './_components/agricultural-business'
import Ruminant from './_components/ruminant'
import Animal from './_components/animal'
import Livestock from './_components/livestock'
import DepartmentsView from './_components/DepartmentsView'


const Governance = () => {
  const [tab, setTab] = useState(1)
  const TabComponent = () => {
    switch (tab) {
      case 1:
        return <>
      <MeetManagement />
        </>;
      case 2:
        return <>
      <DepartmentsView />
      </>;
      case 3:
        return <></>;
      default:
        return;
    }
  };

  return (
    <div>
      <GovernanceMotto />
      <div>
        <ul className='m-2 p-2 w-fit flex justify-start items-center gap-3'>
          <li onClick={() => setTab(1)} className='bg-[#F7F7F7] cursor-pointer hover:text-[#2E7636]'>
            Management
          </li>
          <li onClick={() => setTab(2)} className='bg-[#F7F7F7] cursor-pointer hover:text-[#2E7636]'>
            Department
          </li>
          <li onClick={() => setTab(3)} className='bg-[#F7F7F7] cursor-pointer hover:text-[#2E7636]'>
            ES Office
          </li>
        </ul>
      </div>
      
      {TabComponent()}
      {/* <MeetManagement />
      <Department />
      <ServiceDepartment />
      <FinanceDepartment />
      <TransportUnit />
      <RecordsUnit />
      <MaintenanceUnit />
      <SecurityUnit />
      <AccountUnit />
      <TechnicalDepartment />
      <PlantDepartment />
      <AgriculturalPolicy />
      <AgriculturalExtensions />
      <AgriculturalBusiness />
      <Ruminant />
      <Animal />
      <Livestock /> */}
    </div>
  )
}

export default Governance
