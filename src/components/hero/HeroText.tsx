'use client';

import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function HeroText() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`z-20 relative font-poppins text-white mt-8 sm:mt-0 md:mt-24 lg:mt-40 xl:mt-[19rem] px-4 md:order-1 md:self-center opacity-0 ${
        inView && 'animate-hero-up'
      }`}
    >
      <div className=''>
        {/* Vector */}
        <div className='mb-10 flex items-center justify-around md:justify-between'>
          <div className='w-[204px] h-[100px] bg-white rounded-xl font-medium text-[--clr-primary-02] grid grid-rows-2 justify-center relative card-behind z-20 xl:w-[304px] xl:h-[131px] xl:p-4'>
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-1'>
                <Image
                  src={'/images/vectors/starvector.svg'}
                  alt=''
                  width={20}
                  height={20}
                  className='xl:w-[30px]'
                />
                <Image
                  src={'/images/vectors/starvector.svg'}
                  alt=''
                  width={20}
                  height={20}
                  className='xl:w-[30px]'
                />
                <Image
                  src={'/images/vectors/starvector.svg'}
                  alt=''
                  width={20}
                  height={20}
                  className='xl:w-[30px]'
                />
                <Image
                  src={'/images/vectors/starvector.svg'}
                  alt=''
                  width={20}
                  height={20}
                  className='xl:w-[30px]'
                />
                <Image
                  src={'/images/vectors/halfstar.svg'}
                  alt=''
                  width={20}
                  height={20}
                  className='max-h-[20px] max-w-[20px] xl:w-[30px] xl:max-w-[30px] xl:max-h-[30px]'
                />
              </div>
              <p className='font-medium text-xl xl:text-2xl border-l-2 border-[--clr-primary-02] pl-2'>
                4.5
              </p>
            </div>
            <p className='text-lg xl:text-2xl'>5K+ Happy Review</p>
          </div>
          <Image
            src={'/images/vectors/arrow-vector.png'}
            alt=''
            width={100}
            height={100}
            className='-rotate-90 md:rotate-12 md:translate-x-10 md:translate-y-8 lg:-rotate-3 lg:translate-x-0 lg:translate-y-0 sm:w-[140px] lg:w-[140px] xl:-translate-x-6 xl:w-[160px] xl:rotate-0'
          />
        </div>

        {/* Hero Text */}
        <div className='text-center md:text-left'>
          <div>
            <p className='text-xl xl:text-3xl font-bold'>
              Crispy, Crunchy, Veggie Deliciousness!
            </p>
            <h1 className='text-5xl md:text-4xl lg:text-6xl xl:text-[5.3rem] font-bold leading-snug'>
              Burgers That Love the Earth!
            </h1>
          </div>
          <div className='flex flex-col lg:flex-row items-center md:items-start justify-center lg:justify-start gap-6 xl:gap-10 mt-6 xl:items-center'>
            <Button className='bg-white text-[--clr-primary-02] px-8 py-6 font-medium text-xl xl:px-10 xl:py-8'>
              Explore
            </Button>
            <div className='flex items-center gap-2 lg:gap-4'>
              <Button
                variant={'play'}
                size={'play'}
                className='text-2xl pl-1 border-4 '
              >
                ▶
              </Button>
              <p className='lg:text-xl xl:text-3xl font-medium'>
                How to get order..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
