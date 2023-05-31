import React from 'react';

export default function SearchConfig(props: any): React.JSX.Element {
  return (
    <section className="flex flex-col">
      <h2># Of Results Per Page</h2>
      <h3>
        <span className="text-2xl">{props.pageSize}</span>
        <span>results</span>
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
