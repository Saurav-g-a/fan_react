import React from 'react'
import Logo from '../assets/images/Logo.png'
function Footer() {
  return (
    <>
    <div className='grid lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 s:grid-cols-1 gap-4 px-12 py-12'>
      <div className='lg:text-left md:text-center sm:text-center s:text-center'>
        <img src={Logo} className='w-[100px] lg:mx-0 md:mx-auto sm:mx-auto s:mx-auto' alt="logo" />
        <p className='text-[#657784] font-Lufga my-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
        liquam erat volutpat.</p>
      </div>
      <div className='text-[#657784] font-Lufga'>
        <p className='font-bold text-lg mb-4'>Resources</p>
        <ul>
          <li className='mb-2 text-sm'>Blog</li>
          <li className='mb-2 text-sm'>Creator Hub</li>
          <li className='mb-2 text-sm'>Affiliate Program</li>
          <li className='mb-2 text-sm'>TikTok Ebook For Brands</li>
          <li className='mb-2 text-sm'>2024 Influencer Marketing Report</li>
        </ul>
      </div>
      <div className='text-[#657784] font-Lufga'>
      <p className='font-bold text-lg mb-4'>Tools</p>
        <ul>
          <li className='mb-2 text-sm'>Influencer Price Calculator </li>
          <li className='mb-2 text-sm'>Instagram Fake Follower Checker</li>
          <li className='mb-2 text-sm'>TikTok Fake Follower Checker</li>
          <li className='mb-2 text-sm'>Instagram Engagement Rate Calculator</li>
          <li className='mb-2 text-sm'>TikTok Engagement Rate Calculator</li>
          <li className='mb-2 text-sm'>Influencer Campaign Brief Template</li>
          <li className='mb-2 text-sm'>Influencer Contract Template</li>
        </ul>
      </div>
      <div className='text-[#657784] font-Lufga'>
      <p className='font-bold text-lg mb-4'>Discover</p>
        <ul>
          <li className='mb-2 text-sm'>Find Influencers</li>
          <li className='mb-2 text-sm'>Top Influencers</li>
          <li className='mb-2 text-sm'>Search Influencers</li>
          <li className='mb-2 text-sm'>Buy Shoutouts</li>
        </ul>
      </div>
      <div className='text-[#657784] font-Lufga'>
      <p className='font-bold text-lg mb-4'>Support</p>
        <ul>
          <li className='mb-2 text-sm'>Contact Us</li>
          <li className='mb-2 text-sm'>How It Works</li>
          <li className='mb-2 text-sm'>Frequently Asked Questions</li>
        </ul>
      </div>
    </div>
    <div className='px-12 py-3 bg-[#081A20] text-[#657784] lg:flex md:block sm:block s:block justify-between'>
       <p className='font-Lufga'>Copyright © 2024 FANS EXPLORER All rights reserved.</p>
       <div className='flex font-Lufga'>
        <p className='pr-3'>Privacy</p>
           <p className='pr-3'> Terms </p>
            <p>Sitemap</p>
       </div>
    </div>
    </>
  )
}

export default Footer
