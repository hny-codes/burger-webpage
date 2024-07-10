import Image from 'next/image';
import WhoText from './WhoText';

export default function WhoSection() {
  return (
    <section className='text-white text-center px-8'>
      <div className='max-w-[--max-w] mx-auto'>
        <h2 className='text-3xl uppercase py-16 lg:text-5xl font-semibold'>
          — Who we are —
        </h2>
        <div className='sm:flex flex-row-reverse gap-8 sm:text-left flex-grow'>
          <div className='relative mb-10 sm:mb-0'>
            <Image
              src={'/images/burger/persona-crop.png'}
              alt='burger persona'
              width={829}
              height={553}
              className='relative z-20'
            />
          </div>
          <WhoText />
        </div>
      </div>
    </section>
  );
}
