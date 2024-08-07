import React from 'react'
import search from '../assets/images/Vector.svg';
import right from '../assets/images/arrow.svg';
import Navigation from '../routes/Navigation';
import categories from '../assets/images/categories.png';
import categories1 from '../assets/images/categories1.png';
import categories2 from '../assets/images/categories2.png';
import categories3 from '../assets/images/categories3.png';
import product from '../assets/images/profile (1).png';
import product2 from '../assets/images/profile (2).png';
import product1 from '../assets/images/profile (3).png';
import product3 from '../assets/images/profile (4).png';
import product4 from '../assets/images/profile (5).png';
import product5 from '../assets/images/profile (6).png';
import product6 from '../assets/images/profile (7).png';
import product7 from '../assets/images/profile (8).png';
import product8 from '../assets/images/profile (9).png';
import banner from '../assets/images/banner1.png';
import icons from '../assets/images/icons1.svg';
import love from '../assets/images/icons2.svg';
import insta from '../assets/images/insta.svg';
import tiktok from '../assets/images/tiktok.svg';
import left from '../assets/images/left.svg';
import CustomRight from '../assets/images/right.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from '../common/footer';
import CustomAccordion from '../common/accordion';
function Home() {

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
            <div className='realtive w-full lg:h-full md:h-[300px] sm:h-[250px] bg-hero-pattern flex  bg-no-repeat bg-cover min-h-screen p-4'>
                <div className='self-center w-[60%] mx-auto'>
                    <h1 className='font-Zuume lg:text-[110px] md:text-[55px] sm:text-[35px] font-[900] leading-[0.8] uppercase text-white text-center w-full'>Content Creator <br />
                        Comparison</h1>
                    <p className='text-center font-Lufga my-3 text-white'>We are recognized for exceeding client expectations and delivering <br /> great results through dedication and ease of process.</p>
                    <div className='flex'>
                        <input type="text" className='backdrop-blur-sm border-[1px] w-full p-3 mr-3 rounded-xl border-[#FFFFFF80] bg-transparent' placeholder='Content Creator...' />
                        <button className='backdrop-blur-sm border-[1px] p-3 mr-3 rounded-xl border-[#FFFFFF80] bg-transparent'><img src={search} alt='serch' /></button>
                    </div>
                </div>
            </div>
            <div className='bg-[#061115]'>
                <div className='w-[90%] mx-auto '>
                    <div className='grid lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-2 s:grid-cols-2  gap-2 p-8 bg-[#061115]'>
                        <div className='lg:col-span-4 md:col-span-2 sm:col-span-2 s:col-span-2 self-center'>
                            <p className='text-[#8A30E4] font-hallelujah mb-[-15px] text-[21px]'>Favorite</p>
                            <p className='font-Zuume uppercase text-white text-[45px]'>categories</p>
                            <p className='font-Lufga mb-3 text-white'>We are recognized for exceeding client expectations and delivering great results through dedication and ease of process.</p>
                        </div>
                        <div className='col-span-2'>
                            <div className='mx-2 bg-transparent'>
                                <img src={categories} alt='Fashion' />
                                <div className='bg-[#0D161A] px-2 text-white flex justify-between py-2 border-[1px] border-t-0 border-[#384144]'>
                                    <p className='font-Lufga'> Fashion </p>
                                    <img src={right} alt='Fashion' />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <div className='mx-2'>
                                <img src={categories1} alt='Fashion' />
                                <div className='bg-[#0D161A] px-2 text-white flex justify-between py-2 border-[1px] border-t-0 border-[#384144]'>
                                    <p className='font-Lufga'> Music & Dance </p>
                                    <img src={right} alt='Fashion' />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <div className='mx-2'>
                                <img src={categories2} alt='Fashion' />
                                <div className='bg-[#0D161A] px-2 text-white flex justify-between py-2 border-[1px] border-t-0 border-[#384144]'>
                                    <p className='font-Lufga'> Beauty </p>
                                    <img src={right} alt='Fashion' />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <div className='mx-2'>
                                <img src={categories3} alt='Fashion' />
                                <div className='bg-[#0D161A] px-2 text-white flex justify-between py-2 border-[1px] border-t-0 border-[#384144]'>
                                    <p className='font-Lufga'> Travel </p>
                                    <img src={right} alt='Fashion' />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='px-12 py-8 bg-[#061115]'>
                        <div className='text-center'>
                            <p className='text-[#8A30E4] font-hallelujah mb-[-15px] text-[21px]'>Creators </p>
                            <p className='font-Zuume uppercase text-white text-[45px]'>Profiles</p>
                        </div>
                        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 s:grid-cols-1 gap-3'>
                            <div className='p-1 border rounded-se-[28px] border-[#e7e7e763]'>
                                <div className='bg-[#0D161A] relative rounded-se-[28px]'>
                                    <Carousel responsive={responsive}
                                        customLeftArrow={<CustomLeftArrow />}
                                        customRightArrow={<CustomRightArrow />}
                                        renderDotsOutside={true}>
                                        <img src={product} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product2} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                    </Carousel>
                                    <div className='bg-[#071116bd] flex absolute top-0 right-0 rounded-se-[18px] rounded-es-[18px] p-[15px]'>
                                        <img src={love} className='cursor-pointer' alt='red' />
                                        <div className='h-[16px] w-[1px] mx-3 bg-white'></div>
                                        <img src={icons} className='cursor-pointer' alt='red' />
                                    </div>
                                    <div className='font-Lufga px-3 text-[#ffffffa6] py-3'>
                                        <div className='flex justify-between w-full '>
                                            <p className='mt-2 mb-2 text-[#ffff] font-Lufga font-medium text-lg'>Autumn Spooner</p>
                                            <div className='flex justify-between w-1/5 self-center'>
                                                <img src={insta} className='cursor-pointer w-5 h-5' alt='red' />
                                                <img src={tiktok} className='cursor-pointer w-5 h-5' alt='red' />
                                            </div>
                                        </div>
                                        <div className='text-[#ffffffa6] flex justify-around py-3'>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Posts</p>
                                            </div>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Followers</p>
                                            </div>
                                            <div className=''>
                                                <p>96 <br />
                                                    Following</p>
                                            </div>
                                        </div>
                                        <p className='text-[#ffffffa6] font-semibold text-sm font-Lufga'>Autumn Spooner | ZL1BABE x G80BABE</p>
                                        <p className='font-[300] text-sm mb-3'>Video creator</p>
                                        <p className='text-sm'>Camaro ZL1 & G80 M3 Competition 🏎️</p>
                                        <p className='text-sm'>PR: autumnspoonerzl1@gmail.com</p>
                                        <p className='text-sm'>I do YouTube :) click the link!</p>
                                        <p className='text-sm'>🔗 superlink.io/zl1babe</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-1 border rounded-se-[28px] border-[#e7e7e763]'>
                                <div className='bg-[#0D161A] relative rounded-se-[28px]'>
                                    <Carousel responsive={responsive}
                                        customLeftArrow={<CustomLeftArrow />}
                                        customRightArrow={<CustomRightArrow />}
                                        renderDotsOutside={true}>
                                        <img src={product1} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product2} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                    </Carousel>
                                    <div className='bg-[#071116bd] flex absolute top-0 right-0 rounded-se-[18px] rounded-es-[18px] p-[15px]'>
                                        <img src={love} className='cursor-pointer' alt='red' />
                                        <div className='h-[16px] w-[1px] mx-3 bg-white'></div>
                                        <img src={icons} className='cursor-pointer' alt='red' />
                                    </div>
                                    <div className='font-Lufga px-3 text-[#ffffffa6] py-3'>
                                        <div className='flex justify-between w-full '>
                                            <p className='mt-2 mb-2 text-[#ffff] font-Lufga font-medium text-lg'>Autumn Spooner</p>
                                            <div className='flex justify-between w-1/5 self-center'>
                                                <img src={insta} className='cursor-pointer w-5 h-5' alt='red' />
                                                <img src={tiktok} className='cursor-pointer w-5 h-5' alt='red' />
                                            </div>
                                        </div>
                                        <div className='text-[#ffffffa6] flex justify-around py-3'>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Posts</p>
                                            </div>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Followers</p>
                                            </div>
                                            <div className=''>
                                                <p>96 <br />
                                                    Following</p>
                                            </div>
                                        </div>
                                        <p className='text-[#ffffffa6] font-semibold text-sm font-Lufga'>Autumn Spooner | ZL1BABE x G80BABE</p>
                                        <p className='font-[300] text-sm mb-3'>Video creator</p>
                                        <p className='text-sm'>Camaro ZL1 & G80 M3 Competition 🏎️</p>
                                        <p className='text-sm'>PR: autumnspoonerzl1@gmail.com</p>
                                        <p className='text-sm'>I do YouTube :) click the link!</p>
                                        <p className='text-sm'>🔗 superlink.io/zl1babe</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-1 border rounded-se-[28px] border-[#e7e7e763]'>
                                <div className='bg-[#0D161A] relative rounded-se-[28px]'>
                                    <Carousel responsive={responsive}
                                        customLeftArrow={<CustomLeftArrow />}
                                        customRightArrow={<CustomRightArrow />}
                                        renderDotsOutside={true}>
                                        <img src={product2} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product1} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                    </Carousel>
                                    <div className='bg-[#071116bd] flex absolute top-0 right-0 rounded-se-[18px] rounded-es-[18px] p-[15px]'>
                                        <img src={love} className='cursor-pointer' alt='red' />
                                        <div className='h-[16px] w-[1px] mx-3 bg-white'></div>
                                        <img src={icons} className='cursor-pointer' alt='red' />
                                    </div>
                                    <div className='font-Lufga px-3 text-[#ffffffa6] py-3'>
                                        <div className='flex justify-between w-full '>
                                            <p className='mt-2 mb-2 text-[#ffff] font-Lufga font-medium text-lg'>Autumn Spooner</p>
                                            <div className='flex justify-between w-1/5 self-center'>
                                                <img src={insta} className='cursor-pointer w-5 h-5' alt='red' />
                                                <img src={tiktok} className='cursor-pointer w-5 h-5' alt='red' />
                                            </div>
                                        </div>
                                        <div className='text-[#ffffffa6] flex justify-around py-3'>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Posts</p>
                                            </div>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Followers</p>
                                            </div>
                                            <div className=''>
                                                <p>96 <br />
                                                    Following</p>
                                            </div>
                                        </div>
                                        <p className='text-[#ffffffa6] font-semibold text-sm font-Lufga'>Autumn Spooner | ZL1BABE x G80BABE</p>
                                        <p className='font-[300] text-sm mb-3'>Video creator</p>
                                        <p className='text-sm'>Camaro ZL1 & G80 M3 Competition 🏎️</p>
                                        <p className='text-sm'>PR: autumnspoonerzl1@gmail.com</p>
                                        <p className='text-sm'>I do YouTube :) click the link!</p>
                                        <p className='text-sm'>🔗 superlink.io/zl1babe</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-1 border rounded-se-[28px] border-[#e7e7e763]'>
                                <div className='bg-[#0D161A] relative rounded-se-[28px]'>
                                    <Carousel responsive={responsive}
                                        customLeftArrow={<CustomLeftArrow />}
                                        customRightArrow={<CustomRightArrow />}
                                        renderDotsOutside={true}>
                                        <img src={product3} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product2} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product1} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                    </Carousel>
                                    <div className='bg-[#071116bd] flex absolute top-0 right-0 rounded-se-[18px] rounded-es-[18px] p-[15px]'>
                                        <img src={love} className='cursor-pointer' alt='red' />
                                        <div className='h-[16px] w-[1px] mx-3 bg-white'></div>
                                        <img src={icons} className='cursor-pointer' alt='red' />
                                    </div>
                                    <div className='font-Lufga px-3 text-[#ffffffa6] py-3'>
                                        <div className='flex justify-between w-full '>
                                            <p className='mt-2 mb-2 text-[#ffff] font-Lufga font-medium text-lg'>Autumn Spooner</p>
                                            <div className='flex justify-between w-1/5 self-center'>
                                                <img src={insta} className='cursor-pointer w-5 h-5' alt='red' />
                                                <img src={tiktok} className='cursor-pointer w-5 h-5' alt='red' />
                                            </div>
                                        </div>
                                        <div className='text-[#ffffffa6] flex justify-around py-3'>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Posts</p>
                                            </div>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Followers</p>
                                            </div>
                                            <div className=''>
                                                <p>96 <br />
                                                    Following</p>
                                            </div>
                                        </div>
                                        <p className='text-[#ffffffa6] font-semibold text-sm font-Lufga'>Autumn Spooner | ZL1BABE x G80BABE</p>
                                        <p className='font-[300] text-sm mb-3'>Video creator</p>
                                        <p className='text-sm'>Camaro ZL1 & G80 M3 Competition 🏎️</p>
                                        <p className='text-sm'>PR: autumnspoonerzl1@gmail.com</p>
                                        <p className='text-sm'>I do YouTube :) click the link!</p>
                                        <p className='text-sm'>🔗 superlink.io/zl1babe</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-1 border rounded-se-[28px] border-[#e7e7e763]'>
                                <div className='bg-[#0D161A] relative rounded-se-[28px]'>
                                    <Carousel responsive={responsive}
                                        customLeftArrow={<CustomLeftArrow />}
                                        customRightArrow={<CustomRightArrow />}
                                        renderDotsOutside={true}>
                                        <img src={product4} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product2} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product1} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                    </Carousel>
                                    <div className='bg-[#071116bd] flex absolute top-0 right-0 rounded-se-[18px] rounded-es-[18px] p-[15px]'>
                                        <img src={love} className='cursor-pointer' alt='red' />
                                        <div className='h-[16px] w-[1px] mx-3 bg-white'></div>
                                        <img src={icons} className='cursor-pointer' alt='red' />
                                    </div>
                                    <div className='font-Lufga px-3 text-[#ffffffa6] py-3'>
                                        <div className='flex justify-between w-full '>
                                            <p className='mt-2 mb-2 text-[#ffff] font-Lufga font-medium text-lg'>Autumn Spooner</p>
                                            <div className='flex justify-between w-1/5 self-center'>
                                                <img src={insta} className='cursor-pointer w-5 h-5' alt='red' />
                                                <img src={tiktok} className='cursor-pointer w-5 h-5' alt='red' />
                                            </div>
                                        </div>
                                        <div className='text-[#ffffffa6] flex justify-around py-3'>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Posts</p>
                                            </div>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Followers</p>
                                            </div>
                                            <div className=''>
                                                <p>96 <br />
                                                    Following</p>
                                            </div>
                                        </div>
                                        <p className='text-[#ffffffa6] font-semibold text-sm font-Lufga'>Autumn Spooner | ZL1BABE x G80BABE</p>
                                        <p className='font-[300] text-sm mb-3'>Video creator</p>
                                        <p className='text-sm'>Camaro ZL1 & G80 M3 Competition 🏎️</p>
                                        <p className='text-sm'>PR: autumnspoonerzl1@gmail.com</p>
                                        <p className='text-sm'>I do YouTube :) click the link!</p>
                                        <p className='text-sm'>🔗 superlink.io/zl1babe</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-1 border rounded-se-[28px] border-[#e7e7e763]'>
                                <div className='bg-[#0D161A] relative rounded-se-[28px]'>
                                    <Carousel responsive={responsive}
                                        customLeftArrow={<CustomLeftArrow />}
                                        customRightArrow={<CustomRightArrow />}
                                        renderDotsOutside={true}>
                                        <img src={product5} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product2} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                    </Carousel>
                                    <div className='bg-[#071116bd] flex absolute top-0 right-0 rounded-se-[18px] rounded-es-[18px] p-[15px]'>
                                        <img src={love} className='cursor-pointer' alt='red' />
                                        <div className='h-[16px] w-[1px] mx-3 bg-white'></div>
                                        <img src={icons} className='cursor-pointer' alt='red' />
                                    </div>
                                    <div className='font-Lufga px-3 text-[#ffffffa6] py-3'>
                                        <div className='flex justify-between w-full '>
                                            <p className='mt-2 mb-2 text-[#ffff] font-Lufga font-medium text-lg'>Autumn Spooner</p>
                                            <div className='flex justify-between w-1/5 self-center'>
                                                <img src={insta} className='cursor-pointer w-5 h-5' alt='red' />
                                                <img src={tiktok} className='cursor-pointer w-5 h-5' alt='red' />
                                            </div>
                                        </div>
                                        <div className='text-[#ffffffa6] flex justify-around py-3'>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Posts</p>
                                            </div>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Followers</p>
                                            </div>
                                            <div className=''>
                                                <p>96 <br />
                                                    Following</p>
                                            </div>
                                        </div>
                                        <p className='text-[#ffffffa6] font-semibold text-sm font-Lufga'>Autumn Spooner | ZL1BABE x G80BABE</p>
                                        <p className='font-[300] text-sm mb-3'>Video creator</p>
                                        <p className='text-sm'>Camaro ZL1 & G80 M3 Competition 🏎️</p>
                                        <p className='text-sm'>PR: autumnspoonerzl1@gmail.com</p>
                                        <p className='text-sm'>I do YouTube :) click the link!</p>
                                        <p className='text-sm'>🔗 superlink.io/zl1babe</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-1 border rounded-se-[28px] border-[#e7e7e763]'>
                                <div className='bg-[#0D161A] relative rounded-se-[28px]'>
                                    <Carousel responsive={responsive}
                                        customLeftArrow={<CustomLeftArrow />}
                                        customRightArrow={<CustomRightArrow />}
                                        renderDotsOutside={true}>
                                        <img src={product6} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product2} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                    </Carousel>
                                    <div className='bg-[#071116bd] flex absolute top-0 right-0 rounded-se-[18px] rounded-es-[18px] p-[15px]'>
                                        <img src={love} className='cursor-pointer' alt='red' />
                                        <div className='h-[16px] w-[1px] mx-3 bg-white'></div>
                                        <img src={icons} className='cursor-pointer' alt='red' />
                                    </div>
                                    <div className='font-Lufga px-3 text-[#ffffffa6] py-3'>
                                        <div className='flex justify-between w-full '>
                                            <p className='mt-2 mb-2 text-[#ffff] font-Lufga font-medium text-lg'>Autumn Spooner</p>
                                            <div className='flex justify-between w-1/5 self-center'>
                                                <img src={insta} className='cursor-pointer w-5 h-5' alt='red' />
                                                <img src={tiktok} className='cursor-pointer w-5 h-5' alt='red' />
                                            </div>
                                        </div>
                                        <div className='text-[#ffffffa6] flex justify-around py-3'>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Posts</p>
                                            </div>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Followers</p>
                                            </div>
                                            <div className=''>
                                                <p>96 <br />
                                                    Following</p>
                                            </div>
                                        </div>
                                        <p className='text-[#ffffffa6] font-semibold text-sm font-Lufga'>Autumn Spooner | ZL1BABE x G80BABE</p>
                                        <p className='font-[300] text-sm mb-3'>Video creator</p>
                                        <p className='text-sm'>Camaro ZL1 & G80 M3 Competition 🏎️</p>
                                        <p className='text-sm'>PR: autumnspoonerzl1@gmail.com</p>
                                        <p className='text-sm'>I do YouTube :) click the link!</p>
                                        <p className='text-sm'>🔗 superlink.io/zl1babe</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-1 border rounded-se-[28px] border-[#e7e7e763]'>
                                <div className='bg-[#0D161A] relative rounded-se-[28px]'>
                                    <Carousel responsive={responsive}
                                        customLeftArrow={<CustomLeftArrow />}
                                        customRightArrow={<CustomRightArrow />}
                                        renderDotsOutside={true}>
                                        <img src={product7} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product2} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                    </Carousel>
                                    <div className='bg-[#071116bd] flex absolute top-0 right-0 rounded-se-[18px] rounded-es-[18px] p-[15px]'>
                                        <img src={love} className='cursor-pointer' alt='red' />
                                        <div className='h-[16px] w-[1px] mx-3 bg-white'></div>
                                        <img src={icons} className='cursor-pointer' alt='red' />
                                    </div>
                                    <div className='font-Lufga px-3 text-[#ffffffa6] py-3'>
                                        <div className='flex justify-between w-full '>
                                            <p className='mt-2 mb-2 text-[#ffff] font-Lufga font-medium text-lg'>Autumn Spooner</p>
                                            <div className='flex justify-between w-1/5 self-center'>
                                                <img src={insta} className='cursor-pointer w-5 h-5' alt='red' />
                                                <img src={tiktok} className='cursor-pointer w-5 h-5' alt='red' />
                                            </div>
                                        </div>
                                        <div className='text-[#ffffffa6] flex justify-around py-3'>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Posts</p>
                                            </div>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Followers</p>
                                            </div>
                                            <div className=''>
                                                <p>96 <br />
                                                    Following</p>
                                            </div>
                                        </div>
                                        <p className='text-[#ffffffa6] font-semibold text-sm font-Lufga'>Autumn Spooner | ZL1BABE x G80BABE</p>
                                        <p className='font-[300] text-sm mb-3'>Video creator</p>
                                        <p className='text-sm'>Camaro ZL1 & G80 M3 Competition 🏎️</p>
                                        <p className='text-sm'>PR: autumnspoonerzl1@gmail.com</p>
                                        <p className='text-sm'>I do YouTube :) click the link!</p>
                                        <p className='text-sm'>🔗 superlink.io/zl1babe</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-1 border rounded-se-[28px] border-[#e7e7e763]'>
                                <div className='bg-[#0D161A] relative rounded-se-[28px]'>
                                    <Carousel responsive={responsive}
                                        customLeftArrow={<CustomLeftArrow />}
                                        customRightArrow={<CustomRightArrow />}
                                        renderDotsOutside={true}>
                                        <img src={product8} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product2} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product1} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                    </Carousel>
                                    <div className='bg-[#071116bd] flex absolute top-0 right-0 rounded-se-[18px] rounded-es-[18px] p-[15px]'>
                                        <img src={love} className='cursor-pointer' alt='red' />
                                        <div className='h-[16px] w-[1px] mx-3 bg-white'></div>
                                        <img src={icons} className='cursor-pointer' alt='red' />
                                    </div>
                                    <div className='font-Lufga px-3 text-[#ffffffa6] py-3'>
                                        <div className='flex justify-between w-full '>
                                            <p className='mt-2 mb-2 text-[#ffff] font-Lufga font-medium text-lg'>Autumn Spooner</p>
                                            <div className='flex justify-between w-1/5 self-center'>
                                                <img src={insta} className='cursor-pointer w-5 h-5' alt='red' />
                                                <img src={tiktok} className='cursor-pointer w-5 h-5' alt='red' />
                                            </div>
                                        </div>
                                        <div className='text-[#ffffffa6] flex justify-around py-3'>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Posts</p>
                                            </div>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Followers</p>
                                            </div>
                                            <div className=''>
                                                <p>96 <br />
                                                    Following</p>
                                            </div>
                                        </div>
                                        <p className='text-[#ffffffa6] font-semibold text-sm font-Lufga'>Autumn Spooner | ZL1BABE x G80BABE</p>
                                        <p className='font-[300] text-sm mb-3'>Video creator</p>
                                        <p className='text-sm'>Camaro ZL1 & G80 M3 Competition 🏎️</p>
                                        <p className='text-sm'>PR: autumnspoonerzl1@gmail.com</p>
                                        <p className='text-sm'>I do YouTube :) click the link!</p>
                                        <p className='text-sm'>🔗 superlink.io/zl1babe</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-1 border rounded-se-[28px] border-[#e7e7e763]'>
                                <div className='bg-[#0D161A] relative rounded-se-[28px]'>
                                    <Carousel responsive={responsive}
                                        customLeftArrow={<CustomLeftArrow />}
                                        customRightArrow={<CustomRightArrow />}
                                        renderDotsOutside={true}>
                                        <img src={product} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product2} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                    </Carousel>
                                    <div className='bg-[#071116bd] flex absolute top-0 right-0 rounded-se-[18px] rounded-es-[18px] p-[15px]'>
                                        <img src={love} className='cursor-pointer' alt='red' />
                                        <div className='h-[16px] w-[1px] mx-3 bg-white'></div>
                                        <img src={icons} className='cursor-pointer' alt='red' />
                                    </div>
                                    <div className='font-Lufga px-3 text-[#ffffffa6] py-3'>
                                        <div className='flex justify-between w-full '>
                                            <p className='mt-2 mb-2 text-[#ffff] font-Lufga font-medium text-lg'>Autumn Spooner</p>
                                            <div className='flex justify-between w-1/5 self-center'>
                                                <img src={insta} className='cursor-pointer w-5 h-5' alt='red' />
                                                <img src={tiktok} className='cursor-pointer w-5 h-5' alt='red' />
                                            </div>
                                        </div>
                                        <div className='text-[#ffffffa6] flex justify-around py-3'>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Posts</p>
                                            </div>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Followers</p>
                                            </div>
                                            <div className=''>
                                                <p>96 <br />
                                                    Following</p>
                                            </div>
                                        </div>
                                        <p className='text-[#ffffffa6] font-semibold text-sm font-Lufga'>Autumn Spooner | ZL1BABE x G80BABE</p>
                                        <p className='font-[300] text-sm mb-3'>Video creator</p>
                                        <p className='text-sm'>Camaro ZL1 & G80 M3 Competition 🏎️</p>
                                        <p className='text-sm'>PR: autumnspoonerzl1@gmail.com</p>
                                        <p className='text-sm'>I do YouTube :) click the link!</p>
                                        <p className='text-sm'>🔗 superlink.io/zl1babe</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-1 border rounded-se-[28px] border-[#e7e7e763]'>
                                <div className='bg-[#0D161A] relative rounded-se-[28px]'>
                                    <Carousel responsive={responsive}
                                        customLeftArrow={<CustomLeftArrow />}
                                        customRightArrow={<CustomRightArrow />}
                                        renderDotsOutside={true}>
                                        <img src={product6} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product2} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                    </Carousel>
                                    <div className='bg-[#071116bd] flex absolute top-0 right-0 rounded-se-[18px] rounded-es-[18px] p-[15px]'>
                                        <img src={love} className='cursor-pointer' alt='red' />
                                        <div className='h-[16px] w-[1px] mx-3 bg-white'></div>
                                        <img src={icons} className='cursor-pointer' alt='red' />
                                    </div>
                                    <div className='font-Lufga px-3 text-[#ffffffa6] py-3'>
                                        <div className='flex justify-between w-full '>
                                            <p className='mt-2 mb-2 text-[#ffff] font-Lufga font-medium text-lg'>Autumn Spooner</p>
                                            <div className='flex justify-between w-1/5 self-center'>
                                                <img src={insta} className='cursor-pointer w-5 h-5' alt='red' />
                                                <img src={tiktok} className='cursor-pointer w-5 h-5' alt='red' />
                                            </div>
                                        </div>
                                        <div className='text-[#ffffffa6] flex justify-around py-3'>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Posts</p>
                                            </div>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Followers</p>
                                            </div>
                                            <div className=''>
                                                <p>96 <br />
                                                    Following</p>
                                            </div>
                                        </div>
                                        <p className='text-[#ffffffa6] font-semibold text-sm font-Lufga'>Autumn Spooner | ZL1BABE x G80BABE</p>
                                        <p className='font-[300] text-sm mb-3'>Video creator</p>
                                        <p className='text-sm'>Camaro ZL1 & G80 M3 Competition 🏎️</p>
                                        <p className='text-sm'>PR: autumnspoonerzl1@gmail.com</p>
                                        <p className='text-sm'>I do YouTube :) click the link!</p>
                                        <p className='text-sm'>🔗 superlink.io/zl1babe</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-1 border rounded-se-[28px] border-[#e7e7e763]'>
                                <div className='bg-[#0D161A] relative rounded-se-[28px]'>
                                    <Carousel responsive={responsive}
                                        customLeftArrow={<CustomLeftArrow />}
                                        customRightArrow={<CustomRightArrow />}
                                        renderDotsOutside={true}>
                                        <img src={product7} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product2} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                        <img src={product} className='w-full mx-auto rounded-se-[28px]' alt='item1' />
                                    </Carousel>
                                    <div className='bg-[#071116bd] flex absolute top-0 right-0 rounded-se-[18px] rounded-es-[18px] p-[15px]'>
                                        <img src={love} className='cursor-pointer' alt='red' />
                                        <div className='h-[16px] w-[1px] mx-3 bg-white'></div>
                                        <img src={icons} className='cursor-pointer' alt='red' />
                                    </div>
                                    <div className='font-Lufga px-3 text-[#ffffffa6] py-3'>
                                        <div className='flex justify-between w-full '>
                                            <p className='mt-2 mb-2 text-[#ffff] font-Lufga font-medium text-lg'>Autumn Spooner</p>
                                            <div className='flex justify-between w-1/5 self-center'>
                                                <img src={insta} className='cursor-pointer w-5 h-5' alt='red' />
                                                <img src={tiktok} className='cursor-pointer w-5 h-5' alt='red' />
                                            </div>
                                        </div>
                                        <div className='text-[#ffffffa6] flex justify-around py-3'>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Posts</p>
                                            </div>
                                            <div className='border-r pr-3 border-[#D9D9D9]'>
                                                <p>326 <br />
                                                    Followers</p>
                                            </div>
                                            <div className=''>
                                                <p>96 <br />
                                                    Following</p>
                                            </div>
                                        </div>
                                        <p className='text-[#ffffffa6] font-semibold text-sm font-Lufga'>Autumn Spooner | ZL1BABE x G80BABE</p>
                                        <p className='font-[300] text-sm mb-3'>Video creator</p>
                                        <p className='text-sm'>Camaro ZL1 & G80 M3 Competition 🏎️</p>
                                        <p className='text-sm'>PR: autumnspoonerzl1@gmail.com</p>
                                        <p className='text-sm'>I do YouTube :) click the link!</p>
                                        <p className='text-sm'>🔗 superlink.io/zl1babe</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='text-center mt-8'>
                            <button className='bg-[#FF007A] py-2 px-4 text-white font-Lufga rounded-full'>Load More</button>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 s:grid-cols-1 gap-2 px-12 py-8 bg-[#061115]'>
                        <div className='lg:col-span-4 md:col-span-1 sm:col-span-1 s:col-span-1 self-center'>
                            <p className='text-[#8A30E4] font-hallelujah mb-[5px] text-[21px]'>Sign up</p>
                            <p className='font-Zuume uppercase text-white leading-none text-[45px]'>Start comparison <br /> Your favourite <br /> Creator Today</p>
                            <p className='font-Lufga mb-3 text-white'>Are you ready to make your business more organized? Download Spend.In now!</p>
                            <div className=' mt-3'>
                                <button className='bg-[#FF007A] py-2 px-4 text-white font-Lufga rounded-full'>Sign Up Now</button>
                            </div>
                        </div>
                        <div className='lg:col-span-8 md:col-span-1 sm:col-span-1 s:col-span-1 '>
                            <img src={banner} alt='banner1' />
                        </div>
                    </div>

                    <div className='bg-[#061115]'>
                        <div className='text-left w-[100%] mx-auto lg:bg-[#081A20] md:bg-transparent sm:bg-transparent s:bg-transparent lg:px-8 md:px-0 sm:px-0 s:px-0 py-12 rounded-3xl'>
                            <div className='lg:w-[80%] md:w-[90%] sm:w-[90%] s:w-[90%] mx-auto'>
                                <p className='text-[#8A30E4] font-hallelujah mb-[-15px] text-[21px]'>Faq’s </p>
                                <p className='font-Zuume uppercase font-bold text-white text-[65px]'>frequently asked questions</p>
                                <p className='text-[#ffffffa6] font-Lufga mb-5'>Are you ready to make your business more organized? Download Spend.In now!</p>
                                <CustomAccordion items={accordionItems} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-4 bg-[#061115]'>
                <Footer />
            </div>
        </>
    )
}

export default Home
