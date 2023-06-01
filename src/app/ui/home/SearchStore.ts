import { SearchType } from '@/app/ui/home/SearchType.ts';
import { create } from 'zustand';

export interface SearchState {
  searchResult: SearchType[];
  updateSearchResult: (searchResult: SearchType[]) => void;
}

// eslint-disable-next-line import/prefer-default-export
export const useSearchStore = create<SearchState>()((set) => ({
  searchResult: [],
  updateSearchResult: (searchResult: SearchType[]) => set(() => ({ searchResult })),
}));
