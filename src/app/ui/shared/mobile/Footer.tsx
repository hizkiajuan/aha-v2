'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type NavLinkType = {
  href: string;
  name: string;
};

export default function Footer(): React.JSX.Element {
  const pathname: string = usePathname();
  const navLinks: NavLinkType[] = [
    { href: '/', name: 'Home' },
    { href: '/tag', name: 'Tags' },
  ];

  return (
    <nav
      className={`${
        pathname === '/' ? 'flex' : 'hidden'
      } h-[66px] flex-col justify-between sm:hidden`}
    >
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
              <Image
                src={`/${isActive ? 'menu.svg' : 'menu-alt.svg'}`}
                alt={link.name}
                width={24}
                height={24}
              />
            </Link>
          );
        })}
      </section>
    </nav>
  );
}
