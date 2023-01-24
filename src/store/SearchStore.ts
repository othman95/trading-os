import { action, makeObservable, observable, runInAction } from 'mobx';
import { symbolStore } from './SymbolStore';

class SearchStore {
    constructor() {
        makeObservable(this, {
            symbol: observable,
            changeSymbol: action,
            removeSymbol: action,
        });
    }
    symbol = '';

    get filteredSymbols() {
        return this.symbol
            ? symbolStore.symbols.filter((symbol) => {
                console.log(
                    symbol.toLowerCase(),
                    this.symbol.toLowerCase(),
                    symbol.toLowerCase().indexOf(this.symbol.toLowerCase()) >
                          -1
                );
                return (
                    symbol.toLowerCase().indexOf(this.symbol.toLowerCase()) >
                      -1
                );
            })
            : symbolStore.symbols;
    }

    changeSymbol = (symbol: string) => {
        runInAction(() => {
            this.symbol = symbol;
        });
    };

    removeSymbol = () => {
        this.symbol = '';
    };
}

export const searchStore = new SearchStore();
