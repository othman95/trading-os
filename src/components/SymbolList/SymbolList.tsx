import { observer } from 'mobx-react-lite';
import React from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { S } from '../../constants/consts';
import { searchStore } from '../../store/SearchStore';
import SymbolCard from '../SymbolCard/SymbolCard';

const SymbolList = ({
    contentContainerStyle,
    itemStyle,
}: {
    contentContainerStyle?: ViewStyle | ViewStyle[];
    itemStyle?: TextStyle | TextStyle[];
}) => {
    const symbols = searchStore.filteredSymbols;
    if (!symbols) return null;

    return (
        <View style={[S.flex, contentContainerStyle]}>
            <FlatList
                data={symbols}
                renderItem={({ item: symbol }) =>
                    SymbolCard({ symbol, style: itemStyle })
                }
                initialNumToRender={10}
                keyboardDismissMode="on-drag"
            />
        </View>
    );
};

export default observer(SymbolList);
