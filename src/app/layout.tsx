import './globals.css';
import Friend from '@/app/ui/shared/Friend.tsx';
import { getFriendList } from '@/app/ui/shared/FriendService.ts';
import { FriendType } from '@/app/ui/shared/FriendType.ts';
import Navigation from '@/app/ui/shared/Navigation.tsx';
import Link from 'next/link';
import React from 'react';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const followerList: FriendType[] = await getFriendList(false);
  const followingList: FriendType[] = await getFriendList(true);

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
          <Friend followerList={followerList} followingList={followingList} />
        </main>
      </body>
    </html>
  );
}
