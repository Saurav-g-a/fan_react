import React from 'react'
import Footer from '../common/footer';
import Navigation from '../routes/Navigation';
import insta from '../assets/images/insta.svg';
import tiktok from '../assets/images/tiktok.svg';
import banner from '../assets/images/banner1.png';
import product from '../assets/images/profile (1).png';
import product2 from '../assets/images/profile (2).png';
import product1 from '../assets/images/profile (3).png';
import product4 from '../assets/images/profile (5).png';
import product5 from '../assets/images/profile (6).png';
import product6 from '../assets/images/profile (7).png';
import product7 from '../assets/images/profile (8).png';
import product8 from '../assets/images/profile (9).png';
import promotion from '../assets/images/permotion.png';
import promotion1 from '../assets/images/permotion1.png';
import arrows from '../assets/images/redArrow.svg';
import icons from '../assets/images/icons1.svg';
import User from '../assets/images/user.svg';
import promotions from '../assets/images/promotions (1).png';
import promotions1 from '../assets/images/promotions (2).png';
import promotions2 from '../assets/images/promotions (3).png';
import promotions3 from '../assets/images/promotions (4).png';
import promotions4 from '../assets/images/promotions (5).png';
import love from '../assets/images/icons2.svg';
import left from '../assets/images/left.svg';
import CustomRight from '../assets/images/right.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Account() {
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

    const responsive1 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
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
    const CustomLeftArrow1 = ({ onClick }) => (
        <button className="custom-left-arrow absolute " onClick={onClick}>
            <img src={left} alt='left' />
        </button>
    );

    const CustomRightArrow1 = ({ onClick }) => (
        <button className="custom-right-arrow absolute right-[-1px]" onClick={onClick}>
            <img src={CustomRight} alt='left' />
        </button>
    );
    return (
        <>
            <Navigation />
            <div className='realtive w-full py-12 lg:h-full md:h-[300px] sm:h-[250px] bg-about bg-no-repeat bg-cover p-4'>
                <div className='px-20 w-full flex mt-12 mb-8'>
                    <div>
                        <img src={User} className='max-w-[100px] h-[100px]' alt='user' />
                    </div>
                    <div className='self-center pl-5'>
                        <p className='text-[#8A30E4] font-hallelujah mb-[-15px] text-[21px]'>User Account</p>
                        <p className='font-Zuume uppercase text-white text-[45px]'>Thomas Kris </p>
                    </div>
                    <div className='self-center ml-5'>
                        <button className='font-Lufga border border-[#8A30E4] px-6 py-3 mt-5 text-[#8A30E4] rounded-full'>Edit</button>
                    </div>
                </div>
                <div className='px-20'>
                    <hr />
                    <p className='font-Zuume uppercase text-white font-bold text-[45px] text-center mt-5'>favorite content creators</p>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 s:grid-cols-1 gap-3'>
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
                        <button className='border border-[#FFFFFF33] text-white rounded-full py-4 px-6 font-Lufga'>Load More</button>
                    </div>
                </div>
            </div>
            <div className='py-8 px-20 bg-[#061115] relative'>
                <p className='font-Zuume text-3xl text-white font-semibold mb-5'>recommended content creators</p>

                <div className=''>
                    <Carousel responsive={responsive1}
                        customLeftArrow={<CustomLeftArrow1 />}
                        customRightArrow={<CustomRightArrow1 />}
                        renderDotsOutside={true}>
                        <div className='px-3'>
                            <img src={product8} className='rounded-3xl' alt='profile' />
                            <p className='text-white font-Lufga text-lg'>Autumn Spooner</p>
                        </div>
                        <div className='px-3'>
                            <img src={product8} className='rounded-3xl' alt='profile' />
                            <p className='text-white font-Lufga text-lg'>Autumn Spooner</p>
                        </div>
                        <div className='px-3'>
                            <img src={product8} className='rounded-3xl' alt='profile' />
                            <p className='text-white font-Lufga text-lg'>Autumn Spooner</p>
                        </div>
                        <div className='px-3'>
                            <img src={product8} className='rounded-3xl' alt='profile' />
                            <p className='text-white font-Lufga text-lg'>Autumn Spooner</p>
                        </div>
                        <div className='px-3'>
                            <img src={product8} className='rounded-3xl' alt='profile' />
                            <p className='text-white font-Lufga text-lg'>Autumn Spooner</p>
                        </div>
                        <div className='px-3'>
                            <img src={product8} className='rounded-3xl' alt='profile' />
                            <p className='text-white font-Lufga text-lg'>Autumn Spooner</p>
                        </div>
                        <div className='px-3'>
                            <img src={product8} className='rounded-3xl' alt='profile' />
                            <p className='text-white font-Lufga text-lg'>Autumn Spooner</p>
                        </div>
                        <div className='px-3'>
                            <img src={product8} className='rounded-3xl' alt='profile' />
                            <p className='text-white font-Lufga text-lg'>Autumn Spooner</p>
                        </div>
                        <div className='px-3'>
                            <img src={product8} className='rounded-3xl' alt='profile' />
                            <p className='text-white font-Lufga text-lg'>Autumn Spooner</p>
                        </div>
                        <div className='px-3'>
                            <img src={product8} className='rounded-3xl' alt='profile' />
                            <p className='text-white font-Lufga text-lg'>Autumn Spooner</p>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className='py-8 px-20 bg-[#061115] relative'>
                <p className='font-Zuume text-3xl text-white font-semibold mb-5'>recommended categories</p>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-2'>
                        <div className='border-[#FFFFFF33] border p-4 bg-[#081A20] rounded-3xl relative'>
                            <p className='font-Lufga text-lg mb-4 text-white font-bold'>Fashion</p>
                            <img src={arrows} alt='arrow' />
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='border-[#FFFFFF33] border p-4 bg-[#081A20] rounded-3xl relative'>
                            <p className='font-Lufga text-lg mb-4 text-white font-bold'>Music & Dance</p>
                            <img src={arrows} alt='arrow' />
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='border-[#FFFFFF33] border p-4 bg-[#081A20] rounded-3xl relative'>
                            <p className='font-Lufga text-lg mb-4 text-white font-bold'>Beauty</p>
                            <img src={arrows} alt='arrow' />
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='border-[#FFFFFF33] border p-4 bg-[#081A20] rounded-3xl relative'>
                            <p className='font-Lufga text-lg mb-4 text-white font-bold'>Travel</p>
                            <img src={arrows} alt='arrow' />
                        </div>
                    </div>

                </div>
            </div>
            <div className='py-8 px-20 bg-[#061115] '>
                <p className='font-Zuume text-3xl text-white font-semibold mb-5'>Active promotions</p>

                <div className='grid grid-cols-2 gap-4'>
                    <div className='col-span-1'>
                        <div className='border-[#FFFFFF33] border p-2 rounded-3xl relative'>
                            <img src={promotion1} alt='profile' />
                            <div className='absolute bottom-4 left-4 w-full'>
                                <p className='text-white font-Lufga text-lg'>FuelFest Events - Discount</p>
                                <p className='text-[#657784] font-Lufga mb-3 text-lg'>Code: ZL1BABE for tickets</p>
                                <img src={arrows} alt='arrow' />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='border-[#FFFFFF33] border p-2 rounded-3xl relative'>
                            <img src={promotion} alt='profile' />
                            <div className='absolute bottom-4 left-4 w-full'>
                                <p className='text-white font-Lufga text-lg'>CARBONADDONS</p>
                                <p className='text-[#657784] font-Lufga mb-3 text-lg'>Code : ZL1BABE</p>
                                <img src={arrows} alt='arrow' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-8 px-20 bg-[#061115] '>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='col-span-2'>
                        <div className='p-2 rounded-3xl relative'>
                            <p className='font-Zuume text-3xl text-white uppercase font-semibold mb-3 ml-3 mt-3'>Promotions</p>
                            <div className='grid grid-cols-5 gap-4'>
                                <div className='bg-[#081A20] p-2 mb-2 rounded-3xl w-full'>
                                    <img src={promotions} className='' alt='promotions' />
                                    <p className='text-white self-center font-Lufga mt-3 font-semibold'>FuelFest Events - Discount <br /><span className='text-[#657784] mt-2'> Code: ZL1BABE for tickets </span></p>
                                    <img src={arrows} className='mt-5' alt='arrows' />
                                </div>
                                <div className='bg-[#081A20] p-2 mb-2 rounded-3xl w-full'>
                                    <img src={promotions1} className='' alt='promotions' />
                                    <p className='text-white self-center font-Lufga mt-3 font-semibold'>CARBONADDONS  <br /><span className='text-[#657784] mt-2'> Code : ZL1BABE </span></p>
                                    <img src={arrows} className='mt-5' alt='arrows' />
                                </div>
                                <div className='bg-[#081A20] mb-2 p-2 rounded-3xl'>
                                    <img src={promotions2} className='' alt='promotions' />
                                    <p className='text-white self-center font-Lufga mt-3 font-semibold'>Auto Addict  <br /><span className='text-[#657784] mt-2'> Code : ZL1BABE </span></p>
                                    <img src={arrows} className='mt-5' alt='arrows' />
                                </div>
                                <div className='bg-[#081A20] mb-2 p-2 rounded-3xl'>
                                    <img src={promotions3} className='' alt='promotions' />
                                    <p className='text-white self-center font-Lufga mt-3 font-semibold'>Next-Gen Speed  <br /><span className='text-[#657784] mt-2'> Code : ZL1BABE </span></p>
                                    <img src={arrows} className='mt-5' alt='arrows' />
                                </div>
                                <div className='bg-[#081A20] mb-2 p-2 rounded-3xl'>
                                    <img src={promotions4} className='' alt='promotions' />
                                    <p className='text-white self-center font-Lufga mt-3 font-semibold'>Jax Wax   <br /><span className='text-[#657784] mt-2'> Code : ZL1BABE </span></p>
                                    <img src={arrows} className='mt-5' alt='arrows' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='text-center my-5'>
                    <button className='border border-[#FFFFFF33] text-white rounded-full py-4 px-6 font-Lufga'>Delete Profile</button>
                </div>
            </div>
            <div className='grid lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 s:grid-cols-1 gap-2 px-20 py-8 bg-[#061115]'>
                <div className='lg:col-span-5 md:col-span-1 sm:col-span-1 s:col-span-1 self-center'>
                    <p className='text-[#8A30E4] font-hallelujah mb-[5px] text-[21px]'>Sign up</p>
                    <p className='font-Zuume uppercase text-white leading-none text-[45px]'>Start comparison <br /> Your favourite <br /> Creator Today</p>
                    <p className='font-Lufga mb-3 text-white'>Are you ready to make your business more organized? Download Spend.In now!</p>
                    <div className=' mt-3'>
                        <button className='bg-[#FF007A] py-2 px-4 text-white font-Lufga rounded-full'>Sign Up Now</button>
                    </div>
                </div>
                <div className='lg:col-span-7 md:col-span-1 sm:col-span-1 s:col-span-1 '>
                    <img src={banner} alt='banner1' />
                </div>
            </div>
            <div className='pt-4 bg-[#061115]'>
                <Footer />
            </div>
        </>
    )

}

export default Account
