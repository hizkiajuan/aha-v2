import Search from '@/app/ui/home/Search.tsx';
import SearchConfig from '@/app/ui/home/SearchConfig.tsx';
import Button from '@/app/ui/shared/Button.tsx';
import React from 'react';

export default function Home(): React.JSX.Element {
  return (
    <section>
      <Search />
      <SearchConfig />
      <Button text="search" />
    </section>
  );
}
