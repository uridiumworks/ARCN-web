"use client";
import React, { useEffect, useState } from "react";
import SupervisionReportTable from "./_components/table/SupervisionReportTable";
import { SupervisionReportTablecolumns } from "./_components/table/columns";
import SupervisionReportForm from "./_components/forms/SupervisionReportForm";
import { useSupervisionReportsData } from "@/hooks/SupervisionReports.hooks";
import Loader from "@/components/Shared/Loader";

const SupervisionReport = () => {
  const [createSupervisionReport, setCreateSupervisionReport] =
    useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const [supervisionReportsArray, setSupervisionReportsArray] = useState<any[]>(
    []
  );
  const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false);
  const { loading, supervisionReports, error } = useSupervisionReportsData(
    token,
    triggerRefetch
  );

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken);
  }, []);

  useEffect(() => {
    if (supervisionReports?.length > 0) {
      setSupervisionReportsArray(supervisionReports);
    }
  }, [supervisionReports]);
  // if (loading && supervisionReports?.length < 1) return <p>Loading....</p>;

  return (
    <>
    <Loader loading={loading} />
      <div className="w-full min-h-screen bg-[#f9fafb] p-10">
        <div className="w-full min-h-[70vh]">
          {createSupervisionReport ? (
            <SupervisionReportForm
              setCreateSupervisionReport={setCreateSupervisionReport}
            />
          ) : (
            <>
              <div>
                <p className="text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]">
                  Supervision Report
                </p>
                <p className="text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]">
                  Here’s a list of all reports created
                </p>
              </div>
              <div className="w-full min-h-[70vh] bg-white rounded-md mt-5">
                <SupervisionReportTable
                  columns={SupervisionReportTablecolumns}
                  data={supervisionReportsArray ?? []}
                  setCreateSupervisionReport={setCreateSupervisionReport}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SupervisionReport;
