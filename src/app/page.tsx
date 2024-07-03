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
      <div className='bg-gradient-to-r from-[--clr-primary-05] from-[70%] to-[--clr-primary-01]'>
        <WhoSection />
      </div>
    </main>
  );
}
