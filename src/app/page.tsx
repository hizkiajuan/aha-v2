'use client';

import Search from '@/app/ui/home/Search.tsx';
import SearchConfig from '@/app/ui/home/SearchConfig.tsx';
import Button from '@/app/ui/shared/Button.tsx';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Home(): React.JSX.Element {
  const [keyword, setKeyword] = useState('');
  const [pageSize, setPageSize] = useState('');

  const handleChangeKeyword = (e: { target: HTMLInputElement }): void => {
    setKeyword(e.target.value.trim());
  };
  const handleChangePageSize = (e: { target: HTMLInputElement }): void => {
    setPageSize(e.target.value);
  };

  const router: AppRouterInstance = useRouter();
  const handleSearch = (): void => {
    const searchParams: string = new URLSearchParams({
      keyword,
      pageSize,
    }).toString();
    const url: string = `/result?${searchParams}`;
    router.push(url);
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
