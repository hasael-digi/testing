'use client';

import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxHamburgerMenu } from 'react-icons/rx';

const ListMenu = () => {
  const [burgerToggle, setBurgerToggle] = useState(false);

  const menuToggle = () => {
    setBurgerToggle(!burgerToggle);
  };

  let menuList;

  return (
    <section className='relative '>
      <ul className='hidden md:flex items-center justify-center gap-10 xl:gap-16 text-[14px] lg:text-[16px] font-medium'>
        <li className='hover_list-menu'>
          <Link href='/#home'>HOME</Link>
        </li>
        <li className='hover_list-menu'>
          <Link href='/#about'>ABOUT ME</Link>
        </li>
        <li className='hover_list-menu'>
          <Link href='/#portofolio'>PORTOFOLIO</Link>
        </li>

        <li className='hover_list-menu'>
          <Link href='/#experience'>EXPERIENCE</Link>
        </li>
        <li className=' button_gradient py-4 px-6 rounded-md hover:scale-105 duration-150 ease-in active:opacity-75 text-white font-medium'>
          <Link href='/#contact'>CONTACT</Link>
        </li>
      </ul>
      <div className='w-16 text-center'>
        <button className='text-white text-center md:hidden' onClick={menuToggle}>
          {burgerToggle ? <GiHamburgerMenu className=' w-[34px] h-[30px]' /> : <RxHamburgerMenu className=' w-[34px] h-[30px]' />}
        </button>
        {burgerToggle && (
          <div className='relative right-[-4px] md:hidden '>
            <ul className='absolute  right-4 flex flex-col gap-4 bg-slate-950 w-[140px] z-50 py-8 rounded-lg '>
              <li className='hover_list-menu '>
                <Link className='border-b border-slate-500 ' href='/#home'>
                  HOME
                </Link>
              </li>
              <li className='hover_list-menu '>
                <Link className='border-b border-slate-500 ' href='/#about'>
                  ABOUT ME
                </Link>
              </li>
              <li className='hover_list-menu '>
                <Link className='border-b border-slate-500 ' href='/#portofolio'>
                  PORTOFOLIO
                </Link>
              </li>

              <li className='hover_list-menu '>
                <Link className='border-b border-slate-500 ' href='/#experience'>
                  EXPERIENCE
                </Link>
              </li>
              <li className='hover_list-menu '>
                <Link className='border-b border-slate-500 ' href='/#contact'>
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ListMenu;
