'use client';

import { getFriendList } from '@/app/ui/shared/services/FriendService.ts';
import { FriendType } from '@/app/ui/shared/types/FriendType.ts';
import { FriendApiResponse } from '@/common/contract.ts';
import React, { useEffect, useState } from 'react';

type TabPanelPropType = {
  renderer: Function;
};

export function TabPanelFollowing(props: TabPanelPropType): React.JSX.Element {
  const [page, setPage] = useState('1');
  const [pageSize, setPageSize] = useState('10');
  const [totalResult, setTotalResult] = useState(0);
  const [followingList, setFollowingList] = useState([] as FriendType[]);

  useEffect(() => {
    if (totalResult === 0) {
      const fetchFollowingList = async (): Promise<FriendApiResponse> => getFriendList(true, {
        page,
        pageSize,
      });

      fetchFollowingList().then((response: FriendApiResponse): void => {
        const { data, total }: { data: FriendType[]; total: number } = response;
        setFollowingList((currentFollowingList: FriendType[]) => [
          ...currentFollowingList,
          ...data,
        ]);
        setTotalResult(total);
        setPage(`${+page + 1}`);
      });
    }
  });

  return <>{props.renderer(followingList)}</>;
}
