import React from "react";
import HeroBurger from "./HeroBurger";
import HeroText from "./HeroText";

export default function HeroSection() {
  return (
    <section>
      <div className="relative">
        <HeroBurger />
        <HeroText />
      </div>
    </section>
  );
}
