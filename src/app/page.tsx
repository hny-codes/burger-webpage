import Image from "next/image";
import HeroSection from "@/components/hero/HeroSection";
import HotSection from "@/components/hot-items/HotSection";

export default function Home() {
  return (
    <main className=''>
      <HeroSection />
      <HotSection />
    </main>
  );
}
