import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function HeroText() {
  return (
    <div className='z-20 relative font-poppins text-white mt-8 md:mt-0'>
      <div>
        {/* Vector */}
        <div className='mb-10 md:mb-0 flex items-center justify-around md:justify-between'>
          <div className='w-[204px] md:w-[304px] h-[100px] md:h-[144px] bg-white rounded-lg font-medium text-[--clr-primary-02] grid grid-rows-2 justify-center relative card-behind z-20'>
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-1'>
                <Image
                  src={"/images/vectors/starvector.svg"}
                  alt=''
                  width={20}
                  height={20}
                />
                <Image
                  src={"/images/vectors/starvector.svg"}
                  alt=''
                  width={20}
                  height={20}
                />
                <Image
                  src={"/images/vectors/starvector.svg"}
                  alt=''
                  width={20}
                  height={20}
                />
                <Image
                  src={"/images/vectors/starvector.svg"}
                  alt=''
                  width={20}
                  height={20}
                />
                <Image
                  src={"/images/vectors/halfstar.svg"}
                  alt=''
                  width={20}
                  height={20}
                  className='max-h-[20px] max-w-[20px]'
                />
              </div>
              <span> | </span>
              <p className='font-medium text-xl'>4.5</p>
            </div>
            <p className='text-lg md:text-xl'>5K+ Happy Review</p>
          </div>
          <Image
            src={"/images/vectors/arrow-vector.png"}
            alt=''
            width={100}
            height={100}
            className='-rotate-90'
          />
        </div>

        {/* Hero Text */}
        <div className='text-center'>
          <div>
            <p className='text-xl font-bold'>
              Crispy, Crunchy, Veggie Deliciousness!
            </p>
            <h1 className='text-5xl font-bold'>Burgers That Love the Earth!</h1>
          </div>
          <div className='flex flex-col md:flex-row items-center justify-center gap-4 mt-6'>
            <Button className='bg-white text-[--clr-primary-02] px-8 py-6 font-medium text-xl'>
              Explore
            </Button>
            <div className='flex items-center gap-2'>
              <Button variant={"play"} size={"play"} className='text-2xl pl-1'>
                ▶
              </Button>
              <p>How to get order..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
