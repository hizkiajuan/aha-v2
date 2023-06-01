import { TagApiResponse } from '@/common/contract.ts';
import http from '@/common/http.ts';

export async function getTagList(): Promise<TagApiResponse[]> {
  const response: Response = await http.get('api/tags');
  return response.json();
}
