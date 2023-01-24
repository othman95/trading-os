import { makeAutoObservable, runInAction } from 'mobx';
import { getSymbols } from '../lib/client';

class SymbolStore {
    selectedSymbol = '';
    symbols: string[] = [];

    selectSymbol = (symbol: string) => {
        this.selectedSymbol = symbol;
    };

    populateSymbols = () => {
        return getSymbols().then((res) => {
            // const names = res.map((symbol) => symbol.name);
            runInAction(() => {
                this.symbols = res.slice(0, 30);
            });
            return res;
        });
    };

    constructor() {
        makeAutoObservable(this);
        this.populateSymbols();
    }
}

export const symbolStore = new SymbolStore();
