import Image from 'next/image';
import React from 'react';

export default function Hero() {
  const images = ['/assets/images/star.png'];
  return (
    <main className="flex flex-col md:flex-row justify-between items-center bg-mint min-h-screen">
      {/* left section */}
      <div className="container mx-auto w-full md:w-[1290px] h-auto md:h-[500px]">
        {/* section */}
        <div className="max-w-[650px]">
          <h1 className="font-inter font-bold text-[5.1rem] leading-24">
            Meet your
            <span className="font-covered text-[5.5rem] text-primary">
              {' '}
              favorite
            </span>{' '}
            new (old) marketing channel.
          </h1>
          <p className="text-light-Gray font-medium text-xl leading-8 my-8">
            Remarkable results. Easier than email. Postcard marketing reinvented
            for modern ecommerce.
          </p>
          <div className="flex justify-center items-center gap-4">
            <h1 className="text-sm font-bold uppercase bg-secondary drop-shadow-[3px_3px_0_var(--color-light-dark)] text-white py-5.5 px-[4.1rem] text-center rounded-2xl border-2 border-light-dark">
              Try it Risk-free
            </h1>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Image
                    src={images[0]}
                    alt={`card-${i}`}
                    width={24}
                    height={24}
                    priority
                    key={i}
                  />
                ))}
              </div>
              <p className="text-light-dark font-medium">5.0 Shopify Rating</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full md:w-auto mt-8 md:mt-0">
        <Image
          src="/assets/images/hero-pic.png"
          alt="hero"
          width={650}
          height={650}
          priority
        />
      </div>
    </main>
  );
}
