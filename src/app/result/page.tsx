'use client';

import Loading from '@/app/result/loading.tsx';
import { SearchFilterType } from '@/app/ui/home/SearchFilterType.ts';
import { getSearchResultList } from '@/app/ui/home/SearchService.ts';
import { SearchType } from '@/app/ui/home/SearchType.ts';
import Button from '@/app/ui/shared/Button.tsx';
import React, { Suspense, useEffect, useState } from 'react';

export default async function Result({
  searchParams,
}: {
  searchParams: SearchFilterType;
}): Promise<React.JSX.Element> {
  const [page, setPage] = useState('1');
  const [searchResultList, setSearchResultList] = useState([] as SearchType[]);

  const handleLoadMore = (): void => {
    setPage(`${+page + 1}`);
  };

  useEffect(() => {
    const { keyword, pageSize }: SearchFilterType = searchParams;

    if (keyword) {
      const fetchSearchResultList = async (): Promise<SearchType[]> => getSearchResultList({
        keyword,
        page,
        pageSize,
      });

      fetchSearchResultList().then(
        (incomingSearchResultList: SearchType[]): void => {
          setSearchResultList((currentSearchResultList: SearchType[]) => [
            ...currentSearchResultList,
            ...incomingSearchResultList,
          ]);
        },
      );
    }
  }, [page, searchParams]);

  return (
    <>
      <article>
        <Suspense fallback={<Loading />}>
          {searchResultList.map((searchResult: SearchType) => (
            <p key={searchResult.id}>{searchResult.name}</p>
          ))}
        </Suspense>
      </article>
      <Button action={handleLoadMore} text="more" />
    </>
  );
}
