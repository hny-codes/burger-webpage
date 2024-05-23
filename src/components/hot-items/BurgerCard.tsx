import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  name: string;
  price: number;
  image: string;
};

export default function BurgerCard({ name, price, image }: Props) {
  return (
    <Card className='bg-[--clr-primary-02] font-poppins font-medium text-white w-fit rounded-2xl relative border-none flex flex-col '>
      <CardContent className='p-0 px-4 self-center'>
        <Image
          className='drop-shadow-2xl '
          src={image}
          alt={name}
          width={300}
          height={300}
        />
        <Button variant={"ghost"} className='absolute top-8 right-8'>
          <Image
            src={"/images/icons/like-icon.png"}
            alt=''
            width={25}
            height={25}
          />
        </Button>
      </CardContent>
      <div className='mx-auto -translate-y-10'>
        <CardHeader className=''>
          <CardTitle className='text-2xl'>{name}</CardTitle>
        </CardHeader>
        <CardFooter className='pb-0 flex gap-2 w-full relative z-20 justify-between'>
          <p className='text-3xl'>₹ {price.toFixed(2)}</p>
          <Link href={"/"}>
            <Image
              src={"/images/icons/bag-icon.png"}
              alt=''
              width={30}
              height={30}
            />
          </Link>
        </CardFooter>
      </div>
      <div className='bg-[--clr-primary-02] absolute w-20 h-20 right-0 rounded-b-2xl -bottom-12 card-round z-10 flex items-center justify-center pt-4'>
        <Link href={"/"} className='text-3xl font-bold'>
          →
        </Link>
      </div>
    </Card>
  );
}
