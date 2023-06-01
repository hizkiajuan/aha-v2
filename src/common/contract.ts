import { SearchType } from '@/app/ui/home/SearchType.ts';
import { FriendType } from '@/app/ui/shared/FriendType.ts';

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
