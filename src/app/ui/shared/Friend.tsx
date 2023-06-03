'use client';

import Button from '@/app/ui/shared/Button.tsx';
import { FriendType } from '@/app/ui/shared/FriendType.ts';
import { usePathname } from 'next/navigation';
import React from 'react';

type FriendParamType = {
  followerList: FriendType[];
  followingList: FriendType[];
};

export default function Friend({
  followerList,
  followingList,
}: FriendParamType): React.JSX.Element {
  const pathname: string = usePathname();
  const lgClass: string = pathname === '/tag' ? '' : 'lg:flex';

  // eslint-disable-next-line no-console
  const handleFollow = () => console.log('follow...');

  return (
    <aside
      className={`flex grow flex-col ${lgClass} hidden max-h-screen w-[375px] overflow-y-scroll bg-aha-black-300`}
    >
      <h2>Followers</h2>
      {followerList.map((f: FriendType) => (
        <div className="flex items-start" key={f.id}>
          <span>img</span>
          <p className="flex flex-col">
            <span>{f.name}</span>
            <span>@{f.username}</span>
          </p>
          {f.isFollowing ? (
            <Button action="/result" text="Following" type="default" />
          ) : (
            <Button action={handleFollow} text="Follow" type="outlined" />
          )}
        </div>
      ))}
      <br />
      <h2>Following</h2>
      {followingList.map((f: FriendType) => (
        <div className="flex items-start" key={f.id}>
          <span>img</span>
          <p className="flex flex-col">
            <span>{f.name}</span>
            <span>@{f.username}</span>
          </p>
          <Button action="/result" text="Following" type="default" />
        </div>
      ))}
    </aside>
  );
}
