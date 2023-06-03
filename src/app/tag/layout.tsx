import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function TagLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-[70px] flex grow flex-col sm:mt-0 sm:overflow-y-scroll">
      <h1 className="block px-5 pb-6 pt-5 text-2xl leading-9 sm:px-8 sm:pt-[80px] sm:text-[30px] md:px-32 lg:px-[257px]">
        Tags
      </h1>
      {children}
    </section>
  );
}
