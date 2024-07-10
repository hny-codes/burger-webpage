import BurgerCarousel from './BurgerCarousel';
import HotText from './HotText';

export default function HotSection() {
  return (
    <section className='mt-20 md:mt-96 md:pt-20 mb-40 font-poppins text-white max-w-[--max-w] mx-auto'>
      <div>
        <HotText />
        <BurgerCarousel />
      </div>
    </section>
  );
}
