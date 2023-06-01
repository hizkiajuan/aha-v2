'use client';

import Loading from '@/app/result/loading.tsx';
import { getResultList } from '@/app/ui/home/SearchService.ts';
import { SearchState, useSearchStore } from '@/app/ui/home/SearchStore.ts';
import { SearchType } from '@/app/ui/home/SearchType.ts';
import Button from '@/app/ui/shared/Button.tsx';
import React, { Suspense } from 'react';

export default async function Result(): Promise<React.JSX.Element> {
  const [keyword, pageSize] = useSearchStore((state: SearchState) => [
    state.keyword,
    state.pageSize,
  ]);
  const resultList: SearchType[] = await getResultList({
    page: '1',
    keyword,
    pageSize,
  });

  return (
    <>
      <article>
        <Suspense fallback={<Loading />}>
          {resultList.map((res: SearchType) => (
            <p key={res.id}>{res.name}</p>
          ))}
        </Suspense>
      </article>
      <Button action="/result" text="more" />
    </>
  );
}
