"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { MouseEventHandler, ReactNode, useState } from "react";
import ResetPassword from "./_components/ResetPassword";
import Preferences from "./_components/Preferences";

type settingsPageViewTabType = {
  tab: number;
  name: string;
};

const SettingsPage = () => {
  const [tab, setTab] = useState(1);
  const settingsPageViewTab: Array<settingsPageViewTabType> = [
    { tab: 1, name: "Reset Password" },
    { tab: 2, name: "Preferences" },
  ];

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
        return <ResetPassword />;
      case 2:
        return <Preferences />;
      default:
        return;
    }
  };
  return (
    <div className="w-full min-h-screen bg-[#f9fafb] p-10">
      <div className="w-full min-h-[70vh]">
        <div>
          <p className="text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]">
            Settings
          </p>
          <p className="text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]">
            Manage yur account here
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[auto] mt-5">
          <section>
            <section className="px-10 py-3">
              <div className="w-full flex justify-between items-center">
                <div className="flex gap-6 w-fit">
                  {settingsPageViewTab?.map((data, index) => {
                    return (
                      <div key={index++}>
                        <Button
                          onClick={toggleTab(data?.tab)}
                          className={cn(
                            "rounded-none px-0 py-6 text-gray-500 bg-inherit hover:border-b-[3px] hover:border-[#30a85f] hover:bg-inherit transition-all ease-in-out delay-150",
                            {
                              "border-b-[3px] border-[#30a85f] text-primary-400 font-semibold":
                                data?.name === "Reset Password" &&
                                tab === data?.tab,
                            },
                            {
                              "border-b-[3px] border-[#30a85f] text-primary-400 font-semibold":
                                data?.name === "Preferences" &&
                                tab === data?.tab,
                            }
                          )}
                        >
                          {data?.name}
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
            {/* <Separator className="h-[1px] my-6 bg-gray-300" /> */}
            <section className="">{TabComponent()}</section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
