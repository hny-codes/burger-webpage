import HeroSection from '@/components/hero/HeroSection';
import HotSection from '@/components/hot-items/HotSection';
import Banner from '@/components/banner/Banner';
import WhoSection from '@/components/who/WhoSection';

export default function Home() {
  return (
    <main className=''>
      <HeroSection />
      <HotSection />
      <Banner />
      <div className='bg-radial-bg sm:bg-radial-bg-sm lg:bg-radial-bg-lg'>
        <WhoSection />
      </div>
    </main>
  );
}
