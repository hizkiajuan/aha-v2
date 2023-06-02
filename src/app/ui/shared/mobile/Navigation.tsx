'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type NavLinkType = {
  href: string;
  name: string;
  src: string;
};

export default function Navigation() {
  const pathname: string = usePathname();
  const navLinks: NavLinkType[] = [
    { href: '/', name: 'Home', src: '/menu.svg' },
    { href: '/tag', name: 'Tags', src: '/menu-alt.svg' },
  ];

  return (
    <nav className="absolute -z-10 flex h-screen flex-col justify-between sm:hidden">
      <section className="h-[70px] w-screen bg-aha-black-400 px-[21px] pb-[27px] pt-7">
        <Link href="/" className="aha-logo">
          LOGO
        </Link>
      </section>
      <section className="aha-nav-bottom">
        {navLinks.map((link: NavLinkType) => {
          const isHomeLink: boolean = link.name === 'Home';
          const isResultPage: boolean = pathname === '/result';
          const isActive: boolean = pathname === link.href || (isHomeLink && isResultPage);

          return (
            <Link
              className={isActive ? 'text-blue-500' : 'text-black'}
              href={link.href}
              key={link.name}
            >
              <Image src={link.src} alt={link.name} width={24} height={24} />
            </Link>
          );
        })}
      </section>
    </nav>
  );
}
