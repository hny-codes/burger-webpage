import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

type Props = {
  user: string;
  title: string;
  rating: number;
  quote: string;
  current: number; // index of the card
  selected: number; // selected index of the carousel
};

export default function FeedbackCard({
  user,
  title,
  rating,
  quote,
  current,
  selected,
}: Props) {
  const decimal = Number.isInteger(rating);

  return (
    <Card
      className={`text-[--clr-primary-05] font-medium text-center pt-12 pb-4 max-w-[600px] md:max-w-[800px] mx-auto px-2 md:px-20 grid grid-rows-[1f_200px_200px] min-h-[476px] h-full card-shadow transition-all duration-500 ${
        current === selected && 'lg:scale-110'
      }`}
    >
      <CardContent className='flex flex-col justify-center items-center'>
        <div className='bg-[--clr-primary-05] rounded-full w-[95px] h-[95px] flex items-center justify-center mb-6'>
          <Image
            src={'/images/vectors/quote.png'}
            alt=''
            width={38}
            height={38}
          />
        </div>
        <p className='sm:text-2xl'>{quote}</p>
      </CardContent>
      <CardHeader className='space-y-2 self-end'>
        <div className='flex gap-2 items-center justify-center'>
          {decimal &&
            [...Array(rating)].map((_, idx) => {
              return (
                <svg
                  key={idx}
                  width='28'
                  height='27'
                  viewBox='0 0 28 27'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M14.1452 0.683167L17.2884 10.7024L27.46 10.7024L19.231 16.8947L22.3742 26.9139L14.1452 20.7217L5.91621 26.9139L9.0594 16.8947L0.830411 10.7024L11.002 10.7024L14.1452 0.683167Z'
                    fill='#FF7A04'
                  />
                </svg>
              );
            })}
          {!decimal && (
            <>
              {[...Array(Math.floor(rating))].map((_, idx) => {
                return (
                  <svg
                    key={idx}
                    width='28'
                    height='27'
                    viewBox='0 0 28 27'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M14.1452 0.683167L17.2884 10.7024L27.46 10.7024L19.231 16.8947L22.3742 26.9139L14.1452 20.7217L5.91621 26.9139L9.0594 16.8947L0.830411 10.7024L11.002 10.7024L14.1452 0.683167Z'
                      fill='#FF7A04'
                    />
                  </svg>
                );
              })}
              <svg
                width='15'
                height='27'
                viewBox='0 0 15 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14.1452 0.683167V10.6143V20.5454L5.49273 26.6832L8.79768 16.7521L0.145203 10.6143H10.8403L14.1452 0.683167Z'
                  fill='#FF7A04'
                />
              </svg>
            </>
          )}
        </div>

        <CardTitle className='sm:text-2xl'>{user}</CardTitle>
        <CardDescription className='text-[--clr-primary-05]'>
          {title}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
