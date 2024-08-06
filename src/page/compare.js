import React from 'react'
import product2 from '../assets/images/profile (1).png';
import banner from "../assets/images/welcome.png";
import Footer from '../common/footer';
import CustomAccordion from '../common/accordion';
import search from '../assets/images/searchButton.png'; 
function Compare() {

    const accordionItems = [
        {
          title: 'Does the plugin support PayPal payments?',
          content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
        },
        {
          title: 'What is the cancelation period?',
          content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
        },
        {
          title: 'Can upgrade to premium package?',
          content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
        },
        {
            title: 'Can I change the theme color?',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
          },
          {
            title: 'How do I purchase your product?',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
          },
          {
            title: 'Do you provide product support?',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
          },
          {
            title: 'Is your product compactible with WordPress 3.0?',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
          },
          {
            title: 'Which currencies do you accept?',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
          },
      ];

  return (
   <>
    <div className='realtive w-full py-12 lg:h-full md:h-[300px] sm:h-[250px] bg-about grid grid-cols-12 gap-6  bg-no-repeat bg-cover p-4'>
        {/* <div className='col-span-1'></div> */}
        <div className='col-span-7 my-7 bg-campare bg-no-repeat bg-cover'>
            <div className='text-center'>
          <img src={product2} className='w-[100px] mx-auto' alt='product2'/>
           <p className='font-Lufga text-white'>Autumn Spooner</p>
            </div>
          <p className='font-hallelujah text-white pl-10'>1st <br/>
          Content Creator</p>
          <div className='flex w-1/2 ml-8'>
                <input type="text" className='text-white backdrop-blur-sm border-[1px] w-full p-3 mr-3 rounded-xl border-[#FFFFFF80] bg-transparent' placeholder='Autumn Spooner'/>
                <button className='mr-3 bg-transparent'><img src={search} className='w-16 h-12' alt='serch'/></button>
            </div>
            <div className='text-center'>
            <button className='bg-[#FF007A] text-white p-4 mt-2 rounded-full text-lg font-Lufga'>Compare</button>
            </div>
            <div className='w-1/2 ml-auto'>
            <p className='font-hallelujah text-white pl-10'>2nd <br/>
          Content Creator</p>
          <div className='flex  ml-8'>
                <input type="text" className='text-white backdrop-blur-sm border-[1px] w-full p-3 mr-3 rounded-xl border-[#FFFFFF80] bg-transparent' placeholder='Autumn Spooner'/>
                <button className='mr-3 bg-transparent'><img src={search} className='w-16 h-12' alt='serch'/></button>
            </div>
            <div className='text-center mt-3'>
          <img src={product2} className='w-[100px] mx-auto' alt='product2'/>
           <p className='font-Lufga text-white'>Autumn Spooner</p>
            </div>
            </div>
        </div>
        <div className='col-span-5 mx-auto self-center py-10'>
            <h1 className='font-Zuume text-[70px] font-bold leading-[0.8] uppercase text-white text-left w-full'><span className='text-[#FF007A]'> Compare </span> 
                 OnlyFans, TikTok <span className='text-[#FF007A]'> and </span> Instagram<span className='text-[#FF007A]'>  adult content creators </span></h1>
            <p className='text-left font-Lufga my-3 text-white'>We are recognized for exceeding client expectations and delivering great results through dedication and ease of process. We are recognized for exceeding client expectations and delivering great results through dedication and ease of process.</p>
        </div>
        
     </div>
     <div className='grid grid-cols-12  gap-2 px-12 py-8 bg-[#061115]'>
        <div className='col-span-4 self-center'>
            <p className='font-Zuume uppercase text-white font-bold leading-none text-[65px]'>Welcome to <br/>
            <span className='text-[#FF007A]'> FansExplorer </span></p>
            <p className='font-Lufga mb-3 text-white uppercase'>the coolest spot on the web where creators and fans collide in an epic whirlwind of discovery!</p>
            <div className=' mt-3'>
                <button className='bg-[#FF007A] py-2 px-4 text-2xl uppercase text-white font-Zuume rounded-full'>Sign Up Now</button>
            </div>
        </div>
        <div className='col-span-8'>
           <img src={banner} alt='banner1'/>
        </div>
    </div>

     <div className='bg-[#061115]'>
        <div className='text-left w-[90%] mx-auto bg-[#081A20] px-8 py-12 rounded-3xl'>
            <div className='w-[80%] mx-auto'>
                <p className='text-[#8A30E4] font-hallelujah mb-[-15px] text-[21px]'>Faq’s </p>
                <p className='font-Zuume uppercase text-white text-[65px]'>frequently asked questions</p>
                <p className='text-[#ffffffa6] font-Lufga mb-5'>Are you ready to make your business more organized? Download Spend.In now!</p>
                <CustomAccordion items={accordionItems} />
            </div>
        </div>
    </div>
     <div className='pt-4 bg-[#061115]'>
        <Footer/>
     </div>
   </>
  )

}

export default Compare
