import { create } from "zustand";

interface SearchStoreProps {
	symbol: string;
	changeSymbol: (symbol: string) => void;
	removeSymbol: () => void;
}

export const useSearchStore = create<SearchStoreProps>((set) => ({
	symbol: "",
	changeSymbol: (symbol: string) => set({ symbol }),
	removeSymbol: () => set({ symbol: "" }),
}));
