import { TextField } from '@mui/material';
import React from 'react';

type SearchPropType = {
  handleChangeKeyword: (e: React.SyntheticEvent) => void;
};

export default function Search(props: SearchPropType): React.JSX.Element {
  return (
    <section className="mt-[71px] flex flex-col">
      <h2 className="mb-4 block h-9 w-[73px] text-2xl capitalize leading-9 sm:mb-5">
        Search
      </h2>
      <TextField
        onChange={props.handleChangeKeyword}
        placeholder="Keyword"
        variant="outlined"
        className="aha-text-field"
      />
      <hr className="mt-[30px] hidden border border-white/[.1] sm:mt-[28px] sm:block" />
    </section>
  );
}
