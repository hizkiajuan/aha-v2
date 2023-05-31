import { FriendType } from '@/app/ui/shared/FriendType.ts';
import http from '@/common/http.ts';

// eslint-disable-next-line import/prefer-default-export
export async function getFriendList(
  isFollowing: boolean,
): Promise<FriendType[]> {
  const response: Response = await http.get(
    `api/users/${isFollowing ? 'friends' : 'all'}`,
    {
      page: 1,
      pageSize: 10,
    },
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch friend list');
  }

  const { data }: { data: FriendType[] } = await response.json();

  return data;
}