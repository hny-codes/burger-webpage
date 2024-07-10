import FeedbackCarousel from './FeedbackCarousel';

export default function FeedbackSection() {
  return (
    <section className='text-white px-0 pb-32'>
      <div>
        <h2 className='text-3xl text-center uppercase pt-16 xl:pb-16 lg:text-5xl font-semibold mt-8 sm:mt-32'>
          — What our customers say —
        </h2>
        <div>
          <FeedbackCarousel />
        </div>
      </div>
    </section>
  );
}
