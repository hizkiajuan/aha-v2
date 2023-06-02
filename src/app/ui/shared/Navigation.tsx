'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type NavLinkType = {
  href: string;
  name: string;
};

export default function Navigation() {
  const pathname: string = usePathname();
  const navLinks: NavLinkType[] = [
    { href: '/', name: 'Home' },
    { href: '/tag', name: 'Tags' },
  ];

  return (
    <nav className="hidden h-screen w-20 flex-col bg-ahaBlack-300 sm:flex">
      <div className="">
        <Link href="/" className="aha-logo">
          LOGO
        </Link>
      </div>
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
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
