import { SearchType } from '@/app/ui/home/SearchType.ts';
import { create } from 'zustand';

export interface SearchState {
  searchResult: SearchType[];
  updateSearchResult: (searchResult: SearchType[]) => void;
}

export const useSearchStore = create<SearchState>()((set) => ({
  searchResult: [],
  updateSearchResult: (searchResult: SearchType[]) => set(() => ({ searchResult })),
}));
