'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type NavLinkType = {
  href: string;
  name: string;
};

export default function Navigation(): React.JSX.Element {
  const pathname: string = usePathname();
  const navLinks: NavLinkType[] = [
    { href: '/', name: 'Home' },
    { href: '/tag', name: 'Tags' },
  ];

  return (
    <nav className="hidden h-screen w-20 flex-col items-center justify-start gap-6 bg-aha-black-300 sm:flex">
      <Link href="/" className="aha-logo mb-[20px] mt-[37px]">
        LOGO
      </Link>
      {navLinks.map((link: NavLinkType) => {
        const isHomeLink: boolean = link.name === 'Home';
        const isResultPage: boolean = pathname === '/result';
        const isActive: boolean =
          pathname === link.href || (isHomeLink && isResultPage);

        return (
          <Link
            className={`${
              isActive && link.name === 'Tags' ? 'mt-[17px]' : '-mt-[1px]'
            } flex flex-col items-center pl-[1px]`}
            href={link.href}
            key={link.name}
          >
            <div
              className={`relative ${
                isActive ? 'bg-aha-menu' : 'bg-aha-menu-alt'
              } h-6 w-6`}
              title={link.name}
            >
              {!isActive && link.name === 'Tags' && (
                <div className="absolute -right-[3px] -top-[4px] h-[5px] w-[5px] rounded-full bg-aha-blue-400">
                  &nbsp;
                </div>
              )}
            </div>
            {isActive && (
              <p className="pl-[1px] text-xs leading-[18px] tracking-[0.4px]">
                {link.name}
              </p>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
