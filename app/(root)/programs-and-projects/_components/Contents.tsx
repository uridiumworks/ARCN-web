import CustomContainer from '@/components/CustomContainer'
import CustomBreadcrumbs from "./Breadcrumbs";
import React from 'react'
import Image from 'next/image';
import { ProjectData } from '@/types';
import MarkdownRenderer from '@/components/Shared/MarkdownRenderer';
import "./content-style.css"
export default function Contents(prop: ProjectData) {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URLS;
  return (
    <section>
      <CustomContainer>
        <div className='py-6'>
          <CustomBreadcrumbs text={prop.title} />
          <div className='text-[#111827] space-y-11 py-20 lg:px-24'>
            <div className='md:w-full md:mx-auto w-fit'>
              <Image src={BASE_URL + prop.image.url} alt="programsandprojects" width={1920} height={1080} />
            </div>
            <div className="prose max-w-none inner-content">
              <MarkdownRenderer content={prop.details} />
            </div>
            

          </div>
        </div>
      </CustomContainer>
    </section>
  )
}
