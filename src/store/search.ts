import { action, observable, makeObservable } from "mobx";
import { debounce } from "lodash";
import { runInAction } from "mobx";

class SearchStore {
	constructor() {
		makeObservable(this, { symbol: observable, changeSymbol: action, removeSymbol: action });
	}
	symbol = "";

	changeSymbol = debounce((symbol: string) => {
		runInAction(() => {
			this.symbol = symbol;
		});
	}, 1000);

	removeSymbol = () => {
		this.symbol = "";
	};
}

export const searchStore = new SearchStore();
