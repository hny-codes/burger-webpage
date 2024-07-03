import Image from "next/image";
import HeroSection from "@/components/hero/HeroSection";
import HotSection from "@/components/hot-items/HotSection";
import Banner from "@/components/banner/Banner";

export default function Home() {
  return (
    <main className=''>
      <HeroSection />
      <HotSection />
      <Banner />
    </main>
  );
}
