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
      <h2 className="min-h-9 mt-7 block text-2xl leading-9 sm:mt-[30px]">
        # Of Results Per Page
      </h2>
      <h3 className="mt-4 flex sm:mt-5">
        <span className="mr-2.5 h-[50px] text-5xl font-bold">
          {props.pageSize}
        </span>
        <span className="mb-1 h-[24px] self-end text-base leading-[24px] tracking-[.15px] sm:mb-[5px]">
          results
        </span>
      </h3>
      <input
        type="number"
        name="size"
        className="border"
        onChange={props.handleChangePageSize}
      />
      <hr className="mt-5 hidden border border-white/[.1] sm:block" />
    </section>
  );
}
