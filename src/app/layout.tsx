import './globals.css';
import Navigation from '@/app/ui/shared/Navigation.tsx';
import Profile from '@/app/ui/shared/Profile.tsx';
import Link from 'next/link';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex gap-4">
          <nav className="flex flex-col">
            <div>
              <Link href="/">LOGO</Link>
            </div>
            <Navigation
              navLinks={[
                { href: '/', name: 'Home' },
                { href: '/tag', name: 'Tags' },
              ]}
            />
          </nav>
          {children}
          <Profile />
        </main>
      </body>
    </html>
  );
}
