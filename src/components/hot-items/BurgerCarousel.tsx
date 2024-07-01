"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import BurgerCard from "./BurgerCard";
import data from "@/data/burger-data.json";

export default function BurgerCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [view, setView] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    setView(api.slidesInView().length);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className='px-20 w-full mx-auto max-w-[500px] sm:max-w-none'>
      <Carousel setApi={setApi} className='cursor-pointer'>
        <CarouselContent className='py-12'>
          {data.map((burger, idx) => (
            <CarouselItem
              key={idx}
              className='sm:basis-1/2 md:basis-1/3 xl:basis-1/4 '
            >
              <BurgerCard
                price={burger.price}
                name={burger.name}
                image={burger.image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* <div>
        <p>Slides {current} out of {count} | Views: {view}</p>
      </div> */}
    </div>
  );
}
