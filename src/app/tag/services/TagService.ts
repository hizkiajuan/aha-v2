import { TagApiResponse } from '@/common/contract.ts';
import { handleError } from '@/common/error.ts';
import http from '@/common/http.ts';

export async function getTagList(): Promise<TagApiResponse[]> {
  const response: Response = await http.get('api/tags');

  if (!response.ok) {
    handleError('Tag List');
  }

  return response.json();
}
