import React from 'react';

export default function TagLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1>Tags</h1>
      {children}
    </section>
  );
}
