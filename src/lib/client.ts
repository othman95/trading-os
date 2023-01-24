import { ISymbol } from '../types';
import { api } from './api';

export const getSymbols = () =>
    api
        .get<string[]>('trade/symbols')
        .then((res) => res.data)
        .catch((err) => [] as string[]);

export const getSymbol = (symbol: string) =>
    api.get<ISymbol>(`trade/symbol/?symbol=${symbol}`).then((res) => res.data);
