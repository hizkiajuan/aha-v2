import Link from 'next/link';
import React from 'react';

type ButtonType = {
  action: string | Function;
  text: string;
  type?: 'default' | 'outlined' | 'contained';
};

export default function Button({
  action,
  text,
  type,
}: ButtonType): React.JSX.Element {
  let style: string = 'block bg-amber-200';

  if (type === 'outlined') {
    style = 'rounded-2xl border border-amber-200';
  }

  return typeof action === 'function' ? (
    // @ts-ignore
    <button onClick={action}>{text}</button>
  ) : (
    <Link href={action} className={style}>
      {text}
    </Link>
  );
}
