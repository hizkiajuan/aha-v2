'use client';

import { getFriendList } from '@/app/ui/shared/services/FriendService.ts';
import { FriendType } from '@/app/ui/shared/types/FriendType.ts';
import { FriendApiResponse } from '@/common/contract.ts';
import React, { useEffect, useRef, useState } from 'react';

type TabPanelPropType = {
  renderer: Function;
};

export function TabPanelFollowing(props: TabPanelPropType): React.JSX.Element {
  const [page, setPage] = useState('1');
  const [pageSize, setPageSize] = useState('10');
  const [followingList, setFollowingList] = useState([] as FriendType[]);

  const ref = useRef<HTMLDivElement>(null);
  const [isFetchDone, setIsFetchDone] = useState(false);
  const [isNextPageAvailable, setIsNextPageAvailable] = useState(true);

  useEffect(() => {
    // Infinite loading
    const observer: IntersectionObserver = new IntersectionObserver(
      ([entry]): void => {
        if (entry.isIntersecting && isFetchDone) {
          setPage(`${+page + 1}`);
          setIsFetchDone(false);
          observer.unobserve(entry.target);
        }
      },
    );

    if (ref.current) observer.observe(ref.current);

    // Fetch data
    if (!isFetchDone && isNextPageAvailable) {
      const fetchFollowingList = async (): Promise<FriendApiResponse> => getFriendList(true, {
        page,
        pageSize,
      });

      fetchFollowingList().then((response: FriendApiResponse): void => {
        const { data }: { data: FriendType[] } = response;
        setFollowingList((currentFollowingList: FriendType[]) => [
          ...currentFollowingList,
          ...data,
        ]);

        if (data.length > 0) {
          setIsNextPageAvailable(true);
          setIsFetchDone(true);
        } else {
          setIsNextPageAvailable(false);
        }
      });
    }
  });

  return <>{props.renderer(followingList, ref)}</>;
}
