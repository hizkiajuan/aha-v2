'use client';

import Button from '@/app/ui/shared/Button.tsx';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Profile(): React.JSX.Element {
  const pathname: string = usePathname();
  const hidden: string = pathname === '/tag' ? 'hidden' : '';

  return (
    <aside className={`flex flex-col ${hidden}`}>
      <h2>Followers</h2>
      <div className="flex items-start">
        <span>img</span>
        <p className="flex flex-col">
          <span>Fullname</span>
          <span>@username</span>
        </p>
        <Button text="Follow" type="outlined" />
      </div>
    </aside>
  );
}
