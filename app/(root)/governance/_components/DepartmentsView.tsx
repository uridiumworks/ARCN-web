import React, { useState } from 'react'
import Department from './department'
import ServiceDepartment from './service-department'
import FinanceDepartment from './finance-department'
import TransportUnit from './transport-unit'
import RecordsUnit from './records-unit'
import MaintenanceUnit from './maintenance-unit'
import SecurityUnit from './security-unit'
import AccountUnit from './account-unit'
import TechnicalDepartment from './technical-department'
import PlantDepartment from './plant-department'
import AgriculturalPolicy from './agricultural-policy'
import AgriculturalExtensions from './agricultural-extensions'
import AgriculturalBusiness from './agricultural-business'
import Ruminant from './ruminant'
import Animal from './animal'
import Livestock from './livestock'

const DepartmentsView = () => {
    const [tab, setTab] = useState(1)
    const TabComponent = () => {
        switch (tab) {
          case 1:
            return <>
          <Department setTab = {setTab} />
            </>;
          case 2:
            return <>
          <ServiceDepartment/>
          <FinanceDepartment/>
          </>;
          case 3:
            return <>
           <TechnicalDepartment/>
           <PlantDepartment/>
           </>;
          default:
            return;
        }
      };
  return (
    <div>
         {TabComponent()}
       {/* <Department />
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
      <Livestock />  */}
    </div>
  )
}

export default DepartmentsView
