'use client';

import Search from '@/app/ui/home/Search.tsx';
import SearchConfig from '@/app/ui/home/SearchConfig.tsx';
import { SearchState, useSearchStore } from '@/app/ui/home/SearchStore.ts';
import Button from '@/app/ui/shared/Button.tsx';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Home(): React.JSX.Element {
  const [pageSize, updateKeyword, updatePageSize] = useSearchStore(
    (state: SearchState) => [
      state.pageSize,
      state.updateKeyword,
      state.updatePageSize,
    ],
  );
  const handleChangeKeyword = (e: { target: HTMLInputElement }): void => {
    updateKeyword(e.target.value.trim());
  };
  const handleChangePageSize = (e: { target: HTMLInputElement }): void => {
    updatePageSize(e.target.value);
  };

  const router = useRouter();
  const handleSearch = (): void => {
    router.push('/result');
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
