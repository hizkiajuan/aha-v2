import { SearchFilterType } from '@/app/ui/home/types/SearchFilterType.ts';
import { SearchApiResponse } from '@/common/contract.ts';
import http from '@/common/http.ts';

export async function getSearchResultList(
  params: SearchFilterType,
): Promise<SearchApiResponse> {
  const response: Response = await http.get('api/users/all', params);
  // eslint-disable-next-line no-console
  console.log('===response', response);

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch search result list');
  }

  return response.json();
}
