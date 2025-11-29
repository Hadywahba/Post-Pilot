import { Trends } from '@/components/constant/trend';
import Image from 'next/image';
import React from 'react';

export default function Trend({  image, title }: Trends) {
  return (
    <section className=''>
      <Image
        src={image}
        alt="trend"
        width={410}
        height={275}
        priority
        className=""
      />
      <h2 className='md:w-[344px] font-inter font-bold text-base sm:text-lg md:text-2xl text-light-dark pt-4'>{title}</h2>
    </section>
  );
}
