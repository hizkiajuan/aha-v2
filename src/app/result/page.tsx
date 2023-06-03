'use client';

import Loading from '@/app/result/loading.tsx';
import { SearchFilterType } from '@/app/ui/home/SearchFilterType.ts';
import { getSearchResultList } from '@/app/ui/home/SearchService.ts';
import { SearchType } from '@/app/ui/home/SearchType.ts';
import Button from '@/app/ui/shared/Button.tsx';
import { ImageWithFallback } from '@/common/ImageWithFallback.tsx';
import { SearchApiResponse } from '@/common/contract.ts';
import React, { Suspense, useEffect, useState } from 'react';

export default async function Result({
  searchParams,
}: {
  searchParams: SearchFilterType;
}): Promise<React.JSX.Element> {
  const [page, setPage] = useState('1');
  const [totalResult, setTotalResult] = useState(0);
  const [searchResultList, setSearchResultList] = useState([] as SearchType[]);

  const handleLoadMore = (): void => {
    setPage(`${+page + 1}`);
  };

  useEffect(() => {
    const { keyword, pageSize }: SearchFilterType = searchParams;

    if (keyword) {
      const fetchSearchResultList = async (): Promise<SearchApiResponse> => getSearchResultList({
        keyword,
        page,
        pageSize,
      });

      fetchSearchResultList().then((response: SearchApiResponse): void => {
        const { data, total }: { data: SearchType[]; total: number } = response;
        setSearchResultList((currentSearchResultList: SearchType[]) => [
          ...currentSearchResultList,
          ...data,
        ]);
        setTotalResult(total);
      });
    }
  }, [page, searchParams]);

  const fallbackSrc = (idx: number): string => {
    const firstColIdx: number = 0;
    const secondColIdx: number = 1;
    const thirdColIdx: number = 2;
    const diff: number = 3;
    let path: string = '/fallback-01.png';

    if ((idx + diff) % diff === firstColIdx) {
      path = '/fallback-01.png';
    } else if ((idx + diff) % diff === secondColIdx) {
      path = '/fallback-02.png';
    } else if ((idx + diff) % diff === thirdColIdx) {
      path = '/fallback-03.png';
    }

    return path;
  };

  return (
    <div className="px-5 pb-6 sm:px-[130px]">
      <article className="grid grid-cols-1 sm:mb-10 sm:grid-cols-3 sm:gap-x-[34px] sm:gap-y-10">
        <Suspense fallback={<Loading />}>
          {searchResultList.map((searchResult: SearchType, idx: number) => (
            <div key={searchResult.id} className="mb-10 sm:mb-0">
              <ImageWithFallback
                src={searchResult.avater}
                fallbackSrc={fallbackSrc(idx)}
                alt={searchResult.name}
                width={335}
                height={222.67}
              />
              <h2 className="mt-5 truncate text-[15px] leading-[22px] tracking-[0.14px]">
                {searchResult.name}
              </h2>
              <label className="text-[11px] leading-[17px] tracking-[0.37px] text-aha-grey-400">
                by {searchResult.username}
              </label>
            </div>
          ))}
        </Suspense>
      </article>
      {searchResultList.length < totalResult && (
        <Button action={handleLoadMore} text="more" type="outlined" />
      )}
    </div>
  );
}
