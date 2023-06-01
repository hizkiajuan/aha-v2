import React from 'react';

type SearchPropType = {
  handleChangeKeyword: (e: { target: HTMLInputElement }) => void;
};

export default function Search(props: SearchPropType): React.JSX.Element {
  return (
    <section className="flex flex-col">
      <h2>Search</h2>
      <input
        type="text"
        name="search"
        className="border"
        onChange={props.handleChangeKeyword}
      />
    </section>
  );
}
