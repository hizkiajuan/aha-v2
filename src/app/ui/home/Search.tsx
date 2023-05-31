import React from 'react';

export default function Search(props: any): React.JSX.Element {
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
