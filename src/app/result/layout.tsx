import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-[70px] flex grow flex-col sm:mt-0 sm:overflow-y-scroll">
      <h1 className="block px-5 pb-6 pt-5 text-2xl leading-9 sm:hidden">
        Results
      </h1>
      <div className="hidden items-center gap-x-8 px-[92px] pb-6 pt-[92px] sm:flex">
        <Link href="/">
          <Image
            src="/chevron-left.svg"
            alt="Back to Home page"
            width={13}
            height={22}
          />
        </Link>
        <h1 className="text-3xl leading-[45px]">Results</h1>
      </div>
      {children}
    </section>
  );
}
