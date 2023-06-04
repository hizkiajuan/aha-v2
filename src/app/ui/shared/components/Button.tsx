import { Button as MuiButton } from '@mui/material';
import Link from 'next/link';
import React from 'react';

type ButtonType = {
  action: string | React.MouseEventHandler<HTMLButtonElement>;
  children?: React.JSX.Element;
  text?: string;
  variant?: 'text' | 'outlined' | 'contained';
};

export default function Button({
  children,
  action,
  text,
  variant,
}: ButtonType): React.JSX.Element {
  let style: string = `block w-full max-w-[343px] h-10 rounded
      bg-white hover:bg-aha-black-500 text-aha-black-500 hover:text-white border !border-white font-bold uppercase
      text-[14px]`;

  if (variant === 'outlined') {
    style = `h-[28px] text-white bg-aha-black-300 rounded-full capitalize hover:bg-white border-white hover:text-aha-black-500
      px-[10px] py-[8px] leading-[12px] text-[12px] font-semibold font-['Open_Sans']`;
  } else if (variant === 'contained') {
    style = `h-[28px] hover:text-white hover:bg-aha-black-300 rounded-full capitalize bg-white border-white text-aha-black-500
      px-[10px] py-[8px] leading-[12px] text-[12px] font-semibold font-['Open_Sans']`;
  }

  return typeof action === 'string' ? (
    <Link href={action} className={style}>
      {children || text}
    </Link>
  ) : (
    <MuiButton onClick={action} variant="outlined" className={style}>
      {children || text}
    </MuiButton>
  );
}
