'use client';

import Button from '@/app/ui/shared/components/Button.tsx';
import { ImageWithFallback } from '@/app/ui/shared/components/ImageWithFallback.tsx';
import { TabPanel } from '@/app/ui/shared/components/TabPanel.tsx';
import { TabPanelFollower } from '@/app/ui/shared/components/TabPanelFollower.tsx';
import { TabPanelFollowing } from '@/app/ui/shared/components/TabPanelFollowing.tsx';
import { FriendType } from '@/app/ui/shared/types/FriendType.ts';
import { fallbackImgSrc } from '@/common/helper.ts';
import {
  Box,
  Tab,
  Tabs,
  Theme,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: ['Ubuntu'].join(','),
  },
});

export default function Friend(): React.JSX.Element {
  const pathname: string = usePathname();
  const lgClass: string = pathname === '/tag' ? '' : 'lg:flex';

  const [tab, setTab] = useState(0);
  const handleChange = (e: React.SyntheticEvent, selectedTab: number): void => {
    setTab(selectedTab);
  };
  const tabClass = {
    selected: '!text-white capitalize text-base tracking-[0.15px] font-bold',
    unselected:
      'text-aha-grey-600 capitalize text-base tracking-[0.15px] font-normal',
  };

  const renderFriendList = (friendList: FriendType[]) => {
    // eslint-disable-next-line no-console
    const handleFollow = (): void => console.log('action:follow');
    // eslint-disable-next-line no-console
    const handleUnfollow = (): void => console.log('action:unfollow');

    return friendList.map((f: FriendType) => (
      <div className="flex items-center justify-between" key={f.id}>
        <div className="flex grow items-center">
          <ImageWithFallback
            src={f.avater}
            fallbackSrc={fallbackImgSrc(-1)}
            alt={f.name}
            width={40}
            height={40}
            className="self-center rounded-[5px]"
          />
          <div className="ml-[15px] flex grow flex-col gap-y-[8px]">
            <span className="text-[16px] leading-[14px] tracking-[0.15px]">
              {f.name}
            </span>
            <span className="text-[14px] leading-[14px] opacity-50">
              @{f.username}
            </span>
          </div>
        </div>
        {f.isFollowing ? (
          <Button
            action={handleUnfollow}
            variant="contained"
            text="Following"
          />
        ) : (
          <Button action={handleFollow} variant="outlined" text="Follow" />
        )}
      </div>
    ));
  };

  return (
    <aside
      className={`flex flex-col ${lgClass} hidden max-h-screen w-[375px] overflow-y-auto bg-aha-black-300 pb-[35px]`}
    >
      <ThemeProvider theme={theme}>
        <Box>
          <Tabs
            value={tab}
            onChange={handleChange}
            indicatorColor="primary"
            className="fixed z-10 w-full grid-cols-2 gap-0 bg-aha-black-300"
          >
            <Tab
              label="Followers"
              id="tab-0"
              className={`${
                tab === 0 ? tabClass.selected : tabClass.unselected
              } mt-[3px] flex h-[65px] w-[187px] justify-end`}
            />
            <Tab
              label="Following"
              id="tab-1"
              className={`${
                tab === 1 ? tabClass.selected : tabClass.unselected
              } mt-[3px] flex h-[65px] w-[187px] justify-end`}
            />
          </Tabs>
        </Box>
        <TabPanel value={tab} index={0}>
          <TabPanelFollower renderer={renderFriendList} />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <TabPanelFollowing renderer={renderFriendList} />
        </TabPanel>
      </ThemeProvider>
    </aside>
  );
}
