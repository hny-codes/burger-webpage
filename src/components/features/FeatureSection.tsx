import FeatureCard from './FeatureCard';
import Image from 'next/image';

export default function FeatureSection() {
  return (
    <section className='text-white text-center font-poppins'>
      <div className='max-w-[--max-w] mx-auto px-8'>
        <div className='relative'>
          <h2 className='text-3xl uppercase py-16 lg:text-5xl font-semibold my-32'>
            — How does it work —
          </h2>
          <Image
            src={'/images/vectors/arrow-vector.png'}
            alt=''
            width={100}
            height={100}
            className='absolute -bottom-16 sm:bottom-auto sm:-top-40 md:top-2 left-[5%] sm:left-auto sm:right-16 xl:right-32 -scale-y-100 rotate-45 sm:rotate-[250deg] md:rotate-[270deg] z-0 md:w-[150px]'
          />
        </div>
        <div className='flex lg:flex-row flex-col gap-28 lg:gap-10 justify-center items-center '>
          <FeatureCard
            icon='/images/icons/meal-icon.png'
            title='Choose your meals'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
          />
          <FeatureCard
            icon='/images/icons/order-icon.png'
            title='Track order'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
          />
          <FeatureCard
            icon='/images/icons/collect-icon.png'
            title='Collect order'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
          />
        </div>
      </div>
    </section>
  );
}
