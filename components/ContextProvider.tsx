"use client";
import { BlogsProvider } from "@/contexts/Blogs.context";
import { EventsProvider } from "@/contexts/Events.context";
import { JournalsProvider } from "@/contexts/Journals.context";
import { NewsletterProvider } from "@/contexts/Newsletter.context";
import { ReportsProvider } from "@/contexts/Reports.context";
import { UsersProvider } from "@/contexts/Users.context";
import React, { ReactNode } from "react";

export default function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <BlogsProvider>
      <JournalsProvider>
        <ReportsProvider>
          <NewsletterProvider>
            <EventsProvider>
              <UsersProvider>{children}</UsersProvider>
            </EventsProvider>
          </NewsletterProvider>
        </ReportsProvider>
      </JournalsProvider>
    </BlogsProvider>
  );
}
