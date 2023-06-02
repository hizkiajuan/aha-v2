import Link from 'next/link';
import React from 'react';

export default function Header(): React.JSX.Element {
  return (
    <nav className="flex h-[70px] flex-col justify-between sm:hidden">
      <section className="h-full w-screen bg-aha-black-400 px-[21px] pb-[27px] pt-7">
        <Link href="/" className="aha-logo">
          LOGO
        </Link>
      </section>
    </nav>
  );
}
