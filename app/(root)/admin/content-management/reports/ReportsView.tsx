"use client";
import React, { useEffect, useState } from "react";
import {
  ContentManagementBlogscolumns,
  Reportscolumns,
} from "../blogs/_components/table/column";
import ReportForm from "./_components/ReportForm";
import ReportsTable from "./_components/table/ReportsTable";
import { useReportsData } from "@/hooks/Reports.hooks";
import Loader from "@/components/Shared/Loader";
import { useReport } from "@/contexts/Reports.context";

const ReportsView = () => {
  const [createNewReport, setCreateNewReport] = useState<boolean>(false);
  const [reportsArray, setReportsArray] = useState<any[]>([]);
  // const [triggerRefetch, setTriggerRefetch] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  // const { loading, reports, error,fetchDashboard } = useReportsData(token);
  const { isLoading, reports, getReports } = useReport();

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken);
  }, []);

  // useEffect(() => {
  //   setTriggerRefetch(!triggerRefetch);
  // }, []);

  useEffect(() => {
    async function fetch() {
      await getReports();
    }
    fetch();
  }, [getReports]);

  useEffect(() => {
    if (reports?.length > 0) {
      setReportsArray(reports);
    }
  }, [reports]);
  // if (loading && reports?.length < 1) return <p>Loading....</p>
  return (
    <>
      <Loader loading={isLoading} />
      <div className="w-full min-h-screen bg-[#f9fafb] p-10">
        <div className="w-full min-h-[70vh]">
          {createNewReport ? (
            <ReportForm
              setCreateNewReport={setCreateNewReport}
              onAction={getReports}
            />
          ) : (
            <>
              <div>
                <p className="text-[#374151] text-[24px] leading-[30px] font-bold font-[Montserrat]">
                  Reports
                </p>
                <p className="text-[#374151] text-[18px] leading-[32.4px] font-normal font-[Montserrat]">
                  Here’s a list of all reports created
                </p>
              </div>
              <div className="w-full min-h-[70vh] bg-white rounded-md mt-5">
                <ReportsTable
                  columns={Reportscolumns}
                  data={reportsArray ?? []}
                  setCreateNewReport={setCreateNewReport}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ReportsView;
