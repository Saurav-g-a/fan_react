import React from 'react'
import Banner from '../../assets/images/LoginBanner.png';
import logo from '../../assets/images/Logo.png';
function Login() {
    return (
        <div className='bg-[#061115]'>
            <div className='grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 s:grid-cols-6 gap-4'>
                <div className='lg:col-span-5 md:col-span-6 sm:col-span-6 s:col-span-6 p-10'>
                    <img src={logo} className='w-[150px] lg:ml-12 md:ml-3 sm:ml-3 s:ml-3 ' alt='logo' />
                    <div className='mt-12 lg:px-12 md:px-3 sm:px-3 s:px-3 '>
                        <button className='bg-[#FF007A] w-full rounded-xl mb-3 text-white p-4 text-2xl font-Zuume'>Sign in as creator</button>
                        <button className='bg-[#FF007A] w-full rounded-xl mb-3 text-white p-4 text-2xl font-Zuume'>Sign in as fan</button>
                        <div className='relative'>
                            <p className="before:content-[''] before:h-[1px] before:w-[40%] before:absolute before:bg-white before:left-0 before:top-[15px] before:bottom-0 text-white font-Zuume text-2xl my-5 text-center after:content-[''] after:h-[1px] after:w-[40%] after:absolute after:bg-white after:top-[15px] after:right-0">OR</p>
                        </div>
                        <button className='bg-[#B871FF] w-full rounded-xl mb-3 text-white p-4 text-2xl font-Zuume'>Sign up as creator</button>
                        <button className='bg-[#B871FF] w-full rounded-xl mb-3 text-white p-4 text-2xl font-Zuume'>Sign up as fan</button>

                    </div>
                </div>
                <div className='lg:col-span-7 md:col-span-6 sm:col-span-6 s:col-span-6'>
                    <img src={Banner} className='h-screen object-fill p-2' alt='banner' />
                </div>
            </div>
        </div>
    )
}

export default Login
