import Image from 'next/image';

export default function WhoSection() {
  return (
    <section className='text-white text-center px-8'>
      <div className=''>
        <h2 className='text-3xl uppercase py-16'>— Who we are —</h2>
        <div className='sm:flex flex-row-reverse gap-8 sm:text-left'>
          <div className='relative mb-10 sm:mb-0'>
            <Image
              src={'/images/burger/persona-crop.png'}
              alt='burger persona'
              width={829}
              height={553}
              className='relative z-20'
            />
          </div>
          <div className='space-y-8 sm:self-center xl:mt-40'>
            <p>
              Community-focused initiatives such as partnerships with local
              farms or environmental organizations.
            </p>
            <p>
              Social media integration for sharing photos, reviews, and engaging
              with the veggie burger community.
            </p>
            <div className='h-1 w-24 bg-white mx-auto sm:mx-0 rounded-full'></div>
            <p>
              Nutritional information provided for each menu item, catering to
              health-conscious customers.
            </p>
            <p>
              Wide range of veggie burger options including classic, gourmet,
              and customizable choices.
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
        </div>
      </div>
    </section>
  );
}
