import BurgerCarousel from "./BurgerCarousel";

export default function HotSection() {
  return (
    <section className='mt-20 md:mt-80 mb-40 font-poppins text-white'>
      <div>
        <h2 className='capitalize font-semibold text-3xl text-center'>
          Hot Items
        </h2>
        <BurgerCarousel />
      </div>
    </section>
  );
}
