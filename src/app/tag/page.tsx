import { getTagList } from '@/app/tag/TagService.ts';
import Loading from '@/app/tag/loading.tsx';
import { TagApiResponse } from '@/common/contract.ts';
import React, { Suspense } from 'react';

export default async function Tag(): Promise<React.JSX.Element> {
  const tagList: TagApiResponse[] = await getTagList();

  return (
    <div className="px-[25px] pb-6 sm:px-8 md:px-32 lg:px-[257px]">
      <article className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <Suspense fallback={<Loading />}>
          {tagList.map((tag: TagApiResponse) => (
            <div key={tag.id} className="">
              <div className="flex h-[150px] w-[150px] items-end rounded-[10px] bg-aha-black-200 px-[10px] py-[14px]">
                <p className="inline-block h-[50px] w-auto items-center justify-start truncate rounded-lg border-4 border-white px-[14px] py-[7px] text-2xl font-bold">
                  {tag.name}
                </p>
              </div>
              <h2 className="mt-5 truncate leading-[22px] tracking-[0.14px] text-[15h2x]">
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
