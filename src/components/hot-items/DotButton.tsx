import { useState } from 'react';
import type { CarouselApi } from '../ui/carousel';

type Props = {
  idx: number;
  api: CarouselApi;
  current: number;
};

export default function DotButton({ idx, api, current }: Props) {
  // https://www.embla-carousel.com/api/methods/#scrollto
  const [index, setIndex] = useState(idx);

  return (
    <div
      className={` rounded-full cursor-pointer ${
        current - 1 === index ? 'w-6 h-6 bg-white' : 'w-4 h-4 bg-gray-50'
      }`}
      onClick={() => api?.scrollTo(idx)}
    ></div>
  );
}
