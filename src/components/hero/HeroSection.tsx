import React from "react";
import HeroBurger from "./HeroBurger";
import HeroText from "./HeroText";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className='relative'>
      <Image
        src={"/images/vectors/polygon.svg"}
        alt=''
        width={400}
        height={400}
        className='absolute w-full md:w-1/2 right-0 z-10 top-0'
      />
      <div className='relative md:grid grid-cols-2 gap-10 xl:gap-4 max-w-[--max-w] mx-auto'>
        <HeroBurger />
        <HeroText />
      </div>
    </section>
  );
}
