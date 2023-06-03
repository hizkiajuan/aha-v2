import { SearchFilterType } from '@/app/ui/home/SearchFilterType.ts';
import { SearchApiResponse } from '@/common/contract.ts';
import http from '@/common/http.ts';

export async function getSearchResultList(
  params: SearchFilterType,
): Promise<SearchApiResponse> {
  const response: Response = await http.get('api/users/all', params);

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch search result list');
  }

  return response.json();
}
