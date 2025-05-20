"use client";
import React, { useEffect } from 'react';
import Contents from '../../_components/Contents';
import Banner from '../../_components/Banner';
import { useParams } from 'next/navigation';
import { useContextSelector } from '@/hooks/use-context-selector';
import { ProjectData } from '@/types';

export default function ProjectDetails() {
  const params = useParams();
  const { id } = params;

  const fetchProject = useContextSelector(
    (context) => context.fetchProjectDetails
  );
  const isLoading = useContextSelector(
    (context) => context.isLoadingReports
  );
  const project = useContextSelector((context) => context.project);

  useEffect(() => {
    fetchProject(id as string);
  }, [fetchProject, id]);

  return (
    <div>
      <Banner isLoading={isLoading} title={project?.title ?? 'Loading...'} />

      {isLoading ? (
        <div className="p-4 text-center text-gray-500">Loading project details...</div>
      ) : project ? (
        <Contents {...project as ProjectData} />
      ) : (
        <div className="p-4 text-center text-red-500">Project not found.</div>
      )}
    </div>
  );
}
