import React from 'react';
import Logo from '../assets/images/Logo.png';
// ---------------------- Mega menu Images 
import Menu from '../assets/images/menu.svg';
function Navigation() {
  return (
    <>
      <div className='absolute w-full grid lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-2 md:px-20 md:pt-4 s:grid-cols-2 gap-1 md:text-center p-3 drop-shadow-2xl'>
        <div className='lg:col-span-3 md:col-span-1 sm:grid-cols-1 s:col-span-1'>
          <a href='/'> <img src={Logo} className='w-[100px] self-center ml-3' alt='Logo' /> </a>
        </div>
        <div className='lg:col-span-9 md:col-span-1 sm:grid-cols-1 s:col-span-1'>
          <div className='flex justify-end'>
            <a href='/register' className='md:hidden lg:block sm:hidden s:hidden border-[1px] border-[#FFFFFF80] p-4 rounded-full font-Lufga text-white'>Login In as a <b> Fan </b></a>
            <a href='/login' className='md:hidden lg:block sm:hidden s:hidden bg-[#FF007A] border-[1px] border-[#FF007A] font-Lufga p-4 mx-4 text-white rounded-full'>Login In as a <b> Creator </b></a>
            <img src={Menu} alt='menu' />
          </div>
        </div>
      </div>

    </>
  );
}

export default Navigation;
