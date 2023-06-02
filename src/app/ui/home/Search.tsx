import React from 'react';

type SearchPropType = {
  handleChangeKeyword: (e: { target: HTMLInputElement }) => void;
};

export default function Search(props: SearchPropType): React.JSX.Element {
  return (
    <section className="flex flex-col">
      <h2 className="mb-4 block h-9 w-[73px] text-2xl capitalize leading-9">
        Search
      </h2>
      <input
        type="text"
        name="search"
        className="h-[60px]"
        onChange={props.handleChangeKeyword}
      />
    </section>
  );
}
