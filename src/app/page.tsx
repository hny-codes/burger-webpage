import HeroSection from '@/components/hero/HeroSection';
import HotSection from '@/components/hot-items/HotSection';
import Banner from '@/components/banner/Banner';
import WhoSection from '@/components/who/WhoSection';
import FeatureSection from '@/components/features/FeatureSection';
import FeedbackSection from '@/components/feedback/FeedbackSection';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <main className=''>
      <HeroSection />
      <HotSection />
      <Banner />
      <div className='bg-radial-bg sm:bg-radial-bg-sm xl:bg-radial-bg-xl'>
        <WhoSection />
        <FeatureSection />
        <FeedbackSection />
      </div>
      <Footer />
    </main>
  );
}
