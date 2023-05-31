'use client';

import Search from '@/app/ui/home/Search.tsx';
import SearchConfig from '@/app/ui/home/SearchConfig.tsx';
import { SearchFilterType } from '@/app/ui/home/SearchFilterType.ts';
import Button from '@/app/ui/shared/Button.tsx';
import React, { useState } from 'react';
import useSwr from 'swr';

export default function Home(): React.JSX.Element {
  const [keyword, setKeyword] = useState('');
  const [pageSize, setPageSize] = useState('');
  const handleChangeKeyword = (e: any) => {
    setKeyword(e.target.value);
  };
  const handleChangePageSize = (e: any) => {
    setPageSize(e.target.value);
  };

  // swr
  const fetcher = async () => {
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
  const { data: result, mutate }: any = useSwr('search-result', fetcher);

  // search
  const handleSearch = async () => {
    mutate();
    console.log('===result', result);

    if (result.data.length > 0) {
      // TODO: redirect to `/result`, brings the data
    }
  };

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
