import React from 'react'
import MarkdownRenderer from '@/components/Shared/MarkdownRenderer';
import "./content-style.css"
import { DownloadData } from '@/types';
export default function Contents(prop: DownloadData) {
  return (
    <div className="prose prose-green max-w-none inner-content">
    <MarkdownRenderer content={prop.fullDetails} />
  </div>
  )
}
