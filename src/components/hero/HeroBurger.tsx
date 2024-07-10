'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function HeroBurger() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  });

  return (
    <div className='relative font-poppins z-10 md:order-2 xl:mt-10'>
      <div className='relative z-20'>
        {/* Sale Vector */}
        <div className="bg-[url('/images/vectors/star.svg')] bg-no-repeat h-[160px] flex justify-center items-center w-[165px] absolute top-28 sm:top-40 md:top-28 z-30 -left-4 sm:left-0 md:-left-8 scale-75 lg:scale-100 xl:-left-4 xl:top-32">
          <p className='font-black text-[--clr-primary-02] text-3xl -rotate-[25deg]'>
            75% <br></br>OFF
          </p>
        </div>

        {/* Polygons */}
        <Image
          src={'/images/vectors/poly-left-1.png'}
          alt=''
          width={24}
          height={53}
          className='absolute left-36 top-[5.5rem] sm:top-32 sm:left-44 md:top-[5.5rem] md:left-36 xl:top-32 xl:left-[12.5rem]'
        />
        <Image
          src={'/images/vectors/poly-left-2.png'}
          alt=''
          width={24}
          height={53}
          className='absolute left-28 top-[5.7rem] sm:top-32 sm:left-36 md:top-[5.7rem] md:left-28 xl:top-32 xl:left-40'
        />

        <Image
          src={'/images/vectors/poly-right-1.png'}
          alt=''
          width={66}
          height={62}
          className='absolute right-14 top-[6.5rem] sm:top-40 md:top-[6.5rem] sm:right-24 md:right-14 xl:right-24 xl:top-40'
        />
        <Image
          src={'/images/vectors/poly-right-2.png'}
          alt=''
          width={41}
          height={72}
          className='absolute right-24 top-[5.7rem] sm:top-36 sm:right-[8.5rem] md:right-24 md:top-[5.7rem] xl:right-36 xl:top-36'
        />

        {/* Double burger image */}
        <Image
          src={'/images/burger/double-burger.png'}
          alt='burger set'
          width={925}
          height={925}
          className={`${inView && 'animate-burger-up'} opacity-0`}
          ref={ref}
        />
      </div>
    </div>
  );
}
