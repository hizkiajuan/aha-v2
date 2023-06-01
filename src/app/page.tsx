'use client';

import Search from '@/app/ui/home/Search.tsx';
import SearchConfig from '@/app/ui/home/SearchConfig.tsx';
import { SearchFilterType } from '@/app/ui/home/SearchFilterType.ts';
import { SearchState, useSearchStore } from '@/app/ui/home/SearchStore.ts';
import Button from '@/app/ui/shared/Button.tsx';
import { SearchApiResponse } from '@/common/contract.ts';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import useSwr, { Fetcher } from 'swr';

export default function Home(): React.JSX.Element {
  const [keyword, setKeyword] = useState('');
  const [pageSize, setPageSize] = useState('');
  const handleChangeKeyword = (e: { target: HTMLInputElement }): void => {
    setKeyword(e.target.value.trim());
  };
  const handleChangePageSize = (e: { target: HTMLInputElement }): void => {
    setPageSize(e.target.value);
  };

  // swr
  const fetcher: Fetcher<
    SearchApiResponse
  > = async (): Promise<SearchApiResponse> => {
    const params: SearchFilterType = {
      page: '1',
      pageSize,
      keyword,
    };
    const searchParams: string = new URLSearchParams(params).toString();

    const path: string = 'api/users/all';
    const url: string = `${process.env.NEXT_PUBLIC_HOST}/${path}?${searchParams}`;

    const response: Response = await fetch(url);
    return response.json();
  };
  const { data: result, mutate: handleSearch } = useSwr('search', fetcher);

  // store
  const [updateSearchResult] = useSearchStore((state: SearchState) => [
    state.updateSearchResult,
  ]);
  const router: AppRouterInstance = useRouter();

  useEffect((): void => {
    const resultLength: number = result?.data?.length || 0;
    if (result && resultLength > 0) {
      updateSearchResult(result.data);
      router.push('/result');
    }
  }, [result, router, updateSearchResult]);

  return (
    <section>
      <Search handleChangeKeyword={handleChangeKeyword} />
      <SearchConfig
        handleChangePageSize={handleChangePageSize}
        pageSize={pageSize}
      />
      <Button action={handleSearch} text="search" />
    </section>
  );
}
