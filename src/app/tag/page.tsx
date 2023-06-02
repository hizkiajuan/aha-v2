import { getTagList } from '@/app/tag/TagService.ts';
import Loading from '@/app/tag/loading.tsx';
import { TagApiResponse } from '@/common/contract.ts';
import React, { Suspense } from 'react';

export default async function Tag(): Promise<React.JSX.Element> {
  const tagList: TagApiResponse[] = await getTagList();

  return (
    <>
      <article>
        <Suspense fallback={<Loading />}>
          {tagList?.map((tag: TagApiResponse) => (
            <p key={tag.id}>{tag.name}</p>
          ))}
        </Suspense>
      </article>
    </>
  );
}
