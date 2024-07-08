'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useState, useEffect } from 'react';
import data from '@/data/feedback-data.json';
import FeedbackCard from './FeedbackCard';
import { Button } from '../ui/button';

export default function FeedbackCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        loop: true,
      }}
    >
      <div className='relative'>
        <CarouselContent className='-ml-20'>
          {data.map((feedback, idx) => (
            <CarouselItem
              key={idx}
              className='lg:basis-3/5 xl:basis-[52%] pl-20'
            >
              <FeedbackCard
                quote={feedback.quote}
                rating={feedback.rating}
                title={feedback.title}
                user={feedback.name}
                current={current}
                selected={idx}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
      <div className='flex justify-center gap-8 mt-10'>
        <Button
          onClick={() => api?.scrollPrev()}
          className='font-bold text-xl sm:text-2xl'
          variant={'feedback'}
          size={'feedback'}
        >
          ᐸ
        </Button>
        <Button
          onClick={() => api?.scrollNext()}
          className='font-bold text-xl sm:text-2xl'
          variant={'feedback'}
          size={'feedback'}
        >
          ᐳ
        </Button>
      </div>
    </Carousel>
  );
}
