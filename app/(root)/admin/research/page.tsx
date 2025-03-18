"use client";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { MouseEventHandler, ReactNode, useEffect, useState } from 'react'
import NarisView from './NarisView';
import CordinationReportView from './CordinatIonReportView';
import { useSearchParams } from 'next/navigation';



type researchPageViewTabType = {
    tab: number;
    name: string;
};

const ResearchPageView = () => {
    const [tab, setTab] = useState(1);
    const researchPageViewTab: Array<researchPageViewTabType> = [
        { tab: 1, name: "NARIS" },
        { tab: 2, name: "CORDINATION REPORT" },
    ];

    const queryParams = useSearchParams();

    useEffect(() => {
      if(queryParams && queryParams.get('tab')?.toLowerCase() === 'cordination'){
        setTab(2)
      }else {
        setTab(1)
      }
  
      return () => {}
    },[queryParams])


    const toggleTab =
        (tab: number): MouseEventHandler<HTMLButtonElement> =>
            () => {
                switch (tab) {
                    case 1:
                        setTab((prev) => (prev = 1));
                        break;
                    case 2:
                        setTab((prev) => (prev = 2));
                        break;
                    default:
                        break;
                }
            };


    const TabComponent = (): ReactNode => {
        switch (tab) {
            case 1:
                return <NarisView />;
            case 2:
                return <CordinationReportView />;
            default:
                return;
        }
    };
    return (
        <section>
            <div className="flex justify-center gap-6 border-b-2 border-gray-100 w-full bg-white p-5">
                {researchPageViewTab?.map((data, index) => {
                    return (
                        <div key={index++}>
                            <Button
                                onClick={toggleTab(data?.tab)}
                                className={cn(
                                    "border-2 border-gray-300 text-[#444444] bg-white hover:bg-[#f2f2f2] hover:text-[#30a85f] transition-all ease-in-out delay-150",
                                    {
                                        "bg-[#f2f2f2] text-[#30a85f] font-semibold":
                                            data?.name === "NARIS" && tab === data?.tab,
                                    },
                                    {
                                        "bg-[#f2f2f2] text-[#30a85f] font-semibold":
                                            data?.name === "CORDINATION REPORT" && tab === data?.tab,
                                    }
                                )}
                            >
                                {data?.name}
                            </Button>
                        </div>
                    );
                })}
            </div>
            <section className="">{TabComponent()}</section>
        </section>
    )
}

export default ResearchPageView