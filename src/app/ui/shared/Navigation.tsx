'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkType = {
  href: string;
  name: string;
};

export default function Navigation({ navLinks }: { navLinks: NavLinkType[] }) {
  const pathname: string = usePathname();

  return (
    <>
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
    </>
  );
}
