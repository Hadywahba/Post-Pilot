'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { navigationMenu } from '../constant/navigation-menu';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="text-gray w-full pt-5 font-inter font-medium text-[#222222] text-sm relative z-99">
      <div className="container flex w-full items-center justify-between gap-4">
        <Link href="/">
          <Image
            src="/assets/images/post-pilot.svg.png"
            alt="postpilot"
            width={120}
            height={120}
            priority
          />
        </Link>

        <nav aria-label="Main menu" className="hidden lg:flex">
          <ul className="flex items-center justify-center gap-8  ">
            {navigationMenu.map((item) => (
              <li
                key={item.id}
                className={`capitalize hover:underline ${
                  item.name.toLowerCase() === 'login'
                    ? 'bg-white border-2 border-light-dark text-base px-5.5 pb-3 pt-3.5 rounded-[0.8rem] drop-shadow-[3px_3px_0_var(--color-light-dark)]'
                    : ''
                } ${
                  item.name.toLowerCase() === 'create free account'
                    ? 'bg-secondary drop-shadow-[3px_3px_0_var(--color-light-dark)] text-white px-[1.55rem] pb-3 pt-3.5 rounded-[0.8rem] border-2 border-light-dark'
                    : ''
                } `}
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Burger button */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile sliding menu */}
      <nav
        aria-label="Mobile menu"
        className={`fixed top-0 right-0 z-50 h-full w-64 transform bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-full' : 'translate-x-0'}`}
      >
        <button
          className="mb-4 flex w-full justify-end"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Close menu"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col gap-6">
          {navigationMenu.map((item) => (
            <li key={item.id} className="w-full capitalize hover:underline">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
