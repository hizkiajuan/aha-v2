import React from 'react';

export default function SearchConfig(): React.JSX.Element {
  return (
    <section className="flex flex-col">
      <h2># Of Results Per Page</h2>
      <h3>
        <span className="text-2xl">30</span>
        <span>results</span>
      </h3>
      <input type="number" name="size" className="border" />
    </section>
  );
}
