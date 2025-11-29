import { Articles } from '@/components/constant/article';
import Image from 'next/image';
import React from 'react';

export default function Article({
  title,
  subtitle,
  article,
  name,
  id,
  image,
  span,
}: Articles) {
  return (
    <article className="max-w-[550px] pt-[63px] pb-[72px]">
      <div className="flex flex-col w-full">
        {id === 1 ? (
          <span className="font-inter font-bold text-[3.7rem] leading-[70px] tracking-[-4px] md:max-w-80">
            <p className=" font-covered text-primary font-normal leading-[70px] tracking-[-4px] text-[5rem] ">
              {title}
            </p>
            {span}
          </span>
        ):  id === 2 ? (
          <span className="font-inter font-bold text-[3.7rem] leading-[70px] tracking-[-4px] ">
            <span className=" font-covered text-primary font-normal leading-[70px] tracking-[-4px] text-[5rem] ">
              {title}
            </span>
            {span}
          </span>
        ) : (
          <span className="font-inter font-bold text-[1rem] sm:text-[1rem] md:text-[3.7rem] md:leading-[4.357rem] md:tracking-[-4px] md:max-w-80">
            {title}
            <span className=" font-covered text-primary font-normal leading-[4.357rem] tracking-[-4px] text-[5rem] ">
              {span}
            </span>
          </span>
        )}

        <p className="font-inter font-medium text-xl leading-8.5 text-light-Gray md:max-w-124 my-12">
          {subtitle}
        </p>

        <div className="border-2 border-[#D1C7BE] rounded-2xl md:w-[516px] p-9 relative">
          <Image
            src="/assets/images/quote.png"
            alt="quote"
            width={38}
            height={48}
            priority
            className="absolute -top-4"
          />
          <p className="font-inter font-medium text-base leading-8 text-light-Gray md:max-w-103">
            {article}
          </p>
          <div className="flex justify-between items-center pt-4">
            <p className="text-[#A89B90] font-normal leading-6 text-sm  text-center">
              {name}
            </p>
            <Image
              src={image}
              alt="logo"
              width={40}
              height={40}
              priority
              className=""
            />
          </div>
        </div>
      </div>
    </article>
  );
}
