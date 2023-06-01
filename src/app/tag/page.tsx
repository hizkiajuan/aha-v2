import { getTagList } from '@/app/tag/TagService.ts';
import { TagApiResponse } from '@/common/contract.ts';
import React from 'react';

export default async function Tag(): Promise<React.JSX.Element> {
  const tagList: TagApiResponse[] = await getTagList();

  return (
    <>
      <article>
        {tagList?.map((tag: TagApiResponse) => (
          <p key={tag.id}>{tag.name}</p>
        ))}
      </article>
    </>
  );
}
