'use client';
import { useInView } from 'react-intersection-observer';

export default function HotText() {
  const { ref, inView, entry } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`text-center uppercase space-y-10 px-8 opacity-0 ${
        inView && 'animate-text-up'
      }`}
    >
      <h2 className=' font-semibold text-3xl lg:text-5xl'>— Hot Items —</h2>
      <h3 className='text-xl lg:text-3xl '>
        Locally sourced, organic ingredients for a fresh and eco-friendly
        experience
      </h3>
    </div>
  );
}
