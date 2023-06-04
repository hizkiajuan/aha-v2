'use client';

import { getDummyArray } from '@/common/helper.ts';
import { Skeleton } from '@mui/material';
import React from 'react';

export default function Loading(): React.JSX.Element {
  return (
    <div className="px-[25px] pb-6 sm:px-8 md:px-32 lg:px-[257px]">
      <article className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {getDummyArray(24).map((i: number) => (
          <div key={i} className="w-[150px]">
            <Skeleton
              variant="rectangular"
              width={150}
              height={150}
              className="flex h-[150px] w-[150px] items-end rounded-[10px] bg-aha-grey-600 px-[10px] py-[14px]"
            />
            <Skeleton
              variant="text"
              className="mt-5 bg-aha-grey-600 text-[15px]"
            />
            <Skeleton variant="text" className="bg-aha-grey-600 text-[11px]" />
          </div>
        ))}
      </article>
    </div>
  );
}
