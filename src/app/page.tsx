'use client';

import Search from '@/app/ui/home/Search.tsx';
import SearchConfig from '@/app/ui/home/SearchConfig.tsx';
import Button from '@/app/ui/shared/components/Button.tsx';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Home(): React.JSX.Element {
  const [keyword, setKeyword] = useState('');
  const [pageSize, setPageSize] = useState('30');

  const handleChangeKeyword = (e: React.SyntheticEvent): void => {
    setKeyword((e.target as HTMLInputElement).value.trim());
  };
  const handleChangePageSize = (e: Event): void => {
    setPageSize((e.target as HTMLInputElement).value);
  };

  const router: AppRouterInstance = useRouter();
  const handleSearch = (): void => {
    if (keyword && +pageSize > 0) {
      const searchParams: string = new URLSearchParams({
        keyword,
        pageSize,
      }).toString();
      const url: string = `/result?${searchParams}`;
      router.push(url);
    }
  };

  return (
    <section className="flex grow flex-col justify-between px-5 sm:mt-[54px] sm:px-[130px] sm:pb-[87px]">
      <div>
        <Search handleChangeKeyword={handleChangeKeyword} />
        <SearchConfig
          handleChangePageSize={handleChangePageSize}
          pageSize={pageSize}
        />
      </div>
      <div className="pb-6 sm:pb-0">
        <hr className="mb-[80px] border border-white/[.1] sm:hidden" />
        <Button action={handleSearch} variant="text" text="search" />
      </div>
    </section>
  );
}
