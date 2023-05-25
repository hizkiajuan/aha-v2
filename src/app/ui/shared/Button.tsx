import Link from 'next/link';
import React from 'react';

type ButtonType = {
  text: string;
  type?: 'default' | 'outlined' | 'contained';
};

export default function Button({ text, type }: ButtonType): React.JSX.Element {
  let style: string = 'block bg-amber-200';

  if (type === 'outlined') {
    style = 'rounded-2xl border border-amber-200';
  }

  return (
    <Link href="/result" className={style}>
      {text}
    </Link>
  );
}
