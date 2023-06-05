'use client';

import Loading from '@/app/tag/loading.tsx';
import { getTagList } from '@/app/tag/services/TagService.ts';
import { TagApiResponse } from '@/common/contract.ts';
import React, { Suspense, useEffect, useState } from 'react';

export default function Tag(): React.JSX.Element {
  const [tagList, setTagList] = useState([] as TagApiResponse[]);

  useEffect(() => {
    if (tagList.length === 0) {
      const fetchTagList = async (): Promise<TagApiResponse[]> => getTagList();

      fetchTagList().then((response: TagApiResponse[]): void => {
        setTagList((currentTagList: TagApiResponse[]) => [
          ...currentTagList,
          ...response,
        ]);
      });
    }
  });

  return (
    <div className="px-[25px] pb-6 sm:px-8 md:px-32 lg:px-[257px]">
      <article className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <Suspense fallback={<Loading />}>
          {tagList.map((tag: TagApiResponse) => (
            <div key={tag.id} className="w-[150px]">
              <div className="flex h-[150px] w-[150px] items-end rounded-[10px] bg-aha-black-200 px-[10px] py-[14px]">
                <p className="inline-block h-[50px] w-auto items-center justify-start truncate rounded-lg border-4 border-white px-[14px] py-[7px] text-2xl font-bold">
                  {tag.name}
                </p>
              </div>
              <h2 className="mt-5 truncate text-[15px] leading-[22px] tracking-[0.14px]">
                {tag.name}
              </h2>
              <label className="text-[11px] leading-[17px] tracking-[0.37px] text-aha-grey-400">
                {tag.count} Questions
              </label>
            </div>
          ))}
        </Suspense>
      </article>
    </div>
  );
}
