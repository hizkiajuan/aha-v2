import { SearchFilterType } from '@/app/ui/home/types/SearchFilterType.ts';
import { SearchApiResponse } from '@/common/contract.ts';
import { handleError } from '@/common/error.ts';
import http from '@/common/http.ts';

export async function getSearchResultList(
  params: SearchFilterType,
): Promise<SearchApiResponse> {
  const response: Response = await http.get('api/users/all', params);

  if (!response.ok) {
    handleError('Search Result List');
  }

  return response.json();
}
