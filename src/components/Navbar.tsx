'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(0);

  const scrollBar = () => {
    const scrollY = window.scrollY;
    setScroll(scrollY);
    console.log(scroll);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollBar, { passive: true });

    return () => window.removeEventListener('scroll', scrollBar);
  });

  return (
    <nav
      onScroll={scrollBar}
      className={`font-poppins text-white fixed w-full z-50 top-0 transition-all duration-150 ${
        scroll >= 120 && 'bg-[--clr-primary-02] shadow-lg'
      }`}
    >
      <div className='flex items-center justify-between p-4 lg:max-w-[--max-w] lg:mx-auto'>
        <div
          className={`flex items-center gap-2 transition-all ${
            menu ? 'z-50' : 'duration-200 z-0'
          }`}
        >
          <Image
            src={'/images/burger/burger.png'}
            alt='Burger'
            width={50}
            height={50}
            className='drop-shadow-2xl'
          />
          <p className='text-2xl font-bold drop-shadow-xl'>BURGER</p>
        </div>

        {/* Desktop View */}
        <div className='hidden sm:flex gap-6 lg:gap-10 font-bold lg:mr-14 '>
          <Link href={'/'}>Home</Link>
          <Link href={'/'} className='mr-6'>
            Our Outlets
          </Link>
          <Link href={'/'}>Order</Link>
          <Link href={'/'}>Contact</Link>
        </div>

        {/* Mobile Menu Toggle*/}
        <Button
          onClick={handleMenu}
          variant={'menu'}
          className={`flex flex-col items-end gap-4 transition-all ${
            menu ? 'z-50 ' : 'duration-200 z-0'
          }`}
        >
          <span className='menu-bar-top'></span>
          <span className='menu-bar-bottom'></span>
        </Button>
      </div>

      {/* Popout menu */}
      <aside
        className={`${
          menu ? 'visible' : 'invisible'
        } h-screen absolute bg-black/50 w-screen top-0 transition-all duration-300`}
      >
        <div
          className={`${
            menu ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          } bg-[--clr-primary-02] w-1/2 h-screen absolute right-0 max-w-[300px] lg:max-w-[500px] transition-all duration-300`}
        >
          <div className='flex flex-col gap-6 px-4 lg:px-8 mt-20 font-bold'>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Our Outlets</Link>
            <Link href={'/'}>Order</Link>
            <Link href={'/'}>Contact</Link>
          </div>
        </div>
      </aside>
    </nav>
  );
}
