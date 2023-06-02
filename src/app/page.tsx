'use client';

import Search from '@/app/ui/home/Search.tsx';
import SearchConfig from '@/app/ui/home/SearchConfig.tsx';
import Button from '@/app/ui/shared/Button.tsx';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Home(): React.JSX.Element {
  const [keyword, setKeyword] = useState('');
  const [pageSize, setPageSize] = useState('30');

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
    <section className="absolute flex h-full w-full flex-col justify-between px-5 pb-[66px] pt-[70px] sm:mt-0">
      <div>
        <Search handleChangeKeyword={handleChangeKeyword} />
        <SearchConfig
          handleChangePageSize={handleChangePageSize}
          pageSize={pageSize}
        />
      </div>
      <div className="pb-6">
        <hr className="mb-[80px] border border-white/[.1]" />
        <Button action={handleSearch} text="search" type="outlined" />
      </div>
    </section>
  );
}
