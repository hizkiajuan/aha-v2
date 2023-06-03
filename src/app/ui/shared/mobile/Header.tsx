'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Header(): React.JSX.Element {
  const pathname: string = usePathname();
  const isHomePage: boolean = pathname === '/';

  return (
    <nav className="fixed flex h-[70px] flex-col justify-between sm:hidden">
      {isHomePage ? (
        <section className="h-full w-screen bg-aha-black-400 px-[21px] pb-[27px] pt-7">
          <Link href="/" className="aha-logo">
            LOGO
          </Link>
        </section>
      ) : (
        <section className="flex h-full w-screen items-center bg-aha-black-400 px-[25.5px]">
          <Link href="/">
            <Image
              src="/chevron-left.svg"
              alt="Back to Home page"
              width={13}
              height={22}
            />
          </Link>
          <h1 className="ml-5 text-2xl leading-9">Home Page</h1>
        </section>
      )}
    </nav>
  );
}
