// Header.js
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RainbowButton } from '@/components/magicui/rainbow-button';

const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-black">
      {/* Logo with white transparent background */}
      <div className="flex items-center rounded-xl px-3 py-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-white font-medium">
        <Link href="#cost-calculator">Cost Calculator</Link>
        <Link href="#packages">Packages</Link>
        <Link href="#how-it-works">How it Works</Link>
        <Link href="#faqs">FAQs</Link>
      </nav>

      {/* CTA Button */}
      <Link href="#cost-calculator">
        <RainbowButton variant="outline">
          Contact Us
        </RainbowButton>
      </Link>
    </header>
  );
};

export default Header;
