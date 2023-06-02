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
    style = 'block w-full max-w-[343px] h-10 rounded bg-white text-aha-black-500 font-bold uppercase text-[14px]';
  }

  return typeof action === 'string' ? (
    <Link href={action} className={style}>
      {text}
    </Link>
  ) : (
    <button onClick={action} className={style}>
      {text}
    </button>
  );
}
