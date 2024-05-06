"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className='font-poppins text-white '>
      <div className='flex items-center justify-between p-4 lg:max-w-[--max-w] lg:mx-auto'>
        <div className={`flex items-center gap-2 ${menu ? "z-50" : ""}`}>
          <Image
            src={"/images/burger/burger.png"}
            alt='Burger'
            width={50}
            height={50}
            className='drop-shadow-2xl'
          />
          <p className='text-2xl font-bold drop-shadow-xl'>BURGER</p>
        </div>

        {/* Desktop View */}
        <div className='hidden sm:flex gap-6 lg:gap-10 font-bold lg:mr-14 '>
          <Link href={"/"}>Home</Link>
          <Link href={"/"} className='mr-6'>
            Our Outlets
          </Link>
          <Link href={"/"}>Order</Link>
          <Link href={"/"}>Contact</Link>
        </div>

        {/* Mobile Menu Toggle*/}
        <Button
          onClick={handleMenu}
          variant={"menu"}
          className={`flex flex-col items-end gap-4  ${menu ? "z-50" : ""}`}
        >
          <span className='menu-bar-top'></span>
          <span className='menu-bar-bottom'></span>
        </Button>
      </div>

      {/* Popout menu */}
      <aside
        className={`${
          menu ? "block" : "hidden"
        } h-screen absolute bg-black/50 w-screen top-0 `}
      >
        <div className='bg-[--clr-primary-02] w-1/2 h-screen absolute right-0 max-w-[300px] lg:max-w-[500px] '>
          <div className='flex flex-col gap-6 px-4 lg:px-8 mt-20 font-bold'>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Our Outlets</Link>
            <Link href={"/"}>Order</Link>
            <Link href={"/"}>Contact</Link>
          </div>
        </div>
      </aside>
    </nav>
  );
}
