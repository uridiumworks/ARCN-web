"use client";
import React, { useEffect } from 'react'
import Nature from '../_components/Nature'
import Contents from '../_components/Contents'
import Journal from '@/components/Shared/Journal'
import Othernew from '../_components/Othernew'
import { useParams } from 'next/navigation';
import { useContextSelector } from '@/hooks/use-context-selector';

export default function SlugNewsPage() {
  const params = useParams();
  const { id } = params;

  const getNewsDetails = useContextSelector(
    (context) => context.fetchNewsDetails
  );
  const isLoading = useContextSelector(
    (context) => context.isLoadingReports
  );
  const news = useContextSelector((context) => context.newsDetails);

  useEffect(() => {
    getNewsDetails(id as string);
  }, [getNewsDetails, id]);

  return (
    <div>
      <Nature title={isLoading ? 'Loading...' : news?.title || ''} />
      <Contents news={news} />
      {/* <Othernew /> */}
      <Journal />
    </div>
  );
}
