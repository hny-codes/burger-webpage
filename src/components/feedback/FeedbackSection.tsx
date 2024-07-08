import FeedbackCarousel from './FeedbackCarousel';

export default function FeedbackSection() {
  return (
    <section className='text-white px-8 sm:px-0 pb-32'>
      <div>
        <h2 className='text-3xl text-center uppercase py-16 lg:text-5xl font-semibold my-8 sm:my-32'>
          — What our customers say —
        </h2>
        <div>
          <FeedbackCarousel />
        </div>
      </div>
    </section>
  );
}
