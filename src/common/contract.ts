import { SearchType } from '@/app/ui/home/types/SearchType.ts';
import { FriendType } from '@/app/ui/shared/types/FriendType.ts';

type ApiResponse = {
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
};

export type SearchApiResponse = ApiResponse & {
  data: SearchType[];
};

export type FriendApiResponse = ApiResponse & {
  data: FriendType[];
};

export type TagApiResponse = {
  id: string;
  name: string;
  count: number;
};
