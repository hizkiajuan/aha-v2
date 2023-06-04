'use client';

import { getDummyArray } from '@/common/helper.ts';
import { Skeleton } from '@mui/material';
import React from 'react';

export default function Loading(): React.JSX.Element {
  return (
    <div className="px-5 pb-6 sm:px-[130px]">
      <article className="grid grid-cols-1 sm:mb-10 sm:grid-cols-3 sm:gap-x-[34px] sm:gap-y-10">
        {getDummyArray(6).map((i: number) => (
          <div key={i} className="mb-10 sm:mb-0">
            <Skeleton
              variant="rectangular"
              width={335}
              height={222.67}
              className="bg-aha-grey-600"
            />
            <Skeleton
              variant="text"
              className="mt-5 bg-aha-grey-600 text-[15px]"
            />
            <Skeleton variant="text" className="bg-aha-grey-600 text-[11px]" />
          </div>
        ))}
      </article>
      <Skeleton
        variant="rectangular"
        height={40}
        className="block h-10 w-full max-w-[343px] rounded bg-aha-grey-600 text-[14px]"
      />
    </div>
  );
}
