'use client';

import Loading from '@/app/result/loading.tsx';
import { getSearchResultList } from '@/app/ui/home/services/SearchService.ts';
import { SearchFilterType } from '@/app/ui/home/types/SearchFilterType.ts';
import { SearchType } from '@/app/ui/home/types/SearchType.ts';
import Button from '@/app/ui/shared/components/Button.tsx';
import { ImageWithFallback } from '@/app/ui/shared/components/ImageWithFallback.tsx';
import { SearchApiResponse } from '@/common/contract.ts';
import { fallbackImgSrc } from '@/common/helper.ts';
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
    // eslint-disable-next-line no-console
    console.log('===useEffect');

    if (keyword) {
      // eslint-disable-next-line no-console
      console.log('===keyword', keyword);
      const fetchSearchResultList = async (): Promise<SearchApiResponse> => getSearchResultList({
        keyword,
        page,
        pageSize,
      });

      fetchSearchResultList().then((response: SearchApiResponse): void => {
        // eslint-disable-next-line no-console
        console.log('===then', response);
        const { data, total }: { data: SearchType[]; total: number } = response;
        setSearchResultList((currentSearchResultList: SearchType[]) => [
          ...currentSearchResultList,
          ...data,
        ]);
        setTotalResult(total);
      });
    }
  }, [page, searchParams]);

  return (
    <div className="px-5 pb-6 sm:px-[130px]">
      <article className="grid grid-cols-1 sm:mb-10 sm:grid-cols-3 sm:gap-x-[34px] sm:gap-y-10">
        <Suspense fallback={<Loading />}>
          {searchResultList.map((searchResult: SearchType, idx: number) => (
            <div key={searchResult.id} className="mb-10 sm:mb-0">
              <ImageWithFallback
                src={searchResult.avater}
                fallbackSrc={fallbackImgSrc(idx)}
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
        <Button action={handleLoadMore} text="more" />
      )}
    </div>
  );
}
