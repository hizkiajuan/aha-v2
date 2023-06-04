import { Slider } from '@mui/material';
import React from 'react';

type SearchConfigPropType = {
  handleChangePageSize: (e: Event) => void;
  pageSize: string;
};

type SliderMarkType = {
  value: number;
  label: string;
};

export default function SearchConfig(
  props: SearchConfigPropType,
): React.JSX.Element {
  const marks: SliderMarkType[] = [
    { value: 3, label: '3' },
    { value: 6, label: '6' },
    { value: 9, label: '9' },
    { value: 12, label: '12' },
    { value: 15, label: '15' },
    { value: 50, label: '50' },
  ];

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
      <Slider
        onChange={props.handleChangePageSize}
        defaultValue={30}
        step={1}
        marks={marks}
        min={3}
        max={50}
        className="aha-slider"
      />
      <hr className="mt-5 hidden border border-white/[.1] sm:block" />
    </section>
  );
}
