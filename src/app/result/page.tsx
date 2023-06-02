'use client';

import Loading from '@/app/result/loading.tsx';
import { getResultList } from '@/app/ui/home/SearchService.ts';
import { SearchState, useSearchStore } from '@/app/ui/home/SearchStore.ts';
import { SearchType } from '@/app/ui/home/SearchType.ts';
import Button from '@/app/ui/shared/Button.tsx';
import React, { Suspense, useEffect, useState } from 'react';

export default async function Result(): Promise<React.JSX.Element> {
  const [keyword, pageSize] = useSearchStore((state: SearchState) => [
    state.keyword,
    state.pageSize,
  ]);
  // const resultList: SearchType[] = await getResultList({
  //   page: '1',
  //   keyword,
  //   pageSize,
  // });

  const [res, setRes] = useState([] as SearchType[]);
  // const xxx = await getResultList({
  //   page: '1',
  //   keyword,
  //   pageSize,
  // });
  // setRes(xxx);

  useEffect(() => {
    if (keyword) {
      const fetchResultList = async () => getResultList({
        page: '1',
        keyword,
        pageSize,
      });

      fetchResultList().then((resp) => {
        setRes(resp);
      });
    }
  }, [keyword, pageSize]);

  // useEffect(() => {
  //   if (xxx?.length > 0) {
  //     // setRes(xxx);]
  //     console.log('===xxx', xxx);
  //   }
  // }, [xxx]);

  return (
    <>
      <article>
        <Suspense fallback={<Loading />}>
          {res.map((r: SearchType) => (
            <p key={r.id}>{r.name}</p>
          ))}
        </Suspense>
      </article>
      <Button action="/result" text="more" />
    </>
  );
}
