import React from 'react'
import aboutBanner from '../assets/images/aboutBanner.png';
import importImage from '../assets/images/import1.png';
import importImage1 from '../assets/images/import2.png';
import importImage2 from '../assets/images/import3.png';
import star from '../assets/images/rating.png';
import starsDisable from '../assets/images/starDisable.svg';
import stars from '../assets/images/Stars.svg';
import Footer from '../common/footer';
import Input from '../common/input';
import CustomAccordion from '../common/accordion';
import Navigation from '../routes/Navigation';

function Product() {

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
      <Navigation />
      <div className='realtive w-full py-12 lg:h-full md:h-[300px] sm:h-[250px] bg-about grid lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 s:grid-cols-1 gap-6  bg-no-repeat bg-cover p-4'>
        <div className='col-span-1'></div>
        <div className='col-span-6 mx-auto self-center'>
          <h1 className='font-Zuume lg:text-[88px] md:text-[65px] sm:text-[65px] s:text-[65px] font-bold leading-[0.8] uppercase text-white lg:text-left md:text-center sm:text-center s:text-center w-full'>Join us today for <br />
            <span className='text-[#FF007A]'> free </span> & <span className='text-[#FF007A]'> uncover </span> <br />
            a universe of users</h1>
          <p className='lg:text-left md:text-center sm:text-center s:text-center font-Lufga my-3 text-white'>We are recognized for exceeding client expectations and delivering great results through dedication and ease of process.</p>
          <div className='mb-4 lg:block md:hidden sm:hidden s:hidden'>
            <button className='bg-[#FF007A] text-white mr-3 font-Zuume px-6 py-3 font-light rounded-full text-[18px] rounded-ss-none'>Get Started</button>
            <button className='bg-transparent border border-[#ffffff70] text-white font-Zuume font-light px-6 py-3 rounded-full text-[18px]'>Learn More</button>
          </div>
          <div className='w-full mb-4 lg:hidden md:block sm:block s:block'>
            <button className='bg-[#FF007A] text-white flex justify-center mb-4 mx-auto font-Zuume px-6 py-3 font-light rounded-full text-[18px] rounded-ss-none'>Get Started</button>
            <button className='bg-transparent border flex justify-center mx-auto border-[#ffffff70] text-white font-Zuume font-light px-6 py-3 rounded-full text-[18px]'>Learn More</button>
          </div>
          <hr className='lg:block md:hidden sm:hidden s:hidden' />
          <div className='my-4  lg:flex md:hidden sm:hidden s:hidden'>
            <div className='mr-5'>
              <p className='uppercase font-Zuume text-[#CED8DF]'> <span className='text-white text-2xl font-bold'> 79 M + </span> <br />
                Video Views</p>
            </div>
            <div>
              <p className='uppercase font-Zuume text-[#CED8DF]'> <span className='text-white text-2xl font-bold'> 12 M + </span> <br />
                Followers</p>
            </div>
            <div className='ml-5'>
              <p className='uppercase font-Zuume text-[#CED8DF]'> <span className='text-white text-2xl font-bold'> 32 M + </span> <br />
                Likes</p>
            </div>
          </div>
        </div>
        <div className='col-span-5 my-7'>
          <img src={aboutBanner} alt='about' />
        </div>
      </div>
      <div className='bg-[#061115] py-5'>
        <p className='text-center font-Zuume text-[45px] font-bold leading-[0.8] uppercase text-white w-full'> <span className='text-[#BCC4C7]'> benefits </span> & impact</p>

        <div className='px-12'>
          <div className='grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-8 s:grid-cols-4 gap-4 mt-5'>
            <div className='col-span-4 border border-[#384144] rounded-se-[28px] py-8 px-4 text-white'>
              <img src={importImage} className='w-[80px]' alt='importImage' />
              <p className='text-white font-Lufga my-4'>THE NSFW Social Media</p>
              <p className='text-[#657784] font-Lufga'>ModelSearcher is THE NSFW-friendly Social Media and Search-Site For Your Only Fans – FOR FREE</p>
            </div>
            <div className='col-span-4 border border-[#384144] rounded-se-[28px] py-8 px-4 text-white'>
              <img src={importImage1} className='w-[80px]' alt='importImage' />
              <p className='text-white font-Lufga my-4'>Profile Optimization</p>
              <p className='text-[#657784] font-Lufga'>ModelSearcher is THE NSFW-friendly Social Media and Search-Site For Your Only Fans – FOR FREE</p>
            </div>
            <div className='col-span-4 border border-[#384144] rounded-se-[28px] py-8 px-4 text-white'>
              <img src={importImage2} className='w-[80px]' alt='importImage' />
              <p className='text-white font-Lufga my-4'>Organic Growth</p>
              <p className='text-[#657784] font-Lufga'>ModelSearcher is THE NSFW-friendly Social Media and Search-Site For Your Only Fans – FOR FREE</p>
            </div>
            <div className='col-span-4 border border-[#384144] rounded-se-[28px] py-8 px-4 text-white'>
              <img src={importImage} className='w-[80px]' alt='importImage' />
              <p className='text-white font-Lufga my-4'>THE NSFW Social Media</p>
              <p className='text-[#657784] font-Lufga'>ModelSearcher is THE NSFW-friendly Social Media and Search-Site For Your Only Fans – FOR FREE</p>
            </div>
            <div className='col-span-4 border border-[#384144] rounded-se-[28px] py-8 px-4 text-white'>
              <img src={importImage1} className='w-[80px]' alt='importImage' />
              <p className='text-white font-Lufga my-4'>Profile Optimization</p>
              <p className='text-[#657784] font-Lufga'>ModelSearcher is THE NSFW-friendly Social Media and Search-Site For Your Only Fans – FOR FREE</p>
            </div>
            <div className='col-span-4 border border-[#384144] rounded-se-[28px] py-8 px-4 text-white'>
              <img src={importImage2} className='w-[80px]' alt='importImage' />
              <p className='text-white font-Lufga my-4'>Organic Growth</p>
              <p className='text-[#657784] font-Lufga'>ModelSearcher is THE NSFW-friendly Social Media and Search-Site For Your Only Fans – FOR FREE</p>
            </div>
          </div>
        </div>

        <div className='py-8 px-12'>
          <p className='text-center font-Zuume text-[45px] font-bold leading-[0.8] uppercase text-white w-full'> pricing plans </p>

          <div className='grid lg:grid-cols-12 md:grid-cols-4 sm:grid-cols-4 s:grid-cols-4 gap-4 mt-8'>
            <div className='col-span-4'>
              <div className='border text-white border-[#384144] rounded-se-[40px]'>
                <div className='px-5 py-6 border-b border-[#384144]'>
                  <p className='font-Lufga font-bold text-[#484E57]'>Starter</p>
                  <p className='font-Lufga text-[35px] font-semibold'>Free</p>
                </div>
                <div className='px-5 py-6'>
                  <p className='text-white font-Lufga flex mb-3'><img src={stars} className='mr-3' alt='' /> 40 high-quality dummy point</p>
                  <p className='text-[#657784] font-Lufga flex mb-3'><img src={starsDisable} className='mr-3' alt='' /> 1 different dummy point</p>
                  <p className='text-[#657784] font-Lufga flex'><img src={starsDisable} className='mr-3' alt='' /> 2 hours turnaround time dummy point </p>

                  <button className='font-Lufga border border-[#FF007A] px-6 py-3 mt-5 rounded-full'>Buy Now</button>
                </div>

              </div>
            </div>
            <div className='col-span-4'>
              <div className='border text-white border-[#384144] bg-[#081A20] rounded-se-[40px]'>
                <div className='px-5 py-6 border-b border-[#384144]'>
                  <p className='font-Lufga font-bold text-[#484E57]'>Basic</p>
                  <p className='font-Lufga text-[35px] font-semibold'>$39 /mo</p>
                </div>
                <div className='px-5 py-6'>
                  <p className='text-white font-Lufga flex mb-3'><img src={stars} className='mr-3' alt='' /> 40 high-quality dummy point</p>
                  <p className='text-white font-Lufga flex mb-3'><img src={stars} className='mr-3' alt='' /> 1 different dummy point</p>
                  <p className='text-[#657784] font-Lufga flex'><img src={starsDisable} className='mr-3' alt='' /> 2 hours turnaround time dummy point </p>

                  <button className='border font-Lufga border-[#FF007A] bg-[#FF007A] px-6 py-3 mt-5 rounded-full'>Buy Now</button>
                </div>

              </div>
            </div>
            <div className='col-span-4'>
              <div className='border text-white border-[#384144] rounded-se-[40px]'>
                <div className='px-5 py-6 border-b border-[#384144]'>
                  <p className='font-Lufga font-bold text-[#484E57]'>Premium</p>
                  <p className='font-Lufga text-[35px] font-semibold'>$59 /mo</p>
                </div>
                <div className='px-5 py-6'>
                  <p className='text-white font-Lufga flex mb-3'><img src={stars} className='mr-3' alt='' /> 40 high-quality dummy point</p>
                  <p className='text-white font-Lufga flex mb-3'><img src={stars} className='mr-3' alt='' /> 1 different dummy point</p>
                  <p className='text-white font-Lufga flex'><img src={stars} className='mr-3' alt='' /> 2 hours turnaround time dummy point </p>

                  <button className='border font-Lufga border-[#FF007A] px-6 py-3 mt-5 rounded-full'>Buy Now</button>
                </div>

              </div>
            </div>
          </div>

        </div>

        <div className='mx-12 bg-[#081A20] my-8 px-12 py-8 rounded-3xl'>
          <p className='text-[#8A30E4] font-hallelujah mb-[-15px] text-[21px]'>Testimonials </p>
          <p className='font-Zuume uppercase font-bold text-white text-[65px]'> <span className='text-[#BCC4C7]'> What our </span> clients <span className='text-[#BCC4C7]'> say </span>  about us</p>

          <div className='grid lg:grid-cols-12 md:grid-cols-4 sm:grid-cols-4 s:grid-cols-4  gap-4 mt-5'>
            <div className='col-span-4 border rounded-2xl py-8 px-4'>
              <p className='text-white font-Lufga text-2xl'>Excellent Products <br />
                and good delivery..</p>
              <p className='text-[#657784] font-Lufga'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <img src={star} className='w-[120px] mb-4 mt-8' alt='star' />
              <p className='uppercase font-Zuume text-lg text-white'>Ronit Vinta</p>
            </div>
            <div className='col-span-4 border rounded-2xl py-8 px-4'>
              <p className='text-white font-Lufga text-2xl'>Excellent Products <br />
                and good delivery..</p>
              <p className='text-[#657784] font-Lufga'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <img src={star} className='w-[120px] mb-4 mt-8' alt='star' />
              <p className='uppercase font-Zuume text-lg text-white'>Ronit Vinta</p>
            </div>
            <div className='col-span-4 border rounded-2xl py-8 px-4'>
              <p className='text-white font-Lufga text-2xl'>Excellent Products <br />
                and good delivery..</p>
              <p className='text-[#657784] font-Lufga'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <img src={star} className='w-[120px] mb-4 mt-8' alt='star' />
              <p className='uppercase font-Zuume text-lg text-white'>Ronit Vinta</p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#061115] py-5'>
        <div className='text-center w-[60%] mx-auto'>
          <p className='text-[#58686D] font-hallelujah text-lg my-4'>In just a few simple steps, add your <span className='text-white'> OnlyFans, Instagram </span>  and <br /> <span className='text-white'> TikTok </span> accounts and engage with our eager explorers</p>
        </div>
        <div className='bg-[#081A20] p-8 w-[90%] mx-auto mt-5'>
          <div className='grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 s:grid-cols-6  gap-4'>
            <div className='col-span-6 self-center lg:border-r md:border-0 sm:border-0 s:border-0'>
              <p className='text-[#8A30E4] font-hallelujah mb-3 text-[21px]'>Sign Up </p>
              <p className='font-Zuume uppercase font-bold text-white text-[60px] leading-none'>Get started with Fans Explorer</p>
              <p className='text-[#ffffffa6] font-Lufga mb-5'>Fill in the form and start advertising now:</p>
            </div>
            <div className='col-span-6'>
              <form>
                <div className='grid grid-cols-12 gap-4'>
                  <div className='col-span-6'>
                    <Input type='text' placeholder='Name' />
                  </div>
                  <div className='col-span-6'>
                    <Input type='text' placeholder='Phone Number' />
                  </div>
                  <div className='col-span-6'>
                    <Input type='email' placeholder='Email' />
                  </div>
                  <div className='col-span-6'>
                    <Input type='text' placeholder='Of Link' />
                  </div>
                  <div className='col-span-12'>
                    <button className=' text-center bg-[#FF007A] font-Lufga font-bold text-white w-full p-4 rounded-full '>SIGN UP</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
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

export default Product
