import BurgerCarousel from './BurgerCarousel';

export default function HotSection() {
  return (
    <section className='mt-20 md:mt-96 md:pt-20 mb-40 font-poppins text-white'>
      <div>
        <div className='text-center uppercase space-y-10 px-8'>
          <h2 className=' font-semibold text-3xl lg:text-5xl'>— Hot Items —</h2>
          <h3 className='text-xl lg:text-3xl '>
            Locally sourced, organic ingredients for a fresh and eco-friendly
            experience
          </h3>
        </div>
        <BurgerCarousel />
      </div>
    </section>
  );
}
