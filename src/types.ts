import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
    MainScreen: undefined;
    SymbolScreen: { symbol: string };
};
export type StackScreenProps<Screen extends keyof StackParamList> =
    NativeStackScreenProps<StackParamList, Screen>;

export interface ISymbol {
    symbol: string;
    timestamp: number;
    datetime: Date;
    high: number;
    low: number;
    vwap: number;
    open: number;
    close: number;
    last: number;
    change: number;
    percentage: number;
    average: number;
    baseVolume: number;
    quoteVolume: number;
    info: ISymbolInfo;
}

export interface ISymbolInfo {
    symbol: string;
    pair: string;
    priceChange: string;
    priceChangePercent: string;
    weightedAvgPrice: string;
    lastPrice: string;
    lastQty: string;
    openPrice: string;
    highPrice: string;
    lowPrice: string;
    volume: string;
    baseVolume: string;
    openTime: string;
    closeTime: string;
    firstId: string;
    lastId: string;
    count: string;
}
