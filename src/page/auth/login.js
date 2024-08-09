import React from 'react'
import Banner from '../../assets/images/LoginBanner.png';
import logo from '../../assets/images/Logo.png';
import Input from '../../common/input';

function Login() {
    return (
        <div className='bg-[#061115]'>
            <div className='grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 s:grid-cols-6 gap-4'>
                <div className='lg:col-span-5 md:col-span-6 sm:col-span-6 s:col-span-6 p-10 overflow-y-auto max-h-screen'>
                    <img src={logo} className='w-[100px] lg:ml-12 md:ml-3 sm:ml-3 s:ml-3' alt='logo' />
                    <div className='mt-12 lg:px-12 md:px-3 sm:px-3 s:px-3'>
                        <p className='font-Zuume text-[60px] font-bold leading-[45px] text-white'>
                            Login</p>
                        <div className='my-5'>
                            <label className='font-Zuume text-lg mb-3 text-white'>Email Address</label>
                            <Input placeholder='' className1='!rounded-xl' type='email' />
                        </div>
                        <div className='mb-5'>
                            <label className='font-Zuume text-lg mb-3 text-white'>Password</label>
                            <Input placeholder='' className1='!rounded-xl' type='password' />
                        </div>
                        <div className='w-full'>
                            <a href='/' className='bg-[#FF007A] rounded-xl mb-3 block text-center text-white p-4 text-2xl w-full font-Zuume'>Login</a>

                        </div>

                        <p className='font-Zuume text-lg text-white text-center'>Don't have an account? <a href='/register' className='font-bold text-white'> Sign Up </a></p>
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
