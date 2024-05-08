"use client";

import Image from "next/image";

export default function HeroBurger() {
  return (
    <div className='relative font-poppins z-10'>
      <Image
        src={"/images/vectors/polygon.svg"}
        alt=''
        width={400}
        height={400}
        className='absolute w-full z-10 top-0'
      />
      <div className='relative z-20'>
        {/* Sale Vector */}
        <div className="bg-[url('/images/vectors/star.svg')] bg-no-repeat h-[160px] flex justify-center items-center w-[165px] absolute top-28 sm:top-40 md:top-56 z-30 -left-4 sm:left-0 md:left-10 scale-75 md:scale-100">
          <p className='font-black text-[--clr-primary-02] text-3xl -rotate-[25deg]'>
            75% <br></br>OFF
          </p>
        </div>

        {/* Polygons */}
        <Image
          src={"/images/vectors/poly-left-1.png"}
          alt=''
          width={24}
          height={53}
          className='absolute left-36 top-[5.5rem]'
        />
        <Image
          src={"/images/vectors/poly-left-2.png"}
          alt=''
          width={24}
          height={53}
          className='absolute left-28 top-[5.7rem]'
        />

        <Image
          src={"/images/vectors/poly-right-1.png"}
          alt=''
          width={66}
          height={62}
          className='absolute right-14 top-[6.5rem]'
        />
        <Image
          src={"/images/vectors/poly-right-2.png"}
          alt=''
          width={41}
          height={72}
          className='absolute right-24 top-[5.7rem]'
        />

        {/* Double burger image */}
        <Image
          src={"/images/burger/double-burger.png"}
          alt='burger set'
          width={925}
          height={925}
          className='translate-y-20'
        />
      </div>
    </div>
  );
}
