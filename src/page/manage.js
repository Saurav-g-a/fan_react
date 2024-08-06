import React from 'react'
import profile from '../assets/images/profile.png';
import Footer from '../common/footer';
import starsDisable from '../assets/images/starDisable.svg';
import stars from '../assets/images/Stars.svg';
import insta from '../assets/images/insta.svg';
import tiktok from '../assets/images/tiktok.svg';
import onlyfan from '../assets/images/Onlyfans.svg';
import question from '../assets/images/question.svg';
import pepper from '../assets/images/Union.svg';
import product from '../assets/images/profile (1).png';
import product2 from '../assets/images/profile (2).png';
import product1 from '../assets/images/profile (3).png';
import product3 from '../assets/images/profile (4).png';
import product4 from '../assets/images/profile (5).png';
import product5 from '../assets/images/profile (6).png';
import product6 from '../assets/images/profile (7).png';
import product7 from '../assets/images/profile (8).png';
import product8 from '../assets/images/profile (9).png';
import promotion from '../assets/images/permotion.png';
import promotion1 from '../assets/images/permotion1.png';
import arrows from '../assets/images/redArrow.svg';
import promotions from '../assets/images/promotions (1).png';
import promotions1 from '../assets/images/promotions (2).png';
import promotions2 from '../assets/images/promotions (3).png';
import promotions3 from '../assets/images/promotions (4).png';
import promotions4 from '../assets/images/promotions (5).png';
function Manage() {

    return (
        <>
            <div className='realtive w-full py-12 lg:h-full md:h-[300px] sm:h-[250px] bg-about grid grid-cols-12 gap-6  bg-no-repeat bg-cover p-4'>
                <div className='col-span-6'></div>

                <div className='col-span-6 mx-auto self-center py-10'>
                    <p className='text-[#8A30E4] font-hallelujah text-[21px]'>Creator Account </p>
                    <div className='flex w-[90%]'>
                        <div>
                            <h1 className='font-Zuume text-[70px] font-bold leading-[0.8] uppercase text-white text-left w-full'>Autumn Spooner</h1>
                            <p className='font-Lufga text-white'>Video creator</p>
                        </div>
                        <button className='bg-[#8a30e496] ml-auto text-[#AE5CFF] px-6 w-[27%] font-Lufga h-[40px] self-center rounded-full' type='button'>Edit Profile</button>
                    </div>
                    <p className='text-left font-Lufga my-3 text-[25px] text-[#657784]'> <span className='font-Zuume text-white'> Autumn Spooner | ZL1BABE x G80BABE </span> We are recognized for exceeding client expectations and delivering great results through dedication and ease of process.</p>

                    <div className='flex my-3'>
                        <p className='font-Zuume text-[#8A30E4]'>Platforms :</p>
                        <div className='flex ml-3'>
                            <img src={insta} className='mr-2' alt='insta' />
                            <p className='text-white font-Lufga'>Instagram</p>
                        </div>
                        <div className='flex ml-3'>
                            <img src={tiktok} className='mr-2' alt='tiktok' />
                            <p className='text-white font-Lufga'>Tiktok</p>
                        </div>
                        <div className='flex ml-3'>
                            <img src={onlyfan} className='mr-2' alt='onlyfan' />
                            <p className='text-white font-Lufga'>Onlyfans</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-Lufga text-white'>Camaro ZL1 & G80 M3 Competition 🏎️</p>
                        <p className='font-Lufga text-[#7198FF] my-2'>PR: autumnspoonerzl1@gmail.com</p>
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        <div className='col-span-1'>
                            <p className='font-Lufga text-[#7198FF]'>I do YouTube :) click the link!</p>
                        </div>
                        <div className='col-span-1'>
                            <p className='font-Lufga text-[#7198FF]'>🔗 superlink.io/zl1babe</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-3 my-3'>
                        <div className='col-span-1'>
                            <div className='text-center bg-[#4e4e4e33] border-[#FFFFFF33] border p-3 rounded-3xl'>
                                <p className='font-Zuume text-2xl font-bold text-white'>79 M +</p>
                                <p className='text-[#657784]'>Video Views</p>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='text-center bg-[#4e4e4e33] border-[#FFFFFF33] border p-3 rounded-3xl'>
                                <p className='font-Zuume text-2xl font-bold text-white'>12 M +</p>
                                <p className='text-[#657784]'>Followers</p>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='text-center bg-[#4e4e4e33] border-[#FFFFFF33] border p-3 rounded-3xl'>
                                <p className='font-Zuume text-2xl font-bold text-white'>34 M +</p>
                                <p className='text-[#657784]'>Likes</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='py-8 px-20 bg-[#061115]'>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='col-span-1 '>
                        <div className='grid grid-cols-2 gap-4 relative rounded-3xl bg-[#4e4e4e33] border-[#FFFFFF33] border p-4'>
                            <div className='col-span-1'>
                                <img src={profile} className='w-[150px] mx-auto' alt='profile' />
                                <img src={question} className='absolute top-5 right-5' alt='question' />
                            </div>
                            <div className='col-span-1 self-center '>
                                <p className='font-Lufga text-white text-lg'><span className='text-[#FF007A]'> 86% </span> Profile Completed</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 '>
                        <div className='relative rounded-3xl bg-[#4e4e4e33] border-[#FFFFFF33] border p-4'>
                            <p className='font-Lufga text-white text-lg'>Pepper Ranking</p>
                            <img src={question} className='absolute top-5 right-5' alt='question' />
                            <div className='grid grid-cols-5 gap-4 py-7'>
                                <div className='col-span-1'>
                                    <img src={pepper} className=' mx-auto' alt='profile' />
                                </div>
                                <div className='col-span-1'>
                                    <img src={pepper} className=' mx-auto' alt='profile' />
                                </div>
                                <div className='col-span-1'>
                                    <img src={pepper} className=' mx-auto' alt='profile' />
                                </div>
                                <div className='col-span-1'>
                                    <img src={pepper} className=' mx-auto' alt='profile' />
                                </div>
                                <div className='col-span-1'>
                                    <img src={pepper} className=' mx-auto' alt='profile' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='py-8 px-20 bg-[#061115]'>
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

            <div className='py-8 px-20 bg-[#061115]'>
                <p className='font-Zuume text-3xl text-white font-semibold'>Media</p>
                <div className='grid grid-cols-4 gap-4 mt-5'>
                    <div className='col-span-1'>
                        <img src={product} alt='profile' />
                    </div>
                    <div className='col-span-1'>
                        <img src={product1} alt='profile' />
                    </div>
                    <div className='col-span-1'>
                        <img src={product2} alt='profile' />
                    </div>
                    <div className='col-span-1'>
                        <img src={product3} alt='profile' />
                    </div>
                    <div className='col-span-1'>
                        <img src={product4} alt='profile' />
                    </div>
                    <div className='col-span-1'>
                        <img src={product5} alt='profile' />
                    </div>
                    <div className='col-span-1'>
                        <img src={product6} alt='profile' />
                    </div>
                    <div className='col-span-1'>
                        <img src={product7} alt='profile' />
                    </div>
                    <div className='col-span-1'>
                        <img src={product8} alt='profile' />
                    </div>
                    <div className='col-span-1'>
                        <img src={product} alt='profile' />
                    </div>
                    <div className='col-span-1'>
                        <img src={product1} alt='profile' />
                    </div>
                    <div className='col-span-1'>
                        <img src={product2} alt='profile' />
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
                    <div className='col-span-1'>
                        <div className='border-[#FFFFFF33] border p-2 rounded-3xl relative '>
                            <p className='font-Zuume text-3xl text-white uppercase font-semibold mb-3 ml-3 mt-3'>Promotions</p>

                            <div className='flex bg-[#081A20] p-2 mb-2 rounded-3xl w-full'>
                                <img src={promotions} className='w-14 h-14 mr-4' alt='promotions' />
                                <p className='text-white self-center font-Lufga font-semibold'>FuelFest Events - Discount <span className='text-[#657784]'> Code: ZL1BABE for tickets </span></p>
                                <img src={arrows} className='ml-auto' alt='arrows' />
                            </div>
                            <div className='flex bg-[#081A20] p-2 mb-2 rounded-3xl w-full'>
                                <img src={promotions1} className='w-14 h-14 mr-4' alt='promotions' />
                                <p className='text-white self-center font-Lufga font-semibold'>CARBONADDONS  <span className='text-[#657784]'> Code : ZL1BABE </span></p>
                                <img src={arrows} className='ml-auto' alt='arrows' />
                            </div>
                            <div className='flex bg-[#081A20] mb-2 p-2 rounded-3xl'>
                                <img src={promotions2} className='w-14 h-14 mr-4' alt='promotions' />
                                <p className='text-white self-center font-Lufga font-semibold'>Auto Addict  <span className='text-[#657784]'> Code : ZL1BABE </span></p>
                                <img src={arrows} className='ml-auto' alt='arrows' />
                            </div>
                            <div className='flex bg-[#081A20] mb-2 p-2 rounded-3xl'>
                                <img src={promotions3} className='w-14 h-14 mr-4' alt='promotions' />
                                <p className='text-white self-center font-Lufga font-semibold'>Next-Gen Speed  <span className='text-[#657784]'> Code : ZL1BABE </span></p>
                                <img src={arrows} className='ml-auto' alt='arrows' />
                            </div>
                            <div className='flex bg-[#081A20] mb-2 p-2 rounded-3xl'>
                                <img src={promotions4} className='w-14 h-14 mr-4' alt='promotions' />
                                <p className='text-white self-center font-Lufga font-semibold'>Jax Wax   <span className='text-[#657784]'> Code : ZL1BABE </span></p>
                                <img src={arrows} className='ml-auto' alt='arrows' />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='border-[#FFFFFF33] border p-2 rounded-3xl relative'>
                            <p className='font-Zuume text-3xl text-white uppercase font-semibold mb-3 ml-3 mt-3'>data insights</p>

                        </div>
                    </div>
                </div>
                <div className='text-center my-5'>
                    <button className='border border-[#FFFFFF33] text-white rounded-full py-4 px-6 font-Lufga'>Delete Profile</button>
                </div>
            </div>

            <div className='pt-4 bg-[#061115]'>
                <Footer />
            </div>
        </>
    )

}

export default Manage
