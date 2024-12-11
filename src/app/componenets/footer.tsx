import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row h-auto lg:h-[400px] w-full mt-16 pt-12 bg-gray-100 justify-center lg:space-x-20 items-start space-y-8 lg:space-y-0 px-4 lg:px-0'>

      <div className='text-[24px] font-medium'>
        Core Courses
        <div className='text-[16px] space-y-4 mt-4'>
          <p>Programming Fundamentals</p>
          <p>Web2 Using NextJS</p>
          <p>Earn as You Learn</p>
        </div>
      </div>

      <div className='text-[24px] font-medium'>
        Advance Courses
        <div className='text-[16px] space-y-4 mt-4'>
          <p>Web 3 and Metaverse</p>
          <p>Cloud-Native Computing</p>
          <p>Artificial Intelligence (AI) and Deep Learning</p>
          <p>Ambient Computing and IoT</p>
          <p>Genomics and Bioinformatics</p>
        </div>
      </div>

      <div className='text-[24px] font-medium'>
        Social Links
        <div className='text-[16px] space-y-4 mt-4'>
          <div className='flex flex-row gap-2'>
            <Link target='_blank' href="/"> 
              <Image src="/assets/fbicon.png" alt='facebook' width={35} height={35} />
            </Link>
            <Link target='_blank' href="/">
              <Image src="/assets/utubeicon.png" alt='youtube' width={35} height={35} />
            </Link>
            <Link target='_blank' href="/">
              <Image src="/assets/twitter.png" alt='twitter' width={35} height={35} />
            </Link>
            <Link target='_blank' href="/">
              <Image src="/assets/instaicon.png" alt='instagram' width={35} height={35} />
            </Link>
            <Link target='_blank' href="/">
              <Image src="/assets/tiktokicon.png" alt='tiktok' width={35} height={35} />
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer;
