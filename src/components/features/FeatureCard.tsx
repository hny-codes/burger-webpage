import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

type Props = {
  icon: string;
  title: string;
  desc: string;
};

export default function FeatureCard({ icon, title, desc }: Props) {
  return (
    <Card className='rounded-2xl flex flex-col items-center text-[--clr-secondary-01] font-medium max-w-[494px]'>
      <CardHeader className='relative flex flex-col items-center pt-32'>
        <div className='bg-[--clr-primary-02] w-fit p-6 rounded-2xl absolute -top-16'>
          <Image src={icon} alt='' width={88} height={88} />
        </div>
        <CardTitle className='text-2xl'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{desc}</p>
      </CardContent>
      <CardFooter>
        <a
          href='/'
          className='text-5xl font-extrabold hover:translate-x-2 hover:transition-all duration-75 '
        >
          →
        </a>
      </CardFooter>
    </Card>
  );
}
