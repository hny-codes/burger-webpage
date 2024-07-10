'use client';

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function WhoText() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`space-y-8 sm:self-center xl:mt-40 xl:text-xl xl:w-1/2 opacity-0 ${
        inView && 'animate-text-up'
      }`}
    >
      <p>
        Community-focused initiatives such as partnerships with local farms or
        environmental organizations.
      </p>
      <p>
        Social media integration for sharing photos, reviews, and engaging with
        the veggie burger community.
      </p>
      <div className='h-0.5 w-24 bg-white mx-auto sm:mx-0 rounded-full'></div>
      <p>
        Nutritional information provided for each menu item, catering to
        health-conscious customers.
      </p>
      <p>
        Wide range of veggie burger options including classic, gourmet, and
        customizable choices.
      </p>
      <a
        href='/'
        className='flex items-center justify-center sm:justify-start gap-4'
      >
        <Image
          src={'/images/icons/send-icon.png'}
          alt=''
          width={48}
          height={48}
        />
        <p className='underline text-2xl'>Sher</p>
      </a>
    </div>
  );
}
