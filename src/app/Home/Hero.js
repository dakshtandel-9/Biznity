'use client';

import Image from 'next/image';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { CheckCircle2, Link } from 'lucide-react';

const features = [
  '1,500+ Successful Setups',
  '48-Hr Setup Time',
  '99% Approval Rate',
  '24/7 Support',
];

export default function Hero() {
  return (
    <section className="relative pt-70 bg-cover bg-center bg-no-repeat text-white px-6 py-24 lg:px-16 border-b-5 border-b-[#b28219]" style={{ backgroundImage: "url('/dubai-bg.jpg') " }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          Setup Your Dubai Business <br />
          <span className="text-[#D5C299]">Quickly and Hassle-Free.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          <span className="font-semibold text-white">Mainland, Freezone, or Offshore:</span> Launch Your Dubai Business in Just 48 Hours.
        </p>

        <a href="#cost-calculator">
          <RainbowButton
            variant="outline"
            className="px-8 py-4 text-lg font-semibold"
          >
            FREE CONSULTATION
          </RainbowButton>
        </a>


        {/* Feature list */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center justify-center gap-2 text-sm sm:text-base">
              <CheckCircle2 className="text-green-400 w-5 h-5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
