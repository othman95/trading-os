import React from 'react';
import { Pressable, TextStyle } from 'react-native';
import { S } from '../../constants/consts';
import { searchStore } from '../../store/SearchStore';
import { symbolStore } from '../../store/SymbolStore';
import { uiStore } from '../../store/UiStore';
import Text from '../Text/Text';

const SymbolCard = ({
    symbol,
    style,
}: {
    symbol: string;
    style?: TextStyle | TextStyle[];
}) => {
    const { symbol: searchedSymbol } = searchStore;
    if (searchedSymbol && !symbol.includes(searchedSymbol)) return null;
    return (
        <Pressable
            style={[S.flex, S.pad2]}
            onPress={() => {
                symbolStore.selectSymbol(symbol);
                uiStore.toggleSearch(true);
            }}
        >
            <Text style={style}>{symbol}</Text>
        </Pressable>
    );
};

export default SymbolCard;
