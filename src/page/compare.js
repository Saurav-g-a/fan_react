import React from 'react'
import product from '../assets/images/profile (1).png';
import product2 from '../assets/images/profile (2).png';
import product1 from '../assets/images/profile (3).png';
import banner from "../assets/images/welcome.png";
import Footer from '../common/footer';
import CustomAccordion from '../common/accordion';
import search from '../assets/images/searchButton.png';
import compare from '../assets/images/comparevs.png';
import Navigation from '../routes/Navigation';
import Carousel from 'react-multi-carousel';
import left from '../assets/images/left.svg';
import CustomRight from '../assets/images/right.svg';

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
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const CustomLeftArrow = ({ onClick }) => (
    <button className="custom-left-arrow absolute bottom-0" onClick={onClick}>
      <img src={left} alt='left' />
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button className="custom-right-arrow absolute bottom-0 right-[-1px]" onClick={onClick}>
      <img src={CustomRight} alt='left' />
    </button>
  );
  return (
    <>
      <Navigation />
      <div className='realtive w-full py-12 lg:h-full md:h-[300px] sm:h-[250px] bg-about grid grid-cols-12 gap-6  bg-no-repeat bg-cover p-4'>
        {/* <div className='col-span-1'></div> */}
        <div className='col-span-7 my-7 bg-campare bg-no-repeat bg-cover'>
          <div className='text-center'>
            <img src={product2} className='w-[100px] mx-auto' alt='product2' />
            <p className='font-Lufga text-white'>Autumn Spooner</p>
          </div>
          <p className='font-hallelujah text-white pl-10'>1st <br />
            Content Creator</p>
          <div className='flex w-1/2 ml-8'>
            <input type="text" className='text-white backdrop-blur-sm border-[1px] w-full p-3 mr-3 rounded-xl border-[#FFFFFF80] bg-transparent' placeholder='Autumn Spooner' />
            <button className='mr-3 bg-transparent'><img src={search} className='w-16 h-12' alt='serch' /></button>
          </div>
          <div className='text-center'>
            <button className='bg-[#FF007A] text-white p-4 mt-2 rounded-full text-lg font-Lufga'>Compare</button>
          </div>
          <div className='w-1/2 ml-auto'>
            <p className='font-hallelujah text-white pl-10'>2nd <br />
              Content Creator</p>
            <div className='flex  ml-8'>
              <input type="text" className='text-white backdrop-blur-sm border-[1px] w-full p-3 mr-3 rounded-xl border-[#FFFFFF80] bg-transparent' placeholder='Autumn Spooner' />
              <button className='mr-3 bg-transparent'><img src={search} className='w-16 h-12' alt='serch' /></button>
            </div>
            <div className='text-center mt-3'>
              <img src={product2} className='w-[100px] mx-auto' alt='product2' />
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

      <div className='bg-[#061115] p-5'>

        <div className='grid grid-cols-12 gap-4 bg-campareSection bg-no-repeat bg-contain py-20	 bg-top'>
          <div className='col-span-12 py-20'></div>
          <div className='col-span-2'></div>
          <div className='col-span-3'>
            <div className='border border-[#FF007A] bg-[#FF007A26] rounded-3xl p-3 mx-5 -rotate-6	'>
              <p className='text-[#FF007A] font-hallelujah text-center mb-3'>1st Content Creator</p>
              <Carousel responsive={responsive}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                renderDotsOutside={true}>
                <img src={product} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                <img src={product2} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                <img src={product1} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
              </Carousel>
              <p className='text-white font-Lufga font-semibold text-center mt-3'>Thomas Blanchais</p>
              <p className='text-[#9F8C95] font-Lufga text-center text-sm'>Autumn Spooner | ZL1BABE x G80BABE</p>
              <p className='text-[#9F8C95] font-Lufga text-center text-[12px]'>Camaro ZL1 & G80 M3 Competition 🏎️</p>
            </div>
          </div>
          <div className='col-span-2 self-center'>
            {/* <img src={compare} className='self-center' alt='compare' /> */}
          </div>
          <div className='col-span-3'>
            <div className='border border-[#FF007A] bg-[#FF007A26] rounded-3xl p-3 mx-5 rotate-6 backdrop-blur-lg	'>
              <p className='text-[#FF007A] font-hallelujah text-center mb-3'>2nd Content Creator</p>
              <Carousel responsive={responsive}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                renderDotsOutside={true}>
                <img src={product} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                <img src={product2} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                <img src={product1} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
              </Carousel>
              <p className='text-white font-Lufga font-semibold text-center mt-3'>Thomas Blanchais</p>
              <p className='text-[#9F8C95] font-Lufga text-center text-sm'>Autumn Spooner | ZL1BABE x G80BABE</p>
              <p className='text-[#9F8C95] font-Lufga text-center text-[12px]'>Camaro ZL1 & G80 M3 Competition 🏎️</p>
            </div>
          </div>
          <div className='col-span-2'></div>
        </div>
      </div>



      <div className='grid grid-cols-12  gap-2 px-12 py-8 bg-[#061115]'>
        <div className='col-span-4 self-center'>
          <p className='font-Zuume uppercase text-white font-bold leading-none text-[65px]'>Welcome to <br />
            <span className='text-[#FF007A]'> FansExplorer </span></p>
          <p className='font-Lufga mb-3 text-white uppercase'>the coolest spot on the web where creators and fans collide in an epic whirlwind of discovery!</p>
          <div className=' mt-3'>
            <button className='bg-[#FF007A] py-2 px-4 text-2xl uppercase text-white font-Zuume rounded-full'>Sign Up Now</button>
          </div>
        </div>
        <div className='col-span-8'>
          <img src={banner} alt='banner1' />
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
        <Footer />
      </div>
    </>
  )

}

export default Compare
