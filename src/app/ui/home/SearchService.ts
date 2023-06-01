import { SearchFilterType } from '@/app/ui/home/SearchFilterType.ts';
import { SearchType } from '@/app/ui/home/SearchType.ts';
import { SearchApiResponse } from '@/common/contract.ts';
import http from '@/common/http.ts';

export async function getResultList(
  params: SearchFilterType,
): Promise<SearchType[]> {
  const response: Response = await http.get('api/users/all', params);

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch result list');
  }

  const { data }: SearchApiResponse = await response.json();

  return data;
}
