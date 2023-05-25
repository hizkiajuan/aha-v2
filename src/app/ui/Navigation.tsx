'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation({ navLinks }) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isHomeLink = link.name === 'Home';
        const isResultPage = pathname === '/result';
        const isActive = pathname === link.href || (isHomeLink && isResultPage);

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
