import Link from 'next/link';
import React from 'react';

type ButtonType = {
  action: string | React.MouseEventHandler<HTMLButtonElement>;
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

  return typeof action === 'string' ? (
    <Link href={action} className={style}>
      {text}
    </Link>
  ) : (
    <button onClick={action}>{text}</button>
  );
}
