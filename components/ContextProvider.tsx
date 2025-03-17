"use client";
import { BlogsProvider } from "@/contexts/Blogs.context";
import { EventsProvider } from "@/contexts/Events.context";
import { JournalsProvider } from "@/contexts/Journals.context";
import { NewsletterProvider } from "@/contexts/Newsletter.context";
import { ProgramsProvider } from "@/contexts/Programs.context";
import { ProjectsProvider } from "@/contexts/Projects.context";
import { ReportsProvider } from "@/contexts/Reports.context";
import { ResearchCordinationProvider } from "@/contexts/ResearchCoordination.context";
import { ResearchNarisProvider } from "@/contexts/ResearchNaris.context";
import { TrainingEntrepenshipProvider } from "@/contexts/TrainingEnterpenship.context";
import { TrainingFcaProvider } from "@/contexts/TrainingFcas.context";
import { TrainingSupervsionReportProvider } from "@/contexts/TrainingSupervisionReport.context";
import { UsersProvider } from "@/contexts/Users.context";
import React, { ReactNode } from "react";

export default function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <BlogsProvider>
      <JournalsProvider>
        <ReportsProvider>
          <NewsletterProvider>
            <EventsProvider>
              <ResearchCordinationProvider>
                <ResearchNarisProvider>
                  <TrainingFcaProvider>
                    <TrainingSupervsionReportProvider>
                      <TrainingEntrepenshipProvider>
                        <ProjectsProvider>
                          <ProgramsProvider>
                          <UsersProvider>{children}</UsersProvider>
                          </ProgramsProvider>
                        </ProjectsProvider>
                      </TrainingEntrepenshipProvider>
                    </TrainingSupervsionReportProvider>
                  </TrainingFcaProvider>
                </ResearchNarisProvider>
              </ResearchCordinationProvider>
            </EventsProvider>
          </NewsletterProvider>
        </ReportsProvider>
      </JournalsProvider>
    </BlogsProvider>
  );
}
