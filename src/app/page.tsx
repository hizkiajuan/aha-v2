import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <section>
      <div>search bar</div>
      <div># of results per page</div>
      <Link href="./result">search</Link>
    </section>
  );
}
