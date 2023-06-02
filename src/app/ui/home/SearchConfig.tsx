import React from 'react';

type SearchConfigPropType = {
  handleChangePageSize: (e: { target: HTMLInputElement }) => void;
  pageSize: string;
};

export default function SearchConfig(
  props: SearchConfigPropType,
): React.JSX.Element {
  return (
    <section className="flex flex-col">
      <h2 className="mt-7 block h-9 text-2xl leading-9">
        # Of Results Per Page
      </h2>
      <h3 className="mt-4 flex">
        <span className="mr-2.5 h-[50px] text-5xl font-bold">
          {props.pageSize}
        </span>
        <span className="mb-1 h-[24px] self-end text-base leading-[24px] tracking-[.15px]">
          result
        </span>
      </h3>
      <input
        type="number"
        name="size"
        className="border"
        onChange={props.handleChangePageSize}
      />
    </section>
  );
}
