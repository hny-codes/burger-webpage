import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-[--clr-secondary-01] text-white font-poppins'>
      <div className='px-8 pt-20 pb-6 grid sm:grid-cols-2 gap-4 md:grid-cols-3 max-w-[--max-w] mx-auto md:gap-10'>
        <div className='mb-10 font-semibold'>
          <div className='flex items-center gap-4 mb-8'>
            <Image
              src={'/images/burger/burger.png'}
              alt='Burger'
              width={50}
              height={50}
              className='drop-shadow-2xl'
            />
            <h2 className='text-2xl font-bold'>BURGER</h2>
          </div>
          <p className='mb-12 text-lg uppercase'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className='space-y-2'>
            <a href='tel:+919876543219' className='block mb-2'>
              +91 9876543219
            </a>
            <a href='mailto:mail@gmail.com'>mail@gmail.com</a>
            <address>xyz, anyware rode, sectore 4</address>
          </div>
        </div>
        <div className='mb-10 flex justify-between sm:justify-end md:justify-around gap-10 mt-2'>
          <div className='flex flex-col gap-2'>
            <h2 className='mb-2 text-2xl font-semibold'>Service</h2>
            <a href='/'>Burger</a>
            <a href='/'>Menu</a>
            <a href='/'>Hot Items</a>
            <a href='/'>About</a>
            <a href='/'>Services</a>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='mb-2 text-2xl font-semibold'>Follow Us</h2>
            <a href='/'>Facebook</a>
            <a href='/'>Instagram</a>
            <a href='/'>LinkedIn</a>
            <a href='/'>Twitter</a>
            <a href='/'>WhatsApp</a>
          </div>
        </div>
        <div className='sm:col-span-2 md:col-span-1 mt-2'>
          <form action='' className='mb-10'>
            <label
              htmlFor='email'
              className='text-2xl font-semibold block text-center sm:text-left'
            >
              Subscribe For New Updates
            </label>
            <div className='relative text-[--clr-secondary-01] mt-6'>
              <input
                type='email'
                id='email'
                placeholder='Enter Email...'
                className='py-3 pl-8 pr-20 w-full rounded-sm placeholder:text-[--clr-secondary-01] placeholder:font-semibold font-semibold'
                required
              ></input>
              <button
                type='submit'
                className='absolute text-3xl right-0 top-0 font-extrabold py-1.5 px-6 btn-l-border'
              >
                →
              </button>
            </div>
          </form>
          <small className='text-lg capitalize font-semibold text-end block mt-24 sm:mt-32 small-t-border'>
            burger.com© All right reserved
          </small>
        </div>
      </div>
    </footer>
  );
}
