import './globals.css';
import Friend from '@/app/ui/shared/Friend.tsx';
import { getFriendList } from '@/app/ui/shared/FriendService.ts';
import { FriendType } from '@/app/ui/shared/FriendType.ts';
import NavigationDesktop from '@/app/ui/shared/Navigation.tsx';
import Footer from '@/app/ui/shared/mobile/Footer.tsx';
import Header from '@/app/ui/shared/mobile/Header.tsx';
import React from 'react';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<React.JSX.Element> {
  const followerList: FriendType[] = await getFriendList(false);
  const followingList: FriendType[] = await getFriendList(true);

  return (
    <html lang="en">
      <body>
        <main className="flex h-screen flex-col justify-between sm:flex-row">
          <Header />
          <NavigationDesktop />
          {children}
          <Friend followerList={followerList} followingList={followingList} />
          <Footer />
        </main>
      </body>
    </html>
  );
}
