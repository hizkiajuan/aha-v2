import Link from 'next/link';
import React from 'react';

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>
        <Link href="/">&lt;</Link> Results
      </nav>
      {children}
    </section>
  );
}
