'use client';

import { SearchState, useSearchStore } from '@/app/ui/home/SearchStore.ts';
import { SearchType } from '@/app/ui/home/SearchType.ts';
import Button from '@/app/ui/shared/Button.tsx';
import React from 'react';

export default function Result(): React.JSX.Element {
  const [searchResult]: [searchResult: SearchType[]] = useSearchStore(
    (state: SearchState) => [state.searchResult],
  );

  return (
    <>
      <article>
        {searchResult?.map((res: SearchType) => (
          <p key={res.id}>{res.name}</p>
        ))}
      </article>
      <Button action="/result" text="more" />
    </>
  );
}
