import { FriendFilterType } from '@/app/ui/shared/types/FriendFilterType.ts';
import { FriendApiResponse } from '@/common/contract.ts';
import { handleError } from '@/common/error.ts';
import http from '@/common/http.ts';

export async function getFriendList(
  isFollowing: boolean,
  params: FriendFilterType,
): Promise<FriendApiResponse> {
  const response: Response = await http.get(
    `api/users/${isFollowing ? 'friends' : 'all'}`,
    params,
  );

  if (!response.ok) {
    handleError('Friend List');
  }

  return response.json();
}
