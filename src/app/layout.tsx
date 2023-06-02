import './globals.css';
import Friend from '@/app/ui/shared/Friend.tsx';
import { getFriendList } from '@/app/ui/shared/FriendService.ts';
import { FriendType } from '@/app/ui/shared/FriendType.ts';
import NavigationDesktop from '@/app/ui/shared/Navigation.tsx';
import NavigationMobile from '@/app/ui/shared/mobile/Navigation.tsx';
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
        <main className="flex flex-col justify-between sm:flex-row">
          <NavigationMobile />
          <NavigationDesktop />
          {children}
          <Friend followerList={followerList} followingList={followingList} />
        </main>
      </body>
    </html>
  );
}
