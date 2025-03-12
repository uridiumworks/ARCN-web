import CustomContainer from '@/components/CustomContainer'
import React from 'react'

export default function Othernew() {
    const data = [
        {
            image: '/Images/News and Events/Place.png',
            title: 'Nature-positive farms on remote hillsides in India show the future of resilient farming',
            description: 'Monsoons are a mixed blessing for rain-dependent farmers in remote mountain villages:the deluges br…',
            date: 'Friday, June 17 2022',
            link: '/newsandevents/Read more',
            
        },
        {
            image: '/Images/News and Events/wheat.png',
            title: 'Maximizing Wheat Productivity with Supplemental Irrigation',
            description: 'A new ICARDA study shows how applying key agri-innovations can strengthen dryland rainfed production…',
            date: 'Friday, June 17 2022',
            link: '/newsandevents/Read more',
            
        },
        {
            image: '/Images/News and Events/Borancow.png',
            title: 'First drone-based measurement of ruminant methane emissions in Africa',
            description: 'Flying a mere nine metres above the grasslands at Kapiti, the International Livestock Research Insti…',
            date: 'Friday, June 17 2022',
            link: '/newsandevents/Read more',
            
        },
    ]
  return (
    <section className='py-10 '>
        <CustomContainer>
            <div className='text-center pb-10'>
                <h1 className='font-bold text-3xl md:text-4xl'>Other News</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {data.map((item, index) => (
                    <div key={index} className='space-y-4'>
                        <img src={item.image} alt={item.title} width={355} height={268.59} />
                        <h2 className='font-semibold text-base'>{item.title}</h2>
                        <p className='font-normal text-sm '>{item.description}</p>
                        <div className='flex gap-3'>
                            <p className='font-bold text-[#999999]'>{item.date}</p>
                            <a href={item.link} className='font-bold text-[#15271C]'>Read more</a>
                        </div>
                    </div>
                ))}
            </div>

        </CustomContainer>
    </section>
  )
}
