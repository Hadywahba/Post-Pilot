'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { footerMenu } from '../constant/footer-menu';

export default function Footer() {
  return (
    <footer className="bg-white pt-12 md:pt-16 pb-6">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6    border-b-2 border-[#E6E6E7]  py-16">
          {/* Eco Section */}
          <div className="space-y-4">
            <Image
              src="/assets/images/Eco.png"
              alt="postpilot"
              width={50}
              height={50}
              priority
              className="w-28"
            />
            <p className="text-sm leading-5.5 font-inter font-medium text-light-Gray max-w-[295px]">
              Our paper is sourced from FSC-certified mills. We plant enough
              trees to more than double our paper usage.
            </p>
          </div>

          {/* Company Section */}
          <div className="flex flex-col gap-4">
            <h5 className="font-inter font-bold text-sm leading-4 text-light-dark">
              Company
            </h5>
            <span className="text-sm font-inter text-light-Gray">About us</span>
            <span className="text-sm font-inter text-light-Gray">
              Partner program
            </span>
            <span className="text-sm font-inter text-light-Gray">Career</span>
            <span className="text-sm font-inter text-light-Gray">
              Contact us
            </span>
            <span className="text-sm font-inter text-light-Gray">
              Privacy Policy
            </span>
          </div>

          {/* About Section */}
          <div className="flex flex-col gap-4">
            <h5 className="font-inter font-bold text-sm leading-4 text-light-dark">
              About
            </h5>
            <span className="text-sm font-inter text-light-Gray">Pricing</span>
            <span className="text-sm font-inter text-light-Gray">Reviews</span>
            <span className="text-sm font-inter text-light-Gray">
              Direct Mail Academy
            </span>
            <span className="text-sm font-inter text-light-Gray">
              Success stories
            </span>
            <span className="text-sm font-inter text-light-Gray">
              Terms & conditions
            </span>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-4">
            <h5 className="font-inter font-bold text-sm leading-4 text-light-dark">
              Contact
            </h5>
            <div className='flex items-center gap-2'>
                  <Image
              src="/assets/images/email.png"
              alt="email"
              width={17}
              height={17}
              priority
              className=""
            />
                <span className="text-sm font-inter text-light-Gray">
              support@postpilot.com
            </span>
            </div>
            <span className='text-light-Gray font-inter font-medium text-xs md:text-sm'>printed with 🧡 at our facility in South Carolina.</span>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-start gap-4 md:flex md:flex-row md:justify-between md:items-center pt-12">
          <div className="flex flex-col">
            <Image
              src="/assets/images/post-pilot.svg.png"
              alt="postpilot"
              width={120}
              height={120}
              priority
            />
            <p className='text-light-Gray font-inter font-medium text-xs md:text-sm pt-2'>© 2022 PostPilot, Inc. All rights reserved.</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            {footerMenu.map((item) => (
              <button
                key={item.id}
                className={`capitalize  ${
                  item.name.toLowerCase() === 'login'
                    ? 'bg-white border-2 border-light-dark text-base px-5.5 pb-3 pt-3.5 rounded-[0.8rem] drop-shadow-[3px_3px_0_var(--color-light-dark)]'
                    : ''
                } ${
                  item.name.toLowerCase() === 'try it for free'
                    ? 'bg-secondary drop-shadow-[3px_3px_0_var(--color-light-dark)] text-white px-[1.55rem] pb-3 pt-3.5 rounded-[0.8rem] border-2 border-light-dark'
                    : ''
                } `}
              >
                <Link href={item.link}>{item.name}</Link>
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
