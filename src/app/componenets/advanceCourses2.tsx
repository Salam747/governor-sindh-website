import Image from 'next/image'
import React from 'react'

const AdvanceCourses2 = () => {
  return (
    <div id='courses' className="flex flex-col ml-24 mt-12 space-y-8">
      
      <div className="flex flex-wrap gap-8 justify-start items-start">
        <div className="flex flex-col items-center rounded-lg shadow-xl shadow-black/45 space-y-4">
          <Image
            className="rounded-lg"
            src="/assets/ad5.jpg"
            alt="ad5"
            height={260}
            width={260}
          />
          <h1 className="w-48 h-16 bg-white font-bold mt-4 p-2 text-center rounded-lg ">
            Genomic and Bioinformatics
          </h1>
        </div>

        <div className="flex flex-col items-center rounded-lg shadow-xl shadow-black/45 space-y-4">
          <Image
            className="rounded-lg"
            src="/assets/ad6.jpg"
            alt="ad6"
            height={260}
            width={260}
          />
          <h1 className="w-48 h-[67px]  bg-white font-bold mt-4  text-center rounded-lg ">
            Network Programmability and Automation
          </h1>
        </div>
        </div>
        </div>

  )
}

export default AdvanceCourses2