import { Brands } from '@/components/constant/brand';
import Image from 'next/image';
import React from 'react';

export default function Brand({  image, subtitle, title , bgColor }: Brands) {
  return (
    <section className={`rounded-xl flex flex-col justify-center items-center min-h-[550px]  lg:h-[506px]  text-center ${bgColor}`}>
      <Image
        src={image}
        alt="brand"
        width={308}
        height={150}
        priority
         className="w-full max-w-[250px] md:max-w-[308px] h-auto"
      />
     
     <div className='pt-8 w-[330px h-[134px] px-10'>
         <h3 className=' font-bold font-inter text-lg md:text-[1.75rem] text-light-dark md:leading-9'>{title}</h3>
      <p className='font-inter font-medium text-sm md:lg:text-base md:leading-8 text-light-Gray '>{subtitle}</p>
     </div>

    </section>
  );
}
