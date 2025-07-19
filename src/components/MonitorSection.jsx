import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import monitorCardImage from '../assets/monitor-card.webp';

const MonitorSection = () => {
  return (
     <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
        
         {/* left */}
         <div className='md:w-1/2 w-full'>
             <p className='text-green-500 font-semibold'>MONITOR</p>
             <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 md:w-3/5'>Introducing best mobile carousels 
             </h2>
             <p className='text-gray-600 mb-8'>Take control of your time and boost productivity with our intelligent scheduling system. Automate appointements , manage team availability , and deliver exceptional customer experiences through seamless calendar management.</p>
        
             <a href="#" className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>
                Learn More About Monitor
                 <IoIosArrowRoundForward className='size-8' />  
             </a>
         </div>
          {/* right */}
      <div className='md:w-1/2 w-full'>
         <img src={monitorCardImage} alt="schedule image" className='w-full h-auto' />
      </div>
 
      </div>
     </section>
  )
}

export default MonitorSection
