import { SearchType } from '@/app/ui/home/SearchType.ts';
import { create } from 'zustand';

export interface SearchState {
  keyword: string;
  pageSize: string;
  searchResult: SearchType[];
  updateKeyword: (keyword: string) => void;
  updatePageSize: (pageSize: string) => void;
  updateSearchResult: (searchResult: SearchType[]) => void;
}

export const useSearchStore = create<SearchState>()((set) => ({
  keyword: '',
  pageSize: '',
  searchResult: [],
  updateKeyword: (keyword: string) => set(() => ({ keyword })),
  updatePageSize: (pageSize: string) => set(() => ({ pageSize })),
  updateSearchResult: (searchResult: SearchType[]) => set(() => ({ searchResult })),
}));
