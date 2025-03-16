"use client";
import { BlogsProvider } from "@/contexts/Blogs.context";
import { EventsProvider } from "@/contexts/Events.context";
import { JournalsProvider } from "@/contexts/Journals.context";
import { NewsletterProvider } from "@/contexts/Newsletter.context";
import { ReportsProvider } from "@/contexts/Reports.context";
import { ResearchCordinationProvider } from "@/contexts/ResearchCoordination.context";
import { ResearchNarisProvider } from "@/contexts/ResearchNaris.context";
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
                  <UsersProvider>{children}</UsersProvider>
                </ResearchNarisProvider>
              </ResearchCordinationProvider>
            </EventsProvider>
          </NewsletterProvider>
        </ReportsProvider>
      </JournalsProvider>
    </BlogsProvider>
  );
}
