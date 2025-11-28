'use client';
import { imageSlider } from '@/components/constant/image-slider';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
export default function Home() {
  const images = ['/assets/images/star.png'];
  return (
    <>
      {/* first section */}
      <section className="bg-mint min-h-screen relative overflow-hidden ">
        <div className="hidden lg:absolute right-0 bottom-0  lg:w-[80%] lg:flex ">
          <Image
            src="/assets/images/hero-pic.png"
            alt="top-banner"
            width={650}
            height={650}
            priority
            className="h-max w-full mx-auto"
          />
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row justify-start items-center  pt-12 pb-8 ">
          <div className=" flex md:hidden w-full justify-center items-center">
            <Image
              src="/assets/images/hero-pic.png"
              alt="top-banner"
              width={650}
              height={650}
              priority
              className="w-full mx-auto"
            />
          </div>
          {/* left section */}
          <div className="max-w-[650px] space-y-6">
            <h1 className="font-inter font-bold md:text-[4.1rem] lg:text-[5.1rem] lg:leading-tight">
              Meet your
              <span className="font-covered md:text-[4.1rem] lg:text-[5.1rem] text-primary">
                favorite
              </span>{' '}
              new (old) marketing channel.
            </h1>
            <p className="text-gray-600 font-medium text-lg lg:text-xl leading-relaxed">
              Remarkable results. Easier than email. Postcard marketing
              reinvented for modern ecommerce.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <button className=" text-xs md:text-sm font-bold uppercase bg-secondary text-white py-2 md:py-3  lg:py-5.5 px-8   md:px-12 lg:px-16 rounded-2xl border-2 border-light-dark shadow-[3px_3px_0_var(--color-light-dark)] hover:shadow-[5px_5px_0_var(--color-light-dark)] transition-all">
                Try it Risk-free
              </button>
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Image
                      src={images[0]}
                      alt={`star-${i}`}
                      width={20}
                      height={20}
                      priority
                      key={i}
                    />
                  ))}
                </div>
                <p className="text-light-dark font-medium text-xs md:text-sm">
                  5.0 Shopify Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* second section */}
      <section className="bg-white min-h-screen">
        <h1 className="pt-25.5 pb-6 font-bold font-inter text-[4rem] text-center leading-[76px] tracking-[-2px] max-w-164 mx-auto">
          Trusted by thousands of top DTC{' '}
          <span className="text-primary font-normal text-[4rem] tracking-[-2px]  leading-[76px]  font-covered">
            brands.
          </span>
        </h1>

        <div className="flex justify-center items-center">
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 500, disableOnInteraction: false }}
            loop={true}
            centeredSlides={true}
            slidesPerView={3}
            className="mySwiper flex justify-center items-center "
          >
            {imageSlider.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col gap-2">
                  <Image
                    src={item.image1}
                    alt="brand-logo"
                    width={450}
                    height={450}
                    priority
                    className=""
                  />
                  <Image
                    src={item.image2}
                    alt="brand-logo"
                    width={80}
                    height={80}
                    priority
                    className="flex justify-center items-center mx-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
