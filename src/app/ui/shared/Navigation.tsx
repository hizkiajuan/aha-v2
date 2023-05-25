'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  href: string;
  name: string;
};

export default function Navigation({ navLinks }: { navLinks: NavLink[] }) {
  const pathname: string = usePathname();

  return (
    <>
      {navLinks.map((link: NavLink) => {
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
