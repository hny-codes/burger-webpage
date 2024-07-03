import Image from 'next/image';
import { Button } from '../ui/button';

export default function Banner() {
  return (
    <section className='bg-[--clr-primary-04] font-poppins'>
      <div className='max-w-[--max-w] mx-auto relative -top-10 md:flex md:flex-row-reverse md:-top-8 md:gap-14 pl-8 max-h-[600px]'>
        <div className='relative'>
          <Image
            src={'/images/burger/burger-set2.png'}
            alt='burger set'
            width={1000}
            height={400}
            className='relative z-20 mb-20'
          />
          <Image
            src={'/images/vectors/arrow-vector.png'}
            alt=''
            width={100}
            height={100}
            className='absolute -bottom-28 left-[10%] sm:left-1/4 md:left-0 -scale-y-100 rotate-45 sm:rotate-12 md:rotate-[120deg] z-0 md:hidden'
          />
          <Image
            src={'/images/vectors/arrow-vector.png'}
            alt=''
            width={140}
            height={140}
            className='absolute top-20 lg:top-40 -left-20 lg:-left-10 -scale-y-100 rotate-[140deg] z-0 hidden md:block xl:hidden'
          />
          <Image
            src={'/images/vectors/arrow-vector.png'}
            alt=''
            width={200}
            height={200}
            className='absolute top-20 lg:top-40 -left-40 -scale-y-100 rotate-[140deg] z-0 hidden xl:block'
          />
          <Image
            src={'/images/vectors/wavy-1.png'}
            alt=''
            width={30}
            height={30}
            className='absolute top-14 sm:top-24 lg:top-36 xl:top-48 right-[39%] -scale-y-100 rotate-[65deg] z-0'
          />
          <Image
            src={'/images/vectors/wavy-2.png'}
            alt=''
            width={30}
            height={30}
            className='absolute top-14 sm:top-24 lg:top-36 xl:top-48 right-[43%] -scale-y-100 rotate-[65deg] z-0'
          />
        </div>
        <div className='text-white font-semibold text-center md:text-left space-y-2 md:flex flex-col justify-center flex-grow'>
          <h2 className='text-2xl xl:text-4xl'>Get up to</h2>
          <h2 className='text-4xl font-bold xl:text-6xl'>50% OFF</h2>
          <h2 className='text-2xl xl:text-4xl pb-4'>On your 2 Order&apos;s</h2>
          <Button className='bg-white border font-semibold text-[--clr-primary-04] w-36 xl:w-60 xl:h-14 lg:text-2xl text-base rounded-xl'>
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
}
